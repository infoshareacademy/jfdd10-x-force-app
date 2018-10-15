import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class BadgeView extends Component {

    render() {
        // const studentId = { parseInt(props.match.params.studentId) }
        return (
            <div>
                <img style={{ width: 200, height: 200 }} src={this.props.location.state.logo} alt="Badge"></img> 
                <p>
                    title: {this.props.location.state.title}
                </p>
                <p>
                    description: <br></br> {this.props.location.state.description}
                </p>
                <p>
                    moreInfo: <br></br> {this.props.location.state.moreInfo}
                </p>

                <p>
                    Trainers who can give this badge <br></br> <Link to={`/trainer:trainerID`}>{this.props.location.state.IdTrainerWhoCanGiveThisBadge.join(', ')}</Link>
                </p>
            </div>
        )
    }
}

export default BadgeView