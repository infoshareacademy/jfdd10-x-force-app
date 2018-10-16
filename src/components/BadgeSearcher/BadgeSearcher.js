import React, { Component } from "react";
import BadgeSearcherForm from "../BadgeSearcherForm/BadgeSearcherForm";
import BadgeSearcherResults from "../BadgeSearcherResults/BadgeSearcherResults";

class BadgeSearcher extends Component {

  state = {
    searchPhrase: ''
  };

  processSearchPhrase = (phrase) => this.setState({ searchPhrase: phrase })

  

  // componentDidMount() {
  //   fetch("/data/badges.json").then(response => response.json()
  //     ).then(allBadges => this.setState({ badges: allBadges }));
  // }

  render() {
    return (
      <div>
        <BadgeSearcherForm processSearchPhrase={this.processSearchPhrase} />
        <BadgeSearcherResults badges={this.props.badges.filter(badge => badge.title.toLowerCase().includes(this.state.searchPhrase.toLowerCase()))} />
      </div>
    );
  }
}

export default BadgeSearcher;
