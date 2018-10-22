
import React, { Component } from 'react'
import BadgeSearcher from '../BadgeSearcher/BadgeSearcher'
import AppIntro from '../AppIntro/Appintro'






class HomeView extends Component {



  render() {
    return (
      <div>
        <AppIntro/>
        <BadgeSearcher badges={this.props.badges}/>
       
      </div>
    )
  }
}

export default HomeView;
