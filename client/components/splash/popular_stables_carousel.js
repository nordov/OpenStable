import React, { Component } from "react";
import resetCSS from "../reset.css";
import splashCSS from "./splash.css";

class PopularCarousel extends Component {
  constructor(props) {
    super(props)
  }

  translateX(event) {
    const ul = document.getElementById("carousel-ul");
    if (event.target.className === "splash-carousel-right-arrow") {
      ul.style.transform = 'translateX(-100%)';
    } else {
      ul.style.transform = 'translateX(0%)';
    }
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
            <ul id="carousel-ul">
              <li id="first-li">
                <img src="https://images.otstatic.com/prod/25898919/1/medium.jpg"></img>
                <div className="carousel-li-bottom-holder">
                  <h2>Soby's</h2>
                  <h3>Ratings placeholder</h3>
                  <p>Booked x times today</p>
                </div>
              </li>
              <li>
                <img src="https://images.otstatic.com/prod/25898919/1/medium.jpg"></img>
                <div className="carousel-li-bottom-holder">
                  <h2>Soby's</h2>
                  <h3>Ratings placeholder</h3>
                  <p>Booked x times today</p>
                </div>
              </li>
              <li>
                <img src="https://images.otstatic.com/prod/25898919/1/medium.jpg"></img>
                <div className="carousel-li-bottom-holder">
                  <h2>Soby's</h2>
                  <h3>Ratings placeholder</h3>
                  <p>Booked x times today</p>
                </div>
              </li>
              <li>
                <img src="https://images.otstatic.com/prod/25898919/1/medium.jpg"></img>
                <div className="carousel-li-bottom-holder">
                  <h2>Soby's</h2>
                  <h3>Ratings placeholder</h3>
                  <p>Booked x times today</p>
                </div>
              </li>
              <li id="first-li">
                <img src="https://images.otstatic.com/prod/25898919/1/medium.jpg"></img>
                <div className="carousel-li-bottom-holder">
                  <h2>Soby's2</h2>
                  <h3>Ratings placeholder</h3>
                  <p>Booked x times today</p>
                </div>
              </li>
              <li>
                <img src="https://images.otstatic.com/prod/25898919/1/medium.jpg"></img>
                <div className="carousel-li-bottom-holder">
                  <h2>Soby's2</h2>
                  <h3>Ratings placeholder</h3>
                  <p>Booked x times today</p>
                </div>
              </li>
              <li>
                <img src="https://images.otstatic.com/prod/25898919/1/medium.jpg"></img>
                <div className="carousel-li-bottom-holder">
                  <h2>Soby's2</h2>
                  <h3>Ratings placeholder</h3>
                  <p>Booked x times today</p>
                </div>
              </li>
              <li>
                <img src="https://images.otstatic.com/prod/25898919/1/medium.jpg"></img>
                <div className="carousel-li-bottom-holder">
                  <h2>Soby's2</h2>
                  <h3>Ratings placeholder</h3>
                  <p>Booked x times today</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="splash-carousel-arrow-container">
            <div className="splash-carousel-right-arrow" onClick={this.translateX}></div>
          </div>
          <div className="splash-carousel-arrow-container2">
            <div className="splash-carousel-right-arrow2" onClick={this.translateX}></div>
          </div>
        </div>
      </div>
    );
  }
}

export default PopularCarousel;