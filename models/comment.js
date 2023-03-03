'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Comment.init({
    name: {
      type:DataTypes.STRING,
      allowNull: false},
    content: {
      type:DataTypes.STRING,
      allowNull: false},
    userId: {
      type:DataTypes.INTEGER,
      allowNull: false},
    postId: {
      type:DataTypes.INTEGER,
      allowNull: false},
    likeCount: {
      type:DataTypes.INTEGER,
      allowNull: TRUE}
  }, {
    sequelize,
    modelName: 'Comment',
    tableName:'comments'
  });
  return Comment;
};