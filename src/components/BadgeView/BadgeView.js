import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class BadgeView extends Component {

    state = {
        badges: [],
        trainers: []
    }


    componentDidMount() {
        fetch(`${process.env.PUBLIC_URL}/data/badges.json`).then(
            response => response.json()
        ).then(
            badges => this.setState({ badges })
        )

        fetch(`${process.env.PUBLIC_URL}/data/trainers.json`).then(
            response => response.json()
        ).then(
            trainers => this.setState({ trainers })
        )
    }

    render() {
        const badgeId = parseInt(this.props.match.params.badgeId)
        const badge = this.state.badges.find(badge => badge.id === badgeId)

        if (badge === undefined) {
            return <p>Loading badge...</p>
        }

        return (
            <div>


                <img style={{ width: 200, height: 200 }} src={badge.logo} alt="Badge"></img> 
                <p>
                    title: {badge.title}
                </p>
                <p>
                    description: <br></br> {badge.description}
                </p>
                <p>
                    moreInfo: <br></br> {badge.moreInfo}
                </p>

                <div>
                    Trainers who can give this badge <br></br> 
                    {badge.IdTrainerWhoCanGiveThisBadge.map(
                        id => this.state.trainers.find(trainer => trainer.id === id)
                    ).filter(Boolean).map(
                        trainer => (
                            <p><Link to={`/trainer/${trainer.id}`}>{trainer.name}</Link></p>
                        )
                    )}
                </div>
            </div>
        )
    }
}

export default BadgeView