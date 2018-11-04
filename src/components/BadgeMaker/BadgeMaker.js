import React, { Component } from "react";
import firebase from "firebase";

import "./BadgeMaker.css";
import { addBadge, getBadges } from "../../services/badges";
import { getDealers } from "../../services/dealers";

class BadgeMaker extends Component {
  state = {
    title: "",
    file: null,
    // error: null,
    description: "",
    moreInfo: "",
    logo: ''
  };

  makeHandleChange = fieldName => event => {
    this.setState({
      [fieldName]: event.target.value
    });
  };

  handleLogoChange = event => {
    this.setState({
      file: event.target.files[0]
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const file = this.state.file;
    var storageRef = firebase.storage().ref("/images");

    var thisRef = file.name !== '' ? storageRef.child(file.name) : '';
    thisRef.put(file).then(() => {
      thisRef.getDownloadURL().then(url => {
        const badgeData = {
          title: this.state.title,
          logo: url,
          description: this.state.description,
          moreInfo: this.state.moreInfo
        };

        addBadge(this.props.dealerId, badgeData)
          .then(getBadges)
          .then(getDealers);
      });
    });
  };

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error.message}</p>}
        <div className="dealer_header">Tworzenie Badga</div>
        <form encType="multipart/form-data" onSubmit={this.handleSubmit}>
          <label for="title">Tytuł: </label>
          <input
            className="make badge"
            placeholder="Badge Title"
            value={this.state.title}
            onChange={this.makeHandleChange("title")}
          />
          <br />
          <br />
          <label for="logo">Logo: </label>
          <input
            type="file"
            accept="image/png, image/jpeg"
            className="makeBadge"
            onChange={this.handleLogoChange}
          />
          <br />
          <br />
          <label for="description">Opis: </label>
          <input
            className="make badge"
            placeholder="Badge Description"
            value={this.state.description}
            onChange={this.makeHandleChange("description")}
          />
          <br />
          <br />
          <label for="moreInfo">Więcej informacji: </label>
          <input
            className="make badge"
            placeholder="Badge more info"
            value={this.state.moreInfo}
            onChange={this.makeHandleChange("moreInfo")}
          />
          <br />
          <br />

          <button type="submit">Dodaj Badga</button>
        </form>
      </div>
    );
  }
}

export default BadgeMaker;
