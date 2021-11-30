import { FC } from "react";
import { ApolloProvider } from "@apollo/client";
import { useApollo } from "../lib/apolloClient";
import { NextComponentType } from "next";
import Header from "../components/Header/Header";

type Props = {
  Component: NextComponentType;
  pageProps: {};
};

const App: FC<Props> = ({ Component, pageProps }) => {
  const apolloClient = useApollo(pageProps);

  return (
    <>
      <ApolloProvider client={apolloClient}>
        <Header />
        <Component {...pageProps} />
      </ApolloProvider>
    </>
  );
};

export default App;
