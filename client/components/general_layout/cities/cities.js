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
                  <SearchListItem stables={data.stables} />
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