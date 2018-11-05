import React, { Component } from "react";
import "./BadgeSearcherResults.css";
import BadgeListItem from "../BadgeListItem/BadgeListItem";
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

        <div style={{ display: "flex", flexWrap: 'wrap', justifyContent: 'space-around' }}>
          {this.props.badges.slice(0, 5).map(badge => (
            <BadgeListItem
              key={badge.id}
              id={badge.id}
              logo={badge.logo}
              title={badge.title}
              description={badge.description}
              moreInfo={badge.moreInfo}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default BadgeSearcherResults;
