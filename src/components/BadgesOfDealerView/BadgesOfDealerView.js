import React, { Component } from "react";
import BadgeList from "../BadgeList/BadgeList";
import "./BadgesOfDealerView.css";

class BadgesOfDealerView extends Component {
  state = {
    trainerId: null,
    trainers: [],
    badges: []
  };

  componentDidMount() {
    fetch("/data/badges.json")
      .then(response => response.json())
      .then(badges => this.setState({ badges: badges }));

    fetch("/data/trainers.json")
      .then(response => response.json())
      .then(trainers => this.setState({ trainers: trainers }));
  }

  render() {
    return (
      <div className="BadgesOfDealerView">
        <h1>BadgesOfDealerView</h1>
        {this.props.trainerObject &&
          this.props.trainerObject.listOfBadges && (
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
    );
  }
}

export default BadgesOfDealerView;
