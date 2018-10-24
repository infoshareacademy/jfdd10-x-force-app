import React, { Component } from "react";
import PropTypes from "prop-types";
// import { render } from "react-dom";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import BadgesOfDealerView from "../BadgesOfDealerView/BadgesOfDealerView";

import "./BadgeDealerMap.css";
import BadgeList from "../BadgeList/BadgeList";

class BadgeDealerMap extends Component {
  static propTypes = {
    dealers: PropTypes.array,
    center: PropTypes.array,
    badges: PropTypes.array,
    badgeDealerViewId: PropTypes.number,
    trainerObject: PropTypes.array
  };

  render() {
    // const badgeDealerViewId = this.props.match.params.badgeDealerViewId;
    // const trainerObject = this.state.trainers.find(
    //   trainer => trainer.id === parseInt(badgeDealerViewId)
    // );
    

    // if (badgeDealerViewId === undefined) {
    //   return <p>Loading badge...</p>;
    // }
    // if (trainerObject === undefined) {
    //   return <p>Loading badge...</p>;
    // }
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
                    {trainer.listOfBadges.map(badge => (
                      <BadgesOfDealerView
                      trainerObject={this.props.trainerObject}
                      badgeDealerViewId={this.props.badgeDealerViewId}
                      trainers={this.props.trainers}
                      badges={this.props.badges}
                    />

                    ))}
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
