import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './BadgeView.css'

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
            <div className='badgeView'>
            <p className='color'>
                    {badge.title}
                </p>
                <img  src={badge.logo} alt="Badge"></img> 
                
                <p className='color'>
                    {badge.description}
                </p>
                <p className='moreInfo'>
                     {badge.moreInfo}
                </p>

                <div>
                <p className='color'> Trenerzy którzy posiadają odznakę:</p>
                    {badge.IdTrainerWhoCanGiveThisBadge.map(
                        id => this.state.trainers.find(trainer => trainer.id === id)
                    ).filter(Boolean).map(
                        trainer => (
                            <p><Link className='linki' to={`/badgedealersview/${trainer.id}`}>{trainer.name} {trainer.surname}</Link></p>
                        )
                    )}
                </div>
            </div>
        )
    }
}

export default BadgeView