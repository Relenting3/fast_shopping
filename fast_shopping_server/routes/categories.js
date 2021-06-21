const express = require('express');
const CategoriesService = require('../services/categories');

function categoriesApi(app) {
  const router = express.Router();
  app.use('/api/categories', router);

  const categoriesService = new CategoriesService();

  router.get('/get_all', async function(req, res, next) {
    try {
      const categories = await categoriesService.getCategories();
      res.status(200).json({
        data: categories,
        message: 'Categories listed'
      });
      console.log('Categories retrieved')
    } catch (err) {
      next(err);
    }
  });
}

module.exports = categoriesApi;
