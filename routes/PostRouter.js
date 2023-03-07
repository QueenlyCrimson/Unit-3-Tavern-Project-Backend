const Router = require('express').Router()

const controller = require('../controllers/PostController')

Router.get('/get_posts', controller.GetAllPost)
Router.post('/create_posts', controller.CreatePost)
Router.get('/:user_id',controller.GetPostByUserId)

module.exports = Router