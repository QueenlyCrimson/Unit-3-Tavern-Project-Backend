'use strict';

const { sequelize } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.addColumn('users','profilePic',{
    type:Sequelize.STRING,
    allowNull: true
   })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('users','profilePic')
  }
};
