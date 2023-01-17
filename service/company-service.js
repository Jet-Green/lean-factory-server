const CompanyModel = require('../models/company-model')
const { EmplModel } = require('../models/empl-model')
const UserModel = require('../models/user-model')
const RoleModel = require('../models/role-model')
const { ProblemModel } = require('../models/problem-model')
const { ProblemTypeModel } = require('../models/problem-type-model')
const { PlaceModel } = require('../models/place-model')
const mailer = require('../middleware/mailer')
const ApiError = require('../exceptions/api-error');

// data
const { rawProblemTypes: RAW_PROBLEM_TYPES, employees: EMPLOYEES } = require('../data.js')

const UserService = require('../service/user-service')

module.exports = {
    async getEmpls(company_id) {
        if (typeof company_id != 'string') {
            throw ApiError.BadRequest('Неправильный тип компании')
        }

        let company = await CompanyModel.findOne({ identifier: company_id })

        if (!company) {
            throw ApiError.BadRequest('Нет такой компании')
        }

        let emplsIds = company.employees
        let empls = []
        for (let id of emplsIds) {
            empls.push(await EmplModel.findById(id))
        }

        return empls
    },
    async sendProblemToFix(data) {
        const { emplId, problemId } = data

        let problem = await ProblemModel.findById(problemId)
        let company = await CompanyModel.findOne({ identifier: '0' })

        problem.dateStartFix = Date.now()
        problem.status = 'sent_to_fix'

        for (let e of company.employees) {
            if (e._id == emplId) {
                e.reportsToFix.push(problem)
                console.log(e);
            }
        }
        await company.save()
        await problem.save()

        return 'ok'
    },
    async serviceFunc(req, res, next) {
        return res.json(await UserModel.find({}))
    },
    async startApp(req, res, next) {
        // roles
        let defaultUser = new RoleModel()
        let superUser = new RoleModel({ value: 'admin' })
        await defaultUser.save()
        await superUser.save()
        // roles

        await ProblemTypeModel.insertMany(RAW_PROBLEM_TYPES)
        let prTypesFromDB = await ProblemTypeModel.find({})

        // places to DB
        let places = []
        for (let empl of EMPLOYEES) {
            for (let pl of empl.places) {
                places.push({
                    emplName: empl.emplName,
                    place: pl
                })
            }
            empl.places = []
            empl.problemType = []
        }

        await PlaceModel.insertMany(places)
        // places to DB

        let placesInDB = await PlaceModel.find({})

        // places ids to empls
        for (let empl of EMPLOYEES) {
            let oldPlaces = empl.places
            empl.places = []
            for (let placeInDB of placesInDB) {
                if (placeInDB.emplName == empl.emplName && oldPlaces) {
                    empl.places.push(placeInDB._id)
                }
            }
        }
        // places ids to empls

        const ADMIN_EMAIL = 'admin@gmail.com'
        await UserService.registration(ADMIN_EMAIL, 'admin', 'ADMIN', '0')
        const adminUser = await UserModel.findOne({ email: ADMIN_EMAIL })
        await EmplModel.insertMany([
            { email: ADMIN_EMAIL, isConfirmed: true, user: adminUser, roles: ['admin'], emplName: 'Admin' },
            ...EMPLOYEES
        ])

        // empl ids to places
        let newEmplsFromDB = await EmplModel.find({})
        let placesInDB2 = await PlaceModel.find({})

        for (let empl of newEmplsFromDB) {
            for (let placeInDB of placesInDB2) {
                if (empl.emplName === placeInDB.emplName) {
                    placeInDB.empl = empl._id

                    await placeInDB.save()
                }
            }
        }
        // empl ids to places

        for (let empl of newEmplsFromDB) {
            for (let prType of prTypesFromDB) {
                if (empl.emplName == prType.emplName) {
                    empl.problemType.push(prType._id)
                    prType.empl = empl._id
                    if (!('problem_fix' in empl.roles)) {
                        empl.roles.push('problem_fix')
                    }
                }
            }
        }

        // for (let prType of prTypesFromDB) {
        //     if (!prType.empl) {
        //         let empl = await EmplModel.findOne({
        //             emplName: prType.emplName,
        //         })
        //         if (empl) {
        //             empl.problemType.push(prType._id)
        //             await empl.save()
        //             prType.empl = empl._id
        //         } else {
        //             await EmplModel.create({
        //                 roles: ['problem_fix'],
        //                 emplName: prType.emplName,
        //                 problemType: [prType._id]
        //             })
        //             let newEm = await EmplModel.findOne({
        //                 emplName: prType.emplName,
        //             })

        //             prType.empl = newEm._id
        //         }
        //     }
        // }

        // save all
        for (let e of newEmplsFromDB) {
            await e.save()
        }
        for (let p of prTypesFromDB) {
            await p.save()
        }
        // save all

        let emplsWithPr = await EmplModel.find({})
        let problemTypesWithEmpl = await ProblemTypeModel.find({})

        // extract ids
        let emplIds = []
        let problemTypesIds = []
        for (let e of emplsWithPr) {
            emplIds.push(e._id)
        }
        for (let p of problemTypesWithEmpl) {
            problemTypesIds.push(p._id)
        }
        // extract ids

        if (adminUser) {
            await CompanyModel.create({
                identifier: 0,
                companyName: 'Глазов Молоко',
                employees: emplIds,
                problemTypes: problemTypesIds,
            })
        }
        return res.json('ok')
    },
    async getFullEmpl(_id) {
        const empl = await EmplModel.findById(_id)
        const emplPlaces = empl.places
        const emplProblemTypes = empl.problemType


        let fullEmpl = Object.assign({}, empl)._doc

        // get places
        if (emplPlaces.length > 0) {
            for (let i = 0; i < emplPlaces.length; i++) {
                // console.log(emplPlaces[i]);
                fullEmpl.places[i] = await PlaceModel.findById(emplPlaces[i])
            }
        }
        // get problem types
        if (emplProblemTypes.length > 0) {
            for (let i = 0; i < emplProblemTypes.length; i++) {
                fullEmpl.problemType[i] = await ProblemTypeModel.findById(emplProblemTypes[i])
            }
        }

        return fullEmpl
    },
    async getCompany(_id) {
        const c = await CompanyModel.findOne({ identifier: _id })
        return c
    },
    async reportProblem(problem, company_id) {

        let company = await CompanyModel.findOne({ identifier: company_id })

        const problemInDB = await ProblemModel.create(problem)

        for (let e of company.employees) {
            if (problem.place.place == e.place || problem.place.emplName == e.emplName) {
                e.reportsToFix.push(problemInDB)
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
        let { employee: newEmpl, company: company_id } = empl_company

        if (!newEmpl.isConfirmed) {
            // return CompanyModel.findOneAndUpdate({ identifier: company, 'employees.user._id': employee.user._id }, { $set: { 'employees.$': employee } })
            let details = {
                from: 'qbit.mailing@gmail.com',
                to: newEmpl.email,
                subject: 'Приглашение в Lean Factory',
                html: `<h2>Вас пригласили в компанию</h2> <p>Перейдите по ссылке, чтобы присоединиться</p> <a href="http://localhost:5100/registration?company_id=${company_id}">http://localhost:5100/registration?company_id=${company_id}</a>`
            }

            let r = await mailer.sendMail(details)
        }

        return await EmplModel.findOneAndUpdate({ _id: newEmpl._id, company: company_id }, { $set: newEmpl })
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