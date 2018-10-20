import React, { Component } from "react";
import BadgeDealerMap from "../BadgeDealerMap/BadgeDealerMap";
// import PropTypes from "prop-types";
import BadgesOfDealerView from "../BadgesOfDealerView/BadgesOfDealerView";
import BadgeList from "../BadgeList/BadgeList";

import "./BadgeDealerView.css";

class BadgeDealerView extends Component {
  // static propTypes = {};

  state = {
    dealers: [],
    badges: [],
    trainerId: null
  };

  componentDidMount() {
    fetch("/data/trainers.json")
      .then(response => response.json())
      .then(x => this.setState({ dealers: x }));

    fetch("/data/badges.json")
      .then(response => response.json())
      .then(badge => this.setState({ badges: badge }));
  }

  render() {
    const dealerId = parseInt(this.props.match.params.badgeDealerViewId);
    const trainerId = this.props.match.params.trainerId;
    const trainerObject = this.state.dealers.find(
      trainer => trainer.id === parseInt(trainerId)
    );
    return (
      <div className="dealer">
        {this.state.dealers
          .filter(dealer => dealer.id === dealerId)
          .map(dealer => (
            <div>
              <div className="dealer_top">
                <div className="dealer_avatar">
                  <img src={dealer.avatar} alt="" />
                </div>
                <div className="dealer_description">{dealer.description}</div>
              </div>
              <div className="dealer_map">
                <BadgeDealerMap
                  center={dealer.position}
                  dealers={this.state.dealers}
                />
              </div>
              <div className="BadgesOfDealerView">
                <h1>BadgesOfDealerView</h1>
                {trainerObject &&
                  trainerObject.listOfBadges && (
                    <BadgeList
                      badges={this.props.trainerObject.listOfBadges.map(
                        trainerBadgeNumber =>
                          this.props.badges.find(
                            badge => badge && badge.id === trainerBadgeNumber
                          )
                      )}
                    />
                  )}
              </div>
            </div>
          ))}
      </div>
    );
  }
}

export default BadgeDealerView;
