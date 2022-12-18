const CompanyModel = require('../models/company-model')
const UserModel = require('../models/user-model')

module.exports = {
    async serviceFunc(req, res, next) {
        const adminUser = await UserModel.findOne({ email: 'admin@gmail.com' })

        return res.json(await CompanyModel.create({ companyName: 'Глазов Молоко', employees: [{ email: 'admin@gamil.com', isConfirmed: true, user: adminUser }] }))
    },
    async getCompany() {
        return await CompanyModel.find({})
    },
    async addEmpls(empls) {
        return await CompanyModel.findOneAndUpdate({}, { $push: { employees: empls } })
    }
}