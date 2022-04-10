const bcrypt = require('bcrypt');
import { response } from 'express';
import { ClientModel } from './ClientModel';
import { ClientSchema } from './ClientSchema';
const jwt = require('jsonwebtoken');
var ObjectId = require('mongodb').ObjectID;

export class Client {

   
    //update  Client
    updateClient(clientDetails) {

            var updateOf = {'_id':clientDetails._id, 'clientId': clientDetails.clientId};
    
            return new Promise((resolve, reject) => {
    
                ClientSchema.updateOne(updateOf, clientDetails, (err, data) => {
                    if (err) {
                        return reject(err);
                    }
                    return resolve({data: data});
                });
            })
    }

    //get Client
    getClient(query) {
            const andSearch = [];
            const pipeline = [];
    
            pipeline.push({ $lookup: { localField: "agencyId", foreignField: "agencyId", from: "agency", as: "agency" } });
            pipeline.push({ $unwind: { "path": "$agency" } });
    
            if (query.clientId) {
                andSearch.push({ 'clientId': { $regex: query.clientId, $options: "i" } });
            }

            if (andSearch.length > 0) {
                pipeline.push({ $match: { $and: andSearch } });
            }

            var project = {
                '$project': {
                    "agencyName": '$agency.agencyName', "clientName": '$clientName', "totalBill": '$totalBill',
                    "clientId": '$clientId', "_id": '$_id'
                }
            };
            pipeline.push(project);
            pipeline.push({ $sort: { totalBill : -1 } });
            return new Promise((resolve, reject) => {
                ClientSchema.aggregate(pipeline, (err, data) => {
                    if (err) {
                        return reject(err);
                    }
                    return resolve({data: data});
                });
            });
        }
    
}
