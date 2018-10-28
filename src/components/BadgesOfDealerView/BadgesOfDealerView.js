import React, { Component } from "react";
import BadgeList from "../BadgeList/BadgeList";
import "./BadgesOfDealerView.css";
import PropTypes from "prop-types";


class BadgesOfDealerView extends Component {
  static propTypes = {
    badges: PropTypes.array,
    trainerObject: PropTypes.array
  };

  render() {
    return (
      <div className="BadgesOfDealerView">
        {this.props.trainerObject &&
          this.props.trainerObject.listOfBadges && (
            <BadgeList
              onlyLogo={this.props.onlyLogo}
              badges={this.props.trainerObject.listOfBadges.map(
                trainerBadgeNumber =>
                  this.props.badges.find(
                    badge => badge && badge.id === trainerBadgeNumber
                  )
              ).filter(Boolean)}
            />
          )}
      </div>
    );
  }
}

export default BadgesOfDealerView;
