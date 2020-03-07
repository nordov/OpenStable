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
                            <div className="title">
                                <h1>Overview Area</h1>
                            </div>
                            <div className="reviews">
                                {/* Reviews go here */}
                            </div>
                            <div className="description">
                                Stable description goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </div>
                        </div>
                        <div className="stable-photos">
                            <h1>Photos Area</h1>
                        </div>
                        <div className="stable-tours">
                            <div className="tour"></div>
                        </div>
                        <div className="stable-reviews">
                            <h1>Reviews Area</h1>
                        </div>
                    </div>
                </div>

                <div className="stable-details">
                    <div className="reservation">
                        <h1>Make a reservation</h1>
                    </div>
                    <div className="details">

                    </div>
                </div>

            </div>
        );
    };
}

export default Stable;