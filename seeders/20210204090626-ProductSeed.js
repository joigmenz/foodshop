'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('products', [
      {
        picture: '/img/ekam-essencia.jpg',
        name: 'Ekam Essència 2018',
        price: 44.99
      },
      {
        picture: '/img/don-pedro-de-soutomaior-albari.jpg',
        name: 'D. Pedro de Soutomaior 2020',
        price: 51.00
      },
      {
        picture: '/img/eulogio-pomares-albari.jpg',
        name: 'Eulogio Pomares Maceración con Pieles Albariño 2019',
        price: 39.60
      },
      {
        picture: '/img/aurus-tinto-con-crianza.jpg',
        name: 'Aurus 2000',
        price: 100.00
      },
      {
        picture: '/img/moncerbal-tinto-con-crianza.jpg',
        name: 'Moncerbal 2006',
        price: 126.00
      }
  ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('products', null, {});
  }
};
