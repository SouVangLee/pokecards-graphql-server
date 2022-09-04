const resolvers = {
  Query: {
    // returns an array of Pokemon Cards by name
    pokeCards: async (_, { name }, { dataSources}) => {
      const { data } = await dataSources.pokeCardAPI.getPokeCards(name);
      return data.map(pokeCard => {
        return {
          id: pokeCard.id,
          name: pokeCard.name,
          images : {
            small: pokeCard.images.small,
            large: pokeCard.images.large,
          },
        };
      });
    },

    // get a single Pokemon Card by ID
    pokeCard: async (_, { id }, { dataSources }) => {
      const { data }= await dataSources.pokeCardAPI.getPokeCard(id);
      return {
        id: data.id,
        name: data.name,
        images: data.images,
      }
    },
  },
};

module.exports = resolvers;