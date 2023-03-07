'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Post,{
        foreignKey:'userId',
      })
      User.hasMany(models.Comment,{
        foreignKey:'userId',
      })
    }
  }
  User.init({
    userName: {
      allowNull: false,
      type:DataTypes.STRING},
    name: {
      allowNull: false,
      type:DataTypes.STRING},
    email: {
      allowNull: false,
      type:DataTypes.STRING},
    passwordDigest:{
        type:DataTypes.STRING,
        allowNull:false
       },
    profilePic:{
        type:DataTypes.STRING,
        allowNull: true}
  }, {
    sequelize,
    modelName: 'User',
    tableName:'users'
  });
  return User;
};