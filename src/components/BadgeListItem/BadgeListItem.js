import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import "./BadgeListItem.css";
import { Button, Segment } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";


class BadgeListItem extends Component {
  render() {
    return (
      <div>
        <li className="li_badgeListItem">
          <div className="badgeListItem">
            <div className="logo">
              <img src={this.props.logo} alt="Badge" />
            </div>
            {!this.props.onlyLogo && (
              <Fragment>
                <div className="description">
                  <span className="title">
                    {this.props.title} - {this.props.description}
                  </span>
                </div>
              </Fragment>
            )}  
            <div className="link_holder">
              {" "}
              <Link className="link" to={`/badges/${this.props.id}`}>
                Więcej  
              </Link>{" "}
            </div>
          </div>
        </li>
      </div>
    );
  }
}
export default BadgeListItem;
