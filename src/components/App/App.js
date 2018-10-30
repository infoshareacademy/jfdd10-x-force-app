import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import BadgesView from '../BadgesView/BadgesView'
import BadgeView from '../BadgeView/BadgeView'
import HomeView from '../HomeView/HomeView';
import BadgeDealersView from '../BadgeDealersView/BadgeDealersView'
import BadgeDealerView from '../BadgeDealerView/BadgeDealerView'
import { Button, } from "semantic-ui-react";

import './App.css';

class App extends Component {

  state = {
    badges: [],
    trainerId: null
  }

  componentDidMount() {
    fetch("https://x-force-app.firebaseio.com/badges.json")
      .then(response => response.json())
      .then(data =>
        Object.entries(data || {}).map(([id, value]) => ({ id, ...value }))
      )
      .then(badges => this.setState({ badges }));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Router>
           
            <div className="App">
            <div className="navigation">
              <ul>
                <li><Button inverted color='blue' className='linksButton'><NavLink className='links' exact to="/"> Główna</NavLink></Button></li>
                <li><Button inverted color='blue' className='linksButton'><NavLink className='links'  to="/badges">Odznaki</NavLink></Button></li>
                <li><Button inverted color='blue' className='linksButton'><NavLink className='links'  to="/badgedealersview">Trenerzy</NavLink></Button></li>
                
              </ul>
              </div>

              <Route exact path="/" component={() => <HomeView badges={this.state.badges}/>} />
              
              {/* <BadgeSearcher badges={this.state.badges}/> */}
              <Route exact path="/badges" component={BadgesView} />
              <Route path="/badges/:badgeId" component={BadgeView} />
              <Route exact path="/badgedealersview" component={BadgeDealersView} />
              <Route path="/badgedealersview/:badgeDealerViewId" component={BadgeDealerView} />
          
            </div>
        
          </Router>                                            
        </header>
      </div>
    );
  }
}
export default App;