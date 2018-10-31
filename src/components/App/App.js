import React, { Component } from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import BadgesView from "../BadgesView/BadgesView";
import BadgeView from "../BadgeView/BadgeView";
import HomeView from "../HomeView/HomeView";
import { withRouter } from "react-router-dom";
import BadgeDealersView from "../BadgeDealersView/BadgeDealersView";
import BadgeDealerView from "../BadgeDealerView/BadgeDealerView";
import SingUpFormView from "../SingUpFormView/SingUpFormView";
import SingInFormView from "../SingInFormView/SingInFormView";
import BadgeDealerProfileView from "../BadgeDealerProfileView/BadgeDealerProfileView";
import firebase from "firebase";
import "./App.css";

class App extends Component {
  state = {
    badges: [],
    trainerId: null,
    user: null
  };

  componentDidMount() {
    fetch("/data/badges.json")
      .then(response => response.json())
      .then(allBadges => this.setState({ badges: allBadges }));

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        firebase
          .database()
          .ref("/users/" + user.uid)
          .once("value")
          .then(snapshot => this.setState({ user: snapshot.val() }));
      }
    });
  }

  logOut = () => {
    firebase
      .auth()
      .signOut()
      .then(
        () => {
          this.setState({
            user: null
          });
        },
        function(error) {
          console.warn("error");
        }
      )
      .then(() => this.props.history.push("/"));
  };

  render() {
    const { user } = this.state;
    return (
      <div className="App">
        {user ? (
          <div>
            <p>
              {user.name} {user.isTrainer ? "****" : ""}
            </p>
            <button onClick={() => this.logOut()}>Log out</button>
          </div>
        ) : null}

        <header className="App-header">
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
                  <NavLink className="links" to="/badgedealersview">
                    Trenerzy
                  </NavLink>
                </li>
                {user ? (
                  <li>
                    <NavLink className="links" to="/badgedealerprofile">
                      Mój profil
                    </NavLink>
                  </li>
                ) : null}
              </ul>
              <div className="register">
                <NavLink
                  className={user ? "links loggedIn" : "links "}
                  to="/singupformview"
                >
                  Rejestracja
                </NavLink>
              </div>
              <div className="logged">
                <NavLink
                  className={user ? "links loggedIn" : "links "}
                  to="/singinformview"
                >
                  Logowanie
                </NavLink>
              </div>
            </div>

            <Route
              exact
              path="/"
              component={() => <HomeView badges={this.state.badges} />}
            />

            {/* <BadgeSearcher badges={this.state.badges}/> */}
            <Route exact path="/badges" component={BadgesView} />
            <Route path="/badges/:badgeId" component={BadgeView} />
            <Route
              exact
              path="/badgedealersview"
              component={BadgeDealersView}
            />
            <Route
              path="/badgedealersview/:badgeDealerViewId"
              component={BadgeDealerView}
            />
            <Route path="/singupformview" component={SingUpFormView} />
            <Route path="/singinformview" component={SingInFormView} />
            <Route
              path="/badgedealerprofile"
              component={BadgeDealerProfileView}
            />
          </div>
        </header>
      </div>
    );
  }
}
export default withRouter(App);
