import React, { Component } from "react";
import BadgeSearcher from "../BadgeSearcher/BadgeSearcher";
import AppIntro from "../AppIntro/Appintro";

class HomeView extends Component {
  render() {
    return (
      <>
        <AppIntro />
        <BadgeSearcher badges={this.props.badges} />
      </>
    );
  }
}

export default HomeView;
