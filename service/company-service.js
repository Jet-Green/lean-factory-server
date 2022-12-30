const CompanyModel = require('../models/company-model')
const EmplModel = require('../models/empl-model')
const UserModel = require('../models/user-model')
const RoleModel = require('../models/role-model')
const mailer = require('../middleware/mailer')

const UserService = require('../service/user-service')

module.exports = {
    async serviceFunc(req, res, next) {
        // return res.json(await CompanyModel.findOneAndDelete({}))
        const adminUser = await UserModel.findOne({ email: 'admin@gmail.com' })
        if (adminUser) {
            return res.json(await CompanyModel.create({ identifier: 0, companyName: 'Глазов Молоко', employees: [{ email: 'admin@gmail.com', isConfirmed: true, user: adminUser }] }))
        }
        return res.json('нет такого пользователя')
    },
    async startApp() {
        let defaultUser = new RoleModel()
        let superUser = new RoleModel({ value: 'admin' })
        await defaultUser.save()
        await superUser.save()

        const ADMIN_EMAIL = 'admin@gmail.com'

        await UserService.registration(ADMIN_EMAIL, 'admin', 'ADMIN', '0')

        const adminUser = await UserModel.findOne({ email: ADMIN_EMAIL })
        if (adminUser) {
            await CompanyModel.create({
                identifier: 0,
                companyName: 'Глазов Молоко',
                employees: [{ _id: '-12313489666545422vxdf', email: ADMIN_EMAIL, isConfirmed: true, user: adminUser }],
                emplsWithPlace: [
                    {
                        place: 'Участок очистки сточных вод',
                        emplName: 'Волков Н.А.',
                        isConfirmed: false,
                        _id: 456522,
                        email: ''
                    },
                    {
                        place: 'Усреднитель',
                        emplName: 'Волков Н.А.',
                        isConfirmed: false,
                        _id: 456523,
                        email: ''
                    },
                    {
                        place: 'Холодильник',
                        emplName: 'Гаврилова С.С.',
                        isConfirmed: false,
                        _id: 456524,
                        email: ''
                    },
                    {
                        place: 'Материальный склад № 7',
                        emplName: 'Васильченко С.В.',
                        isConfirmed: false,
                        _id: 456525,
                        email: ''
                    },
                    {
                        place: 'Токарная мастерская',
                        emplName: 'Ведерников В.И.',
                        isConfirmed: false,
                        _id: 456526,
                        email: ''
                    },
                    {
                        place: 'Трансформаторная подстанция ТП-15',
                        emplName: 'Казанцев А.В.',
                        isConfirmed: false,
                        _id: 456527,
                        email: ''
                    },
                    {
                        place: 'Раздевалка АХС',
                        emplName: 'Вершинин А.С.',
                        isConfirmed: false,
                        _id: 456528,
                        email: ''
                    },
                    {
                        place: 'Гараж легковых автомобилей',
                        emplName: 'Абуткин Р.Ш.',
                        isConfirmed: false,
                        _id: 456529,
                        email: ''
                    },
                    {
                        place: 'Помещение для тех.обслуживания',
                        emplName: 'Абуткин Р.Ш.',
                        isConfirmed: false,
                        _id: 456530,
                        email: ''
                    },
                    {
                        place: 'Материальный склад № 8',
                        emplName: 'Васильченко С.В.',
                        isConfirmed: false,
                        _id: 456531,
                        email: ''
                    },
                    {
                        place: 'Трансформаторная подстанция ТП-47',
                        emplName: 'Казанцев А.В.',
                        isConfirmed: false,
                        _id: 456532,
                        email: ''
                    },
                    {
                        place: 'Материальный склад',
                        emplName: 'Васильченко С.В.',
                        isConfirmed: false,
                        _id: 456533,
                        email: ''
                    },
                    {
                        place: 'Диспетчерская',
                        emplName: 'Абуткин Р.Ш.',
                        isConfirmed: false,
                        _id: 456534,
                        email: ''
                    },
                    {
                        place: 'Материальный склад № 5',
                        emplName: 'Васильченко С.В.',
                        isConfirmed: false,
                        _id: 456535,
                        email: ''
                    },
                    {
                        place: 'Помещение прачечной',
                        emplName: 'Ведерников В.И.',
                        isConfirmed: false,
                        _id: 456536,
                        email: ''
                    },
                    {
                        place: 'Тепловой пункт',
                        emplName: 'Ведерников В.И.',
                        isConfirmed: false,
                        _id: 456537,
                        email: ''
                    },
                    {
                        place: 'Склад готовой продукции',
                        emplName: 'Гаврилова С.С.',
                        isConfirmed: false,
                        _id: 456538,
                        email: ''
                    },
                    {
                        place: 'Железный склад',
                        emplName: 'Гаврилова С.С.',
                        isConfirmed: false,
                        _id: 456539,
                        email: ''
                    },
                    {
                        place: 'Бетонный склад',
                        emplName: 'Гаврилова С.С.',
                        isConfirmed: false,
                        _id: 456540,
                        email: ''
                    },
                    {
                        place: 'Градирни',
                        emplName: 'Ведерников В.И.',
                        isConfirmed: false,
                        _id: 456541,
                        email: ''
                    },
                    {
                        place: 'Трансформаторная подстанция РП-4',
                        emplName: 'Казанцев А.В.',
                        isConfirmed: false,
                        _id: 456542,
                        email: ''
                    },
                    {
                        place: 'Здание распредпункта',
                        emplName: 'Ведерников В.И.',
                        isConfirmed: false,
                        _id: 456543,
                        email: ''
                    },
                    {
                        place: 'Воздуходувная компрессорная',
                        emplName: 'Ведерников В.И.',
                        isConfirmed: false,
                        _id: 456544,
                        email: ''
                    },
                    {
                        place: 'Склад СП ГПК СОМ',
                        emplName: 'Чинюк Э.В.',
                        isConfirmed: false,
                        _id: 456545,
                        email: ''
                    },
                    {
                        place: 'Компрессорная АХУ',
                        emplName: 'Ведерников В.И.',
                        isConfirmed: false,
                        _id: 456546,
                        email: ''
                    },
                    {
                        place: 'Электрощитовая к участку ледяной воды',
                        emplName: 'Казанцев А.В.',
                        isConfirmed: false,
                        _id: 456547,
                        email: ''
                    },
                    {
                        place: 'Участок по производству СП',
                        emplName: 'Чинюк Э.В.',
                        isConfirmed: false,
                        _id: 456548,
                        email: ''
                    },
                    {
                        place: 'Теплогазогенераторная',
                        emplName: 'Савин П. В.',
                        isConfirmed: false,
                        _id: 456549,
                        email: ''
                    },
                    {
                        place: 'Помещение ВВУ',
                        emplName: 'Чинюк Э.В.',
                        isConfirmed: false,
                        _id: 456550,
                        email: ''
                    },
                    {
                        place: 'Отделение баромембранных технологий',
                        emplName: 'Чинюк Э.В.',
                        isConfirmed: false,
                        _id: 456551,
                        email: ''
                    },
                    {
                        place: 'Водоподготовка СИП №3',
                        emplName: 'Чинюк Э.В.',
                        isConfirmed: false,
                        _id: 456552,
                        email: ''
                    },
                    {
                        place: 'Отделение хранения сыворотки',
                        emplName: 'Чинюк Э.В.',
                        isConfirmed: false,
                        _id: 456553,
                        email: ''
                    },
                    {
                        place: 'Отделение хранения молока',
                        emplName: 'Чинюк Э.В.',
                        isConfirmed: false,
                        _id: 456554,
                        email: ''
                    },
                    {
                        place: 'Приемка сыворотки',
                        emplName: 'Чинюк Э.В.',
                        isConfirmed: false,
                        _id: 456555,
                        email: ''
                    },
                    {
                        place: 'Участок нормализации',
                        emplName: 'Чинюк Э.В.',
                        isConfirmed: false,
                        _id: 456556,
                        email: ''
                    },
                    {
                        place: 'Приемка молока',
                        emplName: 'Чинюк Э.В.',
                        isConfirmed: false,
                        _id: 456557,
                        email: ''
                    },
                    {
                        place: 'Здание АБК',
                        emplName: 'Вершинин А.С.',
                        isConfirmed: false,
                        _id: 456558,
                        email: ''
                    },
                    {
                        place: 'Цех по производству ЦМП и КМП №1',
                        emplName: '2',
                        isConfirmed: false,
                        _id: 456559,
                        email: ''
                    },
                    {
                        place: 'Цех по производству ЦМП и КМП №3',
                        emplName: 'Главатских Л.Л.',
                        isConfirmed: false,
                        _id: 456560,
                        email: ''
                    },
                    {
                        place: 'Цех по производству ЦМП и КМП №4',
                        emplName: 'Главатских Л.Л.',
                        isConfirmed: false,
                        _id: 456561,
                        email: ''
                    },
                    {
                        place: 'Цех по производству ЦМП и КМП №5',
                        emplName: 'Главатских Л.Л.',
                        isConfirmed: false,
                        _id: 456562,
                        email: ''
                    },
                    {
                        place: 'СИП-станция цех ЦМП №1',
                        emplName: '2',
                        isConfirmed: false,
                        _id: 456563,
                        email: ''
                    },
                    {
                        place: 'Склад вспом.материалов ЦМП № 1',
                        emplName: 'Главатских Л.Л.',
                        isConfirmed: false,
                        _id: 456564,
                        email: ''
                    },
                    {
                        place: 'Склад вспом.материалов ЦМП № 2',
                        emplName: 'Главатских Л.Л.',
                        isConfirmed: false,
                        _id: 456565,
                        email: ''
                    },
                    {
                        place: 'СИП-станция цех ЦМП № 3',
                        emplName: '4',
                        isConfirmed: false,
                        _id: 456566,
                        email: ''
                    },
                    {
                        place: 'СИП-станция цех ЦМП № 5',
                        emplName: 'Главатских Л.Л.',
                        isConfirmed: false,
                        _id: 456567,
                        email: ''
                    },
                    {
                        place: 'Мелкооптовый магазин',
                        emplName: 'Вершинин А.С.',
                        isConfirmed: false,
                        _id: 456568,
                        email: ''
                    },
                    {
                        place: 'Раздевалка ОСЛ',
                        emplName: 'Гаврилова С.С.',
                        isConfirmed: false,
                        _id: 456569,
                        email: ''
                    },
                    {
                        place: 'Котельная',
                        emplName: 'Савин П. В.',
                        isConfirmed: false,
                        _id: 456570,
                        email: ''
                    },
                    {
                        place: 'Помещение для шиномонтажа',
                        emplName: 'Юферев Д.А.',
                        isConfirmed: false,
                        _id: 456571,
                        email: ''
                    },
                    {
                        place: 'Склад № 3',
                        emplName: 'Юферев Д.А.',
                        isConfirmed: false,
                        _id: 456572,
                        email: ''
                    },
                    {
                        place: 'Склад № 2',
                        emplName: 'Юферев Д.А.',
                        isConfirmed: false,
                        _id: 456573,
                        email: ''
                    },
                    {
                        place: 'Склад № 1',
                        emplName: 'Васильченко С.В.',
                        isConfirmed: false,
                        _id: 456574,
                        email: ''
                    },
                    {
                        place: 'Ремонтный бокс № 3',
                        emplName: 'Юферев Д.А.',
                        isConfirmed: false,
                        _id: 456575,
                        email: ''
                    },
                    {
                        place: 'Ремонтный бокс № 2',
                        emplName: 'Юферев Д.А.',
                        isConfirmed: false,
                        _id: 456576,
                        email: ''
                    },
                    {
                        place: 'Ремонтный бокс № 1',
                        emplName: 'Юферев Д.А.',
                        isConfirmed: false,
                        _id: 456577,
                        email: ''
                    },
                    {
                        place: 'Сварочный пост',
                        emplName: 'Юферев Д.А.',
                        isConfirmed: false,
                        _id: 456578,
                        email: ''
                    },
                    {
                        place: 'Ангар для хранения автомобилей',
                        emplName: 'Абуткин Р.Ш.',
                        isConfirmed: false,
                        _id: 456579,
                        email: ''
                    },
                    {
                        place: 'Блок подсобных помещений',
                        emplName: 'Ведерников В.И.',
                        isConfirmed: false,
                        _id: 456580,
                        email: ''
                    },
                    {
                        place: 'Здание проходной',
                        emplName: 'Вершинин А.С.',
                        isConfirmed: false,
                        _id: 456581,
                        email: ''
                    },
                    {
                        place: 'Здание насосной станции',
                        emplName: 'Савин П. В.',
                        isConfirmed: false,
                        _id: 456582,
                        email: ''
                    },
                    {
                        place: 'Канализационная насосная станция',
                        emplName: 'Ведерников В.И.',
                        isConfirmed: false,
                        _id: 456583,
                        email: ''
                    },
                    {
                        place: 'Административный корпус',
                        emplName: 'Вершинин А.С.',
                        isConfirmed: false,
                        _id: 456584,
                        email: ''
                    }
                ]
            })
        }


    },
    async getCompany(id) {
        const c = await CompanyModel.findOne({ identifier: id })
        return c
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
    async deleteEmpl(empl_company) {
        return CompanyModel.findOneAndUpdate({ identifier: empl_company.company }, { $pull: { employees: { email: empl_company.email } } })
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
        delete newVal.user._id
        let Company = await CompanyModel.findOne({ identifier: company })
        for (let i = 0; i < Company.employees.length; i++) {
            if (Company.employees[i].email == email) {
                Company.employees[i] = newVal
            }
        }
        return Company.save()
    }
}