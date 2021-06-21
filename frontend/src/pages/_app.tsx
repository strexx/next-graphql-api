import { ApolloProvider } from "@apollo/client";
import { useApollo } from "../lib/apolloClient";

type Props = {
  Component: any;
  pageProps: any;
};

const App: React.FunctionComponent<Props> = ({ Component, pageProps }) => {
  const apolloClient = useApollo(pageProps);

  return (
    <>
      <ApolloProvider client={apolloClient}>
        <Component {...pageProps} />
      </ApolloProvider>
    </>
  );
};

export default App;
