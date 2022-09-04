const { RESTDataSource } = require('apollo-datasource-rest');

class PokeCardAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://api.pokemontcg.io/v2/';
  }

  getPokeCards(name) {
    return this.get(`cards/?q=name:${name}&select=id,name,images,set`);
  }

  getPokeCard(id) {
    return this.get(`cards/${id}?select=id,name,images,set`);
  }
}

module.exports = PokeCardAPI;