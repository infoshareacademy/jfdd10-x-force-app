import React, { Component } from "react";
import firebase from "firebase";

import "./BadgeMaker.css";
import { addBadge, getBadges } from "../../services/badges";
import { getDealers } from "../../services/dealers";

class BadgeMaker extends Component {
  state = {
    title: "",
    logo: null,
    error: null,
    description: "",
    moreInfo: "",
    logoName: ""
  };

  makeHandleChange = fieldName => event => {
    this.setState({
      [fieldName]: event.target.value
    });
  };

  handleLogoChange = event => {
    this.setState({
      logo: event.target.files[0]
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const logo = this.state.logo;
    var storageRef = firebase.storage().ref("/images");

    // if (!logo.name.endsWith(".png") || !logo.name.endsWith(".jpeg")) {
    //   this.setState({
    //     error: new Error("Obsługuwiane jest tylko png / jpeg")
    //   });
    //   return;
    // }
    var thisRef = storageRef.child(logo.name);

    // thisRef.put(logo).then(function(snapshot) {
    //   console.log("Uploade badge logo", snapshot);
    //   thisRef.getDownloadURL().then(function(url) {
    //     console.log(url);
    //   });
    // });
    thisRef.put(logo);
    thisRef.getDownloadURL().then( (url) => this.setState({
      logoName: url
    }))
    // this.setState({
    //   logoName: thisRef.getDownloadURL().then(function(url) {
    //     console.log(url);
    //   })
    // });

    addBadge(this.props.dealerId, this.state)
      .then(getBadges)
      .then(getDealers);
  };

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error.message}</p>}

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
