const Sequelize = require('sequelize');
const Product = require('../models').products;

module.exports = {
    find(req, res) {
        return Product.findOne({
                where: {
                    slug: req.params.slug
                }
            })
            .then(product => res.status(200).send(product))
            .catch(error => res.status(400).send(error))
    },
    list(_, res) {
        return Product.findAll({})
            .then(product => res.status(200).send(product))
            .catch(error => res.status(400).send(error))
    },
    categories(req, res) {
        return Product.findAndCountAll({
            where: {
                category: req.params.slug
            }
        })
        .then(products => res.status(200).send(products.rows))
        .catch(error => res.status(400).send(console.error()))
    }
}