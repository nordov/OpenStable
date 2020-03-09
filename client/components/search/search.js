import React from 'react';
import SearchCSS from './search.css';
import SearchListItem from './search_list_item';
import { Query } from 'react-apollo';
import Queries from '../../graphql/queries'

const { FETCH_STABLES } = Queries;

class Search extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const searchCalendar = document.getElementById("calendar-container");
    searchCalendar.id = "calendar-full-container-hidden-search";
  }

  render() {
    return (
      <Query query={FETCH_STABLES}>
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error: `${error}`</p>;
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
                  <h3>3 stables available</h3>
                  <button>
                    <p>Featured</p>
                    <i className="fas fa-angle-down"></i>
                  </button>
                </div>
                <SearchListItem stables={data.stables}/>
              </div>
              <div className="search-empty-right-side"></div>
            </div>
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

export default Search;