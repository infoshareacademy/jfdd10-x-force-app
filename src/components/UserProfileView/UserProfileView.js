import React, { Component } from 'react'





class UserProfileView extends Component {
  

  render() {
    return  (
      <div className="UserProfileView">
       <h1>{this.props.user.name}</h1>
      </div>
    )
  }
}

export default UserProfileView