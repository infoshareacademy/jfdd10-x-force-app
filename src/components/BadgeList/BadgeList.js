import React, { Component } from "react";
import BadgeListItem from "../BadgeListItem/BadgeListItem";
import PropTypes from "prop-types";

class BadgeList extends Component {
  static propTypes = {
    badges: PropTypes.array
  };
  render() {
    console.log(this.props.badges);
    return (
      <>
      <h1>Odznaki</h1>
        {this.props.badges.map(badge => (
          <BadgeListItem
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