const Router = require('express').Router;
const companyController = require('../controllers/company-controller')
let multer = require('multer');

const router = Router()

router.get('/service', companyController.serviceFunc)
router.get('/start-app', companyController.startApp)

router.get('/get-full-empl', companyController.getFullEmpl)
router.get('/get-full-problem', companyController.getFullProblem)

router.post('/get-employees', companyController.getEmpls)
router.post('/get-places', companyController.getPlaces)
router.post('/get-reports', companyController.getReports)
router.get('/get-problem-types', companyController.getProblemTypes)

router.post('/upload-problem-photos', multer().any(), companyController.uploadProblemPhotos)
router.post('/report-problem', companyController.reportProblem)

router.get('/delete-problem', companyController.deleteProblem)
router.post('/send-to-fix', companyController.sendProblemToFix)
router.get('/fix-problem', companyController.fixProblem)
router.post('/add-empls', companyController.addEmpls)
router.post('/delete-empl', companyController.deleteEmpl)
router.post('/update-empl', companyController.updateEmpl)

router.get('/get-company', companyController.getCompany)

module.exports = router