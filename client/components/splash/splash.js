import React, { Component } from "react";
import splashCSS from './splash.css';
import PopularCarousel from '../general_layout/popular_stables/popular_stables_carousel';
import FeaturedAreas from '../general_layout/featured_areas/featured_areas';
import { Query } from 'react-apollo';
import Queries from '../../graphql/queries'

const { FETCH_STABLES } = Queries;

class Splash extends Component {

  render() {

    return (
      <Query query={FETCH_STABLES}>
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error: `${error}`</p>;
          return (
            <div>
              <PopularCarousel stables={data.stables}/>
              <FeaturedAreas />
            </div>
          )
        }}
      </Query>
    )
                     
    // return (
    //   <div>
    //     <PopularCarousel />
    //     <FeaturedAreas />
    //   </div>
    // );
  }
}

export default Splash;
