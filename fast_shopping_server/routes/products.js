const express = require('express');
const ProductsService = require('../services/products');

function productsApi(app) {
  const router = express.Router();
  app.use('/api/products', router);

  const productsService = new ProductsService();

  router.get('/get_all', async function(req, res, next) {
    try {
      const products = await productsService.getProducts();
      res.status(200).json({
        data: products,
        message: 'Products listed'
      });
      console.log('Products retrieved')
    } catch (err) {
      next(err);
    }
  });
}

module.exports = productsApi;
