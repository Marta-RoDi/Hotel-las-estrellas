import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker, InfoWindow } from "google-maps-react";

export class MapGoogle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
    };

    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onMapClick = this.onMapClick.bind(this);
  }

  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  };
  onMapClick = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
    const mapStyles = {
      width: "100%",
      height: "100%",
      position: "absolute"
    };
    return (
      <div>
        <Map
          google={this.props.google}
          zoom={10}
          onClick={this.onMapClick}
          style={mapStyles}
          initialCenter={{ lat: 40.158998, lng: -3.619303 }}
          zoomControl={true}
          mapTypeControl={false}
          mapTypeControl={false}
          
        >
          <Marker
            onClick={this.onMarkerClick}
            title={"Hotel Las Estrellas"}
            position={{ lat: 40.162607, lng: -3.624637 }}
            name={"Hotel Las Estrellas"}
          />
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
          >
            <p className="map-text">Hotel Las Estrellas</p>
            <p className="map-text">Calle Las Estrellas 73. Ciempozuelos, Madrid</p>
            <a className="map-go" target="_blank" href="https://www.google.com/maps/dir//Hotel+Las+Estrellas,+Calle+de+las+Estrellas,+73,+28350+Ciempozuelos,+Madrid,+Spain/@40.1623854,-3.6269057,17z/data=!4m20!1m10!3m9!1s0xd421bd25473eb55:0xe752daaab6cf62f6!2sHotel+Las+Estrellas!5m3!1s2019-10-31!4m1!1i2!8m2!3d40.1623854!4d-3.6247117!4m8!1m0!1m5!1m1!1s0xd421bd25473eb55:0xe752daaab6cf62f6!2m2!1d-3.6247117!2d40.1623854!3e3?hl=en">Como llegar</a>
          </InfoWindow>
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDUeQXCyJDlhOtCB8JwWAk8zCxpjk6k-jo"
})(MapGoogle);
