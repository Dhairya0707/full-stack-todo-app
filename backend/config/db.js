const mongoose = require("mongoose");

const connection = mongoose
  .connect("mongodb://127.0.0.1:27017/learning")
  .then(() => {
    console.log("connected to the db !");
  })
  .catch((err) => {
    console.log(err.message);
  });

module.exports = connection;
