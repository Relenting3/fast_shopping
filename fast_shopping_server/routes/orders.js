const express = require('express');
const { validateOrder } = require('../middleware/validationHandler/orders');
const OrdersService = require('../services/orders');
const { getOrderPrice } = require('../utils/scripts');
const ProductsService = require('../services/products');

function ordersApi(app) {
  const router = express.Router();
  app.use('/api/orders', router);

  const ordersService = new OrdersService();
  const productsService = new ProductsService();

  router.post('/request', async function( req, res, next ) {
    const {body} = req
    try {
      let productsList = await productsService.getProducts( {projection: {_id:1, price: 1}} );
      for(const values of productsList) (values._id = values._id.toString())
      const hasError = await validateOrder(body, productsList)
      if(hasError) return res.status(500).json({msg: hasError})
      const {cli, products, qty} = body, {name, id, addr, phn, eml} = cli
      let price = getOrderPrice(products, productsList, qty)
      const bodyOrder = {
        cli: {name, id, addr, phn, eml},
        products,
        qty,
        price
      }
      const orderCreatedId = await ordersService.createOrder(bodyOrder)
      res.status(201).json({
        data: orderCreatedId,
        message: 'Order created'
      });
      console.log('Order created')
    } catch (err) {
      next(err);
    }
  });
}

module.exports = ordersApi;