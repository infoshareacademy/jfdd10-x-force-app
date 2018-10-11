import React, { Component } from 'react'
import BadgeListItem from '../BadgeListItem/BadgeListItem'
import PropTypes from 'prop-types'

class BadgeList extends Component {
    static propTypes = {
        badges: PropTypes.array.isRequired
    }


    render() {
        return (
            <div>
                <ul>
                    {
                        this.props.badges.map(
                            badge => (
                                <BadgeListItem key={badge.id}
                                    logo={badge.logo}
                                    title={badge.title}
                                    description={badge.description}
                                />
                            )
                        )


                    }
                </ul>
            </div>
        )
    }
}

export default BadgeList