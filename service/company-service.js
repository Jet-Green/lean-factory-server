const CompanyModel = require('../models/company-model')
const { EmplModel } = require('../models/empl-model')
const UserModel = require('../models/user-model')
const RoleModel = require('../models/role-model')
const { ProblemModel } = require('../models/problem-model')
const { ProblemTypeModel } = require('../models/problem-type-model')
const mailer = require('../middleware/mailer')

// data
const { rawProblemTypes, employees } = require('../data.js')

const UserService = require('../service/user-service')

module.exports = {
    async serviceFunc(req, res, next) {
        return res.json(await UserModel.find({}))
    },
    async startApp() {
        let defaultUser = new RoleModel()
        let superUser = new RoleModel({ value: 'admin' })
        await defaultUser.save()
        await superUser.save()

        await ProblemTypeModel.insertMany(rawProblemTypes)

        let problemTypes = await ProblemTypeModel.find({})

        const ADMIN_EMAIL = 'admin@gmail.com'
        await UserService.registration(ADMIN_EMAIL, 'admin', 'ADMIN', '0')
        const adminUser = await UserModel.findOne({ email: ADMIN_EMAIL })
        await EmplModel.insertMany([
            { email: ADMIN_EMAIL, isConfirmed: true, user: adminUser, roles: ['admin'] },
            ...employees
        ])
        let newEmpls = await EmplModel.find({})

        for (let e of newEmpls) {
            for (let p of problemTypes) {
                if (e.emplName == p.emplName) {
                    e.problemType.push(p)
                    p.empl = e
                    if (!('problem_fix' in e.roles)) {
                        e.roles.push('problem_fix')
                    }
                }
            }
        }

        for (let p of problemTypes) {
            if (!p.empl) {
                let em = await EmplModel.findOne({
                    emplName: p.emplName,
                })
                if (em) {
                    em.problemType.push(p)
                    await em.save()
                    p.empl = em
                } else {
                    await EmplModel.create({
                        roles: ['problem_fix'],
                        emplName: p.emplName,
                        problemType: p
                    })
                    let newEm = await EmplModel.findOne({
                        emplName: p.emplName,
                    })

                    p.empl = newEm
                }
            }
        }

        for (let e of newEmpls) {
            await e.save()
        }
        for (let p of problemTypes) {
            await p.save()
        }

        let emplsWithPr = await EmplModel.find({})
        let problemTypesWithEmpl = await ProblemTypeModel.find({})

        if (adminUser) {
            await CompanyModel.create({
                identifier: 0,
                companyName: 'Глазов Молоко',
                employees: emplsWithPr,
                problemTypes: problemTypesWithEmpl,
            })
        }
    },
    async getCompany(id) {
        const c = await CompanyModel.findOne({ identifier: id })
        return c
    },
    async reportProblem(problem, company_id) {

        let company = await CompanyModel.findOne({ identifier: company_id })
        for (let e of company.employees) {
            if (problem.place.place == e.place || problem.place.emplName == e.emplName) {
                e.reportsToFix.push(problem)
            }
        }

        return company.save()
    },
    async addEmpls(empls, companyIdentifier = 0) {
        for (let e of empls) {
            let details = {
                from: 'qbit.mailing@gmail.com',
                to: e.email,
                subject: 'Приглашение в Lean Factory',
                html: `<h2>Вас пригласили в компанию</h2> <p>Перейдите по ссылке, чтобы присоединиться</p> <a href="http://localhost:5100/registration?company_id=${companyIdentifier}">http://localhost:5100/registration?company_id=${companyIdentifier}</a>`
            }

            try {
                let r = await mailer.sendMail(details)
            } catch (error) { }
        }
        let company = await CompanyModel.findOne({ identifier: 0 })
        let oldEmpls = company.employees
        let newEmpls = oldEmpls.concat(empls)

        return CompanyModel.findOneAndUpdate({ identifier: 0 }, { $set: { employees: newEmpls } }, { new: true })
    },
    async deleteEmpl(empl_company) {
        return CompanyModel.findOneAndUpdate({ identifier: empl_company.company }, { $pull: { employees: { _id: empl_company._id } } }, { new: true })
    },
    async updateEmpl(empl_company) {
        let { employee, company } = empl_company
        if (!employee.isConfirmed) {
            // return CompanyModel.findOneAndUpdate({ identifier: company, 'employees.user._id': employee.user._id }, { $set: { 'employees.$': employee } })
            let details = {
                from: 'qbit.mailing@gmail.com',
                to: employee.email,
                subject: 'Приглашение в Lean Factory',
                html: `<h2>Вас пригласили в компанию</h2> <p>Перейдите по ссылке, чтобы присоединиться</p> <a href="http://localhost:5100/registration?company_id=${company}">http://localhost:5100/registration?company_id=${company}</a>`
            }

            let r = await mailer.sendMail(details)
        }
        let c = await CompanyModel.findOne({ identifier: company })

        for (let i = 0; i < c.employees.length; i++) {
            if (c.employees[i]._id == employee._id) {
                c.employees[i] = employee
            }
        }
        // CompanyModel.findOneAndUpdate({ identifier: company, 'employees._id': employee._id }, { $set: { 'employees.$': employee } })
        return c.save()
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
                Company.employees[i].isConfirmed = true
                Company.employees[i].user = newVal.user
            }
        }

        return await Company.save()
    }
}