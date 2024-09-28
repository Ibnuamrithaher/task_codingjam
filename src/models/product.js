'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'user' // Optional: You can use 'user' as an alias to retrieve the user who owns the product
      });
    }
  }
  Product.init({
    name: DataTypes.STRING,
    price: DataTypes.FLOAT,
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users', // Pastikan nama tabel sesuai dengan yang ada di database
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};