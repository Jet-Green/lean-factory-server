const companyService = require('../service/company-service')

module.exports = {
    serviceFunc(req, res, next) {
        companyService.serviceFunc(req, res, next)
    },
    async getCompany(req, res, next) {
        return res.json(await companyService.getCompany(req.query.company_id))
    },
    async reportProblem(req, res, next) {
        try {
            let result = await companyService.reportProblem(req.body, req.query.company_id)
        } catch (error) {
            next(error);
        }
    },
    async addEmpls(req, res, next) {
        try {
            let result = await companyService.addEmpls(req.body, req.query.company_id)
            return res.json(result)
        } catch (error) {
            next(error)
        }
    },
    async deleteEmpl(req, res, next) {
        try {
            let result = await companyService.deleteEmpl(req.body)
            return res.json(result)
        } catch (error) {
            next(error)
        }
    },
    async updateEmpl(req, res, next) {
        try {
            let result = await companyService.updateEmpl(req.body)
            return res.json(result)
        } catch (error) {
            next(error)
        }
    },
    startApp(req, res, next) {
        try {
            companyService.startApp(req, res, next)
        } catch (error) {
            console.log(error);
        }
    }
}