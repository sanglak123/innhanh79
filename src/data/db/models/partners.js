'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Partners extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Partners.init({
    name: DataTypes.STRING,
    avatar: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Partners',
  });
  return Partners;
};