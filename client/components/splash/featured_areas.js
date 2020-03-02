import React, { Component } from "react";
import resetCSS from "../reset.css";
import splashCSS from "./splash.css";

class FeaturedAreas extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="splash-featured-full-container">
        <div className="splash-featured-inner-container">
          <div className="splash-featured-top-heading">
            <h1>Featured Areas</h1>
          </div>
          <div className="splash-featured-divider"></div>
          <div className="featured-cities-container">
            <ul>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default FeaturedAreas;
