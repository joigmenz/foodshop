'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OrderProduct extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  OrderProduct.init({
    orderId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'order_id'
    }, 
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'product_id'
    },
    qty: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    price: {
      type: DataTypes.FLOAT(11,2)
    }
  }, {
    sequelize,
    modelName: 'OrderProduct',
    tableName: 'order_product'
  });

  return OrderProduct;
};