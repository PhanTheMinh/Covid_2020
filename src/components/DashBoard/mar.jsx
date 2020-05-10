import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '700px'
};

export class MapContainer extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          stores: [
                {latitude: 21.057788, longitude: 104.868363},
                {latitude: 20.585423, longitude: 105.417679},
                {latitude: 15.235370, longitude: 108.142288}
                ]
        }
      }

      displayMarkers = () => {
        return this.state.stores.map((store, index) => {
          return <Marker key={index} id={index} position={{
           lat: store.latitude,
           lng: store.longitude
         }}
         onClick={() => alert("You clicked me!")} />
        })
      }
  render() {
    return (
      <Map
        onClick
        google={this.props.google}
        zoom={6}
        style={mapStyles}
        initialCenter={{
         lat: 16.123870,
         lng: 106.186722
        }}>
         {this.displayMarkers()}
      </Map>
    );
  }
}


export default GoogleApiWrapper({
  apiKey: 'AIzaSyABmI6zQPZEW5vUWtMuAen2CsXqPoEKlBc'
})(MapContainer);