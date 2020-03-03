const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLNonNull, GraphQLID } = graphql;
const mongoose = require("mongoose");
const UserType = require("../types/user_type");
const AuthService = require("../../../services/auth");
const User = mongoose.model("users");
const Horse = mongoose.model("horses");
const Image = mongoose.model("images");

//Include all mutations files
const userMutations = require("./user_mutations");
const stableMutations = require("./stable_mutations");
const horseMutations = require("./horse_mutations");
const tourMutations = require("./tour_mutations");
const imageMutations = require("./image_mutations");

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: Object.assign(
                        userMutations,
                        stableMutations,
                        horseMutations,
                        tourMutations,
                        imageMutations
                       )
});

module.exports = mutation;