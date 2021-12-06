import React, { useCallback } from "react";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";

import { ADD_MOVIE } from "./mutations";
import { ErrorMessageStyle } from "../ErrorMessage/ErrorMessageStyles";
import { AddMovieStyle, AddMovieFormStyle } from "./AddMovieStyles";

type RawFormValues = {
  name: { value: string };
  description: { value: string };
  cover_image: { value: string };
  imdb_url: { value: string };
};

type FormValues = {
  name: string;
  description: string;
  cover_image: string;
  imdb_url: string;
};

const AddMovie: React.FunctionComponent = () => {
  const router = useRouter();

  const [addMovie, { error, loading }] = useMutation(ADD_MOVIE, {
    onCompleted() {
      /* Go back to the homepage when the movie is added successfully */
      router.push("/");
    },
  });

  /* Handle all form values and use them for our addMovie mutation */
  const handleSubmit = useCallback(
    (e: React.SyntheticEvent) => {
      e.preventDefault();

      /* Destruct values from form values */
      const { name, description, cover_image, imdb_url } =
        e.target as typeof e.target & RawFormValues;

      /* Setup our variables object based on our form values  */
      const variables: FormValues = {
        name: name.value,
        description: description.value,
        cover_image: cover_image.value,
        imdb_url: imdb_url.value,
      };

      /* Pass form values to our addMovie mutation */
      addMovie({ variables });
    },
    [addMovie]
  );

  return (
    <AddMovieStyle>
      <h1>Add a favorite movie</h1>

      {/* Show an error message when something is failing */}
      {error && (
        <ErrorMessageStyle message={`Error adding movie. ${error.message}`} />
      )}

      {/* Show processing message when a movie is being added */}
      {loading && <div>Processing...</div>}

      <AddMovieFormStyle method="POST" onSubmit={handleSubmit}>
        <fieldset>
          <div>
            <label htmlFor="name">Name*:</label>
            <input type="text" name="name" id="name" required />
          </div>
          <div>
            <label htmlFor="description">Description:</label>
            <textarea name="description" id="description" />
          </div>
          <div>
            <label htmlFor="imdb_url">Imdb link*:</label>
            <input type="text" name="imdb_url" id="imdb_url" required />
          </div>
          <div>
            <label htmlFor="cover_image">Cover image url*:</label>
            <input type="text" name="cover_image" id="cover_image" required />
          </div>
          <button type="submit">Submit</button>
        </fieldset>
      </AddMovieFormStyle>
    </AddMovieStyle>
  );
};

export default AddMovie;
