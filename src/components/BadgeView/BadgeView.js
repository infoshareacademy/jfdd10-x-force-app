import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./BadgeView.css";
import snapshotToArray from "../../snapshotToArray";

class BadgeView extends Component {
  static getDerivedStateFromProps(props) {
    return {
      badges: snapshotToArray(props.badges)
    };
  }

  render() {
    const dealers = this.props.dealers
    const badge = this.props.badge;
    if (!badge) {
      return <p>Loading badge...</p>;
    }
    return (
      <div className="badgeView">
        <p className="color">{badge.title}</p>
        <img src={badge.logo} alt="Badge" />

        <p className="color">{badge.description}</p>
        <p className="moreInfo">{badge.moreInfo}</p>

        <div>
          <p className="color"> Trenerzy którzy posiadają odznakę:</p>
          {dealers && badge.badgeOwnerIds && Object.keys(badge.badgeOwnerIds)
            .map(id => dealers[id] && { id, ...dealers[id]})
            .filter(Boolean)
            .map(dealer => (
              <p>
                <Link className="linki" to={`/badge-dealers/${dealer.id}`}>
                  {dealer.name} {dealer.surname}
                </Link>
              </p>
            ))}
        </div>
      </div>
    );
  }
}

export default BadgeView;
