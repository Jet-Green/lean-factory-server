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
            let result = companyService.addEmpls(req.body)
            console.log(result);

            res.json(result)
        } catch (error) {
            next(error)
        }
    }
}