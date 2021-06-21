import { gql } from "@apollo/client";

export const ADD_MOVIE = gql`
  mutation AddMovie(
    $name: String!
    $description: String
    $imdb_url: String!
    $cover_image: String!
  ) {
    addMovie(
      name: $name
      description: $description
      imdb_url: $imdb_url
      cover_image: $cover_image
    )
  }
`;
