'use strict'
const falso = require('@ngneat/falso')
const posts = [...Array(50)].map(() => ({
  userName: falso.randUserName(),
  content: falso.randParagraph({ charCount: 100 }),
  img: falso.randImg(),
  likeCount: falso.randNumber({min:0, max:50}),
  userId:falso.randNumber({min:1, max:50}),
  createdAt: new Date(),
  updatedAt: new Date()
}))
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('posts', posts)
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('posts')
  }
}
