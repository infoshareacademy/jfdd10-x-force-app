import React, { Component } from "react";
import BadgeSearcherForm from "../BadgeSearcherForm/BadgeSearcherForm";
import BadgeSearcherResults from "../BadgeSearcherResults/BadgeSearcherResults";
import "./BadgeSearcher.css";
import snapshotToArray from '../../snapshotToArray';

class BadgeSearcher extends Component {
  state = {
    searchPhrase: "",
    badges: []
  };

  static getDerivedStateFromProps(props) {
    return {
      badges: snapshotToArray(props.badges)
    };
  }

  processSearchPhrase = phrase => this.setState({ searchPhrase: phrase });

  render() {
    return (
      <div>
        <div className="dystrybution">
          <h1>
            Witaj w <b>X-GYM</b>
          </h1>
          <h4>
            Dzięki X-GYM znajdziesz odpowiedniego trenera i zrealizjesz
            zamierzony cel. Zbieraj unikale odznaki i pochwal się znajomym i
            motywujcie się wzajemnie do ćwiczeń.
          </h4>
        </div>
        <div>
          <BadgeSearcherForm processSearchPhrase={this.processSearchPhrase} />
          <BadgeSearcherResults
            badges={this.state.badges.filter(badge =>
              badge.title
                .toLowerCase()
                .includes(this.state.searchPhrase.toLowerCase())
            )}
          />
        </div>
      </div>
    );
  }
}

export default BadgeSearcher;
