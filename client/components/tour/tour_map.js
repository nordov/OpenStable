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
    // place holders, will need to be passed in through parent
    this.mapOptions = {
      lat: 37.5293531,
      lng: -122.4969606
    };
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
    const triangleCoords = [
      {lat: 37.527404, lng: -122.499431},
      {lat: 37.526466, lng: -122.490738}
    ];
    // allows us to create a boundry to help center the map between to place markers
    let bounds = new this.props.google.maps.LatLngBounds();
    for(let i = 0; i < triangleCoords.length; i++){
      bounds.extend(triangleCoords[i]);
    }
    return(
      <div>
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
          <Marker position={triangleCoords[0]}
            name={'Start point'}/>
          <Marker position={triangleCoords[1]}
            name={'End point'}/>
          <Polyline path={triangleCoords}
            strokeColor="#0000FF"
            strokeOpacity={0.8}
            strokeWeight={2}
            // note: greedy allows for mouse scroll zoom without pressing ctrl/cmd
            gestureHandling="greedy"
            geodesic={true}/>
        </Map>
      </div>
    )
  }
};

export default GoogleApiWrapper({
  apiKey: keys.mapAPI,
  libraries: ['places']
})(TourMap);