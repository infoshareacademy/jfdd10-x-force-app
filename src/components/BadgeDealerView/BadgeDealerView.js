import React, { Component } from "react";
import BadgeDealerMap from "../BadgeDealerMap/BadgeDealerMap";
import BadgesOfDealerView from "../BadgesOfDealerView/BadgesOfDealerView";

import "./BadgeDealerView.css";
import snapshotToArray from '../../snapshotToArray';

class BadgeDealerView extends Component {

  state = {
    dealers: []
  }

  static getDerivedStateFromProps(props) {
    return {
      dealers: snapshotToArray(props.dealers)
    }
  }

  render() {
    const dealer =
      this.props.dealers && this.props.dealers[this.props.dealerId];
    if (!dealer) {
      return <p>Loading trainer...</p>;
    }

    return (
      <div className="dealer">
        <div>
          <div className="dealer_header">
            <p>
              {" "}
              {dealer.name} {dealer.surname}
            </p>
          </div>
          <div className="dealer_top">
            <div className="dealer_avatar">
              <img src={dealer.avatar} alt="" />
            </div>
            <div className="dealer_header">Opis</div>
            <div className="dealer_description">
              <p>{dealer.description}</p>
            </div>
          </div>
          <div className="dealer_header">Tu mnie znajdziesz</div>
          <div className="dealer_map">
          {dealer.position &&
            <BadgeDealerMap
              center={dealer.position}
              dealers={this.state.dealers}
              trainerObject={dealer}
              badges={this.props.badges}
            />
          }
          </div>
          <div className="dealer_header">Te odznaki posiadam</div>
          <div className="dealer_badges">

           
            <BadgesOfDealerView dealer={dealer} badges={this.props.badges} />
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeDealerView;
