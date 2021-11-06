import { gql, useQuery } from "@apollo/client";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { MovieListStyle } from "./MovieListStyles";

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

const MovieList: React.FunctionComponent = () => {
  const { loading, error, data } = useQuery(ALL_MOVIES_QUERY, {
    notifyOnNetworkStatusChange: true,
  });

  if (error) return <ErrorMessage message="Error loading movies." />;
  if (loading) return <div>Loading</div>;

  const { movies } = data;

  return (
    <MovieListStyle>
      <ul>
        {movies.map((movie, index) => (
          <li key={movie.name}>
            <a href={movie.imdb_url} target="_blank">
              <span>
                {index + 1}. <span>{movie.name}</span>
              </span>
              <img src={movie.cover_image} width="300" alt="Cover image" />
              <p>{movie.description}</p>
            </a>
          </li>
        ))}
      </ul>
    </MovieListStyle>
  );
};

export default MovieList;
