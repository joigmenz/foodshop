'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Order.init({
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'user_id'
    } 
  }, {
    sequelize,
    modelName: 'order',
  });

  
  Order.associate = function(models) {
    //Order.hasOne(models.user, { foreignKey: 'user_id' })
  }

  return Order;
};