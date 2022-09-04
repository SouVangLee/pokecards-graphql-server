const { RESTDataSource } = require('apollo-datasource-rest');

class PokeCardAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://api.pokemontcg.io/v2/';
  }

  getPokeCards(name) {
    return this.get(`cards/?q=name:${name}`);
  }

  getPokeCard(id) {
    return this.get(`cards/${id}`);
  }
}

module.exports = PokeCardAPI;