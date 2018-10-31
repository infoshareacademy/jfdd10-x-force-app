import React, { Component } from 'react'
import SignUpForm from '../SignUpForm/SignUpForm'


import './SingUpFormView.css'

class SignUpFormView extends Component {
  
  render() {
    return  (
      <div className="SingUpFormView">
     
       
        <SignUpForm />
      </div>
    )
  }
}

export default SignUpFormView