const Router = require('express').Router()

const controller = require('../controllers/UserController')

Router.get('/getuser', controller.getAllUser)



module.exports = Router