const express = require("express");
const expressGraphQL = require("express-graphql");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const models = require('./models');
const db = require("../config/keys").mongoURI;
const schema = require("./schema/schema");
const path = require("path");

// graphQLUploadExpress imported for AWS connection
const { graphQLUploadExpress } = require('graphql-upload');

const app = express();

if (!db) {
  throw new Error("You must provide a string to connect to MongoDB Atlas");
}

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

// remember we use bodyParser to parse requests into json
app.use(bodyParser.json());

app.use(
  "/graphql",
  // graphQLUploadExpress added as middleware for AWS connection
  graphQLUploadExpress({ maxFileSize: 10000000, maxFiles: 10 }),
  expressGraphQL({
    schema,
    graphiql: true
  })
);

app.use("/static", express.static(path.join(__dirname, "public")));

const webpackMiddleware = require("webpack-dev-middleware");
const webpack = require("webpack");
const webpackConfig = require("../webpack.config.js");

app.use(webpackMiddleware(webpack(webpackConfig)));

module.exports = app;