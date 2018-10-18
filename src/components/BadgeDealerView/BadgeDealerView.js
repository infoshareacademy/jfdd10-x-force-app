import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './BadgeDealerView.css'

class BadgeDealerView extends Component {
  static propTypes = {

  }

  state = {
    dealers:[],
    badges:[]
  }

  componentDidMount() {
    fetch("/data/trainers.json")
      .then(response => response.json())
      .then(x => this.setState({ dealers: x }));

    fetch("/data/badges.json")
      .then(response => response.json())
      .then(badge => this.setState({ badges: badge }));
  }


  render() {
    const dealerId = parseInt(this.props.match.params.badgeDealerViewId)
    
    return  (
      <div className="BadgeDealerView">
      <br/>
        BadgeDealerView
       
       {this.state.dealers
          .filter(dealer => dealer.id === dealerId)
          .map(dealer => (
            <p key={dealer.id}>
              {dealer.description}
            </p>
          ))}
      </div>
    )
  }
}

export default BadgeDealerView