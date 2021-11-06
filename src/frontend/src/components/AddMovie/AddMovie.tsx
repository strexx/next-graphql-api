import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import { AddMovieStyle } from "./AddMovieStyles";
import { ADD_MOVIE } from "./mutations";

const AddMovie: React.FunctionComponent = () => {
  const router = useRouter();

  const [addMovie, { error, data }] = useMutation(ADD_MOVIE, {
    onCompleted() {
      router.push("/");
    },
  });

  function handleSubmit(e: any) {
    e.preventDefault();
    const { name, description, cover_image, imdb_url } = e.target;

    const params = {
      name: name.value,
      description: description.value,
      cover_image: cover_image.value,
      imdb_url: imdb_url.value,
    };

    addMovie({ variables: params });
  }

  return (
    <AddMovieStyle>
      <h1>Add a favorite movie</h1>
      <form action="" method="POST" onSubmit={handleSubmit}>
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
      </form>
    </AddMovieStyle>
  );
};

export default AddMovie;
