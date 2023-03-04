'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.changeColumn('comments','postId',{
       type:Sequelize.INTEGER,
         allowNull:false,
         onDelete:'CASCADE',
         references:{
           model:'posts',
           key:'id'
         }
      })
     },
  async down (queryInterface, Sequelize) {
   await queryInterface.changeColumn('comments','postId',{
    type:Sequelize.STRING,
    allowNull:false
   })
  }
};
