const { RESTDataSource } = require('apollo-datasource-rest');

class PokeCardAPI extends RESTDataSource {
  constructor() {
    super();
    // this.baseURL = 'https://api.pokemontcg.io/v2/';
  }

  async getPokeCard(id) {
    return await this.get(`https://api.pokemontcg.io/v2/cards/${id}`);
  }
}

module.exports = PokeCardAPI;