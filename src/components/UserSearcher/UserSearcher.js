import React, { Component } from "react";
import UserSearcherForm from "../UserSearcherForm/UserSearcherForm";
import UserSearcherResults from "../UserSearcherResults/UserSearcherResults";

import snapshotToArray from '../../snapshotToArray';

class UserSearcher extends Component {
  state = {
    searchPhrase: "",
    users: []
  };

  static getDerivedStateFromProps(props) {
    return {
      users: snapshotToArray(props.users)
    };
  }

  processSearchPhrase = phrase => this.setState({ searchPhrase: phrase });

  render() {
    return (
      <div>
        <div>
          <UserSearcherForm processSearchPhrase={this.processSearchPhrase} />
          <UserSearcherResults
            users={this.state.users.filter(user =>
                user.isTrainer === false).filter(user =>
              user.name
                .toLowerCase()
                .includes(this.state.searchPhrase.toLowerCase())
            )}
          />
        </div>
      </div>
    );
  }
}

export default UserSearcher;
