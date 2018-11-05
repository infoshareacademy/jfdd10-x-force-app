import React, { Component } from "react";
import BadgeListItem from "../BadgeListItem/BadgeListItem";
import PropTypes from "prop-types";

class BadgeList extends Component {
  static propTypes = {
    badges: PropTypes.array
  };
  render() {
    return (
      <div style={{ display: "flex", flexWrap: 'wrap', justifyContent: 'space-around'}}>
        {this.props.badges.map(badge => (
          <BadgeListItem
            onlyLogo={this.props.onlyLogo}
            key={badge.id}
            id={badge.id}
            logo={badge.logo}
            title={badge.title}
            description={badge.description}
            moreInfo={badge.moreInfo}
          />
        ))}
      </div>
    );
  }
}
export default BadgeList;
