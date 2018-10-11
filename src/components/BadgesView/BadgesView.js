import React, { Component } from 'react'
import BadgeList from '../BadgeList/BadgeList'
import Pagination from "react-js-pagination";

class BadgesView extends Component {
    state = {
        badges: [],
        activePage: 1
    }

    handlePageChange(activePage) {
        // const renderedUsers = this.state.badges.slice((activePage - 1) * 2, (activePage - 1) * 2 + 2);
        const renderedUsers = <BadgeList badges={this.state.badges.slice((activePage - 1) * 2, (activePage - 1) * 2 + 2)} />
        this.setState({ activePage: renderedUsers });
    }

    componentDidMount() {
        fetch('/data/badges.json').then(
            response => response.json()
        ).then(
            badge => this.setState({ badges: badge })
        )
    }

    render() {
        return (
            <div>
                <h1>Badges List</h1>
                {/* <Pagination
                    activePage={this.state.activePage}
                    itemsCountPerPage={5}
                    totalItemsCount={450}
                    // pageRangeDisplayed={5}
                    onChange={(page) => this.handlePageChange(page)}
              > */}
                <BadgeList badges={this.state.badges} />
              {/* </Pagination> */}

            </div>
        )
    }
}

export default BadgesView