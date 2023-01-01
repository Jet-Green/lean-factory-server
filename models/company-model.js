const { Schema, model } = require('mongoose');
const { EmplSchema } = require('./empl-model')

const CompanySchema = new Schema({
    identifier: { type: String, required: true },
    companyName: { type: String, required: true },
    employees: {
        type: [EmplSchema], required: true,
    },
},)
module.exports = model('Company', CompanySchema);