import React, { Component } from "react";

import "./BadgeMaker.css";
import { addBadge, getBadges } from "../../services/badges";
import { updateDealer, getDealers } from "../../services/dealers";

class BadgeMaker extends Component {
  state = {
    title: "",
    logo: null,
    description: "",
    moreInfo: ""
  };

  makeHandleChange = fieldName => event => {
    this.setState({
      [fieldName]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    addBadge(
      this.props.dealerId,
      this.state
    ).then(getBadges).then(getDealers);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label for="avatar">Tytuł: </label>
          <input
            className="make badge"
            placeholder="Badge Title"
            value={this.state.title}
            onChange={this.makeHandleChange("title")}
          />
          <br />
          <br />
          <label for="avatar">Logo: </label>
          <input
            type="file"
            accept="image/png, image/jpeg"
            className="make badge"
            placeholder="Badge Logo"
            value={this.state.logo}
            onChange={this.makeHandleChange("logo")}
          />
          <br />
          <br />
          <label for="avatar">Opis: </label>
          <input
            className="make badge"
            placeholder="Badge Description"
            value={this.state.description}
            onChange={this.makeHandleChange("description")}
          />
          <br />
          <br />
          <label for="avatar">Więcej informacji: </label>
          <input
            className="make badge"
            placeholder="Badge more info"
            value={this.state.moreInfo}
            onChange={this.makeHandleChange("moreInfo")}
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
