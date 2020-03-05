import React from 'react';
import { GoogleApiWrapper, InfoWindow, Map, Marker } from 'google-maps-react';
import { Query } from 'react-apollo';
import keys from '../../../config/keys';
import queries from '../../graphql/queries';
const { FETCH_STABLE } = queries;
import mapCSS from './stable.css'
export class StableMap extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
    };
    // modify once integrated with the stable show page
    this.phUser = {
      userLoc: 'san jose'
    };

    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onMapClicked = this.onMapClicked.bind(this);
  }
  // encodes url for map directions
  // spaces are joined with '+'
  // commas are joined with '%2C
  encodeURL(address=null, city=null, state=null){
    const urlArr = [address, city, state];
    for(let i = 0; i < urlArr.length; i++){
      let el = urlArr[i];
      if(el){
        urlArr[i] = el.split(' ').join('+');
      }
    }
    return urlArr.join('%2C')
  }
  // the following methods are to toggle the info window
  onMarkerClick(props, marker, e){
    return this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }
  onMapClicked(){
    if(this.setState.showingInfoWindow){
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  }
  render(){
    return(
      <div>
        <Query query={FETCH_STABLE}
          variables={{id: this.props.id}}>
          {({ loading, error, data }) => {
            if(loading) return <p>Loading...</p>
            if(error) return <p>Error</p>
            // map options set where it will initally center the map
            const mapOptions = {
              lat: data.stable.latitude,
              lng:data.stable.longitude,
            };
            return(
              <div className="map">
                <Map google={this.props.google}
                  zoom={16}
                  style={this.props.mapStyle}
                  initialCenter={mapOptions}
                  // below are controls, set to false to have a cleaner map
                  mapTypeControl={false}
                  fullscreenControl={false}
                  zoomControl={false}
                  streetViewControl={false}
                  gestureHandling="greedy"
                  onClick={this.onMapClicked}>
                    <Marker onClick={this.onMarkerClick}
                      name={data.stable.name}/>
                      {/* manages what will display in the popup window when clicking on a place marker */}
                    <InfoWindow marker={this.state.activeMarker}
                      visible={this.state.showingInfoWindow}>
                        <div className="stable-map-info-window">
                          <h3 className="stable-map-info-window-header">
                            <a className="stable-map-info-window-directions" href={`https://www.google.com/maps/dir/?api=1&origin=${this.encodeURL(null, this.phUser.userLoc)}&destination=${this.encodeURL(data.stable.address, data.stable.city, data.stable.state)}&travelmode=driving`}
                            target="blank">
                              {this.state.selectedPlace.name}
                              </a></h3>
                          <p className="stable-map-info-window-address">{`${data.stable.address}, ${data.stable.city}, ${data.stable.state}`}</p>
                          <p className="stable-map-info-window-description">{data.stable.description}</p>
                        </div>
                      </InfoWindow>
                  </Map>
              </div>
            )
          }}
        </Query>
      </div>
    )
  }
};
export default GoogleApiWrapper({
  apiKey: keys.mapAPI
})(StableMap);