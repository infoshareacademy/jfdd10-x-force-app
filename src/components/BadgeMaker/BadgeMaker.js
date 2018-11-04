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
    logo: ""
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
    // var logo = this.state.logo;
    var storageRef = firebase.storage().ref("/images" + file.name);
    var upload = storageRef.put(file);
    const database = firebase.database();
    const ref = database.ref("badges/");

    upload.on("state_changed", function complete() {
      storageRef.getMetadata().then(metadata => {
        ref.push({
          url: metadata.downloadUrl[0]
        })
      })
    });
    var thisRef = storageRef.child(file.name);
    thisRef.put(file);

    // var downloadUrl = thisRef.getDownloadURL().then(url => url);
    console.log("thisref - ", thisRef.getDownloadURL().then(function(url) {}));

    var downloadUrls = thisRef.getDownloadURL().then(function(url) {
      console.log("url: ", url);
    });

    //  error why?

    // var downloadUrl = thisRef.getDownloadURL().then(function(url) {
    //   return url.i;
    // });

    this.setState({
      title: this.state.title,
      logo: downloadUrls,
      description: this.state.description,
      moreInfo: this.state.moreInfo
    });

    console.log("logo badga: ", this.state.logo);

    // addBadge(this.props.dealerId, this.state)
    //   .then(getBadges)
    //   .then(getDealers);
    // addBadge(this.props.dealerId, badgeData)
    // .then(getBadges)
    // .then(getDealers);

    // console.log('downloadUrl' ,downloadUrl);
    // this.setState({
    //   logoName: downloadUrl
    // })

    // thisRef.getDownloadURL().then(url =>
    //   this.setState({
    //     logoName: url.i
    //   })

    //   );
    //   console.log(this.state.logoName);

    // var uploadLogo = storageRef.put(this.state.logo);

    // uploadLogo.on(
    //   "state_changed",
    //   function(snapshot) {},
    //   function(error) {},
    //   function() {
    //     var postKey = firebase
    //       .database()
    //       .ref("Posts/" + this.props.dealerId)
    //       .push().key;
    //     var downloadUrl = uploadLogo.snapshot.downloadURL;
    //     var updates = {};
    //     var badgeData = addBadge(this.props.dealerId, this.state)
    //     .then(getBadges)
    //     .then(getDealers);
    //     updates["Posts/" + this.props.dealerId + postKey] = badgeData

    //     console.log(downloadUrl);
    //     firebase
    //       .database()
    //       .ref()
    //       .update(updates);
    //   }
    // );
    // if (!logo.name.endsWith(".png") || !logo.name.endsWith(".jpeg")) {
    //   this.setState({
    //     error: new Error("Obsługuwiane jest tylko png / jpeg")
    //   });
    //   return;
    // }
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
