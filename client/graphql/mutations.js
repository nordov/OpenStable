import gql from "graphql-tag";
export default {
  LOGIN_USER: gql`
    mutation LoginUser($email: String!, $password: String!) {
      login(email: $email, password: $password) {
        token
        loggedIn
        fname
        lname
      }
    }
  `,
  VERIFY_USER: gql`
    mutation VerifyUser($token: String!) {
      verifyUser(token: $token) {
        loggedIn
      }
    }
  `,
  REGISTER_USER: gql`
    mutation RegisterUser($fname: String!, $lname: String!, $email: String!, $password: String!, $city: String!) {
      register(fname: $fname, lname: $lname, email: $email, password: $password, city: $city) {
        email
        token
        loggedIn
        fname
        lname
      }
    }
  `
};