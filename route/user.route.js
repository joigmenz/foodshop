module.exports = function(app) {
    const User = require('../controllers/user');

    var jwt = require('jwt-simple');
    var config = require('../app/config');

    const Middleware = function(req, res, next) {
        if(!req.headers.authorization) {
            return res.status(403)
                      .send({message: "Tu petición no tiene cabecera de autorización"});
        }
        
        var token = req.headers.authorization.split(" ")[1];
        var payload = jwt.decode(token, config.TOKEN_SECRET);
        req.userId = payload.sub
        next();
    }

    app.post('/api/checkout', Middleware, User.checkout)
    app.get('/api/users', User.list);
    app.post('/api/users', User.create);
    app.post('/api/login', User.login);
}