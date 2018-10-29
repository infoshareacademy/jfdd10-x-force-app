import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SingUpForm from '../SignUpForm/SignUpForm'


import './SingUpFormView.css'

class SingUpFormView extends Component {
  static propTypes = {

  }

  render() {
    return  (
      <div className="SingUpFormView">
     
        SingUpFormView
        <SingUpForm />
      </div>
    )
  }
}

export default SingUpFormView