const { Schema, model } = require('mongoose');

const CompanySchema = new Schema({
    companyName: { type: String, required: true },
    employees: {
        type: [Object], required: true, ref: 'Employee'
    }
})
module.exports = model('Company', CompanySchema);