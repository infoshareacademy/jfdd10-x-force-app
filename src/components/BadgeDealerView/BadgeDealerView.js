import React, { Component } from "react";
import BadgeDealerMap from "../BadgeDealerMap/BadgeDealerMap";
// import PropTypes from "prop-types";
import BadgesOfDealerView from "../BadgesOfDealerView/BadgesOfDealerView";

import "./BadgeDealerView.css";
import BadgeList from "../BadgeList/BadgeList";

class BadgeDealerView extends Component {
  // static propTypes = {};

  state = {
    dealers: [],
    badges: [],
    badgeDealerViewId: null,
    trainers: []
  };

  componentDidMount() {
    fetch("/data/trainers.json")
      .then(response => response.json())
      .then(x => this.setState({ dealers: x }));

    fetch("/data/badges.json")
      .then(response => response.json())
      .then(badge => this.setState({ badges: badge }));

    fetch("/data/trainers.json")
      .then(response => response.json())
      .then(trainers => this.setState({ trainers: trainers }));
  }

  render() {
    const dealerId = parseInt(this.props.match.params.badgeDealerViewId);
    const badgeDealerViewId = this.props.match.params.badgeDealerViewId;
    const trainerObject = this.state.trainers.find(
      trainer => trainer.id === parseInt(badgeDealerViewId)
    );

    return (
      <div className="dealer">
        {this.state.dealers
          .filter(dealer => dealer.id === dealerId)
          .map(dealer => (
            <div key={dealer.id}>
              <div className="dealer_top">
                <div className="dealer_avatar">
                  <img
                    style={{ width: 150, height: 150 }}
                    src={dealer.avatar}
                    alt=""
                  />
                </div>
                <div className="dealer_description">{dealer.description}</div>
              </div>
              <div className="dealer_map">
                <BadgeDealerMap
                  center={dealer.position}
                  dealers={this.state.dealers}
                />
              </div>
              <div className="dealer_badges">
                {dealer.listOfBadges
                  .map(badgeId => this.state.badges.find(b => b.id === badgeId))
                  .map(
                    badgeItem =>
                      badgeItem && (
                        <img src={badgeItem.logo} alt={badgeItem.logo} />
                      )
                  )}
              </div>
            </div>
          ))}

        <div className="BadgesOfDealerView">
          <h1>BadgesOfDealerView</h1>
          {trainerObject &&
            trainerObject.listOfBadges && (
              <BadgeList
                badges={trainerObject.listOfBadges.map(trainerBadgeNumber =>
                  this.state.badges.find(
                    badge => badge && badge.id === trainerBadgeNumber
                  )
                )}
              />
            )}
        </div>
      </div>
    );
  }
}

export default BadgeDealerView;
