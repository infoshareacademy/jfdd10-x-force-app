import React, { Component } from "react";

import "./BadgeMaker.css";

class BadgeMaker extends Component {
  state = {
    id: null,
    badgeTitleAdd: "",
    badgeLogoAdd: null,
    badgeDescriptionAdd: "",
    badgeMoreInfoAdd: "",

    badgeTitleEdit: "",
    badgeLogoEdit: null,
    badgeDescriptionEdit: "",
    badgeMoreInfoEdit: "",
    badges: []
  };

  makeHandleChange = fieldName => event => {
    this.setState({
      [fieldName]: event.target.value
    });
  };

  // makeHandleEnterEditMode = badge => event => {
  //   this.props.firebaseRef.child(badge.id).update({
  //     inEdit: true
  //   });

  //   this.setState({
  //     badgeTitleEdit: badge.title,
  //     badgeLogoEdit: badge.logo,
  //     badgeDescriptionEdit: badge.description,
  //     badgeMoreInfoEdit: badge.moreInfo
  //   });
  // };

  handleSubmit = event => {
    event.preventDefault();
    this.props
      .badgeAdd(
        this.state.badgeTitleAdd,
        this.state.badgeLogoAdd,
        this.state.badgeDescriptionAdd,
        this.state.badgeMoreInfoAdd,
      )
      .then(this.props.getBadges);
    this.props
      .trainerUpdate(this.props.badgeDealerViewId, this.props.badgeId)
      .then(this.props.getTrainers);
  };

  // componentDidMount() {
  //   this.props.firebaseRef.on("value", snapshot => {
  //     const badges = Object.entries(snapshot.val() || {})
  //       .map(([id, value]) => ({ id, ...value }))
  //       .reverse();

  //     this.setState({
  //       badges
  //     });
  //   });
  // }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label for="avatar">Tytuł: </label>
          <input
            className="make badge"
            placeholder="Badge Title"
            value={this.state.badgeTitleAdd}
            onChange={this.makeHandleChange("badgeTitleAdd")}
          />
          <br />
          <br />
          <label for="avatar">Logo: </label>
          <input
            type="file"
            accept="image/png, image/jpeg"
            className="make badge"
            placeholder="Badge Logo"
            value={this.state.badgeLogoAdd}
            onChange={this.makeHandleChange("badgeLogoAdd")}
          />
          <br />
          <br />
          <label for="avatar">Opis: </label>
          <input
            className="make badge"
            placeholder="Badge Description"
            value={this.state.badgeDescriptionAdd}
            onChange={this.makeHandleChange("badgeDescriptionAdd")}
          />
          <br />
          <br />
          <label for="avatar">Więcej informacji: </label>
          <input
            className="make badge"
            placeholder="Badge more info"
            value={this.state.badgeMoreInfoAdd}
            onChange={this.makeHandleChange("badgeMoreInfoAdd")}
          />
          <br />
          <br />

          <button>ADD</button>
        </form>
      </div>
    );
  }
}

export default BadgeMaker;
