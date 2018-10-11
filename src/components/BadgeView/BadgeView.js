import React, { Component } from 'react'


class BadgeView extends Component {

    render() {
        // const studentId = { parseInt(props.match.params.studentId) }
        return (
            <div>
                <img style={{ width: 200, height: 200 }} src={this.props.location.state.logo}></img> 
                <p>
                    title: {this.props.location.state.title}
                </p>
                <p>
                    description: <br></br> {this.props.location.state.description}
                </p>
                <p>
                    moreInfo: <br></br> {this.props.location.state.moreInfo}
                </p>
            </div>
        )
    }
}

export default BadgeView