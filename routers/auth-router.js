const Router = require('express').Router
const userController = require('../controllers/user-controller')
const { check } = require('express-validator')

const router = Router()

router.post('/registration',
    [
        check('email', 'email неправильного формата').isEmail(),
        check('email', 'email не может быть пустым').notEmpty(),
        check('password', 'пароль не может быть пустым').notEmpty()],
    userController.registration
)
router.post('/login', userController.login)
router.get('/refresh', userController.refresh)
router.post('/logout', userController.logout)
router.post('/update', userController.update)
router.get('/service', userController.serviceFunc)

router.get('/clear-users', userController.clearUsers)

module.exports = router