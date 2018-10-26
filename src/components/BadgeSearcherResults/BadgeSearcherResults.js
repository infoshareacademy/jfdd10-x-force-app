import React, { Component } from "react";
import "./BadgeSearcherResults.css";
import BadgeList from "../BadgeList/BadgeList";
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

        <ul>
          {this.props.badges.slice(0, 5).map(badge => (
            <li>
              <BadgeListItem
                key={badge.id}
                id={badge.id}
                logo={badge.logo}
                title={badge.title}
                description={badge.description}
                moreInfo={badge.moreInfo}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default BadgeSearcherResults;
