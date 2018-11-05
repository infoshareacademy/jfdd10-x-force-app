import React, { Component } from "react";
import "./BadgeSearcherResults.css";
import BadgeListItem from "../BadgeListItem/BadgeListItem";
import BadgeList from "../BadgeList/BadgeList";
class BadgeSearcherResults extends Component {
  badgesFound = () => {
    if (this.props.badges.lenght === 0) {
      return "No badges found";
    }
  };

  render() {
    if (this.props.badges.length === 0) {
      return (
        <div className="badgeSearcherResults">
          <div>No badges found</div>
        </div>
      );
    }

    return (
      <div className="badgeSearcherResults">
        <div>{this.badgesFound()}</div>

        <BadgeList badges={this.props.badges.slice(0,5)}/>
        
      </div>
    );
  }
}

export default BadgeSearcherResults;
