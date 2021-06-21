const admin = require("firebase-admin");
const serviceAccount = require("../service-account.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

module.exports = {
  Query: {
    async movies() {
      const movies = await admin.firestore().collection("movies").get();
      return movies.docs.map((movie) => movie.data());
    },
  },
  Mutation: {
    async addMovie(_, { name, description, imdb_url, cover_image }) {
      const ref = admin.firestore().collection("movies").doc();
      await ref.set({ name, description, imdb_url, cover_image });
      return ref.id;
    },
  },
};
