const Sequelize = require('sequelize');
const User = require('../models').user;

module.exports = {
    list(_, res) {
        return User.findAll({})
            .then(user => res.status(200).send(user))
            .catch(error => res.status(400).send(error))
    }
}