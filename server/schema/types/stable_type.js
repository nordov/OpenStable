const graphql = require("graphql");
const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLFloat,
  GraphQLList
} = graphql;

const mongoose = require("mongoose");
const Stable = mongoose.model("stables");

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
            .then(stable => stable.horses)
            .catch(err => null)
      }
    },
    tours: { 
      type: new GraphQLList(require("./tour_type")),
      resolve(parentValue){
          return Stable.findById(parentValue.id)
            .populate("tours")
            .then(stable => stable.tours)
            .catch(err => null)
      }
    }, 
    images: { 
      type: new GraphQLList(require("./image_type")),
      resolve(parentValue){
          return Stable.findById(parentValue.id)
            .populate("images")
            .then(stable => stable.images)
            .catch(err => null)
      }
    },        
  })
});

module.exports = StableType;