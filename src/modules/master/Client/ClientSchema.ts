import { Schema, Model, model } from 'mongoose';

const stringFieldsRequired = {
    type: String,
    required: true
};

const stringFields = {
    type: String
};

const numberFieldsRequired = {
    type: Number,
    required: true
};

const numberFields = {
    type: Number
};

const objectIdFieldsRequired = {
    type: Schema.Types.ObjectId,
    required: true
};

const dateFieldsRequired = {
    type: Date,
    required: true
};

const dateFields = {
    type: Date
};

var booleanFields = {
    type: Boolean,
}


export const ClientSchemaTemp: Schema = new Schema({
   "clientId": stringFieldsRequired,
    "agencyId": stringFieldsRequired,
    "name": stringFieldsRequired,
    "email": stringFields,
    "phoneNumber": numberFieldsRequired,
    "totalBill": numberFieldsRequired 
}, {collection: 'client'});

export const ClientSchema: Model<any> = model<any>('client', ClientSchemaTemp, 'client');
