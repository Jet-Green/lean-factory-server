const CompanyModel = require('../models/company-model')
const { EmplModel } = require('../models/empl-model')
const UserModel = require('../models/user-model')
const RoleModel = require('../models/role-model')
const { ProblemModel } = require('../models/problem-model')
const mailer = require('../middleware/mailer')

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

        const ADMIN_EMAIL = 'admin@gmail.com'

        await UserService.registration(ADMIN_EMAIL, 'admin', 'ADMIN', '0')

        const adminUser = await UserModel.findOne({ email: ADMIN_EMAIL })

        await EmplModel.insertMany([
            { email: ADMIN_EMAIL, isConfirmed: true, user: adminUser, roles: ['admin'] },
            {
                place: 'Участок очистки сточных вод',
                emplName: 'Волков Н.А.',
                isConfirmed: false,
                email: '',
                roles: ['territory_resp'],
                user: null
            },
            {
                place: 'Усреднитель',
                emplName: 'Волков Н.А.',
                isConfirmed: false,
                email: '',
                roles: ['territory_resp'],
                user: null
            },
            {
                place: 'Холодильник',
                emplName: 'Гаврилова С.С.',
                isConfirmed: false,
                email: '',
                roles: ['territory_resp'],
                user: null
            },
            {
                place: 'Материальный склад № 7',
                emplName: 'Васильченко С.В.',
                isConfirmed: false,
                email: '',
                roles: ['territory_resp'],
                user: null
            },
            {
                place: 'Токарная мастерская',
                emplName: 'Ведерников В.И.',
                isConfirmed: false,
                email: '',
                roles: ['territory_resp'],
                user: null
            },
            {
                place: 'Трансформаторная подстанция ТП-15',
                emplName: 'Казанцев А.В.',
                isConfirmed: false,
                email: '',
                roles: ['territory_resp'],
                user: null
            },
            {
                place: 'Раздевалка АХС',
                emplName: 'Вершинин А.С.',
                isConfirmed: false,
                email: '',
                roles: ['territory_resp'],
                user: null
            },
            {
                place: 'Гараж легковых автомобилей',
                emplName: 'Абуткин Р.Ш.',
                isConfirmed: false,
                email: '',
                roles: ['territory_resp'],
                user: null
            },
            {
                place: 'Помещение для тех.обслуживания',
                emplName: 'Абуткин Р.Ш.',
                isConfirmed: false,
                email: '',
                roles: ['territory_resp'],
                user: null
            },
            {
                place: 'Материальный склад № 8',
                emplName: 'Васильченко С.В.',
                isConfirmed: false,
                email: '',
                roles: ['territory_resp'],
                user: null
            },
            {
                place: 'Трансформаторная подстанция ТП-47',
                emplName: 'Казанцев А.В.',
                isConfirmed: false,
                email: '',
                roles: ['territory_resp'],
                user: null
            },
            {
                place: 'Материальный склад',
                emplName: 'Васильченко С.В.',
                isConfirmed: false,
                email: '',
                roles: ['territory_resp'],
                user: null
            },
            {
                place: 'Диспетчерская',
                emplName: 'Абуткин Р.Ш.',
                isConfirmed: false,
                email: '',
                roles: ['territory_resp'],
                user: null
            },
            {
                place: 'Материальный склад № 5',
                emplName: 'Васильченко С.В.',
                isConfirmed: false,
                email: '',
                roles: ['territory_resp'],
                user: null
            },
            {
                place: 'Помещение прачечной',
                emplName: 'Ведерников В.И.',
                isConfirmed: false,
                email: '',
                roles: ['territory_resp'],
                user: null
            },
            {
                place: 'Тепловой пункт',
                emplName: 'Ведерников В.И.',
                isConfirmed: false,
                email: '',
                roles: ['territory_resp'],
                user: null
            },
            {
                place: 'Склад готовой продукции',
                emplName: 'Гаврилова С.С.',
                isConfirmed: false,
                email: '',
                roles: ['territory_resp'],
                user: null
            },
            {
                place: 'Железный склад',
                emplName: 'Гаврилова С.С.',
                isConfirmed: false,
                email: '',
                roles: ['territory_resp'],
                user: null
            },
            {
                place: 'Бетонный склад',
                emplName: 'Гаврилова С.С.',
                isConfirmed: false,
                email: '',
                roles: ['territory_resp'],
                user: null
            },
            {
                place: 'Градирни',
                emplName: 'Ведерников В.И.',
                isConfirmed: false,
                email: '',
                roles: ['territory_resp'],
                user: null
            },
            {
                place: 'Трансформаторная подстанция РП-4',
                emplName: 'Казанцев А.В.',
                isConfirmed: false,
                email: '',
                roles: ['territory_resp'],
                user: null
            },
            {
                place: 'Здание распредпункта',
                emplName: 'Ведерников В.И.',
                isConfirmed: false,
                email: '',
                roles: ['territory_resp'],
                user: null
            },
            {
                place: 'Воздуходувная компрессорная',
                emplName: 'Ведерников В.И.',
                isConfirmed: false,
                email: '',
                roles: ['territory_resp'],
                user: null
            },
            {
                place: 'Склад СП ГПК СОМ',
                emplName: 'Чинюк Э.В.',
                isConfirmed: false,
                email: '',
                roles: ['territory_resp'],
                user: null
            },
            {
                place: 'Компрессорная АХУ',
                emplName: 'Ведерников В.И.',
                isConfirmed: false,
                email: '',
                roles: ['territory_resp'],
                user: null
            },
            {
                place: 'Электрощитовая к участку ледяной воды',
                emplName: 'Казанцев А.В.',
                isConfirmed: false,
                email: '',
                roles: ['territory_resp'],
                user: null
            },
            {
                place: 'Участок по производству СП',
                emplName: 'Чинюк Э.В.',
                isConfirmed: false,
                email: '',
                roles: ['territory_resp'],
                user: null
            },
            {
                place: 'Теплогазогенераторная',
                emplName: 'Савин П. В.',
                isConfirmed: false,
                email: '',
                roles: ['territory_resp'],
                user: null
            },
            {
                place: 'Помещение ВВУ',
                emplName: 'Чинюк Э.В.',
                isConfirmed: false,
                email: '',
                roles: ['territory_resp'],
                user: null
            },
            {
                place: 'Отделение баромембранных технологий',
                emplName: 'Чинюк Э.В.',
                isConfirmed: false,
                email: '',
                roles: ['territory_resp'],
                user: null
            },
            {
                place: 'Водоподготовка СИП №3',
                emplName: 'Чинюк Э.В.',
                isConfirmed: false,
                email: '',
                roles: ['territory_resp'],
                user: null
            },
            {
                place: 'Отделение хранения сыворотки',
                emplName: 'Чинюк Э.В.',
                isConfirmed: false,
                email: '',
                roles: ['territory_resp'],
                user: null
            },
            {
                place: 'Отделение хранения молока',
                emplName: 'Чинюк Э.В.',
                isConfirmed: false,
                email: '',
                roles: ['territory_resp'],
                user: null
            },
            {
                place: 'Приемка сыворотки',
                emplName: 'Чинюк Э.В.',
                isConfirmed: false,
                email: '',
                roles: ['territory_resp'],
                user: null
            },
            {
                place: 'Участок нормализации',
                emplName: 'Чинюк Э.В.',
                isConfirmed: false,
                email: '',
                roles: ['territory_resp'],
                user: null
            },
            {
                place: 'Приемка молока',
                emplName: 'Чинюк Э.В.',
                isConfirmed: false,
                email: '',
                roles: ['territory_resp'],
                user: null
            },
            {
                place: 'Здание АБК',
                emplName: 'Вершинин А.С.',
                isConfirmed: false,
                email: '',
                roles: ['territory_resp'],
                user: null
            },
            {
                place: 'Цех по производству ЦМП и КМП №1',
                emplName: '2',
                isConfirmed: false,
                email: '',
                roles: ['territory_resp'],
                user: null
            },
            {
                place: 'Цех по производству ЦМП и КМП №3',
                emplName: 'Главатских Л.Л.',
                isConfirmed: false,
                email: '',
                roles: ['territory_resp'],
                user: null
            },
            {
                place: 'Цех по производству ЦМП и КМП №4',
                emplName: 'Главатских Л.Л.',
                isConfirmed: false,
                email: '',
                roles: ['territory_resp'],
                user: null
            },
            {
                place: 'Цех по производству ЦМП и КМП №5',
                emplName: 'Главатских Л.Л.',
                isConfirmed: false,
                email: '',
                roles: ['territory_resp'],
                user: null
            },
            {
                place: 'СИП-станция цех ЦМП №1',
                emplName: '2',
                isConfirmed: false,
                email: '',
                roles: ['territory_resp'],
                user: null
            },
            {
                place: 'Склад вспом.материалов ЦМП № 1',
                emplName: 'Главатских Л.Л.',
                isConfirmed: false,
                email: '',
                roles: ['territory_resp'],
                user: null
            },
            {
                place: 'Склад вспом.материалов ЦМП № 2',
                emplName: 'Главатских Л.Л.',
                isConfirmed: false,
                email: '',
                roles: ['territory_resp'],
                user: null
            },
            {
                place: 'СИП-станция цех ЦМП № 3',
                emplName: '4',
                isConfirmed: false,
                email: '',
                roles: ['territory_resp'],
                user: null
            },
            {
                place: 'СИП-станция цех ЦМП № 5',
                emplName: 'Главатских Л.Л.',
                isConfirmed: false,
                email: '',
                roles: ['territory_resp'],
                user: null
            },
            {
                place: 'Мелкооптовый магазин',
                emplName: 'Вершинин А.С.',
                isConfirmed: false,
                email: '',
                roles: ['territory_resp'],
                user: null
            },
            {
                place: 'Раздевалка ОСЛ',
                emplName: 'Гаврилова С.С.',
                isConfirmed: false,
                email: '',
                roles: ['territory_resp'],
                user: null
            },
            {
                place: 'Котельная',
                emplName: 'Савин П. В.',
                isConfirmed: false,
                email: '',
                roles: ['territory_resp'],
                user: null
            },
            {
                place: 'Помещение для шиномонтажа',
                emplName: 'Юферев Д.А.',
                isConfirmed: false,
                email: '',
                roles: ['territory_resp'],
                user: null
            },
            {
                place: 'Склад № 3',
                emplName: 'Юферев Д.А.',
                isConfirmed: false,
                email: '',
                roles: ['territory_resp'],
                user: null
            },
            {
                place: 'Склад № 2',
                emplName: 'Юферев Д.А.',
                isConfirmed: false,
                email: '',
                roles: ['territory_resp'],
                user: null
            },
            {
                place: 'Склад № 1',
                emplName: 'Васильченко С.В.',
                isConfirmed: false,
                email: '',
                roles: ['territory_resp'],
                user: null
            },
            {
                place: 'Ремонтный бокс № 3',
                emplName: 'Юферев Д.А.',
                isConfirmed: false,
                email: '',
                roles: ['territory_resp'],
                user: null
            },
            {
                place: 'Ремонтный бокс № 2',
                emplName: 'Юферев Д.А.',
                isConfirmed: false,
                email: '',
                roles: ['territory_resp'],
                user: null
            },
            {
                place: 'Ремонтный бокс № 1',
                emplName: 'Юферев Д.А.',
                isConfirmed: false,
                email: '',
                roles: ['territory_resp'],
                user: null
            },
            {
                place: 'Сварочный пост',
                emplName: 'Юферев Д.А.',
                isConfirmed: false,
                email: '',
                roles: ['territory_resp'],
                user: null
            },
            {
                place: 'Ангар для хранения автомобилей',
                emplName: 'Абуткин Р.Ш.',
                isConfirmed: false,
                email: '',
                roles: ['territory_resp'],
                user: null
            },
            {
                place: 'Блок подсобных помещений',
                emplName: 'Ведерников В.И.',
                isConfirmed: false,
                email: '',
                roles: ['territory_resp'],
                user: null
            },
            {
                place: 'Здание проходной',
                emplName: 'Вершинин А.С.',
                isConfirmed: false,
                email: '',
                roles: ['territory_resp'],
                user: null
            },
            {
                place: 'Здание насосной станции',
                emplName: 'Савин П. В.',
                isConfirmed: false,
                email: '',
                roles: ['territory_resp'],
                user: null
            },
            {
                place: 'Канализационная насосная станция',
                emplName: 'Ведерников В.И.',
                isConfirmed: false,
                email: '',
                roles: ['territory_resp'],
                user: null
            },
            {
                place: 'Административный корпус',
                emplName: 'Вершинин А.С.',
                isConfirmed: false,
                email: '',
                roles: ['territory_resp'],
                user: null
            }
        ])
        let empls = await EmplModel.find({})
        if (adminUser) {
            await CompanyModel.create({
                identifier: 0,
                companyName: 'Глазов Молоко',
                employees: empls
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
            if (e.place.place == e.place || e.place.emplName == e.emplName) {
                e.toFix.push(problem)
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