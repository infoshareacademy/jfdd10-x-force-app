import React, { Component } from "react";
import BadgeDealerMap from "../BadgeDealerMap/BadgeDealerMap";
import BadgesOfDealerView from "../BadgesOfDealerView/BadgesOfDealerView";

import "./BadgeDealerView.css";

class BadgeDealerView extends Component {

  state = {
    dealers: [],
    badges: [],
    badgeDealerViewId: null,
    trainers: []
  };

  componentDidMount() {
    fetch("/data/trainers.json")
      .then(response => response.json())
      .then(x => this.setState({ dealers: x }));

    fetch("/data/badges.json")
      .then(response => response.json())
      .then(badge => this.setState({ badges: badge }));

    fetch("/data/trainers.json")
      .then(response => response.json())
      .then(trainers => this.setState({ trainers: trainers }));
  }

  render() {
    const dealerId = parseInt(this.props.match.params.badgeDealerViewId);
    const badgeDealerViewId = this.props.match.params.badgeDealerViewId;
    const trainerObject = this.state.trainers.find(
      trainer => trainer.id === parseInt(badgeDealerViewId)
    );
    
    if (dealerId === undefined) {
      return <p>Loading badge...</p>;
    }
    if (badgeDealerViewId === undefined) {
      return <p>Loading badge...</p>;
    } 
    if (trainerObject === undefined) {
      return <p>Loading badge...</p>;
    }
    return (
      <div className="dealer">
        {this.state.dealers
          .filter(dealer => dealer.id === dealerId)
          .map(dealer => (
            <div key={dealer.id}>
            <div className='dealer_header'>
           <p> {dealer.name} {dealer.surname}</p>
            </div>
              <div className="dealer_top">
                <div className="dealer_avatar">
                  <img
                   
                    src={dealer.avatar}
                    alt=""
                  />
                </div>
                <div className='dealer_header'>Opis</div>
                <div className="dealer_description">
                
                <p>{dealer.description}</p>
                </div>
              </div>
              <div className='dealer_header'>Tu mnie znajdziesz</div>
              <div className="dealer_map">
                <BadgeDealerMap
                  center={dealer.position}
                  dealers={this.state.dealers}
                  trainerObject={trainerObject}
                  badgeDealerViewId={badgeDealerViewId}
                  trainers={this.state.trainers}
                  badges={this.state.badges}
                />
              </div>
              <div className='dealer_header'>Te odznaki posiadam</div>
              <div className="dealer_badges">
                <BadgesOfDealerView
                  trainerObject={trainerObject}
                  badges={this.state.badges}
                />
              </div>
            </div>
          ))}
      </div>
    );
  }
}

export default BadgeDealerView;
