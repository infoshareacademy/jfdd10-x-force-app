import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import BadgesView from '../BadgesView/BadgesView'
import BadgeView from '../BadgeView/BadgeView'
import BadgeSearcher from '../BadgeSearcher/BadgeSearcher'
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
              </ul>

              <Route exact path="/" component={() => <h1>Hello</h1>} />
              <BadgeSearcher badges={this.state.badges}/>
              <Route exact path="/badges" component={BadgesView} />
              <Route path="/badges/:badgesId" component={BadgeView} />
            </div>
          </Router>
        </header>
      </div>
    );
  }
}

export default App;
