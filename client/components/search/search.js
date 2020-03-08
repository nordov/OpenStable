import React from 'react';
import SearchCSS from './search.css';

class Search extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="search-full-body-container">
        <div className="search-left-side-container">
          <div className="search-map-image-container">
            <div className="search-map-button">
              <i class="far fa-map"></i>
              <a href="#">Map</a>
            </div>
          </div>
          <div className="search-price-container">
            <div className="search-price-text">
              <i class="fas fa-credit-card"></i>
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
            <div class="search-neighborhood-text-container">
              <i class="fas fa-map-marker-alt"></i>
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
            <div class="search-neighborhood-text-container">
              <i id="fa-clock" class="far fa-clock"></i>
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
            <h3>46 stables available</h3>
            <button>
              <p>Featured</p>
              <i class="fas fa-angle-down"></i>
            </button>
          </div>
          <ul>
            <li>
              <img src="https://resizer.otstatic.com/v2/photos/legacy/2/26143634.jpg"></img>
              <div className="search-li-container">
                <a href="#">Stable name</a>
                <div className="search-ratings-container">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <p>Awesome</p>
                </div>
                <div className="search-li-info-container">
                  <span>$$</span>
                  <span>Neighborhood</span>
                </div>
                <div className="search-li-timeslots-container">
                  <a href="#">6:30 PM</a>
                  <a href="#">6:45 PM</a>
                  <a href="#">7:00 PM</a>
                  <a href="#">7:15 PM</a>
                  <a href="#">7:30 PM</a>
                </div>
              </div>
            </li>
            <li>
              <img src="https://resizer.otstatic.com/v2/photos/legacy/2/26143634.jpg"></img>
              <div className="search-li-container">
                <a href="#">Stable name</a>
                <div className="search-ratings-container">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <p>Awesome</p>
                </div>
                <div className="search-li-info-container">
                  <span>$$</span>
                  <span>Neighborhood</span>
                </div>
                <div className="search-li-timeslots-container">
                  <a href="#">6:30 PM</a>
                  <a href="#">6:45 PM</a>
                  <a href="#">7:00 PM</a>
                  <a href="#">7:15 PM</a>
                  <a href="#">7:30 PM</a>
                </div>
              </div>
            </li>
            <li>
              <img src="https://resizer.otstatic.com/v2/photos/legacy/2/26143634.jpg"></img>
              <div className="search-li-container">
                <a href="#">Stable name</a>
                <div className="search-ratings-container">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <p>Awesome</p>
                </div>
                <div className="search-li-info-container">
                  <span>$$</span>
                  <span>Neighborhood</span>
                </div>
                <div className="search-li-timeslots-container">
                  <a href="#">6:30 PM</a>
                  <a href="#">6:45 PM</a>
                  <a href="#">7:00 PM</a>
                  <a href="#">7:15 PM</a>
                  <a href="#">7:30 PM</a>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="search-empty-right-side"></div>
      </div>
    );
  }
}

export default Search;