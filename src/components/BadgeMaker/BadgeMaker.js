import React, { Component } from "react";
import PropTypes from "prop-types";

import "./BadgeMaker.css";

class BadgeMaker extends Component {
  static propTypes = {
    firebaseRef: PropTypes.func
  };
  state = {
    badgeTitleAdd: "",
    badgeLogoAdd: "",
    badgeDescriptionAdd: "",
    badgeMoreInfoAdd: "",

    badgeTitleEdit: "",
    badgeLogoEdit: "",
    badgeDescriptionEdit: "",
    badgeMoreInfoEdit: "",
    badges: []
  };

  makeHandleChange = fieldName => event => {
    this.setState({
      [fieldName]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.firebaseRef.push({
      id: Date.now(),
      title: this.state.badgeTitleAdd,
      logo: this.state.badgeLogoAdd,
      description: this.state.badgeDescriptionAdd,
      moreInfo: this.state.badgeMoreInfoAdd
    });

    this.setState({
      taskTitleAdd: "",
      badgeLogoAdd: "",
      badgeDescriptionAdd: "",
      badgeMoreInfoAdd: ""
    });
  };

  componentDidMount() {
    this.props.firebaseRef.on("value", snapshot => {
      const tasks = Object.entries(snapshot.val() || {})
        .map(([id, value]) => ({ id, ...value }))
        .reverse();

      this.setState({
        tasks
      });
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            className="make badge"
            placeholder="Badge Title"
            value={this.state.taskTitleAdd}
            onChange={this.makeHandleChange("taskTitleAdd")}
          />
          <input
            className="make badge"
            placeholder="Badge Logo"
            value={this.state.taskTitleAdd}
            onChange={this.makeHandleChange("taskTitleAdd")}
          />
          <input
            className="make badge"
            placeholder="Badge Description"
            value={this.state.taskTitleAdd}
            onChange={this.makeHandleChange("taskTitleAdd")}
          />
          <input
            className="make badge"
            placeholder="Badge Name"
            value={this.state.taskTitleAdd}
            onChange={this.makeHandleChange("taskTitleAdd")}
          />
        </form>
      </div>
    );
  }
}

export default BadgeMaker;
