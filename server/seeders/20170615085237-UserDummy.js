'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Users', [{
      firstname: 'Daniel',
      lastname: 'Agus',
      email: 'aguspermadi94@gmail.com',
      password: 'daniel',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      firstname: 'Anthony',
      lastname: 'Juan',
      email: 'juan@gmail.com',
      password: 'juan',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      firstname: 'Oscar',
      lastname: 'Hermawan',
      email: 'oscar@gmail.com',
      password: 'oscar',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {})
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
