import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class BadgeListItem extends Component {
    render() {
        return (
            <li>
            <img style={{ width: 50, height: 50 }} src={this.props.logo} alt="Badge"></img> 
                {this.props.title} - {this.props.description}
                <Link to={`/badges/${this.props.id}`} >
                    Show More
                </Link>
            </li>
        )
    }
}
export default BadgeListItem