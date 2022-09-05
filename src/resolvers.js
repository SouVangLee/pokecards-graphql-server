const resolvers = {
  Query: {
    // returns an array of Pokemon Cards by name
    pokeCardsList: async (_, { name }, { dataSources}) => {
      const { data } = await dataSources.pokeCardAPI.getPokeCards(name);
      try {
        return data.map(card => {
          return {
            id: card.id,
            name: card.name,
            images : {
              small: card.images.small,
              large: card.images.large,
            },
            set: {
              id: card.set.id,
              name: card.set.name,
              series: card.set.series,
              releaseDate: card.set.releaseDate,
              printedTotal: card.set.printedTotal,
            },
            rarity: card.rarity,
          };
        });
      } catch (err) {
        return err;
      }
    },

    pokeCard: async (_, { id }, { dataSources }) => {
      const { data } = await dataSources.pokeCardAPI.getPokeCard(id);
      return {
        id: data.id,
        name: data.name,
        images: data.images,
        set: {
          id: data.set.id,
          name: data.set.name,
          series: data.set.series,
          releaseDate: data.set.releaseDate,
          printedTotal: data.set.printedTotal,
        },
        rarity: data.rarity,
      }
    },
  },
};

module.exports = resolvers;