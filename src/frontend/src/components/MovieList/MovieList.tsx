import { FC } from "react";
import { useQuery } from "@apollo/client";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import {
  MovieListStyle,
  MovieListItemStyle,
  MovieLinkStyle,
} from "./MovieListStyles";
import { ALL_MOVIES_QUERY } from "./queries";

const MovieList: FC = () => {
  const { loading, error, data } = useQuery(ALL_MOVIES_QUERY);

  if (error) return <ErrorMessage message="Error loading movies." />;
  if (loading) return <div>Loading</div>;

  const { movies } = data;

  return (
    <MovieListStyle>
      {movies.map((movie, index) => (
        <MovieListItemStyle key={movie.name}>
          <MovieLinkStyle href={movie.imdb_url} target="_blank">
            <span>
              {index + 1}. <span>{movie.name}</span>
            </span>
            <img src={movie.cover_image} width="300" alt="Cover image" />
            <p>{movie.description}</p>
          </MovieLinkStyle>
        </MovieListItemStyle>
      ))}
    </MovieListStyle>
  );
};

export default MovieList;
