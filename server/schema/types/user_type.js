const graphql = require("graphql");
const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLBoolean,
  GraphQLString,
  GraphQLList
} = graphql;

const mongoose = require("mongoose");
const User = mongoose.model("users");

const UserType = new GraphQLObjectType({
  name: "UserType",
  fields: () => ({
    id: { type: GraphQLID }, // Mongoose automatically generates an ID field for our models
    fname: { type: GraphQLString },
    lname: { type: GraphQLString },
    email: { type: GraphQLString },
    city: { type: GraphQLString },
    loggedIn: { type: GraphQLBoolean },
    token: { type: GraphQLString },
    //Use this code for tours/ stables and evything else
    // posts: {
    //   type: new GraphQLList(require("./post_type")),
    //   resolve(parentValue) {
    //     return User.findById(parentValue.id)
    //       .populate("posts")
    //       .then(user => user.posts);
    //   }
    // }
  })
});

module.exports = UserType;