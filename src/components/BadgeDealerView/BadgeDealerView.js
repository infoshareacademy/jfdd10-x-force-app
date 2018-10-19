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
      <div className="top">
      
      </div>
       
       {/* {this.state.dealers
          .filter(dealer => dealer.id === dealerId)
          .map(dealer => (






            <img src={dealer.avatar}/>
          ))} */}
      </div>
    )
  }
}

export default BadgeDealerView