const User = require('../models').user;
const service = require('../services/services')

module.exports = {
    create(req, res) {
        User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        }).then(user => {
            res.send(user);
        }).catch(error => {
            res.status(200).send(error);
        });
    },
    list(_, res) {
        return User.findAll({})
            .then(user => res.status(200).send(user))
            .catch(error => res.status(400).send(error))
    },
    login(req, res) {
        return User.findOne({
            where: {
                email: req.body.email,
                password: req.body.password
            }
        })
        .then(user => {
            if(!user) {
                res.json({
                    status: "401",
                    message: "Either username or password is incorrect."
                }) 
                return;
            }
            res.json({ 
                status: "200",
                token: service.createToken(user),
                name: user.name
            }
            )})
        .catch(error => res.send(error))
    },
    logout(_, res) {
        return res.json({
            message: "Unauthenticated."
        });
    }
}