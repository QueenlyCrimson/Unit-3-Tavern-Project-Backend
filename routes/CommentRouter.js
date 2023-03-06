const Router = require('express').Router()

const controller = require('../controllers/CommentController')

Router.post('/create_comment', controller.CreateComment )
Router.get('/find_comments', controller.GetAllComment)
Router.get('/find_comments/:comment_id', controller.GetCommentById)

module.exports = Router