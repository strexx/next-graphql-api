const { ApolloServer, gql } = require("apollo-server");
const resolvers = require("./graphql/resolvers.js");
const typeDefs = require("./graphql/typeDefs.js");

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
