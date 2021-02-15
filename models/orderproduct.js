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
    }
  }, {
    sequelize,
    modelName: 'OrderProduct',
    tableName: 'order_product'
  });

  OrderProduct.associate = function(models) {    
    //OrderProduct.belongsTo(models.order, { foreignKey: 'order_id' }),
    //OrderProduct.belongsTo(models.products, { foreignKey: 'product_id' })    
  }

  return OrderProduct;
};