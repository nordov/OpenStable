import React from 'react';
import { GoogleApiWrapper, Map, Marker, InfoWindow, Polyline } from 'google-maps-react';
import { Query } from 'react-apollo';

import key from '../../../config/keys';
import queries from '../../graphql/queries';
const { FETCH_STABLE } = queries;

class StableMap extends React.Component{
  render(){
    return(
      <Query query={FETCH_STABLE}
        variables={this.props.id}>
          
        </Query>
  )}
};

export default GoogleApiWrapper({
  apiKey: key.mapAPI
})(StableMap);