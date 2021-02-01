module.exports = function(app) {
    const user = require('../controllers/user');

    app.get('/api/users', user.list);
    app.post('/api/users', user.create);
    app.post('/api/login', user.login);
    app.post('/api/logout', user.logout);
}