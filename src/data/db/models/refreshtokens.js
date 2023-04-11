'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RefreshTokens extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  RefreshTokens.init({
    idUser: DataTypes.INTEGER,
    refresh_token: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'RefreshTokens',
  });
  return RefreshTokens;
};