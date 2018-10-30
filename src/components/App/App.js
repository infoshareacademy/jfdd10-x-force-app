import React, { Component } from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import BadgesView from "../BadgesView/BadgesView";
import BadgeView from "../BadgeView/BadgeView";
import HomeView from "../HomeView/HomeView";
import BadgeDealersView from "../BadgeDealersView/BadgeDealersView";
import BadgeDealerView from "../BadgeDealerView/BadgeDealerView";
import "./App.css";
import { getBadges } from "../../services/badges";
import { getDealers } from "../../services/dealers";

class App extends Component {
  state = {
    badges: null,
    dealers: null
  };

  componentDidMount() {
    getBadges().then(badges => this.setState({ badges }));
    getDealers().then(dealers => this.setState({ dealers }));
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <header className="App-header">
          <Router>
            <div className="App">
              <div className="navigation">
                <ul>
                  <li>
                    <NavLink className="links" exact to="/">
                      Główna
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="links" to="/badges">
                      Odznaki
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="links" to="/badge-dealers">
                      Trenerzy
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="links" to="/badge-maker">
                      Badge maker
                    </NavLink>
                  </li>
                </ul>
              </div>

              <Route
                exact
                path="/"
                component={() => <HomeView badges={this.state.badges} />}
              />
              <Route exact path="/badges" component={BadgesView} />
              <Route
                path="/badges/:badgeId"
                component={({
                  match: {
                    params: { badgeId }
                  }
                }) => <BadgeView badge={this.state.badges && this.state.badges[badgeId]} dealers={this.state.dealers}/>}
              />
              <Route exact path="/badge-dealers" component={() => (<BadgeDealersView dealers={this.state.dealers} badges={this.state.badges}/>)} />
              <Route
                path="/badge-dealers/:dealerId"
                component={({
                  match: {
                    params: { dealerId }
                  }
                }) => (
                  <BadgeDealerView
                    badges={this.state.badges}
                    dealers={this.state.dealers}
                    dealerId={dealerId}
                  />
                )}
              />
            </div>
          </Router>
        </header>
      </div>
    );
  }
}
export default App;
