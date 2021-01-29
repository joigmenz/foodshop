const Sequelize = require('sequelize');
const User = require('../models').user;

module.exports = {
    create(req, res) {
        User.create({
            email: req.body.email,
            password: req.body.password
        }).then(user => {
            res.send(user);
        }).catch(error => {
            res.status(500).send(error);
        });
    },
    list(_, res) {
        return User.findAll({})
            .then(user => res.status(200).send(user))
            .catch(error => res.status(400).send(error))
    }
}