const {User} = require('../models')

const getAllUser=async(req,res)=>{
  try {
    const data = await User.findAll()
    res.send(data)
  } catch (error) {
    throw error
  }
}

module.exports ={
  getAllUser
}