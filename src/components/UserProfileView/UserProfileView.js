import React, { Component } from 'react'
import BadgeMaker from '../BadgeMaker/BadgeMaker'





class UserProfileView extends Component {
  

  render() {
    const user = this.props.user
    return  (
      <div className="UserProfileView">
       <h1>{user.name}</h1>
       {user.isTrainer ? <BadgeMaker dealerId={user.uid}/> : null }
      </div>
    )
  }
}

export default UserProfileView