import React, { Component } from "react";
import "./BadgeDealerListItem.css";
import { Link } from "react-router-dom";
import { Button} from 'semantic-ui-react'
class BadgeDealerListItem extends Component {
  render() {
    const dealer = this.props.dealer
    const badges = this.props.badges
    console.log(dealer);
    return (
      <div className="contener">
        <div className="logo">
          <img className="avatar" src={dealer.avatar} alt="" />
        </div>
        <div className="section2">
          <div className="description">
            <h6 className="name">
              {dealer.name} {dealer.surname}
            </h6>
            <p className="description">{dealer.description}</p>
          </div>
          <div className="badges">
            {badges && Object.keys(dealer.badgeIds || {})
              .map(badgeId => badges[badgeId] && ({id: badgeId, ...badges[badgeId]}))
              .map(
                badgeItem =>
                  badgeItem && <img src={badgeItem.logo} alt={badgeItem.logo} />
              )}
          </div>
          <p className="link_contener">
          <Link className="link" to={`/badge-dealers/${dealer.id}`}><Button inverted color='blue'>Więcej
              
              </Button></Link>
          </p>
        </div>
      </div>
    );
  }
}

export default BadgeDealerListItem;
