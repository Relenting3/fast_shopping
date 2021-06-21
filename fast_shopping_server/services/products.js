const MongoLib = require('../lib/mongo');

class ProductsService {
  constructor() {
    this.collection = 'products';
    this.mongoDB = new MongoLib();
  }

  async getProducts(query) {
    const products = await this.mongoDB.getAll(this.collection, query);
    return products || [];
  }

  async getProduct({ productId }) {
    const product = await this.mongoDB.get(this.collection, productId);
    return product || {};
  }

  async createProduct({ product }) {
    const productId = await this.mongoDB.create(this.collection, product);
    return productId;
  }

  async createProducts({ products }) {
    const createProductsId = await this.mongoDB.createMany(this.collection, products);
    return createProductsId;
  }
}

module.exports = ProductsService;
