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
    return <div className="SignUpForm">SignUpForm</div>;
  }
}

export default SignUpForm;
