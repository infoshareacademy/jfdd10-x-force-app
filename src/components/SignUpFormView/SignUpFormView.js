import React, { Component } from 'react'
import SignUpForm from '../SignUpForm/SignUpForm'


import './SignUpFormView.css'

class SignUpFormView extends Component {
  
  render() {
    return  (
      <div className="SignUpFormView">
     
       
        <SignUpForm />
      </div>
    )
  }
}

export default SignUpFormView