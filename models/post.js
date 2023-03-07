'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Post.belongsTo(models.User,{
        foreignKey:'userId',

      })
      Post.hasMany(models.Comment,{
        foreignKey:'postId',
      })
    }
  }
  Post.init({
    userName: {
      allowNull: false,
      type:DataTypes.STRING},
    content: {
      allowNull: false,
      type:DataTypes.TEXT},
    img: {
      allowNull: true,
      type:DataTypes.TEXT},
    likeCount: {
      allowNull: true,
      type:DataTypes.INTEGER},
    userId:{
       type:DataTypes.INTEGER,
      allowNull: false,
      onDelete:'CASCADE',
       references:{
      model:'users',
      key:'id'
    }
  }
  }, {
    sequelize,
    modelName: 'Post',
    tableName:'posts'
  });
  return Post;
};