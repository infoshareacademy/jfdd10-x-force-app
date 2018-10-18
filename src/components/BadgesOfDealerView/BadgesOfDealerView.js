import React, { Component } from "react";
import PropTypes from "prop-types";

import "./BadgesOfDealerView.css";

class BadgesOfDealerView extends Component {
  state = {
    trainers: [],
    badges: [],
  };

  componentDidMount() {
    fetch("/data/badges.json")
      .then(response => response.json())
      .then(badges => this.setState({ badges: badges }));

      fetch("/data/trainers.json")
      .then(response => response.json())
      .then(trainers => this.setState({ trainers: trainers }));
  }

  render() {
    return (
      <div className="BadgesOfDealerView">
        <h1>BadgesOfDealerView</h1>
      </div>
    );
  }
}

export default BadgesOfDealerView;
