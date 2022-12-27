const { Schema, model } = require('mongoose');

const CompanySchema = new Schema({
    identifier: { type: String, required: true },
    companyName: { type: String, required: true },
    employees: {
        type: [Object], required: true, ref: 'Employee'
    }
})
module.exports = model('Company', CompanySchema);