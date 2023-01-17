const Router = require('express').Router;
const companyController = require('../controllers/company-controller')

const router = Router()

router.get('/service', companyController.serviceFunc)
router.get('/start-app', companyController.startApp)

router.get('/get-full-empl', companyController.getFullEmpl)
router.post('/get-employees', companyController.getEmpls)
router.post('/get-places', companyController.getPlaces)


router.post('/send-to-fix', companyController.sendProblemToFix)
router.post('/report-problem', companyController.reportProblem)
router.post('/add-empls', companyController.addEmpls)
router.post('/delete-empl', companyController.deleteEmpl)
router.post('/update-empl', companyController.updateEmpl)

router.get('/get-company', companyController.getCompany)

module.exports = router