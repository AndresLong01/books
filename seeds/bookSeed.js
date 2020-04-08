const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/googlebooks"
);

const bookSeed = [
    {
        title: "Lord of the Flies",
        author: "William Golding",
        synopsis: "Flies",
        date: new Date(Date.now())
    }
];

db.book
  .remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then(data => {
      console.log(data.result.n + " recirds inserted.");
      process.exit(0);
  })
  .catch(err => {
      console.error(err);
      process.exit(1);
  });