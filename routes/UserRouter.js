const Router = require("express").Router();

const controller = require("../controllers/UserController");

Router.get("/get_user", controller.GetAllUser);
Router.get('/get_user/:id', controller.GetUser)
Router.get('/get_user/by_email/:email', controller.GetUserByEmail)
Router.put('/update_user/by_id/:userId', controller.UpdateUser)

module.exports = Router;
