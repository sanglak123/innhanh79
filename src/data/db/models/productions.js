'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Productions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Productions.init({
    name: DataTypes.STRING,
    size: DataTypes.STRING,
    quantative: DataTypes.STRING,
    type_paper: DataTypes.STRING,
    tag: DataTypes.STRING,
    idCate: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Productions',
  });
  return Productions;
};