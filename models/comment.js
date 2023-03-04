'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      comment.belongsTo(models.user,{
        foreignKey:'userId',
        as:'comments'
      })
      comment.belongsTo(models.post,{
        foreignKey:'postId',
        as:'comment-posts'
      })
    }
  }
  comment.init({
    name: {
      type:DataTypes.STRING,
      allowNull: false},
    content: {
      type:DataTypes.STRING,
      allowNull: false},
    userId: {
      type:DataTypes.INTEGER,
      allowNull:false,
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
      }},
    likeCount: {
      type:DataTypes.INTEGER,
      allowNull: true}
  }, {
    sequelize,
    modelName: 'comment',
    tableName:'comments'
  });
  return comment;
};