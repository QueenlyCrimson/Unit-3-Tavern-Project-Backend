'use strict'
const falso = require('@ngneat/falso')
const users = [...Array(50)].map(() => ({
  email: falso.randEmail(),
  passwordDigest: falso.randPassword(),
  userName: falso.randUserName(),
  name: falso.randFullName(),
  createdAt: new Date(),
  updatedAt: new Date()
}))
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', users)
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users')
  }
}
