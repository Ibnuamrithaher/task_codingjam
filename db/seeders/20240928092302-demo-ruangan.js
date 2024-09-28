'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Insert data ke dalam tabel Ruangan
    return queryInterface.bulkInsert('Ruangans', [
      {
        name: 'Ruang A',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Ruang B',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Ruang C',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Ruang D',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Ruang E',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Ruang F',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Ruang G',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Ruangans', null, {});
  }
};
