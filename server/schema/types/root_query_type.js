const graphql = require('graphql');
const { GraphQLObjectType, GraphQLList, GraphQLNonNull, GraphQLID} = graphql;
const mongoose = require('mongoose');

//Import User type
const User = mongoose.model('users');
const UserType = require('./user_type');

//Import Stable type
const Stable = mongoose.model('stables');
const StableType = require('./stable_type');

//Import Tour type
const Tour = mongoose.model('tours');
const TourType = require('./tour_type');

//Import Horse type
const Horse = require("../../models/Horse");
const HorseType = require('./horse_type');

//Import Image type
const Image = mongoose.model('images');
const ImageType = require('./image_type');

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    users: {
      type: new GraphQLList(UserType),
      resolve() {
        return User.find({});
      }
    },
    user: {
      type: UserType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(parentValue, { id }) {
        return User.findById(id);
      }
    },
    stables: {
      type: new GraphQLList(StableType),
      resolve() {
        return Stable.find({});
      }
    },
    stable: {
      type: StableType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(parentValue, { id }) {
        return Stable.findById(id);
      }
    },
    tours: {
      type: new GraphQLList(TourType),
      resolve() {
        return Tour.find({});
      }
    },
    tour: {
      type: TourType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(parentValue, { id }) {
        return Tour.findById(id);
      }
    },       
    horses: {
      type: new GraphQLList(HorseType),
      resolve() {
        return Horse.find({});
      }
    },
    horse: {
      type: HorseType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(parentValue, { id }) {
        return Horse.findById(id);
      }
    },     
    images: {
      type: new GraphQLList(ImageType),
      resolve() {
        return Image.find({});
      }
    },
    image: {
      type: ImageType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(parentValue, { id }) {
        return Image.findById(id);
      }
    },  
  }
});

module.exports = RootQuery;