import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class BadgeListItem extends Component {

    render() {
        return (
            // <form>
            //     <input
            //         placeholder="Search for..."
            //         ref={input => this.search = input}
            //         onChange={this.handleInputChange}
            //     />
            //     <p>{this.state.badgeId}</p>
            // </form>
            
            <li>
            <img style={{ width: 50, height: 50 }} src={this.props.logo} alt="Badge"></img> 
                {this.props.title} - {this.props.description}

                <Link to={{pathname: `/badges/${this.props.id}`, state: {logo: this.props.logo, title: this.props.title, description: this.props.description, moreInfo: this.props.moreInfo, IdTrainerWhoCanGiveThisBadge: this.props.IdTrainerWhoCanGiveThisBadge  } }} >
                    Show More
                    
                </Link>
            </li>
        )
    }
}

export default BadgeListItem