import React, { Component } from "react";
import resetCSS from '../reset.css';
import splashCSS from './splash.css';
import { Query } from "react-apollo";

// import gql from "graphql-tag";

// export const FETCH_POSTS = gql`
//   query fetchPosts {
//     posts {
//       id
//       title
//       body
//     }
//   }
// `;

class Splash extends Component {
  constructor(props) {
    super(props)

  }

  render() {
    return (
      // <Query query={FETCH_POSTS}>
      //   {({ loading, error, data }) => {
      //     if (loading) return "Loading...";
      //     if (error) return `Error! ${error.message}`;

      //     return (
      //       <ul>
      //         {data.posts.map(post => (
      //           <li key={post.id}>
      //             <h2>{post.title}</h2>
      //             <p>{post.body}</p>
      //           </li>
      //         ))}
      //       </ul>
      //     );
      //   }}
      // </Query>
      <div className="splash">
        <div className="splash-top-bar">
          <div className="splash-left-side">
            <div className="splash-logo-container">
              <a href="/">
                <img src="https://components.otstatic.com/components/header/2.2.1/img/logo-en.svg" width="135"></img>
              </a>
            </div>
            <div className="splash-location-container">
              <div className="splash-location-spacing">
                <img src="/static/images/marker.png" width="19"></img>
                <img src="/static/images/upside-down-caret.png" width="12"></img>
              </div>
            </div>
          </div>
          <div className="splash-auth-container">
            <button>Sign up</button>
            <a href="#">Sign in</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Splash;
