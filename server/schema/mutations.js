const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLNonNull, GraphQLID } = graphql;
const mongoose = require("mongoose");
const UserType = require("./types/user_type");

const AuthService = require("../../services/auth");
const User = mongoose.model("users");

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    // this will be the name of this mutation
    register: {
        // creating a User type
        type: UserType,
        args: {
        fname: { type: new GraphQLNonNull(GraphQLString) },
        email: { type: new GraphQLNonNull(GraphQLString) },
        password: { type: new GraphQLNonNull(GraphQLString) },
        city: { type: new GraphQLNonNull(GraphQLString) }
        },
        resolve(parentValue, data) {
        return AuthService.register(data);
        }
    },
    login: {
        // log in a User type
        type: UserType,
        args: {
            email: { type: new GraphQLNonNull(GraphQLString) },
            password: { type: new GraphQLNonNull(GraphQLString) },
        },
        resolve(parentValue, data) {
            return AuthService.login(data);
        }
    },
    logout: {
        type: UserType,
        args: {
          // all we need to log the user our is an id
          _id: { type: GraphQLID }
        },
        resolve(_, args) {
          return AuthService.logout(args);
        }
    },
    verifyUser: {
        type: UserType,
        args: {
          token: { type: GraphQLString }
        },
        resolve(_, args) {
          return AuthService.verifyUser(args);
        }
    }            
  }
});

module.exports = mutation;