import React, { Component } from "react";
import BadgeSearcherForm from "../BadgeSearcherForm/BadgeSearcherForm";
import BadgeSearcherResults from "../BadgeSearcherResults/BadgeSearcherResults";
import "./BadgeSearcher.css"

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
        <div className="dystrybution">
      <h1>Witaj w <b>X-GYM</b></h1>
      <h4>Dzięki X-GYM znajdziesz odpowiedniego trenera i zrealizjesz zamierzony cel. Zbieraj unikale odznaki i pochwal się znajomym i motywujcie się wzajemnie do ćwiczeń.</h4>
      

      </div>
      <div>
        <BadgeSearcherForm processSearchPhrase={this.processSearchPhrase} />
        <BadgeSearcherResults badges={this.props.badges.filter(badge => badge.title.toLowerCase().includes(this.state.searchPhrase.toLowerCase()))} />
      </div>
      
      </div>
    );
  }
}

export default BadgeSearcher;
