import React, { Component } from 'react'

import SingInForm from '../SignInForm'

import './SingInFormView.css'

class SingInFormView extends Component {
 

  render() {
    return  (
      <div className="SingInFormView">
        
        <SingInForm/>
      </div>
    )
  }
}

export default SingInFormView