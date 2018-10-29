
import React, { Component } from 'react'
import BadgeSearcher from '../BadgeSearcher/BadgeSearcher'
import AppIntro from '../AppIntro/Appintro'
import firebase from 'firebase';






class HomeView extends Component {

  state = {
    user: null
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        firebase.database().ref('/users/' + user.uid).once('value').then(
          snapshot => this.setState({ user: snapshot.val() })
        )
      }
    })
  }


  render() {
    const { user } = this.state
    return (
      <div>
        { user ? <p>{user.name} {user.isTrainer ? '****' : ''}</p> : null}
        <AppIntro/>
        <BadgeSearcher badges={this.props.badges}/>
       
      </div>
    )
  }
}

export default HomeView;
