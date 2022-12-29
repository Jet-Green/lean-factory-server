const Router = require('express').Router;
const companyController = require('../controllers/company-controller')

const router = Router()

router.get('/service', companyController.serviceFunc)
router.get('/start-app', companyController.startApp)
router.post('/add-empls', companyController.addEmpls)
router.get('/get-company', companyController.getCompany)

module.exports = router