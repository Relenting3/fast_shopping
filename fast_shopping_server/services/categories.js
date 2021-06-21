const MongoLib = require('../lib/mongo');

class CategoriesService {
  constructor() {
    this.collection = 'categories';
    this.mongoDB = new MongoLib();
  }

  async getCategories() {
    const categories = await this.mongoDB.getAll(this.collection);
    return categories || [];
  }

  async createCategory({ category }) {
    const categoryId = await this.mongoDB.create(this.collection, category);
    return categoryId;
  }

  async createCategories({ categories }) {
    const createCategoriesId = await this.mongoDB.createMany(this.collection, categories);
    return createCategoriesId;
  }
}

module.exports = CategoriesService;
