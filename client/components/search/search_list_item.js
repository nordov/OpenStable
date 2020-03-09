import React from 'react';
import SearchCSS from './search.css';

class SearchListItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <ul>
        <li>
          <img src="https://resizer.otstatic.com/v2/photos/legacy/2/26143634.jpg"></img>
          <div className="search-li-container">
            <a href="#">Stable name</a>
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
              <a href="#">6:30 PM</a>
              <a href="#">6:45 PM</a>
              <a href="#">7:00 PM</a>
              <a href="#">7:15 PM</a>
              <a href="#">7:30 PM</a>
            </div>
          </div>
        </li>
      </ul>
    );
  }
}

export default SearchListItem;