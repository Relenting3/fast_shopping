const express = require('express');
const app = express();

const { config } = require('./config/index');
const categoriesApi = require('./routes/categories.js');
const productsApi = require('./routes/products.js');
const ordersApi = require('./routes/orders.js');
const cors = require('cors')

// body parser
app.use(express.json());

//cors
app.use(cors())


// routes
categoriesApi(app);
productsApi(app);
ordersApi(app);

app.listen(config.port, function() {
  console.log(`Server started at http://localhost:${config.port}`);
});
