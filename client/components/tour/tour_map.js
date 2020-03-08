import React from 'react';
import { GoogleApiWrapper, Map, Marker, InfoWindow, Polyline } from 'google-maps-react';
import keys from '../../../config/keys';

class TourMap extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
    };
    this.stable = this.props.data.tour.stable
    this.tour = this.props.data.tour
    
    this.onMarkerClick = this.onMarkerClick.bind(this)
    this.onMapClicked = this.onMapClicked.bind(this)
  }

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
    // like waypoint coords
    // we can have an initial start (like starting at the stable)
    // can also add more coords to the array to create a more geodesic route
    const waypoints = [
      {lat: this.stable.latitude, lng: this.stable.longitude}, // starting coordinates - stable lat/lng
      {lat: 37.526466, lng: -122.490738} // end coordinates, but we can add more to make waypoints
    ];
    // allows us to create a boundry to help center the map between to place markers
    let bounds = new this.props.google.maps.LatLngBounds();
    for(let i = 0; i < waypoints.length; i++){
      bounds.extend(waypoints[i]);
    }
    
    return(
        <Map google={this.props.google}
        zoom={17}
        style={this.props.mStyle}
        // call the getCenter function and invoke its lat/lng functions in order to get the center coords
        initialCenter={{
          lat: bounds.getCenter().lat(),
          lng: bounds.getCenter().lng()
        }}
        onClick={this.onMapClicked}
        bounds={bounds}>
          <Marker position={waypoints[0]}
            name={'Start point'}/>
          <Marker position={waypoints[1]}
            name={'End point'}/>
          <Polyline path={waypoints}
            strokeColor="#0000FF"
            strokeOpacity={0.8}
            strokeWeight={2}
            // note: greedy allows for mouse scroll zoom without pressing ctrl/cmd
            gestureHandling="greedy"
            geodesic={true}/>
        </Map>
    )
  }
};

export default GoogleApiWrapper({
  apiKey: keys.mapAPI,
  libraries: ['places']
})(TourMap);