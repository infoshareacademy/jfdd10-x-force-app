import React, { Component } from 'react'
import './BadgeDealerListItem.css'
import { Link } from 'react-router-dom'
class BadgeDealerListItem extends Component {
    render() {
        return (


            <div className="contener">
                <div className="logo">
                <img src={this.props.avatar} alt=''/>
                
                </div>
                <div className='section2'>
                    <div className='description'>
                    <p>{this.props.description}</p>
                    
                    <p><Link to={`/badgedealersview/${this.props.id}`}>more</Link></p>
                    </div>
                    <div className='badges'>

                {this.props.listOfBadges
              .map(badgeId => this.props.badges.find(b => b.id === badgeId))
              .map(badgeItem => 
                badgeItem && <img style={{ width: 50, height: 50 }} src={badgeItem.logo} alt={badgeItem.logo}/>
              )}

                   
                    
                    </div>
                </div>
            </div>


        )
    }
}

export default BadgeDealerListItem