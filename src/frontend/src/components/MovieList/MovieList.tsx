import { FC } from "react";
import { useQuery } from "@apollo/client";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import {
  MovieListStyle,
  MovieListItemStyle,
  MovieLinkStyle,
} from "./MovieListStyles";
import { ALL_MOVIES_QUERY } from "./queries";

type RawMovie = {
  name: string;
  cover_image: string;
  description: string;
  imdb_url: string;
};

type AllMoviesData = {
  movies: RawMovie[];
};

const MovieList: FC = () => {
  /* Fetch all the movies initializing the ALL_MOVIES_QUERY */
  const { loading, error, data } = useQuery<AllMoviesData>(ALL_MOVIES_QUERY);

  /* If there's an error we show an error message */
  if (error) return <ErrorMessage message="Error loading movies." />;

  /* While retrieving data we show a loading spinner */
  if (loading) return <div>Loading</div>;

  /* Destruct the movies array from our retrieved movie data */
  const { movies } = data;

  return (
    <MovieListStyle>
      {movies.map(({ name, imdb_url, cover_image, description }, index) => (
        <MovieListItemStyle key={name}>
          <MovieLinkStyle href={imdb_url} target="_blank">
            <span>
              {index + 1}. <span>{name}</span>
            </span>
            <img src={cover_image} width="300" alt="Cover image" />
            <p>{description}</p>
          </MovieLinkStyle>
        </MovieListItemStyle>
      ))}
    </MovieListStyle>
  );
};

export default MovieList;
