const CompanyModel = require('../models/company-model')
const EmplModel = require('../models/empl-model')
const UserModel = require('../models/user-model')
const mailer = require('../middleware/mailer')

module.exports = {
    async serviceFunc(req, res, next) {
        // return res.json(await CompanyModel.findOneAndDelete({}))
        const adminUser = await UserModel.findOne({ email: 'admin@gmail.com' })
        if (adminUser) {
            return res.json(await CompanyModel.create({ identifier: 0, companyName: 'Глазов Молоко', employees: [{ email: 'admin@gmail.com', isConfirmed: true, user: adminUser }] }))
        }
        return res.json('нет такого пользователя')
    },
    async getCompany() {
        return await CompanyModel.find({ identifier: 0 })
    },
    async addEmpls(empls, companyIdentifier = 0) {
        for (let e of empls) {
            let details = {
                from: 'qbit.mailing@gmail.com',
                to: e.email,
                subject: 'Приглашение в Lean Factory',
                html: `<h2>Вас пригласили в компанию</h2> <p>Перейдите по ссылке, чтобы присоединиться</p> <a href="http://localhost:5100/registration?company_id=${companyIdentifier}">http://localhost:5100/registration?company_id=${companyIdentifier}</a>`
            }

            let r = await mailer.sendMail(details)
        }
        let company = await CompanyModel.findOne({ identifier: 0 })
        let oldEmpls = company.employees
        let newEmpls = oldEmpls.concat(empls)

        return CompanyModel.findOneAndUpdate({ identifier: 0 }, { $set: { employees: newEmpls } })
    },
    createEmployee(userData) {
        const e = { email: userData.user.email, isConfirmed: true, user: userData.user }
        return EmplModel.create(e)
    },
    async updateCompanyEmpl(newVal) {
        let email = newVal.email;
        let company = newVal.user.company;
        let Company = await CompanyModel.findOne({ identifier: company })
        for (let i = 0; i < Company.employees.length; i++) {
            if (Company.employees[i].email == email) {
                Company.employees[i] = newVal
            }
        }
        // console.log(Company);
        return Company.save()
    }
}