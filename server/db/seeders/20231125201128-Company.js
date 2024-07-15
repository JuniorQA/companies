const bcrypt = require('bcrypt');
const { Company } = require('../models');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await Company.bulkCreate([
      {
        title: 'BIM Company',
        address: 'ул. Пушкина 16',
      },
      {
        title: 'BAM Company',
        address: 'ул. Колотушкина 13',
      },
      {
        title: 'BOM Company',
        address: 'ул. Иванова 10',
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await Company.destroy({ truncate: { cascade: true } });
  },
};
