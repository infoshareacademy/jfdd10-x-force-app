import React, { Component } from "react";


class UserSearcherResults extends Component {
  usersFound = () => {
    if (this.props.users.lenght === 0) {
      return "No users found";
    }
  };

  render() {
      
    if (this.props.users.length === 0) {
        return (
            <div className="userSearcherResults">
                <div>No users found</div>
            </div>
        );
    }

    return (
      <div className="userSearcherResults">
        <div>{this.usersFound()}</div>

        <ul>
          {this.props.users.slice(0, 5).map(user => (
            <li>
              {user.name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default UserSearcherResults;
