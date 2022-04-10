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


export const AgencySchemaTemp: Schema = new Schema({
   "agencyId": stringFieldsRequired,
    "name": stringFieldsRequired,
    "address1": stringFieldsRequired,
    "address2": stringFields,
    "state": stringFieldsRequired,
    "city": stringFieldsRequired,
    "phoneNumber": numberFieldsRequired
}, {collection: 'agency'});

export const AgencySchema: Model<any> = model<any>('agency', AgencySchemaTemp, 'agency');
