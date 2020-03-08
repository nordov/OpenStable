// const AWS = require("aws-sdk");
// if (process.env.NODE_ENV !== "production") {
//   AWS.config.loadFromPath("./credentials.json");;
// }
// const s3 = new AWS.S3({ apiVersion: "2006-03-01" });

const AWS = require("aws-sdk");
// const myCredentials = require("../../credentials.json");
const fs = require("fs");

if (process.env.NODE_ENV !== "production") {
  // const myConfig = new AWS.Config({ credentials: myCredentials })
  //const myCredentials = require("../../credentials.json");
  // comment the line below out to access the frontend
  // AWS.config.loadFromPath("./credentials.json");
}

const s3 = new AWS.S3({ apiVersion: "2006-03-01" });


const singleFileUpload = async (source, targetName, res) => {
  // const { filename, mimetype, createReadStream } = await file;
  // const fileStream = createReadStream;
  const path = require("path");
  // name of the file in your S3 bucket will be the date in ms plus the extension name
  // const Key = new Date().getTime().toString() + path.extname(targetName);
  // const result = await s3.upload(uploadParams).promise();

  fs.readFile(source, function(err, filedata) {
    if (!err) {
      const uploadParams = {
        // name of your bucket here
        Bucket: "open-stable-app-dev",
        Key: targetName,
        Body: filedata
      };

      s3.putObject(uploadParams, function(err) {
        if (err) {
          console.log(err);
        } else {
          console.log("Success");
          // get the signed url for the uploaded file
          // const url = getUrl(targetName);
          // return res.send({ url });
        }
      });
    }
  });

  // const getUrl = targetName => {
  //   const params = { Bucket: "aws-graphql-dev-testing", Key: targetName };
  //   const url = s3.getSignedUrl("getObject", params);
  //   return url;
  // };

  // save the name of the file in your bucket as the key in your database to retrieve for later
  // return result.Key;
};

module.exports = { s3, singleFileUpload };
