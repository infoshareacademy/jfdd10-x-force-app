import React, { Component } from "react";
import PropTypes from "prop-types";
import BadgeList from "../BadgeList/BadgeList";

import "./BadgesOfDealerView.css";

class BadgesOfDealerView extends Component {
  state = {
    trainerId: null,
    trainers: [],
    trainer: {
      id: 3,
      name: "Hillard",
      surname: "Cole",
      listOfBadges: [1, 5, 6, 7, 11]
    },
    badges: []
  };

  // filterBadges = (badgeId, trainerId) => {
  //   return this.state.trainer.listOfBadges.filter(this.state.badges(badgeId));
  // };

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
    return (
      <div className="BadgesOfDealerView">
        <h1>BadgesOfDealerView</h1>

        {/* <BadgeList badges={this.state.badges.map(this.state.trainer ) } /> */}
        {/* // <BadgeList badges={this.state.badges.map(badge => badge.id).map(this.state.trainer => this.state.trainer.listOfBadges === badgeItemId ? this.state.badges : null )} */}
        {/* // <BadgeList badges={this.state.badges.map(badge => badge.id).filter(badgeItemId => this.state.trainer.listOfBadges === badgeItemId ? this.state.badges : null )} */}
        {/* /> */}
        
        {/* <ul>
          {this.state.trainers.map(x => (
            <p>
              {x.listOfBadges
                .map(badgeId => this.state.badges.find(b => b.id === badgeId))
                .map(
                  badgeItem =>
                    badgeItem ? (
                      <img
                        src={badgeItem.logo}
                        style={{ width: 100, height: 100 }}
                        alt={badgeItem.logo}
                      />
                    ) : (
                      "nobonus"
                    )
                )}
            </p>
          ))}
        </ul> */}
      </div>
    );
  }
}

export default BadgesOfDealerView;
