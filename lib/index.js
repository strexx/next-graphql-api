"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const admin = require("firebase-admin");
const serviceAccount = require("./service-account.json");
const apollo_server_1 = require("apollo-server");
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});
const db = admin.firestore();
const tweets = async () => {
    const results = await db.collection("next").get();
    return results.docs.map((tweet) => tweet.data());
};
console.log(db);
console.log(tweets);
const server = new apollo_server_1.ApolloServer({
    typeDefs,
    resolvers,
    engine: {
        apiKey: "<APOLLO ENGINE API KEY HERE>",
    },
    introspection: true,
});
server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});
//# sourceMappingURL=index.js.map