import React, { Component } from "react";
import BadgeList from "../BadgeList/BadgeList";
import "./BadgesOfDealerView.css";
import PropTypes from "prop-types";

class BadgesOfDealerView extends Component {
  static propTypes = {
    badges: PropTypes.array,
    trainers: PropTypes.array,
    badgeDealerViewId: PropTypes.number,
    trainerObject: PropTypes.array
  };

  render() {
    console.log("foobar", this.props);

    return (
      <div className="BadgesOfDealerView">
       
        {this.props.trainerObject &&
          this.props.trainerObject.listOfBadges && (
            <BadgeList
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
