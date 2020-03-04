/********** USER MUTATIONS ************
    - Register new user (Sign up)
    - Login exisiting user (Sign in)
    - Logout user
    - Verify if user is logged in
/********** TOUR MUTATIONS ************/

const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLNonNull, GraphQLID } = graphql;
const mongoose = require("mongoose");
const UserType = require("../types/user_type");

const AuthService = require("../../../services/auth");
const User = mongoose.model("users");

const userMutations = new Object({
    register: {
        // creating a User type
        type: UserType,
        args: {
        fname: { type: new GraphQLNonNull(GraphQLString) },
        lname: { type: GraphQLString },
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
});

module.exports = userMutations;