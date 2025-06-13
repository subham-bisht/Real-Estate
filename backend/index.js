const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config();
// const signUpModel = require("./src/model/signupSchema");
const SingUpRoute = require("./src/routers/SignUpRoute");
const SignInRoute = require("./src/routers/SignInRoute");
const AddPropertyRoute = require("./src/routers/AddPropertyRoute");

const app = express();

const MongoURL = process.env.MONGO_CONN;
const PORT = process.env.PORT || 8080;
const cors = require("cors");
app.use(cors());

app.use(bodyParser.json());
app.use(express.json());

app.use("/realestate", SingUpRoute);
app.use("/realestate", SignInRoute);
app.use("/realestate/property", AddPropertyRoute);

mongoose
  .connect(MongoURL)
  .then((conn) => {
    if (conn) {
      console.log("Connection established");
      app.listen(PORT, (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log(`App is listen ${PORT}`);
        }
      });
    } else {
      console.log("Connection failed");
    }
  })
  .catch((e) => {
    console.log("Connection error", e);
  });
