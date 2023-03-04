'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  post.init({
    userName: {
      type:DataTypes.STRING,
      allowNull:false
    },
    content: {
      type:DataTypes.TEXT,
      allowNull:false
    },
    img: {
      type:DataTypes.STRING,
      allowNull:true
    },
    likeCount: {
      type:DataTypes.INTEGER,
      allowNull:true
    },
    userId: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
  }, {
    sequelize,
    modelName: 'post',
    tableName:'posts'
  });
  return post;
};