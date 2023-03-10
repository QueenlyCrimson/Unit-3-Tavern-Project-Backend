const Router = require("express").Router();

const controller = require("../controllers/PostController");


Router.get("/get_posts", controller.GetAllPost);
Router.post("/create_posts", controller.CreatePost);
Router.get("/by_user_id/:user_id", controller.GetPostByUserId);
Router.get("/by_id/:id", controller.GetPostById);
Router.delete("/:postId", controller.DeletePost);

module.exports = Router;

