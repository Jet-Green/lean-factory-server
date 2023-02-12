const companyService = require('../service/company-service')

module.exports = {
    serviceFunc(req, res, next) {
        companyService.serviceFunc(req, res, next)
    },
    async uploadProblemPhotos(req, res, next) {
        try {
            // upload to yc bucket
            let links = await companyService.uploadFilesToBucket(req.files)
            res.json(links)
        } catch (error) {
            next(error)
        }
    },
    async fixProblem(req, res, next) {
        try {
            return res.json(await companyService.fixProblem(req.query.problem_id, req.query.comment))
        } catch (error) {
            // console.log(error);
            next(error)
        }
    },
    async getFullProblem(req, res, next) {
        try {
            return res.json(await companyService.getFullProblem(req.query._id))
        } catch (error) {
            next(error)
        }
    },
    async getProblemTypes(req, res, next) {
        try {
            return res.json(await companyService.getProblemTypes(req.query.company_id))
        } catch (error) {
            next(error)
        }
    },
    async getReports(req, res, next) {
        try {
            let reportsFromDB = await companyService.getReports(req.body)
            return res.json(reportsFromDB)
        } catch (error) {
            next(error)
        }
    },
    async sendProblemToFix(req, res, next) {
        try {
            return res.json(await companyService.sendProblemToFix(req.body))
        } catch (error) {
            // console.log(error);
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
    async startApp(req, res, next) {
        try {
            await companyService.startApp(req, res, next)
        } catch (error) {
            console.log(error);
        }
    }
}