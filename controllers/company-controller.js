const companyService = require('../service/company-service')

module.exports = {
    serviceFunc(req, res, next) {
        companyService.serviceFunc(req, res, next)
    },
    async getCompany(req, res, next) {
        return res.json(await companyService.getCompany(req.query.company_id))
    },
    addEmpls(req, res, next) {
        try {
            let result = companyService.addEmpls(req.body, req.query.company_id)
            return res.json('OK')
        } catch (error) {
            next(error)
        }
    },
    async deleteEmpl(req, res, next) {
        try {
            let result = await companyService.deleteEmpl(req.body)
            return res.json(result)
        } catch (error) {
            console.log(error);
            next(error)
        }
    },
    startApp() {
        try {
            companyService.startApp()
        } catch (error) {
            console.log(error);
        }
    }
}