const admin = require("firebase-admin");
const serviceAccount = require("../../service-account.json");
const data = require("./data.js");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
module.exports = {
  Query: {
    async books() {
      const books = await admin.firestore().collection("books").get();
      return books.docs.map((book) => book.data());
    },
  },
};
