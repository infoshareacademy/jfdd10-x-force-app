import React, { Component } from "react";
// import PropTypes from "prop-types";
// import { render } from "react-dom";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";

import "./BadgeDealerMap.css";

class BadgeDealerMap extends Component {
  static propTypes = {};

  state = {
    trainers: []
  };

  onMapClick(e) {
    alert("You clicked the map at " + e.latlng);
  }

  componentDidMount() {
    fetch("/data/trainers.json")
      .then(response => response.json())
      .then(trainers => this.setState({ trainers: trainers }));
  }

  render() {
    const position = [54.401347, 18.571755];
    return (
      <div className="BadgeDealerMap">
        <div id="mapid">
          {
            <Map
            
              center={position}
             
              zoom={13}
              onclick={this.onMapClick}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
              />
              {this.state.trainers.map(
                trainer =>
                <Marker position={trainer.position}>
                  <Popup>
                    A pretty CSS3 popup.
                    <br />
                    Easily customizable.
                  </Popup>
                </Marker>
              )}
            </Map>
          }
        </div>
      </div>
    );
  }
}

export default BadgeDealerMap;
