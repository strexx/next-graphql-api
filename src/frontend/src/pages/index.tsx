import { FC } from "react";
import App from "../components/App";
import MovieList from "../components/MovieList/MovieList";

const IndexPage: FC = () => (
  <App>
    <MovieList />
  </App>
);

export default IndexPage;
