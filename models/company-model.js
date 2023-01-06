const { Schema, model } = require('mongoose');
const { EmplSchema } = require('./empl-model')
const { ProblemTypeSchema } = require('./problem-type-model')

const CompanySchema = new Schema({
    identifier: { type: String, required: true },
    companyName: { type: String, required: true },
    employees: {
        type: [EmplSchema], required: true,
    },
    problemTypes: { type: [ProblemTypeSchema], default: [] },
},)
module.exports = model('Company', CompanySchema);