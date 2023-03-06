const Router = require('express').Router()

const controller = require('../controllers/PostController')

Router.get('/get_posts', controller.GetAllPost)

module.exports = Router