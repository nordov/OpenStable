const graphql = require("graphql");
const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLFloat,
  GraphQLList
} = graphql;

// Tom - This is for AWS.
const { s3 } = require('../s3');

const mongoose = require("mongoose");
// Tom - Added schema for images array, not sure if that's right.
const Schema = mongoose.Schema;

const Stable = mongoose.model("stables");

const Tour = mongoose.model("horses");

const StableType = new GraphQLObjectType({
  name: "StableType",
  fields: () => ({
    id: { type: GraphQLID }, // Mongoose generated
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    address: { type: GraphQLString },
    city: { type: GraphQLString },
    state: { type: GraphQLString },
    longitude: { type: GraphQLFloat },
    latitude: { type: GraphQLFloat },
    horses: { 
      type: new GraphQLList(require("./horse_type")),
      resolve(parentValue){
          return Stable.findById(parentValue.id)
            .populate("horses")
            .then(stable => {
              console.log(stable);
              return stable.horses;
            })
            .catch(err => console.log(err));
      }
    },
    tours: { 
      type: new GraphQLList(require("./tour_type")),
      resolve(parentValue){
          return Stable.findById(parentValue.id)
            .populate("tours")
            .then(stable => stable.tours)
            .catch(err => console.log(err));
      }
    }, 





    // Tom - Boilerplate, should be adapted to multiple images once tested. Commented this out for now (on Sunday) to resolve merge conflict.
    // image: {
    //   type: GraphQLString,

    //   // Tom - Not sure if we need the rest of this since they're just url strings?
    //   resolve(parentValue) {
    //     let imageUrl;
    //     if (parentValue.image) {
    //       imageUrl = s3.getSignedUrl('getObject', {
    //         Bucket: "aws-graphql-dev-testing",
    //         Key: parentValue.image
    //       });
    //     }
    //     return imageUrl || parentValue.image;
    //   }
    // },

    // // Tom - Added this, took code directly from single image not sure if its right.
    // images: [
    //   {
    //     type: GraphQLString,

    //     // Tom - Not sure if we need the rest of this since they're just url strings?
    //     resolve(parentValue) {
    //       let imageUrl;
    //       if (parentValue.image) {
    //         imageUrl = s3.getSignedUrl('getObject', {
    //           Bucket: "aws-graphql-dev-testing",
    //           Key: parentValue.image
    //         });
    //       }
    //       return imageUrl || parentValue.image;
    //     }
    //   }
    // ]






    // image: {
    //   type: GraphQLString,
    //   resolve(parentValue) {
    //     let imageUrl;
    //     if (parentValue.image) {
    //       imageUrl = s3.getSignedUrl('getObject', {
    //         Bucket: "aws-graphql-dev-testing",
    //         Key: parentValue.image
    //       });
    //     }
    //     return imageUrl || parentValue.image;
    //   }
    // }

    // Tom - Old image code, just in case something breaks.
    images: {
      type: new GraphQLList(require("./image_type")),
      resolve(parentValue){
          return Stable.findById(parentValue.id)
            .populate("images")
            .then(stable => stable.images)
            .catch(err => null);
      }
    },        
  })
});

module.exports = StableType;