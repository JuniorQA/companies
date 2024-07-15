'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Company extends Model {
    static associate() {
      // define associations here
    }
  }
  Company.init(
    {
      title: {
        type: DataTypes.TEXT, // 'type' is used to define the data type
      },
      address: {
        type: DataTypes.TEXT, // 'type' is used to define the data type
      },
    },
    {
      sequelize,
      modelName: 'Company',
    }
  );
  return Company;
};
