'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      user.hasMany(models.post, {
        foreignKey:'userId',
        as:'posts'
      })
      user.hasMany(models.comment,{
        foreignKey:'userId',
        as:'comments'
      })
    }
  }
  user.init({
    email: {
      type:DataTypes.STRING,
      allowNull: false},
    password: {
      type:DataTypes.STRING,
      allowNull: false},
    userName: {
      type:DataTypes.STRING,
      allowNull: false},
    name: {
      type:DataTypes.STRING,
      allowNull: false}
  }, {
    sequelize,
    modelName: 'user',
    tabelName:'users'
  });
  return user;
};