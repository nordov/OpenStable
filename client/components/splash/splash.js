import React, { Component } from "react";
import splashCSS from './splash.css';
import PopularCarousel from '../general_layout/popular_stables/popular_stables_carousel';
import FeaturedAreas from '../general_layout/featured_areas/featured_areas';
import CalendarWidget from '../general_layout/calendar/calendar';


class Splash extends Component {

  render() {
                     
    return (
      <div>
        <PopularCarousel />
        <FeaturedAreas />
        <CalendarWidget />
      </div>
    );
  }
}

export default Splash;
