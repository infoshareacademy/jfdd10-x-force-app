import React, { Component } from "react";
import PropTypes from "prop-types";
import BadgeDealerList from "../BadgeDealerList/BadgeDealerList";
import "./BadgeDealerView.css";

class BadgeDealerView extends Component {
  state = {
    dealers: [],
    badges: []
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
      <div className="BadgeDealerView">
        <h1>Badge dealers</h1>
        <ul className="badgeDealerViewLitOfBadges">
          {this.state.dealers.map(x => (
            <li>{x.listOfBadges
              .map(badgeId => this.state.badges.find(b => b.id === badgeId))
              .map(badgeItem => 
                badgeItem ? <img src={badgeItem.logo} alt={badgeItem.logo}></img> : 'nobonus'
              )}</li>
          ))}
        </ul>
           <BadgeDealerList
  badgeDealers={[
    {
      badges: [
        "http://placehold.jp/60x60.png",
      
      ],
      description:
        "Lorem ipsum to roboczy tekst używany do celów projektowych, zwykle do prezentacji kroju pisma, kompozycji.Lorem ipsum to roboczy tekst używany do celów projektowych, zwykle do prezentacji kroju pisma, kompozycji",
      avatar: "http://placehold.jp/150x150.png"
    },
    {
      badges: [
        "http://placehold.jp/60x60.png",
        "http://placehold.jp/60x60.png",
        "http://placehold.jp/60x60.png",
        "http://placehold.jp/60x60.png"
      ],
      description:
        "Lorem ipsum to risma, kompozycji",
      avatar: "http://placehold.jp/150x150.png"
    },
    {
      badges: [
        "http://placehold.jp/60x60.png",
        "http://placehold.jp/60x60.png",
      
      ],
      description:
        "Lorem ipsum to risma, kompozycji",
      avatar: "http://placehold.jp/150x150.png"
    }
  ]}
/>
      </div>
    );
  }
}

export default BadgeDealerView;
