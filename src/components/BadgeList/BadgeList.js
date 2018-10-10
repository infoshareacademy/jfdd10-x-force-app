import React, { Component } from 'react'
import BadgeListItem from '../BadgeListItem/BadgeListItem'

class BadgeList extends Component {
    state = {
        badges: []
    }

    componentDidMount() {
        fetch('/data/badges.json').then(
            response => response.json()
        ).then(
            badges => this.setState({ badges: badges })
        )
    }

    render() {
        return (
            <div>
                <h1>Badges</h1>
                <BadgeListItem />
                {
                    this.state.badges.map(
                        badge => (
                            <p key={badge.id}><img style={{ width: 50, height: 50 }} src={badge.logo}></img> {badge.title} - {badge.description} <button>How to get</button></p>
                        )
                    )
                }
            </div>
        )
    }
}

export default BadgeList