const graphql = require("graphql");
const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
} = graphql;

const mongoose = require("mongoose");
const Image = mongoose.model("images");

const Stable = mongoose.model("stables");
const StableType = require("./stable_type");

const Tour = mongoose.model("tours");
const TourType = require("./tour_type");

const Horse = mongoose.model("horses");
const HorseType = require("./horse_type");

const ImageType = new GraphQLObjectType({
  name: "ImageType",
  fields: () => ({
    id: { type: GraphQLID }, // Mongoose generated
    stable: { 
      type: StableType,
      resolve(parentValue){
          return Stable.findById(parentValue.stable)
            .then(stable => stable)
            .catch(err => null)
      }
    },
    tour: { 
      type: TourType,
      resolve(parentValue){
          return Tour.findById(parentValue.tour)
            .then(tour => tour)
            .catch(err => null)
      }
    },
    horse: { 
      type: HorseType,
      resolve(parentValue){
          return Horse.findById(parentValue.horse)
            .then(horse => horse)
            .catch(err => null)
      }
    },          
    image_url: { type: GraphQLString },
    image_text: { type: GraphQLString },  
  })
});

module.exports = ImageType;