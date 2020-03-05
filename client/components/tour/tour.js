import React, { Component } from "react";
import { Query } from 'react-apollo';
import tourCSS from "./tour.css";
import TourMap from './tour_map';
import queries from '../../graphql/queries';

const { FETCH_TOUR } = queries;

const mStyle = {
    width: '1600px',
    height: '500px'
};

class Tour extends Component {

    render() {
        return (
            <Query query={FETCH_TOUR}
                variables={{id: "5e5e8869beba411e0ac8eba1"}}>
                    {({loading, error, data}) => {
                        if(loading) return <p>Loading...</p>
                        if(error) return <p>Error...</p>
                        console.log(data)
                        return(
                            <div className="tour-container">
                                <div className="tour-map">
                                    <TourMap mStyle={mStyle} />
                                </div>
                                <h1 className="tour-title">{data.tour.name}</h1>
                                <div className="tour-display">
                                <div className="tour-main">
                                    <div className="tour-navigation">
                                        <ul>
                                            <li>Rating</li>
                                            <li>Reviews</li>
                                            <li>
                                                <img src="/static/images/tour-duration.png"/>
                                                {`${data.tour.duration} minutes`}</li>
                                            <li>
                                                <img src="/static/images/tour-terrain.png"/>
                                                {`${data.tour.terrain}`}</li>
                                        </ul>
                                    </div>
                                    <div className="tour-main-desc">
                                        {data.tour.description}
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
                                {/* sidebar */}
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
                    }}





            </Query>
        );
    };
}

export default Tour;