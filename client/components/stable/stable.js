import React, { Component } from "react";
import stableCSS from "./stable.css";

class Stable extends Component{

    render(){
        return(
            <div className="stable-display">
                <div className="stable-main-wrap">
                    <div className="stable-main">
                        <div className="stable-navigation">
                            <ul>
                                <li><a>Overview</a></li>
                                <li><a>Photos</a></li>
                                <li><a>Tours</a></li>
                                <li><a>Reviews</a></li>
                            </ul>
                        </div>

                        <div className="stable-overview">
                            <div className="title stable-block">
                                <h1>Overview Area</h1>
                            </div>
                            <div className="reviews stable-block">
                                {/* Reviews go here */}
                                <img src="/static/images/ratings_below_title_placeholder.png"></img>
                            </div>
                            <div className="description stable-block">
                                Stable description goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </div>
                        </div>
                        <div className="photos stable-block">
                            <h2>Photos</h2>
                            <img src="/static/images/placeholder_images.png"></img>
                        </div>
                        <div className="tours stable-block">
                            <h2>Available Tours</h2>
                            <div className="tour-listing">
                                <div className="tour-image">
                                    <img src="/static/images/beach-tour.jpg"></img>                                
                                </div>
                                <div className="tour-detail">
                                    <h3>Tour Name</h3>
                                    <p>Tour descriptio. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    <ul>
                                        <li>
                                            <i className="fa fa-hourglass-o"></i>
                                            Duration
                                        </li>
                                        <li>
                                            <i className="fa fa-signal"></i>
                                            Difficulty
                                        </li>
                                        <li>
                                            <i className="fa fa-map-o"></i>
                                            Terrain
                                        </li>
                                        <li>
                                            <i className="fa fa-users"></i>
                                            Capacity
                                        </li>
                                        <li>
                                            <i className="fa fa-clock-o"></i>
                                            Start Time
                                        </li>
                                    </ul>
                                    <button>Make Reservation</button>
                                </div>
                            </div>
                            <div className="tour-listing">
                                <div className="tour-image">
                                    <img src="/static/images/mountain-tour.jpg"></img>
                                </div>
                                <div className="tour-detail">
                                    <h3>Tour Name</h3>
                                    <p>Tour descriptio. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    <ul>
                                        <li>
                                            <i className="fa fa-hourglass-o"></i>
                                            Duration
                                        </li>
                                        <li>
                                            <i className="fa fa-signal"></i>
                                            Difficulty
                                        </li>
                                        <li>
                                            <i className="fa fa-map-o"></i>
                                            Terrain
                                        </li>
                                        <li>
                                            <i className="fa fa-users"></i>
                                            Capacity
                                        </li>
                                        <li>
                                            <i className="fa fa-clock-o"></i>
                                            Start Time
                                        </li>
                                    </ul>
                                    <button>Make Reservation</button>
                                </div>
                            </div>
                            <div className="tour-listing">
                                <div className="tour-image">
                                    <img src="/static/images/desert-tour.jpg"></img>
                                </div>
                                <div className="tour-detail">
                                    <h3>Tour Name</h3>
                                    <p>Tour descriptio. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    <ul>
                                        <li>
                                            <i className="fa fa-hourglass-o"></i>
                                            Duration
                                        </li>
                                        <li>
                                            <i className="fa fa-signal"></i>
                                            Difficulty
                                        </li>
                                        <li>
                                            <i className="fa fa-map-o"></i>
                                            Terrain
                                        </li>
                                        <li>
                                            <i className="fa fa-users"></i>
                                            Capacity
                                        </li>
                                        <li>
                                            <i className="fa fa-clock-o"></i>
                                            Start Time
                                        </li>
                                    </ul>
                                    <button>Make Reservation</button>
                                </div>
                            </div>
                        </div>
                        <div className="stable-reviews stable-block">
                            {/* Reviews go here */}
                            {/* <img src="/static/images/placeholder_reviews.png"></img> */}
                        </div>
                    </div>
                </div>

                {/* <div className="stable-details">
                    <div className="reservation">
                        <h1>Make a reservation</h1>
                    </div>
                    <div className="details">

                    </div>
                </div> */}

            </div>
        );
    };
}

export default Stable;