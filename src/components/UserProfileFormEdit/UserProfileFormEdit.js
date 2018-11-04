import React, { Component } from "react";

import "./UserProfileFormEdit.css";
import firebase from 'firebase';

class UserProfileFormEdit extends Component {

  state = {
    error: null
  }

  handleChange = fieldName => event => {
    [fieldName] = event.target.value;
  };

  handleSubmit = event => {
    event.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(data => {
        firebase
          .database()
          .ref("/users/" + data.user.uid)
          .update({ name: this.state.name, isTrainer: this.state.isTrainer });
        this.setState({ error: null });

        if (this.state.isTrainer === true) {
          firebase
            .database()
            .ref("/dealers/" + data.user.uid)
            .update({ name: this.state.name, isTrainer: this.state.isTrainer });
          this.setState({ error: null });
        }
      })
      .then(() => {
        this.props.history.push("/");
        if (this.props.afterSignUpSuccess) {
          this.props.afterSignUpSuccess();
        }
      })
      .catch(error => this.setState({ error }));
  };

  render() {
    const user = this.props.user;
    if (!user) {
      return <p>Loading...</p>;
    }
    return (
      <div className="UserProfileFormEdit">
        <form onSubmit={this.handleSubmit} className="UserPersonalDataEdit">
          {this.state.error && <p>{this.state.error.message}</p>}
       
          <input
            placeholder="Enter name"
            name="name"
            value={this.props.name}
            onChange={this.handleChange}
          />
          
        </form>
      </div>
    );
  }
}

export default UserProfileFormEdit;
