'use strict';
const {
  Model
} = require('sequelize');
const bcrypt = require('bcrypt');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    name: {
      type: DataTypes.STRING,    
      allowNull: false,  
      validate: {
        notNull: {
          msg: 'The name is required'
        },
        len: {
          args: [4, 16],
          msg: "String length is not in this range."
        },
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        msg: 'This email is already taken.'
      },
      validate: {
        notNull: {
          msg: 'The email is required'
        },
        isEmail: {
          msg: 'The email not is valid'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'The password is required'
        },
        notEmpty: {
          args: [true],
          msg: 'The password is required'
        },
        len: {
          args: [6],
          msg: "Minimum password length is 6 characters"
        },
      },      
    },
  }, {
    hooks: {
      beforeCreate: async (user) => 
        (user.password = await bcrypt.hash(user.password, 10))
    },
    sequelize,
    modelName: 'user'
  });

  User.prototype.authenticate = function(password) {
    return bcrypt.compareSync(password, this.password);
  }

  
  User.associate = function(models) {
    User.hasMany(models.order, { as: 'orders'})
  }

  return User;
};