import React, { Component } from "react";
import resetCSS from "../reset.css";
import splashCSS from "./splash.css";

class PopularCarousel extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="splash-popular-full-container">
        <div className="splash-popular-inner-container">
          <div className="splash-popular-top-heading">
            <h1>Popular stables</h1>
            <a href="#">View all</a>
          </div>
          <div className="splash-popular-divider"></div>
          <div className="carousel-container">
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default PopularCarousel;