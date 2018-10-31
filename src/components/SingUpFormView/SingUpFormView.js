import React, { Component } from 'react'
import SingUpForm from '../SignUpForm/SignUpForm'


import './SingUpFormView.css'

class SingUpFormView extends Component {
  
  render() {
    return  (
      <div className="SingUpFormView">
     
       
        <SingUpForm />
      </div>
    )
  }
}

export default SingUpFormView