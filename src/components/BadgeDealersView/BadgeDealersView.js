import React, { Component } from "react";
import BadgeDealerList from "../BadgeDealerList/BadgeDealerList";
import "./BadgeDealersView.css";
import snapshotToArray from "../../snapshotToArray";

class BadgeDealersView extends Component {
  state = {
    dealers: [],
    badges: []
  };

  static getDerivedStateFromProps(props) {
    return {
      dealers: snapshotToArray(props.dealers),
      badges: snapshotToArray(props.badges)
    };
  }

  render() {
    return (
      <div className="BadgeDealersView">
        <h1>Trenerzy</h1>

        <BadgeDealerList
          badges={this.props.badges}
          badgeDealers={this.state.dealers}
        />
      </div>
    );
  }
}

export default BadgeDealersView;