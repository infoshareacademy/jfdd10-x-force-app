import React, { Component } from 'react'
import BadgeList from '../BadgeList/BadgeList'
import Pagination from "react-js-pagination";

class BadgesView extends Component {
    state = {
        badges: [],
        activePage: 1,
        paginatedBadge: []
    }

    handlePageChange(activePage) {
        const page = this.state.badges.slice((activePage - 1) * 2, (activePage - 1) * 2 + 2);
        // const paginatedBadge = <BadgeList badges={this.state.badges.slice((activePage - 1) * 2, (activePage - 1) * 2 + 2)} />
        const paginatedBadge = this.state.badges
        this.setState({ paginatedBadge: paginatedBadge }, {activePage: page});
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
                {/* <Pagination data={this.state.paginatedBadge
                }
                    activePage={this.state.activePage}
                    itemsCountPerPage={5}
                    totalItemsCount={450}
                    pageRangeDisplayed={5}
                    onChange={(page) => this.handlePageChange(page)}
              /> */}
              <ul>
                <BadgeList badges={this.state.badges} />
              </ul>
              {/* </Pagination> */}

            </div>
        )
    }
}

export default BadgesView