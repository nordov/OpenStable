import React from 'react';
import SearchCSS from './search.css';
import SearchListItem from './search_list_item';
import { Query, withApollo } from 'react-apollo';
import Queries from '../../graphql/queries'

const { FETCH_STABLES, GET_SELECTED, FETCH_STABLES_BY_CITY } = Queries;

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      stables: [],
      selectedDate: "",
      selectedTime: "",
      selectedPeople: "",
      location: ""
    }
  }

  componentDidMount() {
    const searchCalendar = document.getElementById("calendar-container");
    searchCalendar.id = "calendar-full-container-hidden-search";
  }

  mapStablesToState(data) {
    if (data.stables) this.setState({ stables: data.stables })
    else if (data.stablesbycity) this.setState({ stables: data.stablesbycity })
  }

  mapSelectedToState(data) {
    this.setState({
      selectedDate: data.selectedDate,
      selectedTime: data.selectedTime,
      selectedPeople: data.selectedPeople,
      location: data.location
    })
  }

  render() {
    let query;
    this.state.location === '' ? query = FETCH_STABLES : query = FETCH_STABLES_BY_CITY;
    return (
      <Query query={query} variables={{city: this.state.location}}>
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error: `${error}`</p>;
          if (this.state.stables.length === 0) this.mapStablesToState(data);
          if (data.stables && data.stables[0] !== this.state.stables[0]) this.mapStablesToState(data);
          if (data.stablesbycity && data.stablesbycity[0] !== this.state.stables[0]) this.mapStablesToState(data);
          return (
            <Query query={GET_SELECTED}>
              {({ loading, error, data }) => {
                if (loading) return <p>Loading...</p>;
                if (error) return <p>Error: `${error}`</p>;
                if (this.state.selectedDate === "" 
                  || this.state.selectedDate !== data.selectedDate
                  || this.state.selectedTime !== data.selectedTime
                  || this.state.selectedPeople !== data.selectedPeople
                  || this.state.location !== data.location) this.mapSelectedToState(data);
                return (
                  <div className="search-full-body-container">
                    <div className="search-left-side-container">
                      <div className="search-map-image-container">
                        <div className="search-map-button">
                          <i className="far fa-map"></i>
                          <a href="#">Map</a>
                        </div>
                      </div>
                      <div className="search-price-container">
                        <div className="search-price-text">
                          <i className="fas fa-credit-card"></i>
                          <h2>Price</h2>
                        </div>
                        <div className="search-price-filters-container">
                          <ul>
                            <li>$$</li>
                            <li>$$$</li>
                            <li>$$$$</li>
                          </ul>
                        </div>
                      </div>
                      <div className="search-neighborhood-container">
                        <div className="search-neighborhood-text-container">
                          <i className="fas fa-map-marker-alt"></i>
                          <h2>Neighborhood</h2>
                        </div>
                        <div className="search-neighborhood-inputs">
                          <label className="search-custom-checkmark">
                            <input type="checkbox" />
                            <span></span>
                          </label>
                          <span>Neighborhood1</span>
                        </div>
                        <div className="search-neighborhood-inputs">
                          <label className="search-custom-checkmark">
                            <input type="checkbox" />
                            <span></span>
                          </label>
                          <span>Neighborhood2</span>
                        </div>
                        <div className="search-neighborhood-inputs">
                          <label className="search-custom-checkmark">
                            <input type="checkbox" />
                            <span></span>
                          </label>
                          <span>Neighborhood3</span>
                        </div>
                        <div className="search-neighborhood-inputs">
                          <label className="search-custom-checkmark">
                            <input type="checkbox" />
                            <span></span>
                          </label>
                          <span>Neighborhood4</span>
                        </div>
                        <div className="search-divider-line"></div>
                      </div>
                      <div className="search-time-container">
                        <div className="search-neighborhood-text-container">
                          <i id="fa-clock" className="far fa-clock"></i>
                          <h2>Time</h2>
                        </div>
                        <div className="search-neighborhood-inputs">
                          <label className="search-custom-checkmark">
                            <input type="checkbox" />
                            <span></span>
                          </label>
                          <span>Newly Added Stables</span>
                        </div>
                        <div className="search-neighborhood-inputs">
                          <label className="search-custom-checkmark">
                            <input type="checkbox" />
                            <span></span>
                          </label>
                          <span>7:00 PM Only</span>
                        </div>
                      </div>
                    </div>
                    <div className="search-right-side-container">
                      <div className="search-top-header-container">
                        <h3>9 stables available</h3>
                        <button>
                          <p>Featured</p>
                          <i className="fas fa-angle-down"></i>
                        </button>
                      </div>
                      <SearchListItem stables={this.state.stables} time={this.state.selectedTime}/>
                    </div>
                    <div className="search-empty-right-side"></div>
                  </div>
                  
                )
              }}
            </Query>
          );
        }}
      </Query>
    )


    // return (
    //   <div className="search-full-body-container">
    //     <div className="search-left-side-container">
    //       <div className="search-map-image-container">
    //         <div className="search-map-button">
    //           <i className="far fa-map"></i>
    //           <a href="#">Map</a>
    //         </div>
    //       </div>
    //       <div className="search-price-container">
    //         <div className="search-price-text">
    //           <i className="fas fa-credit-card"></i>
    //           <h2>Price</h2>
    //         </div>
    //         <div className="search-price-filters-container">
    //           <ul>
    //             <li>$$</li>
    //             <li>$$$</li>
    //             <li>$$$$</li>
    //           </ul>
    //         </div>
    //       </div>
    //       <div className="search-neighborhood-container">
    //         <div className="search-neighborhood-text-container">
    //           <i className="fas fa-map-marker-alt"></i>
    //           <h2>Neighborhood</h2>
    //         </div>
    //         <div className="search-neighborhood-inputs">
    //           <label className="search-custom-checkmark">
    //             <input type="checkbox" />
    //             <span></span>
    //           </label>
    //           <span>Neighborhood1</span>
    //         </div>
    //         <div className="search-neighborhood-inputs">
    //           <label className="search-custom-checkmark">
    //             <input type="checkbox" />
    //             <span></span>
    //           </label>
    //           <span>Neighborhood2</span>
    //         </div>
    //         <div className="search-neighborhood-inputs">
    //           <label className="search-custom-checkmark">
    //             <input type="checkbox" />
    //             <span></span>
    //           </label>
    //           <span>Neighborhood3</span>
    //         </div>
    //         <div className="search-neighborhood-inputs">
    //           <label className="search-custom-checkmark">
    //             <input type="checkbox" />
    //             <span></span>
    //           </label>
    //           <span>Neighborhood4</span>
    //         </div>
    //         <div className="search-divider-line"></div>
    //       </div>
    //       <div className="search-time-container">
    //         <div className="search-neighborhood-text-container">
    //           <i id="fa-clock" className="far fa-clock"></i>
    //           <h2>Time</h2>
    //         </div>
    //         <div className="search-neighborhood-inputs">
    //           <label className="search-custom-checkmark">
    //             <input type="checkbox" />
    //             <span></span>
    //           </label>
    //           <span>Newly Added Stables</span>
    //         </div>
    //         <div className="search-neighborhood-inputs">
    //           <label className="search-custom-checkmark">
    //             <input type="checkbox" />
    //             <span></span>
    //           </label>
    //           <span>7:00 PM Only</span>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="search-right-side-container">
    //       <div className="search-top-header-container">
    //         <h3>3 stables available</h3>
    //         <button>
    //           <p>Featured</p>
    //           <i className="fas fa-angle-down"></i>
    //         </button>
    //       </div>
    //       <SearchListItem />
    //     </div>
    //     <div className="search-empty-right-side"></div>
    //   </div>
    // );
  }
}

export default withApollo(Search);