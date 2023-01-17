const { Schema, model } = require('mongoose');
const { ProblemTypeSchema } = require('./problem-type-model')

const CompanySchema = new Schema({
    identifier: { type: String, required: true },
    companyName: { type: String, required: true },
    employees: {
        type: Array, required: true,
    },
    problemTypes: { type: Array, default: [] },
    places: { type: Array, default: [] },
})
module.exports = model('Company', CompanySchema);