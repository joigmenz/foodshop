const Sequelize = require('sequelize');
const Product = require('../models').products;

module.exports = {
    list(_, res) {
        return Product.findAll({})
            .then(product => res.status(200).send(product))
            .catch(error => res.status(400).send(error))
    }
}