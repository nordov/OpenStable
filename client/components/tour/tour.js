import React, { Component } from "react";
import tourCSS from "./tour.css";
import TourMap from './tour_map';

const mStyle = {
    width: '1600px',
    height: '500px'
};

class Tour extends Component {

    render() {
        return (
            <div className="tour-container">
                <div className="tour-map">
                    <TourMap mStyle={mStyle} />
                </div>
                <h1 className="tour-title">{`Cool Tour`}</h1>
                <div className="tour-display">
                <div className="tour-main">
                    <div className="tour-navigation">
                        <ul>
                            <li>Rating</li>
                            <li>Reviews</li>
                            <li>Tours</li>
                            <li>Reviews</li>
                        </ul>
                    </div>
                    <div className="tour-overview">
                        <h1>Overview Area</h1>
                    </div>
                    <div className="tour-photos">
                        <h1>Photos Area</h1>
                    </div>
                    <div className="tour-tours">
                        <h1>Tours Area</h1>
                    </div>
                    <div className="tour-reviews">
                        <h1>Reviews Area</h1>
                    </div>
                </div>
                <div className="tour-details">
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