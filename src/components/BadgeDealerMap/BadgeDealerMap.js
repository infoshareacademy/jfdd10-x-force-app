import React, { Component } from "react";
import PropTypes from "prop-types";
// import { render } from "react-dom";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";

import "./BadgeDealerMap.css";

class BadgeDealerMap extends Component {
  static propTypes = {
    dealers: PropTypes.array,
    center: PropTypes.array
  };

  // state = {
  //   trainers: []
  // };

  // onMapClick(e) {
  //   alert("You clicked the map at " + e.latlng);
  // }

  // componentDidMount() {
  //   fetch("/data/trainers.json")
  //     .then(response => response.json())
  //     .then(trainers => this.setState({ trainers: trainers }));
  // }

  render() {
    // const position = [54.403277, 18.569947];
    return (
      <div className="BadgeDealerMap">
        <div id="mapid">
          {
            <Map center={this.props.center} zoom={18}>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
              />
              {this.props.dealers.map(trainer => (
                <Marker key={trainer.id} center={trainer.position} position={trainer.position}>
                  <Popup>
                    {<img src={trainer.avatar} alt="" />}
                    {trainer.description}
                  </Popup>
                </Marker>
              ))}
            </Map>
          }
        </div>
      </div>
    );
  }
}

export default BadgeDealerMap;
