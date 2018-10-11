import React, { Component } from 'react'
import PropTypes from 'prop-types'


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

            <li key={this.props.id}>
                <img style={{ width: 50, height: 50 }} src={this.props.logo}></img> 
                {this.props.title} - {this.props.description}
            </li>
        )
    }
}

export default BadgeListItem