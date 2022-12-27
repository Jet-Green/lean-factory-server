const companyService = require('../service/company-service')

module.exports = {
    serviceFunc(req, res, next) {
        companyService.serviceFunc(req, res, next)
    },
    getCompany(req, res, next) {
        return res.json(companyService.getCompany())
    },
    addEmpls(req, res, next) {
        try {
            let result = companyService.addEmpls(req.body, req.query.company_id)
            console.log(result.employees);
            return res.json('OK')
        } catch (error) {
            next(error)
        }
    }
}