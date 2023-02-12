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
const { rawProblemTypes: RAW_PROBLEM_TYPES, employees: EMPLOYEES, hierarchy: HIERARCHY } = require('../data.js')

const UserService = require('../service/user-service')

module.exports = {
    async uploadFilesToBucket(files) {
        let EasyYandexS3 = require('easy-yandex-s3').default;

        // Указываем аутентификацию в Yandex Object Storage
        let s3 = new EasyYandexS3({
            auth: {
                accessKeyId: process.env.YC_KEY_ID,
                secretAccessKey: process.env.YC_SECRET,
            },
            Bucket: process.env.YC_BUCKET_NAME, // Название бакета
            debug: false, // Дебаг в консоли
        });

        let links = []
        let buffers = []

        for (let file of files) {
            buffers.push({ buffer: file.buffer });    // Буфер загруженного файла
        }

        let uploadResult = await s3.Upload(buffers, '/files/');

        for (let upl of uploadResult) {
            links.push(upl.Location)
        }

        return links
    },
    async deleteProblem(query) {
        let { problem_id, empl_id } = query
        console.log(query);
        return [
            await ProblemModel.findByIdAndUpdate(problem_id, { $push: { actions: { status: 'deleted', date: Date.now() } } }),
            await EmplModel.updateMany({}, { $pull: { reportsToFix: { $eq: problem_id } } })
        ]
    },
    async fixProblem(problemId, comment) {
        return ProblemModel.findByIdAndUpdate(problemId, { $push: { actions: { status: 'fixed', date: Date.now(), comment } } })
    },
    async getProblemTypes(company_id) {
        if (!company_id) throw ApiError.BadRequest('Пустой company_id')

        let companyFromDB = await CompanyModel.findOne({ identifier: company_id })

        let problemTypesIdsFromDB = companyFromDB.problemTypes

        let query = []
        for (let pid of problemTypesIdsFromDB) {
            query.push({
                _id: pid,
            })
        }

        return ProblemTypeModel.find({ $or: query })
    },
    async getFullProblem(_id) {
        if (!_id) {
            throw ApiError.BadRequest('_id пустой')
        }

        let problemFromDB = await ProblemModel.findById(_id)

        if (!problemFromDB._id)
            throw ApiError.BadRequest('Нет проблемы с таким _id')

        if (!problemFromDB) throw ApiError.BadRequest('Нет такой проблемы')

        let fullProblem = Object.assign({}, problemFromDB._doc)

        // need to add full PLACE
        let { placeId } = problemFromDB

        let placeFromDB = await PlaceModel.findById(placeId)


        fullProblem.fullPlace = placeFromDB

        return fullProblem
    },
    async getReports(reportsIds) {
        if (!reportsIds.length) return []
        let query = []
        for (let rid of reportsIds) {
            query.push({
                _id: rid,
            })
        }
        let reportsFromDB = await ProblemModel.find({ $or: query })
        // let placesIds = []
        // for (let report of reportsFromDB) {
        //     placesIds.push(report.placeId)
        // }

        // let placesFromDB = await this.getPlaces("0", placesIds)

        // for (let place of placesFromDB) {
        //     for (let report of reportsFromDB) {
        //         if (place._id == report.placeId) {
        //             report.place = place
        //         }
        //     }
        // }
        // console.log(reportsFromDB);

        return reportsFromDB
    },
    async getPlaces(company_id, placesIds) {
        if (typeof company_id != 'string') {
            throw ApiError.BadRequest('Неправильный тип компании')
        }

        let query = []
        for (let pid of placesIds) {
            query.push({
                _id: pid,
            })
        }

        return await PlaceModel.find({ $or: query })
    },
    async getEmpls(company_id, emplsIds) {
        if (typeof company_id != 'string') {
            throw ApiError.BadRequest('Неправильный тип компании')
        }


        let query = []
        for (let eid of emplsIds) {
            query.push({
                _id: eid,
            })
        }

        return await EmplModel.find({ $or: query })
    },
    async sendProblemToFix(data) {
        const { problemId, action } = data

        let problemFromDB = await ProblemModel.findById(problemId)
        let employeesFromDB = await EmplModel.find({ company: '0' })

        problemFromDB.actions.push(action)

        for (let empl of employeesFromDB) {
            if (empl._id == action.respEmpl) {
                empl.reportsToFix.push(problemFromDB._id)
                empl.save()
            }
        }

        await problemFromDB.save()

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
        let placesIds = []
        // places ids to empls and placesIds into array
        for (let empl of EMPLOYEES) {
            let oldPlaces = empl.places
            empl.places = []
            for (let placeInDB of placesInDB) {
                if (placeInDB.emplName == empl.emplName && oldPlaces) {
                    empl.places.push(placeInDB._id)
                    placesIds.push(placeInDB._id)
                }
            }
        }
        // places ids to empls and placesIds into array


        const ADMIN_EMAIL = 'admin@gmail.com'
        await UserService.registration(ADMIN_EMAIL, 'admin', 'ADMIN', '0')
        const adminUser = await UserModel.findOne({ email: ADMIN_EMAIL })
        await EmplModel.insertMany([
            { email: ADMIN_EMAIL, isConfirmed: true, user: adminUser, roles: ['admin'], emplName: 'Пальшин В.В.' },
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

        for (let emplH of HIERARCHY) {
            for (let emplDB of newEmplsFromDB) {
                if (emplH.emplName == emplDB.emplName) {
                    emplH._id = emplDB._id

                    for (let down of emplH.down) {
                        for (let emplDB2 of newEmplsFromDB) {
                            if (down.emplName == emplDB2.emplName) {
                                down._id = emplDB2._id
                            }
                        }
                    }

                    for (let up of emplH.up) {
                        for (let emplDB2 of newEmplsFromDB) {
                            if (up.emplName == emplDB2.emplName) {
                                up._id = emplDB2._id

                            }
                        }
                    }
                    emplDB.hierarchy = {
                        up: emplH.up,
                        down: emplH.down
                    }

                    await emplDB.save()
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
                places: placesIds,
                hierarchy: HIERARCHY
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
        let emplInDB = await EmplModel.findOne({ company: company_id, _id: problem.actions[0].respEmpl })
        const problemInDB = await ProblemModel.create(problem)

        for (let placeId of emplInDB.places) {
            if (placeId == problem.placeId) {
                emplInDB.reportsToFix.push(problemInDB._id)
            }
        }

        return emplInDB.save()
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
    async updateCompanyEmpl(userData) {
        const e = { email: userData.user.email, isConfirmed: true, user: userData.user }

        return await EmplModel.findOneAndUpdate({ email: e.email }, { $set: { user: e.user, isConfirmed: true } })
    }
}