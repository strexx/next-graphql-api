const { gql } = require("apollo-server");

module.exports = gql`
  type Movie {
    name: String
    description: String
    imdb_url: String
    cover_image: String
  }

  type Query {
    movies: [Movie]
  }

  type Mutation {
    addMovie(
      name: String!
      description: String
      imdb_url: String!
      cover_image: String!
    ): String!
  }
`;
