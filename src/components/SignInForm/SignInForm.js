import React, { Component } from "react";
import firebase from "firebase";
import "./SignInForm.css";
import { withRouter } from "react-router-dom";

class SignInForm extends Component {
  state = {
    email: "",
    password: "",
    error: null,
    trainer: false
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => this.setState({ error: null }))
      .then(() => {
        this.props.history.push("/");
        if (this.props.afterSignInSuccess) {
          this.props.afterSignInSuccess();
        }
      })
      .catch(error => this.setState({ error }));
  };

  render() {
    return (
      <div className="SignInForm">
        <form onSubmit={this.handleSubmit} className="SignUpForm">
          {this.state.error && <p>{this.state.error.message}</p>}
          <input
            placeholder="Enter email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <input
            placeholder="Enter password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />

          <button>Sign in</button>
        </form>
      </div>
    );
  }
}

export default withRouter(SignInForm);
