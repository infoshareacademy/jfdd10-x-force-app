import React, { Component } from "react";
import { Route, NavLink, withRouter } from "react-router-dom";
import BadgesView from "../BadgesView/BadgesView";
import BadgeView from "../BadgeView/BadgeView";
import { Button } from "semantic-ui-react";
import HomeView from "../HomeView/HomeView";
import BadgeDealersView from "../BadgeDealersView/BadgeDealersView";
import BadgeDealerView from "../BadgeDealerView/BadgeDealerView";
import SingUpFormView from "../SingUpFormView/SingUpFormView";
import SingInFormView from "../SingInFormView/SingInFormView";
import UserProfileView from "../UserProfileView/UserProfileView";
import firebase from "firebase";
import "./App.css";
import { getBadges } from "../../services/badges";
import { getDealers } from "../../services/dealers";

class App extends Component {
  state = {
    badges: null,
    dealers: null,
    user: null
  };

  componentDidMount() {
    getBadges().then(badges => this.setState({ badges }));
    getDealers().then(dealers => {
      this.setState({ dealers });
    });

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        firebase
          .database()
          .ref("/users/" + user.uid)
          .once("value")
          .then(snapshot =>
            this.setState({
              user: { uid: user.uid, ...(snapshot.val() || {}) }
            })
          );
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
                  <Button inverted color="blue" className="linksButton">
                    <NavLink className="links" exact to="/">
                      {" "}
                      Główna
                    </NavLink>
                  </Button>
                </li>
                <li>
                  <Button inverted color="blue" className="linksButton">
                    <NavLink className="links" to="/badges">
                      Odznaki
                    </NavLink>
                  </Button>
                </li>
                <li>
                  <Button inverted color="blue" className="linksButton">
                    <NavLink className="links" to="/badge-dealers">
                      Trenerzy
                    </NavLink>
                  </Button>
                </li>
                {user ? (
                  <li>
                    <Button inverted color="blue" className="linksButton">
                      <NavLink className="links" to="/user-profile">
                        Mój profil
                      </NavLink>
                    </Button>
                  </li>
                ) : null}
              </ul>
              <div className="register">
                <NavLink
                  className={user ? "links loggedIn" : "links "}
                  to="/sign-up"
                >
                  Rejestracja
                </NavLink>
              </div>
              <div className="logged">
                <NavLink
                  className={user ? "links loggedIn" : "links "}
                  to="/sign-in"
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
            <Route exact path="/badges" component={() => (<BadgesView badges={this.state.badges}/> )} />
            <Route
              path="/badges/:badgeId"
              component={({
                match: {
                  params: { badgeId }
                }
              }) => (
                <BadgeView
                  badge={this.state.badges && this.state.badges[badgeId]}
                  dealers={this.state.dealers}
                />
              )}
            />
            <Route
              exact
              path="/badge-dealers"
              component={() => (
                <BadgeDealersView
                  dealers={this.state.dealers}
                  badges={this.state.badges}
                />
              )}
            />
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
            <Route path="/sign-up" component={SingUpFormView} />
            <Route path="/sign-in" component={SingInFormView} />
            {user ? (
              <Route
                path="/user-profile"
                component={() => <UserProfileView user={this.state.user} />}
              />
            ) : null}
          </div>
        </header>
      </div>
    );
  }
}
export default withRouter(App);
