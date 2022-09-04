const resolvers = {
  Query: {
    // returns an array of PokemonCards that will be used
    // pokeCard: (_, { id }, { dataSources}) => {
    //   return dataSources.pokeCardAPI.getPokeCards(id);
    // },
    pokeCard: (_, { id }, { dataSources }) => {
      const res = dataSources.pokeCardAPI.getPokeCard(id);
      console.log('res', res);
      return res;
    },
  },
  PokemonCard: {

  }
};

module.exports = resolvers;