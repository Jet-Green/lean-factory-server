const { Schema, model } = require('mongoose');

const CompanySchema = new Schema({
    identifier: { type: String, required: true },
    companyName: { type: String, required: true },
    employees: {
        type: [Object], required: true
    },
    emplsWithPlace: { type: [Object], required: true }
})
module.exports = model('Company', CompanySchema);