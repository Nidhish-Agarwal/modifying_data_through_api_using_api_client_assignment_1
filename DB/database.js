const mongoose = require("mongoose");

if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({
    path: "../config/.env",
  });
}

const connectDatabase = () => {
  console.log(process.env.DB_URL, process.env.PORT);
  mongoose
    .connect(
      "mongodb+srv://Nidhish_Agarwal:Nidhish64364488@cluster0.tqv0w.mongodb.net/modifying_data"
    )
    .then((data) => {
      console.log("DataBase sucessfully connected", data.connection.host);
    })
    .catch((err) => {
      console.log("Error connecting to Database", err.message);
    });
};

module.exports = connectDatabase;
