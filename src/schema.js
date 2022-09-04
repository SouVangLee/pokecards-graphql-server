const { gql } = require('apollo-server');

const schema = gql`
  type Query {
    "Query for an array of Pokemon Cards by providing a name"
    pokeCards(name: String): [PokemonCard]
    "Query to get a pokemon card by providing an id"
    pokeCard(id: ID!): PokemonCard!
  }

  "A pokemon card"
  type PokemonCard {
    "The id of the pokemon card"
    id: String!
    "The name of the pokemon card"
    name: String!
    "An object containg the image urls"
    images: PokemonImages!
    # "The set the pokemon card was released in"
    # set: SetDetails!
  }

  # type SetDetails {
  #   "The id of the set"
  #   id: String!
  #   "The name of the set the Pokemon Card was released in"
  #   name: String!
  #   "The name of the series the Pokemon Card was released in"
  #   series: String!
  #   "The date the Pokemon Card was released"
  #   releaseDate: String!
  #   # printedTotal: String!
  # }

  type PokemonImages {
    "The url to the small image of the pokemon card"
    small: String!
    "The url to the big image of the pokemon card"
    large: String!
  }
`;

module.exports = schema;