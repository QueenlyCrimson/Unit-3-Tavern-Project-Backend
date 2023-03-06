const Router = require("express").Router();

const controller = require("../controllers/UserController");

Router.get("/get_user", controller.getAllUser);

module.exports = Router;
