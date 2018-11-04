import React, { Component } from 'react'
import { Input } from 'semantic-ui-react'


class UserSearcher extends Component {

  state = {
        userName: '',       
        error: null
    }

    handleSubmit = event => {
        event.preventDefault()
        if (this.state.userName === '') {
          this.setState({
            error: new Error('Who do you want to find?')
          })
          return;
        }
        this.props.processSearchPhrase(this.state.userName)
        this.setState({ userName: '', error: null })
      }
    

    handleChange = event => {
        this.setState({
          userName: event.target.value
        }, () => this.props.processSearchPhrase(this.state.userName))
      }

    render() {

        return (
            <div className='UserSearcherForm'>
     <form onSubmit={this.handleSubmit}>
        {
          this.state.error && <p>{this.state.error.message}</p>
        }
        <Input focus placeholder='Znajdź użytkownika' value={this.state.userName} onChange={this.handleChange}/>
        
        
      </form>  
      </div>
        )
    }

}

export default UserSearcher