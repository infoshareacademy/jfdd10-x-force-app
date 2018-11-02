import React, { Component } from "react";
import { Route, NavLink, withRouter } from "react-router-dom";
import BadgesView from "../BadgesView/BadgesView";
import BadgeView from "../BadgeView/BadgeView";
import { Button, Modal, Header, Image } from "semantic-ui-react";
import HomeView from "../HomeView/HomeView";
import BadgeDealersView from "../BadgeDealersView/BadgeDealersView";
import BadgeDealerView from "../BadgeDealerView/BadgeDealerView";
import SignUpFormView from "../SignUpFormView/SignUpFormView";
import SignInFormView from "../SignInFormView/SignInFormView";
import BadgeDealerProfileView from "../BadgeDealerProfileView/BadgeDealerProfileView";
import firebase from "firebase";
import "./App.css";
import { getBadges } from "../../services/badges";
import { getDealers } from "../../services/dealers";

class App extends Component {
  state = {
    badges: null,
    dealers: null,
    user: null,
    signInOpen: false,
    SignUpOpen: false
  };

  signInShow = signInDimmer => () => this.setState({ signInDimmer, signInOpen: true })
  signInClose = () => this.setState({ signInOpen: false })

  SignUpShow = SignUpDimmer => () => this.setState({ SignUpDimmer, SignUpOpen: true })
  SignUpClose = () => this.setState({ SignUpOpen: false })

  componentDidMount() {
    getBadges().then(badges => this.setState({ badges }));
    getDealers().then(dealers => this.setState({ dealers }));

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
    const { signInOpen, signInDimmer } = this.state
    const { SignUpOpen, dimmer2 } = this.state

    return (
      <div className="App">
        <div className="nav">
          <div className={user? 'loggedIn signIp' :"signIn"}>
            <Button  onClick={this.signInShow('blurring')} inverted color="blue" className="linksButton">
              <NavLink
                className="links"
                to="/sign-up"
              >
                Rejestracja
              </NavLink>
            </Button>
          </div>
          <div className={user? 'loggedIn signUp' :"signUp"}>
            <Button onClick={this.SignUpShow('blurring')} inverted color="blue" className="linksButton">
              <NavLink
                className="links"
                to="/sign-in"
              >
                Logowanie
              </NavLink>
            </Button>
          </div>
          <div className='log'>
          {user ? (
          <div>
            
            <Button inverted color="blue" className="linksButton" onClick={() => this.logOut()}>Log out</Button>
          </div>
        ) : null}
          </div>
        </div>
       

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
                      <NavLink className="links" to="/badge-dealer-profile">
                        Mój profil
                      </NavLink>
                    </Button>
                  </li>
                ) : null}
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
            <Route path="/sign-up" component={SignUpFormView} />
            <Route path="/sign-in" component={SignInFormView} />
            <Route
              path="/badge-dealer-profile"
              component={BadgeDealerProfileView}
            />
          </div>
        </header>
        <Modal dimmer={signInDimmer} open={signInOpen} onClose={this.signInClose}>
          <Modal.Header>Register</Modal.Header>
          <Modal.Content image>
            
            <Modal.Description>
              <Header>Register</Header>
              <SignUpFormView afterSignUpSuccess={this.signInClose}/>
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button color='black' onClick={this.signInClose}>
              Close
            </Button>
            
          </Modal.Actions>
        </Modal>
        <Modal dimmer={dimmer2} open={SignUpOpen} onClose={this.SignUpClose}>
          <Modal.Header>Logowanie</Modal.Header>
          <Modal.Content image>
            
            <Modal.Description>
              <Header>Logowanie</Header>
              <SignInFormView afterSignInSuccess={this.SignUpClose}/>
              
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button color='black' onClick={this.SignUpClose}>
              Close
            </Button>
            
          </Modal.Actions>
        </Modal>
      </div>
    );
  }
}
export default withRouter(App);
