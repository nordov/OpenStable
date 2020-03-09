import React from 'react';
import SearchCSS from './search.css';

class SearchListItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <ul>
        {
          this.props.stables.map(stable => (
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
                  <a href="#">6:30 PM</a>
                  <a href="#">6:45 PM</a>
                  <a href="#">7:00 PM</a>
                  <a href="#">7:15 PM</a>
                  <a href="#">7:30 PM</a>
                </div>
              </div>
            </li>
          ))
        }
      </ul>
    );
  }
}

export default SearchListItem;