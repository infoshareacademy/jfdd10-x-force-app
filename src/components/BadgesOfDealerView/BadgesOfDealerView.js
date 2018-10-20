import React, { Component } from "react";
import BadgeList from "../BadgeList/BadgeList";
import "./BadgesOfDealerView.css";
import PropTypes from "prop-types";

class BadgesOfDealerView extends Component {
  static propTypes = {
    badges: PropTypes.array,
    trainerObject: PropTypes.array
  };

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
    console.log("foobar", this.props);
    const trainerId = this.props.match.params.trainerId;
    const trainerObject = this.state.trainers.find(
      trainer => trainer.id === parseInt(trainerId)
    );

    return (
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
    );
  }
}

export default BadgesOfDealerView;
