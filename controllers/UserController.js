const { User } = require('../models')

const GetAllUser = async (req, res) => {
  try {
    const data = await User.findAll()
    res.send(data)
  } catch (error) {
    throw error
  }
}

const GetUser = async (req, res) => {
  try {
    const id = req.params.id
    let data = await User.findByPk(id)
    res.send(data)
  } catch (error) {
    throw error
  }
}

const GetUserByPassword = async (req, res) => {
  try {
    const password = req.params.passwordDigest
    console.log(password)
    let data = await User.findOne({ where: { passwordDigest: password } })
    res.send(data)
  } catch (error) {
    throw error
  }
}

const CreateUser = async (req, res) => {
  try {
    let userBody = {
      ...req.body
    }
    let newUser = await User.create(userBody)
    res.send(newUser)
  } catch (error) {
    throw error
  }
}

const UpdateUser = async (req, res) => {
  try {
    const id = parseInt(req.params.userId)
    let updateUser = await User.update(req.body, {
      where: { userId: id },
      returning: true
    })
    res.send(updateUser)
  } catch (error) {
    throw error
  }
}

const DeleteUser = async (req, res) => {
  try {
    let id = parseInt(req.params.userId)
    await User.destroy({ where: { userId: id } })
    res.send({ message: `Deleted user with an id of ${id}` })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetUserByPassword,
  GetAllUser,
  GetUser,
  CreateUser,
  UpdateUser,
  DeleteUser
}
