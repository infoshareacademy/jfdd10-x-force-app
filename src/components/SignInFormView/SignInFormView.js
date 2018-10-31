import React, { Component } from 'react'

import SignInForm from '../SignInForm'

import './SignInFormView.css'

class SignInFormView extends Component {
 

  render() {
    return  (
      <div className="SignInFormView">
        
        <SignInForm/>
      </div>
    )
  }
}

export default SignInFormView