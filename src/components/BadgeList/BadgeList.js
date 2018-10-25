import React, { Component } from "react";
import BadgeListItem from "../BadgeListItem/BadgeListItem";
import PropTypes from "prop-types";

class BadgeList extends Component {
  static propTypes = {
    badges: PropTypes.array
  };
  render() {
      return (
        <>
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
        </>
      );
  }
}
export default BadgeList;
