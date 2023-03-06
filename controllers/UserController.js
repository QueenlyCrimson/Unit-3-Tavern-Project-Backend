const { user } = require("../models");

const GetAllUser = async (req, res) => {
  try {
    const data = await user.findAll();
    res.send(data);
  } catch (error) {
    throw error;
  }
};

const GetUser = async (req, res) => {
  try {
    const id = parseInt(req.params.userId);
    let data = await user.findByPk({ where: { userId: id } });
    res.send(data);
  } catch (error) {
    throw error;
  }
};

const CreateUser = async (req, res) => {
  try {
    let userBody = {
      ...req.body,
    };
    let newUser = await user.create(userBody);
    res.send(newUser);
  } catch (error) {
    throw error;
  }
};

const UpdateUser = async (req, res) => {
  try {
    const id = parseInt(req.params.userId);
    let updateUser = await user.update(req.body, {
      where: { userId: id },
      returning: true,
    });
    res.send(updateUser);
  } catch (error) {
    throw error;
  }
};

const DeleteUser = async (req, res) => {
  try {
    let id = parseInt(req.params.userId);
    await user.destroy({ where: { userId: id } });
    res.send({ message: `Deleted user with an id of ${id}` });
  } catch (error) {
    throw error;
  }
};

module.exports = {
  GetAllUser,
  GetUser,
  CreateUser,
  UpdateUser,
  DeleteUser,
};
