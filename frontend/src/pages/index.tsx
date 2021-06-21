import App from "../components/App";
import Header from "../components/Header/Header";
import MovieList, { ALL_MOVIES_QUERY } from "../components/MovieList/MovieList";
import { initializeApollo, addApolloState } from "../lib/apolloClient";

const IndexPage = () => (
  <App>
    <Header />
    <MovieList />
  </App>
);

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: ALL_MOVIES_QUERY,
  });

  return addApolloState(apolloClient, {
    props: {},
    revalidate: 1,
  });
}

export default IndexPage;
