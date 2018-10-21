import React, { Component } from "react";
import BadgeList from "../BadgeList/BadgeList";
import "./BadgesOfDealerView.css";
import PropTypes from 'prop-types'

class BadgesOfDealerView extends Component {

  static propTypes = {
    badges: PropTypes.array,
    trainers: PropTypes.array,
    badgeDealerViewId : PropTypes.number
  }

  state = {
    badgeDealerViewId: null,
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
    const badgeDealerViewId = this.props.match.params.badgeDealerViewId
    const trainerObject = this.props.trainers.find(trainer => trainer.id === parseInt(badgeDealerViewId))
  
    return (
      <div className="BadgesOfDealerView">
        <h1>BadgesOfDealerView</h1>
        {
          trainerObject && 
          trainerObject.listOfBadges &&
            <BadgeList badges={trainerObject.listOfBadges.map(
              trainerBadgeNumber =>
               this.props.badges.find(
                 badge => 
                 badge && ( badge.id === trainerBadgeNumber)
                 )
                 )
                }/>
        }
      </div>
    )
    }
  }

export default BadgesOfDealerView;
