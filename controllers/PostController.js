const { post } = require("../models");



const GetAllPost = async (req, res) => {
  try {
    const data = await post.findAll();
    res.send(data);
  } catch (error) {
    throw error;
  }
};

const CreatePost = async (req, res) => {
  try {
    const postBody = {
      ...req.body,
    };
    let postCreate = await post.create(postBody);
    res.send(postCreate);
  } catch (error) {
    throw error;
  }
};

const UpdatePost = async (req, res) => {
  try {
    const postId = parseInt(req.params.postId);
    let updatedPost = await post.update(req.body, {
      where: { id: postId },
      returning: true,
    });
    res.send(updatedPost);
  } catch (error) {
    throw error;
  }
};

const DeletePost = async (req, res) => {
  try {
    let postId = parseInt(req.params.postId);
    await post.destroy({ where: postId });
    res.send({ message: `Deleted Post with an id of ${postId}` });
  } catch (error) {
    throw error;
  }
};

module.exports = {
  GetAllPost,
  CreatePost,
  UpdatePost,
  DeletePost,
};
