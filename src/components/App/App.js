import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import BadgesView from '../BadgesView/BadgesView'
import BadgeView from '../BadgeView/BadgeView'
import './App.css';

class App extends Component {
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
              <Route exact path="/badges" component={BadgesView} />
              <Route path="/badges/:badgeId" component={BadgeView} />
              <Route path="/trainer/:trainerId" component={(props) => <h1>Trainer view {props.match.params.trainerId}</h1>}/>
            </div>
          </Router>
        </header>
      </div>
    );
  }
}

export default App;
