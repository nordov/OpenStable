import React from 'react';
import './cities.css';
import BayAreaCarousel from "../bayarea_stables/bayarea_stables_carousel";

import { Query } from 'react-apollo';
import Queries from '../../../graphql/queries'
import SearchListItem from '../../search/search_list_item';




class Cities extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { FETCH_STABLES } = Queries;
    
    return (
      <div>
        <BayAreaCarousel />
        <Query query={FETCH_STABLES}>          
          {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error: `${error}`</p>;
            return (
              <div className="search-full-body-container">
                <div className="search-right-side-container">
                  {/* <SearchListItem stables={data.stables} /> */}
                  <ul>
                    {
                      data.stables.map(stable => (
                        <li>
                          <img src={stable.image}></img>
                          <div className="search-li-container">
                            <a href="#">{stable.name}</a>
                            <div className="search-ratings-container">
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <p>Awesome</p>
                            </div>
                            <div className="search-li-info-container">
                              <span>$$</span>
                              <span>Neighborhood</span>
                            </div>
                            <div className="search-li-timeslots-container">
                              <a href="#/book">6:30 PM</a>
                              <a href="#/book">6:45 PM</a>
                              <a href="#/book">7:00 PM</a>
                              <a href="#/book">7:15 PM</a>
                              <a href="#/book">7:30 PM</a>
                            </div>
                          </div>
                        </li>
                      ))
                    }
                  </ul>
                </div>
              </div>
            );
          }}
        </Query>
      </div>
    )
  }
}

export default Cities;