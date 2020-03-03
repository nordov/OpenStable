const graphql = require("graphql");
const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
} = graphql;

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