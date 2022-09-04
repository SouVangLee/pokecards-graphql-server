const { ApolloServer } = require('apollo-server');
const schema = require('./schema');
const resolvers = require('./resolvers');
const PokeCardAPI = require('./datasources/pokecard-api');

async function startApolloServer(typeDefs, resolvers) {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => {
      return {
        pokeCardAPI: new PokeCardAPI(),
      };
    },
  });

  const { url, port } = await server.listen({ port: process.env.PORT || 4000});
  console.log(`
  -------------------------------------
      Server is running
      Listening on port ${port}
      Query at ${url}
  -------------------------------------
  `);
}

startApolloServer(schema, resolvers);