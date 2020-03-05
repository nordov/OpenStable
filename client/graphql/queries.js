import gql from "graphql-tag";

// we use gql with a template literal to construct graphql queries
export default {
  IS_LOGGED_IN: gql`
    query IsUserLoggedIn {
      isLoggedIn @client
    }
  `
};