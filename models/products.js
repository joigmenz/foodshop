'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  products.init({
    picture: DataTypes.STRING,
    name: DataTypes.STRING,
    slug: DataTypes.STRING,
    price: DataTypes.FLOAT,
    category: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'products',
  });

  products.associate = function(models) {
    products.hasMany(models.OrderProduct, { as: 'order_product' })
  }

  return products;
};