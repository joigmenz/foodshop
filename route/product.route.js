module.exports = function(app) {
    const products = require('../controllers/product');

    app.get('/api/products/:slug', products.find);
    app.get('/api/products', products.list);
    app.get('/api/e-commerce/low-cost', products.lowCost);
    app.get('/api/products/categories/:slug', products.categories);    

}