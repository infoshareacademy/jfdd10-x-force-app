import React, { Component } from 'react';
import './BadgeSearcherForm.css'
import { Input } from 'semantic-ui-react'


class BadgeSearcherForm extends Component {

    state = {
        badgeName: '',       
        error: null
    }

    handleSubmit = event => {
        event.preventDefault()
        if (this.state.badgeName === '') {
          this.setState({
            error: new Error('What badge do you want to find?')
          })
          return;
        }
        this.props.processSearchPhrase(this.state.badgeName)
        this.setState({ badgeName: '', error: null })
      }
    

    handleChange = event => {
        this.setState({
          badgeName: event.target.value
        }, () => this.props.processSearchPhrase(this.state.badgeName))
      }

  render() {
    return (
      <div className='badgeSearcherForm'>
     <form onSubmit={this.handleSubmit}>
        {
          this.state.error && <p>{this.state.error.message}</p>
        }
        <Input focus placeholder='Znajdź odznakę' value={this.state.badgeName} onChange={this.handleChange}/>
        
        
      </form>  
      </div>
    )
  }
}

export default BadgeSearcherForm
