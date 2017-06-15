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
    return queryInterface.bulkInsert('Products', [{
      name: 'Iphone 5S',
      description: 'Lorem Ipsum Dolor Sit Amet',
      picture_url: 'https://www.o2.co.uk/shop/homepage/images/shop15/brand/apple/iphone-5s/iphone5s-gallery-img-1.jpg',
      stock: 20,
      price: '4000000',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Mac Book Pro',
      description: 'Lorem Ipsum Dolor Sit Amet',
      picture_url: 'https://support.apple.com/content/dam/edam/applecare/images/en_US/macbookpro/psp-mini-hero-macbook-pro-family-spgray-sierra_2x.png',
      stock: 25,
      price: '13000000',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Sepatu Adidas V Racer Classic',
      description: 'Lorem Ipsum Dolor Sit Amet',
      picture_url: 'https://os.alhakimsites.com/wp/wp-content/uploads/2016/08/35878186_364c59ae-e003-40af-bcdf-ffe5b0f88adb.jpg',
      stock: 60,
      price: '800000',
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
