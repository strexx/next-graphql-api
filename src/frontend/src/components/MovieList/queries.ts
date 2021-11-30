import { gql } from "@apollo/client";

export const ALL_MOVIES_QUERY = gql`
  query Movies {
    movies {
      name
      description
      imdb_url
      cover_image
    }
  }
`;
