import React, { Component } from "react";
import BadgeDealerMap from "../BadgeDealerMap/BadgeDealerMap";
// import PropTypes from "prop-types";
import BadgesOfDealerView from "../BadgesOfDealerView/BadgesOfDealerView";

import "./BadgeDealerView.css";

class BadgeDealerView extends Component {
  // static propTypes = {};

  state = {
    dealers: [],
    badges: []
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
              <div className="dealer_badges">
                {dealer.listOfBadges
                  .map(badgeId => this.state.badges.find(b => b.id === badgeId))
                  .map(
                    badgeItem =>
                    badgeItem && (
                      <img style={{ width: 50, height: 50 }} src={badgeItem.logo} alt={badgeItem.logo} />
                      )
                      )}
                      <BadgesOfDealerView badges={this.state.dealers.listOfBadges} />
              </div>

            </div>
          ))}
      </div>
    );
  }
}

export default BadgeDealerView;
