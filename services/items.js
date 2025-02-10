import Api from './api';

class ItemsService {
  constructor() {
    const baseURL = 'http://localhost:3000';
    this.api = new Api(baseURL);
  }

  async fetchItems(params = {}) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([
          { id: 1, name: 'Item 1' },
          { id: 2, name: 'Item 2' },
          { id: 3, name: 'Item 3' },
        ]);
      }, 1000);
    });
    // return await this.api.get('/items', params);
  }

  async fetchItemById(id) {
    return await this.api.get(`/items/${id}`);
  }

  async createItem(data) {
    return await this.api.post('/items', data);
  }

  async updateItem(id, data) {
    return await this.api.put(`/items/${id}`, data);
  }

  async deleteItem(id) {
    return await this.api.del(`/items/${id}`);
  }
}

export default ItemsService;
