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
      { // Vino Blanco
        picture: '/img/ekam-essencia.jpg',
        name: 'Aura Vendimia Nocturna Verdejo 2018',
        slug: 'aura-vendimia-nocturna-verdejo-2018',
        price: 7.9,
        category: 'white-wine'
      },
      { // Vino Blanco
        picture: '/img/ekam-essencia.jpg',
        name: 'Ekam Essència 2018',
        slug: 'ekam-essencia-2018',
        price: 44.99,
        category: 'white-wine'
      },
      { // Vino Blanco
        picture: '/img/don-pedro-de-soutomaior-albari.jpg',
        name: 'D. Pedro de Soutomaior 2020',
        slug: 'd-predro-de-soutomaior-2020',
        price: 51.00,
        category: 'white-wine'
      },
      { // Vino Blanco
        picture: '/img/eulogio-pomares-albari.jpg',
        name: 'Eulogio Pomares Maceración con Pieles Albariño 2019',
        slug: 'eulogio-pomares-maceracion-con-pieles-albarino-2019',
        price: 39.60,
        category: 'white-wine'
      },
      { // Vino Tinto
        picture: '/img/aurus-tinto-con-crianza.jpg',
        name: 'Aurus 2000',
        slug: 'aurus-2000',
        price: 100.00,
        category: 'red-wine'
      },
      { // Vino Tinto
        picture: '/img/moncerbal-tinto-con-crianza.jpg',
        name: 'Moncerbal 2006',
        slug: 'moncerbal-2006',
        price: 126.00,
        category: 'red-wine'
      },
      { // Vino Tinto
        picture: '/img/botella-sonsierra-reserva-2014.jpg',
        name: 'Sonsierra Reserva 2014',
        slug: 'soncierra-reserva-2014',
        price: 6.65,
        category: 'red-wine'
      },
      { // Champagne
        picture: '/img/champagne-gonet-m_deville-premier-cru-cuv_e-tradition.jpg',
        name: 'Champagne Gonet-Médeville PREMIER CRU CUVÉE',
        slug: 'champagne-gonet-medeville-premier-cru-cuvee',
        price: 31.95,
        category: 'champagne'
      },
      {
        picture: '/img/champagne-drappier-carte-dor.jpg',
        name: 'Champagne GDrappier Carte Dor',
        slug: 'champage-gdrappier-carte-dor',
        price: 32.00,
        category: 'champagne'
      },
      { // Rosado
        picture: '/img/ochoa-la_grima-rosa-2018.jpg',
        name: 'Ochoa Lágrima Rosa 2018',
        slug: 'ochoa-lagrima-rosa-2018',
        price: 6.40,
        category: 'rose-wine'
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
