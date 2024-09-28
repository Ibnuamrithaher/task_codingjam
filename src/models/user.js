'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Relasi ke Ruangan
      User.belongsTo(models.Ruangan, {
        foreignKey: 'ruanganId', // Nama kolom foreign key di tabel Users
        as: 'ruangan' // Alias untuk relasi
      });

      User.hasMany(models.Product, {
        foreignKey: 'userId',
        as: 'products' // Optional: Alias to refer to the user's products
      });
    }
  }
  User.init({
    name: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    ruanganId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Ruangans', // Nama tabel yang menjadi referensi
        key: 'id',         // Kolom yang menjadi referensi di tabel Ruangans
      }
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};