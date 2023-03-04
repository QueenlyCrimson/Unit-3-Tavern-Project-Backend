const {user} = require('../models')

console.log(user)

const getAllUser=async(req,res)=>{
  try {
    const data = await user.findAll()
    res.send(data)
  } catch (error) {
    throw error
  }
}

module.exports ={
  getAllUser
}