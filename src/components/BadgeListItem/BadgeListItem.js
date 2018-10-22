import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./BadgeListItem.css";

class BadgeListItem extends Component {
  render() {
    return (
      <div>
        <li className="li_badgeListItem">
          <div className="badgeListItem">
            <div className="logo">
              <img src={this.props.logo} alt="Badge" />
            </div>
            <div className="description">
              <span className="title">
                {this.props.title} - {this.props.description}
              </span>
            </div>
            <div className="link_holder">
              {" "}
              <Link to={`/badges/${this.props.id}`}>Więcej</Link>{" "}
            </div>
          </div>
        </li>
      </div>
    );
  }
}
export default BadgeListItem;
