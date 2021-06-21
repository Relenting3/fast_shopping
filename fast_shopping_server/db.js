//mongodb+srv://admin:<password>@cluster0.oylqd.mongodb.net/test
const { MongoClient } = require("mongodb");
const { config } = require('./config');
const { categoriesMock, productsMock } = require("./config/mocks");

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const DB_NAME = config.dbName;
const DB_HOST = config.dbHost
const MONGO_URI = `mongodb+srv://${USER}:${PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`;
const client = new MongoClient(MONGO_URI);

async function run() {
  try {
    await client.connect();
    const database = client.db(`${DB_NAME}`);
    //adding categories
    const categories = database.collection("categories");
    const options = { ordered: true }; // prevents additional documents to be inserted if one fails.
    console.log('Inserting categories....')
    let result = await categories.insertMany(categoriesMock, options);
    console.log(result.ops)
    let categoriesInserted = {}
    for(const values of (result.ops)){
      const {name, _id} = values
      categoriesInserted[name] = _id.toString()
    }
    //adding products.
    for(const product of productsMock) {
      let categoriesIds = []
      for(let values of product.categories) { categoriesIds.push( categoriesInserted[values]) }
      product.categories = categoriesIds
    }
    const products = database.collection("products")
    console.log('Inserting products....')
    result = await products.insertMany(productsMock,options)
    console.log(result.ops)
    console.log(`The documents were inserted`);
  } finally {
    await client.close();
  }
}
run().catch(console.dir);