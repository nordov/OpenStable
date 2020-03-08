const express = require("express");
const expressGraphQL = require("express-graphql");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const models = require("./models");
const db = require("../config/keys").mongoURI;
const schema = require("./schema/schema");
const path = require("path");
const multer = require("multer");
const { s3, singleFileUpload } = require("./schema/s3");

// graphqlUploadExpress imported for AWS connection
const { graphqlUploadExpress } = require("graphql-upload");

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
  // graphqlUploadExpress added as middleware for AWS connection
  graphqlUploadExpress({ maxFileSize: 10000000, maxFiles: 10 }),
  expressGraphQL({
    schema,
    graphiql: true
  })
);

// configuring the DiscStorage engine.
const storage = multer.diskStorage({
  destination: "uploads/",
  filename: function(req, file, cb) {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage: storage });

//POST method route for uploading file
app.post("/upload", upload.single("file"), function(req, res) {
  //Multer middleware adds file(in case of single file ) or files(multiple files) object to the request object.
  //req.file is the demo_file
  singleFileUpload(req.file.path, req.file.filename, res);
  // return res.send({ key: singleFileUpload(req.file) });
});

app.use("/static", express.static(path.join(__dirname, "public")));

const webpackMiddleware = require("webpack-dev-middleware");
const webpack = require("webpack");
const webpackConfig = require("../webpack.config.js");

app.use(webpackMiddleware(webpack(webpackConfig)));

module.exports = app;
