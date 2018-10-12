import React, { Component } from 'react';
import BadgeSearcherForm from './BadgeSearcherForm/BadgeSearcherForm'
import BadgeSearcherResults from './BadgeSearcherResults/BadgeSearcherResults'

class BadgeSearcher extends Component {

    state= {
        badges: []
    }


    componentDidMount() {
        fetch('/data/employees.json').then(
          response => response.json()
        ).then(
          allBadges => this.setState({ badges: allBadges })
        )
      }
    

render() {

return( 
 <div>   
<BadgeSearcherForm/>
<BadgeSearcherResults badges={this.state.badges}/>
</div>
)
}
} 

export default BadgeSearcher