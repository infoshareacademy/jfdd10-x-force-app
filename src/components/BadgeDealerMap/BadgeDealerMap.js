import React, { Component } from "react";
import PropTypes from "prop-types";
// import { render } from "react-dom";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import BadgesOfDealerView from "../BadgesOfDealerView/BadgesOfDealerView";

import "./BadgeDealerMap.css";

class BadgeDealerMap extends Component {
  static propTypes = {
    dealers: PropTypes.array,
    center: PropTypes.array,
    badges: PropTypes.array,
    badgeDealerViewId: PropTypes.number,
    // dealer: PropTypes.string,
  };

  render() {
    return (
      <div className="BadgeDealerMap">
        <div id="mapid">
          {
            <Map center={this.props.center} zoom={17}>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
              />
              {this.props.dealers.map(trainer => (
                <Marker
                  key={trainer.id}
                  center={trainer.position}
                  position={trainer.position}
                  style={{}}
                >
                  <Popup className="map">
                    <p>
                      {trainer.name}
                      {trainer.surname}
                    </p>
                    {
                      <img
                        src={trainer.avatar}
                        style={{ height: 100, width: 100 }}
                        alt=""
                      />
                    }
                    <div className="badgesMap">
                      <BadgesOfDealerView
                        dealer={this.props.dealer}
                        badges={this.props.badges}
                        dealerId={this.props.dealerId}
                        onlyLogo={true}
                      />
                    </div>
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
