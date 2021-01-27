module.exports = function(app) {
    const products = require('../controllers/product');

    app.get('/api/products', products.list);
}