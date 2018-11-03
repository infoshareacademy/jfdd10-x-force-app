import React, { Component } from "react";
// import PropTypes from 'prop-types'
import firebase from "firebase";

import "./SignUpForm.css";
import { withRouter } from "react-router-dom";

class SignUpForm extends Component {
  static propTypes = {};

  state = {
    email: "",
    password: "",
    name: "",
    isTrainer: false,
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
      .then(data => {      
          console.log(this.state.isTrainer);
          firebase
            .database()
            .ref("/users/" + data.user.uid)
            .set({ name: this.state.name, isTrainer: this.state.isTrainer });
          this.setState({ error: null });
         
        
        if (this.state.isTrainer === true) {
          console.log(this.state.isTrainer);
          firebase
            .database()
            .ref("/dealers/" + data.user.uid)
            .set({ name: this.state.name, isTrainer: this.state.isTrainer });
          this.setState({ error: null });
        }
      })
      .then(() => {this.props.history.push("/"); if (this.props.afterSignUpSuccess) {
        this.props.afterSignUpSuccess()
      }})
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
          <input
            placeholder="Enter name"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <div className='SignUpForm_trainer'>
          <label>Jesteś trenerem?</label>
          <input
            type="checkbox"
            name="trainer"
            checked={this.state.isTrainer}
            onChange={() => this.setState({ isTrainer: !this.state.isTrainer })}
          />
          <button>Sign up</button>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SignUpForm);
