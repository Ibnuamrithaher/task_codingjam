'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ruangan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Relasi ke User
      Ruangan.hasMany(models.User, {
        foreignKey: 'ruanganId', // Nama kolom foreign key di tabel Users
        as: 'users' // Alias untuk relasi
      });
    }
  }
  Ruangan.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Ruangan',
  });
  return Ruangan;
};