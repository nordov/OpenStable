import React from 'react';
import SearchCSS from './search.css';
import { withRouter } from 'react-router-dom';

class SearchListItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      times: []
    }

    this.createTimes = this.createTimes.bind(this);
  }

  createTimes() {
    switch (this.props.time) {
      case "9:00AM":
        return this.setState({ times: ["8:30AM", "8:45AM", "9:00AM", "9:15AM", "9:30AM"] })
      case "10:00AM":
        return this.setState({ times: ["9:30AM", "9:45AM", "10:00AM", "10:15AM", "10:30AM"] })
      case "11:00AM":
        return this.setState({ times: ["10:30AM", "10:45AM", "11:00AM", "11:15AM", "11:30AM"] })
      case "12:00PM":
        return this.setState({ times: ["11:30AM", "11:45AM", "12:00PM", "12:15PM", "12:30PM"] })
      case "1:00PM":
        return this.setState({ times: ["12:30PM", "12:45PM", "1:00PM", "1:15PM", "1:30PM"] })
      case "2:00PM":
        return this.setState({ times: ["1:30PM", "1:45PM", "2:00PM", "2:15PM", "2:30PM"] })
      case "3:00PM":
        return this.setState({ times: ["2:30PM", "2:45PM", "3:00PM", "3:15PM", "3:30PM"] })
      case "4:00PM":
        return this.setState({ times: ["3:30PM", "3:45PM", "4:00PM", "4:15PM", "4:30PM"] })
      case "5:00PM":
        return this.setState({ times: ["4:30PM", "4:45PM", "5:00PM", "5:15PM", "5:30PM"] })
      case "6:00PM": 
        return this.setState({ times: ["5:30PM", "5:45PM", "6:00PM", "6:15PM", "6:30PM"] })
      default:
        return;
    };
  };

  render() {
    if (this.state.times.length < 1 || this.state.times[2] !== this.props.time) this.createTimes();
    return (
      <ul>
        {
          this.props.stables.map(stable => (
            <li key={stable.id}>
              <img src={stable.image} onClick={() => this.props.history.push("/stable")}></img>
              <div className="search-li-container">
                <a href="/#/stable">{stable.name}</a>
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
                  <span>{stable.city}</span>
                </div>
                <div className="search-li-timeslots-container">
                  <a href="#/book">{this.state.times[0]}</a>
                  <a href="#/book">{this.state.times[1]}</a>
                  <a href="#/book">{this.state.times[2]}</a>
                  <a href="#/book">{this.state.times[3]}</a>
                  <a href="#/book">{this.state.times[4]}</a>
                </div>
                <p className="cities-stable-description-p">{stable.description}</p>
                <p className="cities-stable-address-p">{stable.address} – {stable.city}, {stable.state}</p>
              </div>
            </li>
          ))
        }
      </ul>
    );
  }
}

export default withRouter(SearchListItem);