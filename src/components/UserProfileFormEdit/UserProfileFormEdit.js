import React, { Component } from "react";

import "./UserProfileFormEdit.css";
import firebase from "firebase";
import { updateDealer, getDealers } from "../../services/dealers";
import { getBadges } from "../../services/badges";

class UserProfileFormEdit extends Component {
  state = {
    name: "",
    surname: "",
    description: "",
    moreInfo: "",
    file: null,
    error: null
  };

  handleChange = fieldName => event => {
    this.setState({
      [fieldName]: event.target.value
    });
  };

  handleAvatarChange = event => {
    this.setState({
      file: event.target.files[0]
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const file = this.state.file;
    var storageRef = firebase.storage().ref("/avatar");

    var thisRef = storageRef.child(file.name);
    thisRef.put(file).then(() => {
      thisRef.getDownloadURL().then(url => {
        const dealerData = {
          name: this.state.name,
          surname: this.state.surname,
          avatar: url,
          description: this.state.description
        };

        updateDealer(this.props.user, dealerData)
      });
    });
  };

  render() {
    const user = this.props.user;
    if (!user) {
      return <p>Loading...</p>;
    }

    return (
      <div className="UserProfileFormEdit">
        {console.log('user id: ', user)}
        <form onSubmit={this.handleSubmit} className="UserPersonalDataEdit">
          {this.state.error && <p>{this.state.error.message}</p>}

          <input
            placeholder="wpis imię"
            name="name"
            value={this.state.name}
            onChange={this.handleChange("name")}
          />
          <br />
          <br />
          <input
            placeholder="wpis nazwisko"
            name="surname"
            value={this.state.surname}
            onChange={this.handleChange("surname")}
          />
          <br />
          <br />
          <label for="logo">Zdjęcie: </label>
          <input
            type="file"
            accept="image/png, image/jpeg"
            className="avatar"
            onChange={this.handleAvatarChange}
          />
          <br />
          <br />
          <input
            placeholder="Opis"
            name="name"
            value={this.state.description}
            onChange={this.handleChange("description")}
          />
          <br />
          <br />
          <button type="submit">Zaakceptuj zmiany</button>
        </form>
        <br />
        <br />
        <br />
        <br />
      </div>
    );
  }
}

export default UserProfileFormEdit;
