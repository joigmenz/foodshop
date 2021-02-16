const User = require('../models').user;
const service = require('../services/services');
const Order = require('../models').order;
const OrderProduct = require('../models').OrderProduct;
const Suggestion = require('../models').Suggestion
const db = require('../models/index')

module.exports = {
    create(req, res) {
        User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        }).then(user => {
            res.send(user);
        }).catch(error => {
            res.send(error);
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
            }
        })
        .then(user => {   
            console.log(user)         
            if(!user) {
                res.json({
                    status: "401",
                    message: "The username you entered doesn't belong to an account."
                }) 
                return;
            }            
            if(!user.authenticate(req.body.password)){
                res.json({
                    status: "401",
                    message: "Sorry, your password was incorrect."
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
    checkout: async (req, res) => { 
        let t;
        try {
            t = await db.sequelize.transaction();
            const order = await Order.create({ userId: req.userId }, { transaction:t })       
            Object.values(req.body.products).forEach( async product => {
            await OrderProduct.create({
                    orderId: order.id,
                    productId: product.id,
                    qty: product.qty,
                    price: product.price
                })            
            });
            await t.commit();
            return res.status(200).send({ message: 'Success' });
        } catch (error) {
            await t.rollback();
            return res.status(503).send({ message: 'error' });
        } 
    },
    suggestion: async (req, res) => {        
        await Suggestion.create({
            userId: req.userId,
            message: req.body.message
        })
        return res.status(200).send({ message: 'Success' })
    }
}