const bcrypt = require('bcrypt');
import { response } from 'express';
import { ClientModel } from '../Client/ClientModel';
import { ClientSchema } from '../Client/ClientSchema';
import { AgencyModel } from './AgencyModel';
import { AgencySchema } from './AgencySchema';
const jwt = require('jsonwebtoken');
var ObjectId = require('mongodb').ObjectID;

export class Agency {

   
    //Create Agency
    createAgency(agencyDetails) {
        return new Promise(async (resolve, reject) => {

            let agency: AgencyModel;
            let client: ClientModel;

            agency = agencyDetails.agency;
            client = agencyDetails.client;
            client.agencyId = agencyDetails.agency.agencyId;

            const saveAgency = new AgencySchema(agency);
            const saveClient = new ClientSchema(client);

            saveAgency.save().then(
                (result) => {
                    saveClient.save().then(
                        (result) => {
                            return resolve(result);
                        }
                    )
                }
            )
            .catch((err) => {
                return reject('err');
            });
        });
    }

}
