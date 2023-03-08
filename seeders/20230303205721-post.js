'use strict'
const falso = require('@ngneat/falso')
const posts = [...Array(50)].map(() => ({
  userName: falso.randUserName(),
  content: falso.randParagraph({ charCount: 100 }),
  img: falso.randImg(),
<<<<<<< HEAD
  likeCount: falso.randNumber({ min: 0, max: 50 }),
  userId: falso.randNumber({ min: 1, max: 50 }),
=======
  likeCount: falso.randNumber({min:0, max:50}),
  userId:falso.randNumber({min:1, max:50}),
>>>>>>> 3b45cb0c2783c912288f96619bd24d4a98612400
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
