const { comment } = require("../models");

const CreateComment = async (req, res) => {
  try {
    let data = await comment.create(req.body)
    res.send(data)
  } catch (error) {
    throw error;
  }
};

const GetAllComment = async (req, res) => {
  try {
    let data = await comment.findAll()
    res.send(data)
  } catch (error) {
    throw error;
  }
};

const GetCommentById = async(req,res)=>{
  try {
    const id = req.params.comment_id
    let data = await comment.findByPk(id)
    res.send(data)
  } catch (error) {
    
  }
}

const UpdateComment = async (req, res) => {
  try {
  } catch (error) {
    throw error;
  }
};

const DestroyComment = async (req, res) => {
  try {
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
