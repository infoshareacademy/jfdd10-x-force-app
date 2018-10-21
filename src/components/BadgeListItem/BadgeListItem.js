import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './BadgeListItem.css'

class BadgeListItem extends Component {
    

    render() {
        return (
            <div className='badgeListItem'>
            <li>
            <img style={{ width: 50, height: 50 }} src={this.props.logo} alt="Badge"></img> 
                <span>{this.props.title} - {this.props.description}</span>

                <Link to={{pathname: `/badges/${this.props.id}`, state: {logo: this.props.logo, title: this.props.title, description: this.props.description, moreInfo: this.props.moreInfo, IdTrainerWhoCanGiveThisBadge: this.props.IdTrainerWhoCanGiveThisBadge  } }} >
                    Show More
                    
                </Link>
            </li>
            </div>
        )
    }
}

export default BadgeListItem