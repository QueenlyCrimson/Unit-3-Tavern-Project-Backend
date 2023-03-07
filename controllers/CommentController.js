const { Comment } = require("../models");

const CreateComment = async (req, res) => {
  try {
    let data = await Comment.create(req.body)
    res.send(data)
  } catch (error) {
    throw error;
  }
};

const GetAllComment = async (req, res) => {
  try {
    let data = await Comment.findAll()
    res.send(data)
  } catch (error) {
    throw error;
  }
};

const GetCommentById = async(req,res)=>{
  try {
    const id = req.params.comment_id
    let data = await Comment.findByPk(id)
    res.send(data)
  } catch (error) {
    
  }
}

const UpdateComment = async (req, res) => {
  try {
    let id = req.params.comment_id
    let updatedComment = req.body
    const data = await Comment.update({
      name:updatedComment.name,
      content:updatedComment.content,
      userId:updatedComment.userId,
      postId:updatedComment.postId
    },{where:{id:id}})
    res.send(data)
  } catch (error) {
    throw error;
  }
};

const DestroyComment = async (req, res) => {
  try {
    let id = req.params.comment_id
    let data = await Comment.destroy({where:{id:id}})
    res.send(`Deleted Comment with ID of ${id}`)
  } catch (error) {
    throw error;
  }
};

module.exports = {
  CreateComment,
  GetAllComment,
  UpdateComment,
  DestroyComment,
  GetCommentById
};
