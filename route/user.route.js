module.exports = function(app) {
    const user = require('../controllers/user');

    app.get('/api/users', user.list);
}