'use strict'
const falso = require('@ngneat/falso')
const comments = [...Array(50)].map(() => ({
  name: falso.randFullName(),
  content: falso.randPhrase({ charCount: 50 }),
  userId: falso.randNumber({min:1, max:50}),
  postId: falso.randNumber({min:1, max:50}),
  likeCount: falso.randNumber({min:1, max:50}),
  createdAt: new Date(),
  updatedAt: new Date()
}))
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('comments', comments)
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('comments')
  }
}
