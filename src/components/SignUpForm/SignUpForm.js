import React, { Component } from "react";
// import PropTypes from 'prop-types'
import firebase from "firebase";

import "./SignUpForm.css";

class SignUpForm extends Component {
  static propTypes = {};

  state = {
    email: "",
    password: "",
    error: null
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
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => this.setState({ erro: null }))
      .catch(error => this.setState({ error }));
  };

  render() {
    return (
      <div className="SignUpForm">
        <form onSubmit={this.handleSubmit} className="SignUpForm">
          {this.state.error && <p>{this.state.error.message}</p>}
          <input
            placeholder="Enter email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            required={true}
          />
          <input
            placeholder="Enter password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
            required={true}
          />
          <input type="checkbox" name="trainer" value="trainer" required={true}>
            Jesteś trenerem?
          </input>

          <button>Sign up</button>
        </form>
      </div>
    );
  }
}

export default SignUpForm;
