const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config({ path: "./config.env" });
const mongoURI = process.env.MONGODB;

mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "School-Management",
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log("Error connecting to MongoDB:", error);
  });
