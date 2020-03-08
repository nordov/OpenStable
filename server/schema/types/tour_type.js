const graphql = require("graphql");
const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
} = graphql;

// Tom - This is for AWS.
const { s3 } = require('../s3');

const mongoose = require("mongoose");
const Tour = mongoose.model("tours");

const Stable = mongoose.model("stables");
const StableType = require("./stable_type");


const TourType = new GraphQLObjectType({
  name: "TourType",
  fields: () => ({
    id: { type: GraphQLID }, // Mongoose generated
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    duration: { type: GraphQLInt },
    difficulty: { type: GraphQLString },
    terrain: { type: GraphQLString },
    capacity: { type: GraphQLInt },
    route: { type: GraphQLString },
    start_time: { type: GraphQLString },
    stable: { 
      type: StableType,
      resolve(parentValue) {
          return Stable.findById(parentValue.stable)
              .then(stable => stable)
              .catch(err => null);
        }
    },
    horses: { 
      type: new GraphQLList(require("./horse_type")),
      resolve(parentValue){
          return Tour.findById(parentValue.id)
            .populate("horses")
            .catch(err => null)
      }
    },
    reservedHorses: { 
      type: new GraphQLList(require("./horse_type")),
      resolve(parentValue){
          return Tour.findById(parentValue.id)
            .populate("reserved_horses")
            .catch(err => null)
      }
    },

    // Tom - Boilerplate, should be adapted to multiple images once tested.
    image: {
      type: GraphQLString,

      // Tom - Not sure if we need the rest of this since they're just url strings?
      resolve(parentValue) {
        let imageUrl;
        if (parentValue.image) {
          imageUrl = s3.getSignedUrl('getObject', {
            Bucket: "aws-graphql-dev-testing",
            Key: parentValue.image
          });
        }
        return imageUrl || parentValue.image;
      }
    },

    // Tom - Added this, took code directly from single image not sure if its right.
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

    //Tom - Old image code, just in case something breaks.    
    images: {
      type: new GraphQLList(require("./image_type")),
      resolve(parentValue){
          return Tour.findById(parentValue.id)
            .populate("images")
            .catch(err => null)
      }
    },   
  })
});

module.exports = TourType;