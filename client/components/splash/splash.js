import React, { Component } from "react";
import splashCSS from './splash.css';
import PopularCarousel from '../general_layout/popular_stables/popular_stables_carousel';
import FeaturedAreas from '../general_layout/featured_areas/featured_areas';


class Splash extends Component {


  render() {
                     
    return (
      <div>
        <PopularCarousel />
        <FeaturedAreas />
      </div>
    );
  }
}

export default Splash;
