import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './BadgeListItem.css'

class BadgeListItem extends Component {
    

    render() {
        return (
            
            <li className='li_badgeListItem'>
                <div className='badgeListItem'>
                <div className='logo'>
            <img  src={this.props.logo} alt="Badge"></img> 
            </div>
            <div className='description'>
                <span className='title'>{this.props.title} - {this.props.description}</span>
                </div>
              <div className='link_holder'>  <Link className='link' to={{pathname: `/badges/${this.props.id}`, state: {logo: this.props.logo, title: this.props.title, description: this.props.description, moreInfo: this.props.moreInfo, IdTrainerWhoCanGiveThisBadge: this.props.IdTrainerWhoCanGiveThisBadge  } }} >
                    Więcej
                    
                </Link> </div>
                
                </div>
            </li>
        )
    }
}

export default BadgeListItem