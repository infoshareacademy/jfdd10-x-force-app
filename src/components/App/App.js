import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import BadgesView from '../BadgesView/BadgesView'
import BadgeView from '../BadgeView/BadgeView'
import HomeView from '../HomeView/HomeView';
import BadgeDealersView from '../BadgeDealersView/BadgeDealersView'
import BadgeDealerView from '../BadgeDealerView/BadgeDealerView'
import './App.css';
import BadgeMaker from '../BadgeMaker/BadgeMaker';

class App extends Component {

  state = {
    badges: [],
    trainerId: null
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
            <div className="navigation">
              <ul>
                <li><NavLink className='links' exact to="/"> Główna</NavLink></li>
                <li><NavLink className='links'  to="/badges">Odznaki</NavLink></li>
                <li><NavLink className='links'  to="/badgedealersview">Trenerzy</NavLink></li>
                <li><NavLink className='links'  to="/badgeMaker">tworzenie badga</NavLink></li>
              </ul>
              </div>

              <Route exact path="/" component={() => <HomeView badges={this.state.badges}/>} />
              
              {/* <BadgeSearcher badges={this.state.badges}/> */}
              <Route exact path="/badges" component={BadgesView} />
              <Route path="/badges/:badgeId" component={BadgeView} />
              <Route exact path="/badgedealersview" component={BadgeDealersView} />
              <Route path="/badgedealersview/:badgeDealerViewId" component={BadgeDealerView} />
              <Route path="/badgeMaker" component={BadgeMaker} />
          
            </div>
          </Router>                                            
        </header>
      </div>
    );
  }
}
export default App;