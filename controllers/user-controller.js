const UserService = require('../service/user-service')
const CompanyService = require('../service/company-service')
const { validationResult } = require('express-validator')
const ApiError = require('../exceptions/api-error');

module.exports = {
    async serviceFunc(req, res, next) {
        try {
            UserService.serviceFunc(req, res)
        } catch (error) {
            console.log(error);
        }
    },
    addRole(req, res, next) {
        try {
            UserService.addRole(req, res)
        } catch (error) {
            console.log(error);
        }
    },
    async clearUsers(req, res, next) {
        try {
            res.json(UserService.clearUsers())
        } catch (error) {

        }
    },
    async registration(req, res, next) {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                throw ApiError.BadRequest('Ошибка при регистрации', errors)
            }
            const { email, password, fullname, company } = req.body;
            const userData = await UserService.registration(email, password, fullname, company)

            const employee = await CompanyService.createEmployee(userData)

            const newCompany = await CompanyService.updateCompanyEmpl(employee)

            // добавить флаг secure: true чтобы активировать https
            res.cookie('refreshToken', userData.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true });
            return res.json(userData)
        } catch (error) {
            next(error)
        }
    },
    async login(req, res, next) {
        try {
            const { email, password } = req.body;
            const userData = await UserService.login(email, password)

            res.cookie('refreshToken', userData.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true });

            return res.json(userData)
        } catch (error) {
            next(error)
        }
    },
    async refresh(req, res, next) {
        try {
            const { refreshToken } = req.cookies;

            const userData = await UserService.refresh(refreshToken)
            res.cookie('refreshToken', userData.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true });
            // const newUser = await UserService.update(userData)

            return res.json(userData);
        } catch (error) {
            // попадаем в middleware с обработкой ошибок
            next(error)
        }
    },
    async logout(req, res, next) {
        try {
            const { refreshToken } = req.cookies;
            const token = await UserService.logout(refreshToken)
            res.clearCookie('refreshToken')

            return res.json(token);
        } catch (error) {
            // попадаем в middleware с обработкой ошибок
            next(error)
        }
    },
    async update(req, res, next) {
        try {
            const newUser = await UserService.update(req.body)
            return res.json(newUser)
        } catch (error) {
            next(error)
        }
    }
}