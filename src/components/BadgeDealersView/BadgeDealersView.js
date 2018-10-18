import React, { Component } from "react";
import PropTypes from "prop-types";
import BadgeDealerList from "../BadgeDealerList/BadgeDealerList";
import "./BadgeDealersView.css";

class BadgeDealersView extends Component {
  state = {
    dealers: [],
    badges: [],
    ownBadges:[]
  };

  componentDidMount() {
    fetch("/data/trainers.json")
      .then(response => response.json())
      .then(x => this.setState({ dealers: x }));

    fetch("/data/badges.json")
      .then(response => response.json())
      .then(badge => this.setState({ badges: badge }));
  }

 


  render() {
    console.log('sanity check', this.state.badges);
    return (
      <div className="BadgeDealersView">
        <h1>Badge dealers</h1>
        
        <BadgeDealerList badges={this.state.badges} badgeDealers={this.state.dealers} />
          
      </div>
    );
  }
}

export default BadgeDealersView;
