import React, { Component } from "react";
import { Query } from 'react-apollo';
import { HashLink as Link } from 'react-router-hash-link'; // allows for anchors in react
import tourCSS from "./tour.css";

import queries from '../../graphql/queries';
const { FETCH_TOUR } = queries;
import TourMap from './tour_map';
import Photos from './photos';
import Horse from './horse';
import Review from './review';

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
                        return(
                            <div className="tour-container">
                                <div className="tour-map">
                                    {/* <TourMap mStyle={mStyle} data={data} /> */}
                                </div>
                                <div className="tour-nav">
                                    {/* nav needs to sticky */}
                                    <div className="tour-nav-links">
                                        <Link to="tour#overview">Overview</Link>
                                        <Link to="tour#photos">Photos</Link>
                                        <Link to="tour#horses">Horses</Link>
                                        <Link to="tour#reviews">Reviews</Link>
                                    </div>
                                </div>
                                <h1 className="tour-title"><a id="overview">{data.tour.name}</a></h1>
                                <div className="tour-display">
                                <div className="tour-main">
                                    <div className="tour-navigation">
                                        <ul>
                                            <li>Rating</li>
                                            <li>Reviews</li>
                                        </ul>
                                    </div>
                                    <div className="tour-main-desc">
                                        {data.tour.description}
                                        {/* At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. */}
                                    </div>
                                    <div className="tour-components">
                                        <h1><a id="photos">Photos Area</a></h1>
                                        <Photos />
                                    </div>
                                    <div className="tour-components">
                                        <h1><a id="horses">Horses Area</a></h1>
                                        <Horse />
                                    </div>
                                    <div className="tour-components">
                                        <h1><a id="reviews">Reviews Area</a></h1>
                                        <Review />
                                    </div>
                                </div>
                                {/* sidebar */}
                                <div className="tour-details">
                                    <div className="reservation">
                                        <h1>Make a reservation</h1>
                                    </div>
                                    <div className="details">
                                        <div className="details-section">
                                            <img src="/static/images/tour-start-time.png"/>
                                            {data.tour.start_time}
                                        </div>
                                        <div className="details-section">
                                            <img src="/static/images/tour-capacity.png"/>
                                            {`${data.tour.capacity}`}
                                        </div>
                                        <div className="details-section">
                                            <img src="/static/images/tour-duration.png"/>
                                            {`${data.tour.duration} mins`}
                                        </div>
                                        <div className="details-section">
                                            <img src="/static/images/tour-difficulty.png"/>
                                            {data.tour.difficulty}
                                        </div>
                                        <div className="details-section">
                                            <img src="/static/images/tour-terrain.png"/>
                                            {data.tour.terrain}
                                        </div>
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