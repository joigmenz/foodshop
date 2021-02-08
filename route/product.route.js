module.exports = function(app) {
    const products = require('../controllers/product');

    app.get('/api/products', products.list);
    app.get('/api/products/categories/:slug', products.categories);
}