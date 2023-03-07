const Router = require("express").Router();

const controller = require("../controllers/UserController");

Router.get("/get_user", controller.GetAllUser);
Router.get('/get_user/:id', controller.GetUser)

module.exports = Router;
