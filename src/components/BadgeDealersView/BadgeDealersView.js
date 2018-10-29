import React, { Component } from "react";
import BadgeDealerList from "../BadgeDealerList/BadgeDealerList";
import "./BadgeDealersView.css";

class BadgeDealersView extends Component {
  state = {
    dealers: [],
    badges: [],
    ownBadges: []
  };

  componentDidMount() {
    fetch("https://x-force-app.firebaseio.com/trainers.json")
      .then(response => response.json())
      .then(data =>
        Object.entries(data || {}).map(([id, value]) => ({ id, ...value }))
      )
      .then(dealers => this.setState({ dealers }));

    fetch("https://x-force-app.firebaseio.com/badges.json")
      .then(response => response.json())
      .then(data =>
        Object.entries(data || {}).map(([id, value]) => ({ id, ...value }))
      )
      .then(badges => this.setState({ badges }));
  }

  render() {
    console.log("sanity check", this.state.badges);
    return (
      <div className="BadgeDealersView">
        <h1>Trenerzy</h1>

        <BadgeDealerList
          badges={this.state.badges}
          badgeDealers={this.state.dealers}
        />
      </div>
    );
  }
}

export default BadgeDealersView;
