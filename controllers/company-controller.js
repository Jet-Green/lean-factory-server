const companyService = require('../service/company-service')

module.exports = {
    serviceFunc(req, res, next) {
        companyService.serviceFunc(req, res, next)
    },
    async getFullReport(req, res, next) {
        try {
            let report = await companyService.getFullReport(req.query._id)

            return res.json(report)
        } catch (error) {
            next(error)
        }
    },
    async getReports(req, res, next) {
        try {
            let reportsFromDB = await companyService.getReports(req.body)
            return res.json(reportsFromDB)
        } catch (error) {
            console.log(error);
            next(error)
        }
    },
    async sendProblemToFix(req, res, next) {
        try {
            res.json(await companyService.sendProblemToFix(req.body))
        } catch (error) {
            next(error)
        }
    },
    async getFullEmpl(req, res, next) {
        try {
            return res.json(await companyService.getFullEmpl(req.query._id))
        } catch (error) {
            next(error)
        }
    },
    async getPlaces(req, res, next) {
        try {
            let { company_id } = req.query
            return res.json(await companyService.getPlaces(company_id, req.body))
        } catch (error) {
            next(error)
        }
    },
    async getEmpls(req, res, next) {
        try {
            let { company_id } = req.query
            return res.json(await companyService.getEmpls(company_id, req.body))
        } catch (error) {
            next(error)
        }
    },
    async getCompany(req, res, next) {
        return res.json(await companyService.getCompany(req.query.company_id))
    },
    async reportProblem(req, res, next) {
        try {
            let result = await companyService.reportProblem(req.body, req.query.company_id)
            return res.json(result)
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