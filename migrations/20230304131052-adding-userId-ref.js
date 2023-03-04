'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
await queryInterface.changeColumn('posts','userId',{
  type:Sequelize.INTEGER,
      allowNull:false,
      onDelete:'CASCADE',
      references:{
        model:'users',
        key:'id'
      }
})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.changeColumn('posts','userId',{
      type:Sequelize.INTEGER,
      allowNull:false
    })
  }
};
