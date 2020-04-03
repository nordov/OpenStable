import gql from "graphql-tag";

// we use gql with a template literal to construct graphql queries
export default {
  IS_LOGGED_IN: gql`
    query IsUserLoggedIn {
      isLoggedIn @client
    }
  `,
  FETCH_STABLES: gql`
    query FetchStables {
      stables {
        id,
        name,
        address,
        description,
        image,
        state,
        city
      }
    }
  `,
  FETCH_STABLE: gql`
    query FetchStable($id: ID!){
      stable(id: $id){
        id
        name
        description
        address
        city
        state
        longitude
        latitude
        tours{
          id
          name
        }
      }
    }
  `,
  GET_SELECTED: gql`
    query GetSelected {
      selectedDate @client,
      selectedTime @client,
      selectedPeople @client,
      location @client
    }
  `,
  FETCH_STABLES_BY_CITY: gql`
    query FetchStablesByCity($city: String!) {
      stablesbycity(city: $city) {
        id,
        name,
        description,
        address,
        city,
        state,
        image
      }
    }
  `
};  