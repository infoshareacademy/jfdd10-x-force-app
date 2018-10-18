import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import BadgesView from '../BadgesView/BadgesView'
import BadgeView from '../BadgeView/BadgeView'
import BadgeSearcher from '../BadgeSearcher/BadgeSearcher'
import BadgeDealersView from '../BadgeDealersView/BadgeDealersView'
import './App.css';




class App extends Component {

  state = {
    badges: []
  }

  componentDidMount() {
    fetch("/data/badges.json").then(response => response.json()
      ).then(allBadges => this.setState({ badges: allBadges }));
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Router>
            <div className="App">
              <ul>
                <li><NavLink exact to="/">Home</NavLink></li>
                <li><NavLink to="/badges">badges View</NavLink></li>
                <li><NavLink to="/badgedealersview">badges dealers view</NavLink></li>
              </ul>

              <Route exact path="/" component={() => <h1>Hello</h1>} />
              <BadgeSearcher badges={this.state.badges}/>
              <Route exact path="/badges" component={BadgesView} />
              <Route path="/badges/:badgeId" component={BadgeView} />
              <Route path="/trainer/:trainerId" component={(props) => <h1>Trainer view {props.match.params.trainerId}</h1>}/>
              <Route exact path="/badgedealersview" component={BadgeDealersView} />
            </div>
          </Router>
        </header>
      </div>
    );
  }
}

export default App;
