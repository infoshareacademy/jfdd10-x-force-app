import React, { Component } from 'react'

class BadgeListItem extends Component {
    // static propTypes = {
    //     badgeId: PropTypes.number.isRequired,
    //     children: PropTypes.string.isRequired
    // }

    state = {
        badgeId: null,
        error: null
    }

    handleInputChange = () => {
        this.setState({
            badgeId: this.search.value
        })
    }

    render() {
        return (
            <form>
                <input
                    placeholder="Search for..."
                    ref={input => this.search = input}
                    onChange={this.handleInputChange}
                />
                <p>{this.state.badgeId}</p>
            </form>

        )
    }
}

export default BadgeListItem