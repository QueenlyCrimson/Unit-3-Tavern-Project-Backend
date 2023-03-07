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
      Comment.belongsTo(models.User,{
        foreignKey:'userId',
        as:'comments'
      })
      Comment.belongsTo(models.Post,{
        foreignKey:'postId',
        as:'comments-posts'
      })
    }
  }
  Comment.init({
    name: {
      allowNull: false,
      type:DataTypes.STRING},
    content: {
      allowNull: false,
      type:DataTypes.STRING},
    userId:{
      type:DataTypes.INTEGER,
      allowNull: false,
      onDelete:'CASCADE',
      references:{
        model:'users',
        key:'id'
      }
    },
    postId: {
      type:DataTypes.INTEGER,
      allowNull:false,
      onDelete:'CASCADE',
      references:{
        model:'posts',
        key:'id'
      }
     },
    likeCount: {
      allowNull: true,
      type:DataTypes.INTEGER}
  }, {
    sequelize,
    modelName: 'Comment',
    tableName:'comments'
  });
  return Comment;
};