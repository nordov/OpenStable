import React, { Component } from "react";
import tourCSS from "./tour.css";
import TourMap from './tour_map';


class Tour extends Component {

    render() {
        return (
            <div>
                <h1>Tours Component</h1>
                <TourMap />
                <div className="stable-display">
                <div className="stable-main">
                    <div className="stable-navigation">
                        <ul>
                            <li>Overview</li>
                            <li>Photos</li>
                            <li>Tours</li>
                            <li>Reviews</li>
                        </ul>
                    </div>
                    <div className="stable-overview">
                        <h1>Overview Area</h1>
                    </div>
                    <div className="stable-photos">
                        <h1>Photos Area</h1>
                    </div>
                    <div className="stable-tours">
                        <h1>Tours Area</h1>
                    </div>
                    <div className="stable-reviews">
                        <h1>Reviews Area</h1>
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
            </div>
        );
    };
}

export default Tour;