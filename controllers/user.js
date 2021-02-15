const User = require('../models').user;
const service = require('../services/services');
const Order = require('../models').order;
const OrderProduct = require('../models').OrderProduct;

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
        const order = await Order.create({ userId: req.userId })       
        Object.values(req.body.products).forEach( async product => {
            await OrderProduct.create({
                orderId: order.id,
                productId: product.id,
                qty: product.qty
            })
            console.log(product.id)
        });
        //console.log(products)
        return res.send({
            message: "Success."
        });
    }
}