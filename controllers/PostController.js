const {post} = require('../models')

console.log(post)

const getAllPost = async(req,res)=>{
  try {
    const data = await post.findAll()
    res.send(data)
  } catch (error) {
    
  }
}

module.exports={
getAllPost
}