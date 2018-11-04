import React, { Component } from "react";
import BadgeList from "../BadgeList/BadgeList";
import "./BadgesOfDealerView.css";

class BadgesOfDealerView extends Component {
  render() {
    const dealer = this.props.dealer;
    const badges = this.props.badges;
    return (
      <div className="BadgesOfDealerView">
        {dealer &&
          badges &&
          dealer.badgeIds && (
            <BadgeList
              onlyLogo={this.props.onlyLogo}
              badges={Object.keys(dealer.badgeIds)
                .map(id => badges[id] && { id, ...badges[id] })
                .filter(Boolean)}
            />
          )}
      </div>
    );
  }
}

export default BadgesOfDealerView;
