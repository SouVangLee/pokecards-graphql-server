import { gql } from 'apollo-server';

const typeDefs = gql`
  type Query {
    "Query to get an array of pokemon cards"
    pokedex: [PokemonCard]
  }

  "A pokemon card"
  type PokemonCard {
    "The id of the pokemon card"
    id: String!
    "The name of the pokemon card"
    name: String!
    "An object containg the image urls"
    images: PokemonImages!
  }

  type PokemonImages {
    "The url to the small image of the pokemon card"
    small: String!
    "The url to the big image of the pokemon card"
    large: String!
  }
`;