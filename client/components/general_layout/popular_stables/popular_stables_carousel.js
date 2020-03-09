import React, { Component } from "react";
//import resetCSS from "../reset.css";
import popularStablesCSS from "./popular_stables.css";
import { withRouter } from 'react-router-dom';

class PopularCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      leftArrowDisplay: "none",
      rightArrowDisplay: "shown",
      hoveredLi: ''
    };

    this.handleScroll = this.handleScroll.bind(this);
    this.updateDimensions = this.updateDimensions.bind(this);
  }

  translateX(event) {
    const container = document.getElementById("carousel-container");
    if (
      event.target.className === "splash-carousel-right-arrow" ||
      event.target.id === "right>"
    ) {
      container.scrollLeft = 1010;
    } else if (
      event.target.className === "fa-angle-left" ||
      "splash-carousel-right-arrow2"
    ) {
      // container.style.transform = 'translateX(0%)';
      if (
        container.scrollLeft === 1010 ||
        (window.innerWidth > 1618 && container.scrollLeft === 760)
      ) {
        container.scrollLeft = -1010;
      } else container.scrollLeft = -1010
    }
  }

  updateDimensions() {
    const container = document.getElementById("carousel-container");
    const rightArrow = document.getElementById("right-arr");
    const leftArrow = document.getElementById("left-arr");

    if (window.innerWidth > 765 && window.innerWidth < 1618) {
      if (container.scrollLeft >= 1010) {
        rightArrow.style.display = "none";
      } else {
        rightArrow.style.display = "flex";
        rightArrow.style.justifyContent = "center";
      }

      if (container.scrollLeft === 0) {
        leftArrow.style.display = "none";
      } else {
        leftArrow.style.display = "flex";
        leftArrow.style.justifyContent = "center";
      }
    } else if (window.innerWidth > 1618) {
      if (this.state.rightArrowDisplay === "none") {
        rightArrow.style.display = "none";
      } else {
        rightArrow.style.display = "flex";
        rightArrow.style.justifyContent = "center";
      }

      if (container.scrollLeft === 0) {
        leftArrow.style.display = "none";
      } else {
        leftArrow.style.display = "flex";
        leftArrow.style.justifyContent = "center";
      }
    } else {
      rightArrow.style.display = "none";
      leftArrow.style.display = "none";
    }
  }

  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }

  handleScroll() {
    const container = document.getElementById("carousel-container");
    const rightArrow = document.getElementById("right-arr");
    const leftArrow = document.getElementById("left-arr");
    if (window.innerWidth > 765 && window.innerWidth < 1618) {
      if (container.scrollLeft >= 1010) {
        rightArrow.style.display = "none";
        this.setState({ rightArrowDisplay: "none" });
      } else {
        rightArrow.style.display = "flex";
        rightArrow.style.justifyContent = "center";
        this.setState({ rightArrowDisplay: "shown" });
      }

      if (container.scrollLeft === 0) {
        leftArrow.style.display = "none";
        this.setState({ leftArrowDisplay: "none" });
      } else {
        leftArrow.style.display = "flex";
        leftArrow.style.justifyContent = "center";
        this.setState({ leftArrowDisplay: "shown" });
      }
    } else if (window.innerWidth > 1618) {
      if (container.scrollLeft >= 760) {
        rightArrow.style.display = "none";
        this.setState({ rightArrowDisplay: "none" });
      } else {
        rightArrow.style.display = "flex";
        rightArrow.style.justifyContent = "center";
        this.setState({ rightArrowDisplay: "shown" });
      }

      if (container.scrollLeft === 0) {
        leftArrow.style.display = "none";
        this.setState({ leftArrowDisplay: "none" });
      } else {
        leftArrow.style.display = "flex";
        leftArrow.style.justifyContent = "center";
        this.setState({ leftArrowDisplay: "shown" });
      }
    } else {
      rightArrow.style.display = "none";
      leftArrow.style.display = "none";
      this.setState({ rightArrowDisplay: "none", leftArrowDisplay: "none" });
    }
  }

  upwardAnimation(id) {
    if (id === "primary-li" || id === "secondary-li") {
      const li = document.getElementsByClassName(id)[0]
      li.className = "test";
      li.firstElementChild.style.transform = "scale(1.08)";
    } else {
      const li = document.getElementById(id);
      li.className = "test";
      li.firstElementChild.style.transform = "scale(1.08)";
    }
  }

  leaveAnimation(id) {
    if (id === "primary-li") {
      const li = document.getElementsByClassName("test")[0]
      li.className = "primary-li";
      li.firstElementChild.style.transform = "scale(1)";
    } else if (id === "secondary-li") {
      const li = document.getElementsByClassName("test")[0];
      li.className = "secondary-li";
      li.firstElementChild.style.transform = "scale(1)";
    } else {
      const li = document.getElementById(id);
      li.className = "test2";
      li.firstElementChild.style.transform = "scale(1)";
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
          <div
            id="carousel-container"
            className="carousel-container"
            onScroll={this.handleScroll}
          >
            <ul id="carousel-ul">
              <li
                onClick={() => this.props.history.push("/stable")}
                id="first-li"
                className="primary-li"
              >
                <img src={this.props.stables[1].image}></img>
                <div className="carousel-li-bottom-holder">
                  <h2>{this.props.stables[1].name}</h2>
                  <div className="carousel-ratings-container">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <p>12 reviews</p>
                  </div>
                  <p>Booked 5 times today</p>
                </div>
                <div
                  className="carousel-holder-div"
                  id="primary-li"
                  onMouseEnter={() => {
                    this.upwardAnimation("primary-li");
                  }}
                  onMouseLeave={() => {
                    this.leaveAnimation("primary-li");
                  }}
                ></div>
              </li>
              <li
                onClick={() => this.props.history.push("/stable")}
                id="second-li"
              >
                <img src={this.props.stables[2].image}></img>
                <div className="carousel-li-bottom-holder">
                  <h2>{this.props.stables[2].name}</h2>
                  <div className="carousel-ratings-container">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <p>10 reviews</p>
                  </div>
                  <p>Booked 12 times today</p>
                </div>
                <div
                  className="carousel-holder-div"
                  onMouseEnter={() => {
                    this.upwardAnimation("second-li");
                  }}
                  onMouseLeave={() => {
                    this.leaveAnimation("second-li");
                  }}
                ></div>
              </li>
              <li
                onClick={() => this.props.history.push("/stable")}
                id="third-li"
              >
                <img src={this.props.stables[3].image}></img>
                <div className="carousel-li-bottom-holder">
                  <h2>{this.props.stables[3].name}</h2>
                  <div className="carousel-ratings-container">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <p>10 reviews</p>
                  </div>
                  <p>Booked 1 times today</p>
                </div>
                <div
                  className="carousel-holder-div"
                  onMouseEnter={() => {
                    this.upwardAnimation("third-li");
                  }}
                  onMouseLeave={() => {
                    this.leaveAnimation("third-li");
                  }}
                ></div>
              </li>
              <li
                onClick={() => this.props.history.push("/stable")}
                id="fourth-li"
              >
                <img src={this.props.stables[4].image}></img>
                <div className="carousel-li-bottom-holder">
                  <h2>{this.props.stables[4].name}</h2>
                  <div className="carousel-ratings-container">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <p>9 reviews</p>
                  </div>
                  <p>Booked 2 times today</p>
                </div>
                <div
                  className="carousel-holder-div"
                  onMouseEnter={() => {
                    this.upwardAnimation("fourth-li");
                  }}
                  onMouseLeave={() => {
                    this.leaveAnimation("fourth-li");
                  }}
                ></div>
              </li>
              <li
                onClick={() => this.props.history.push("/stable")}
                id="first-li"
                className="secondary-li"
              >
                <img src={this.props.stables[5].image}></img>
                <div className="carousel-li-bottom-holder">
                  <h2>{this.props.stables[5].name}</h2>
                  <div className="carousel-ratings-container">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <p>4 review</p>
                  </div>
                  <p>Booked 3 times today</p>
                </div>
                <div
                  id="secondary-li"
                  className="carousel-holder-div"
                  onMouseEnter={() => {
                    this.upwardAnimation("secondary-li");
                  }}
                  onMouseLeave={() => {
                    this.leaveAnimation("secondary-li");
                  }}
                ></div>
              </li>
              <li
                onClick={() => this.props.history.push("/stable")}
                id="sixth-li"
              >
                <img src={this.props.stables[6].image}></img>
                <div className="carousel-li-bottom-holder">
                  <h2>{this.props.stables[6].name}</h2>
                  <div className="carousel-ratings-container">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <p>11 reviews</p>
                  </div>
                  <p>Booked 21 times today</p>
                </div>
                <div
                  className="carousel-holder-div"
                  onMouseEnter={() => {
                    this.upwardAnimation("sixth-li");
                  }}
                  onMouseLeave={() => {
                    this.leaveAnimation("sixth-li");
                  }}
                ></div>
              </li>
              <li
                onClick={() => this.props.history.push("/stable")}
                id="seventh-li"
              >
                <img src={this.props.stables[7].image}></img>
                <div className="carousel-li-bottom-holder">
                  <h2>{this.props.stables[7].name}</h2>
                  <div className="carousel-ratings-container">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <p>18 reviews</p>
                  </div>
                  <p>Booked 3 times today</p>
                </div>
                <div
                  className="carousel-holder-div"
                  onMouseEnter={() => {
                    this.upwardAnimation("seventh-li");
                  }}
                  onMouseLeave={() => {
                    this.leaveAnimation("seventh-li");
                  }}
                ></div>
              </li>
              <li
                onClick={() => this.props.history.push("/stable")}
                id="eigth-li"
              >
                <img src={this.props.stables[8].image}></img>
                <div className="carousel-li-bottom-holder">
                  <h2>{this.props.stables[8].name}</h2>
                  <div className="carousel-ratings-container">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <p>10 reviews</p>
                  </div>
                  <p>Booked 12 times today</p>
                </div>
                <div
                  className="carousel-holder-div"
                  onMouseEnter={() => {
                    this.upwardAnimation("eigth-li");
                  }}
                  onMouseLeave={() => {
                    this.leaveAnimation("eigth-li");
                  }}
                ></div>
              </li>
            </ul>
          </div>
          <div className="splash-carousel-arrow-container">
            <div
              id="right-arr"
              className="splash-carousel-right-arrow"
              onClick={this.translateX}
            >
              <i id="right>" className="fa fa-angle-right"></i>
            </div>
          </div>
          <div className="splash-carousel-arrow-container2">
            <div
              id="left-arr"
              className="splash-carousel-right-arrow2"
              onClick={this.translateX}
            >
              <i className="fa fa-angle-left"></i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(PopularCarousel);