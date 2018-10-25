import React, { Component } from "react";
import BadgeList from "../BadgeList/BadgeList";
import "./BadgesView.css";

class BadgesView extends Component {
  constructor() {
    super();
    this.state = {
      badges: [],
      currentPage: 1,
      badgesPerPage: 5
      // paginatedBadge: []
    };
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  handlePageChange(page) {
    this.setState({
      currentPage: Number(page.target.id)
    });
  }

  componentDidMount() {
    fetch("/data/badges.json")
      .then(response => response.json())
      .then(badge => this.setState({ badges: badge }));
  }

  render() {
    const { badges, currentPage, badgesPerPage } = this.state;

    const indexOfLastBadge = currentPage * badgesPerPage;
    const indexOfFirstBadge = indexOfLastBadge - badgesPerPage;
    const currentBadges = badges.slice(indexOfFirstBadge, indexOfLastBadge);

    // Logic for displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(badges.length / badgesPerPage); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <span
          className={currentPage === number ? "active counter" : "counter"}
          key={number}
          id={number}
          onClick={this.handlePageChange}
        >
          {number}

          {console.log(currentPage)}
        </span>
      );
    });

    return (
      <div>
        <ul key={badges.id}>
          <BadgeList badges={currentBadges} />
        </ul>
        <div className='container_page_numbers'>
        <span className="left" />
        <span id="page-numbers">{renderPageNumbers}</span>
        <span className="right" />
        </div>
      </div>
    );
  }
}

export default BadgesView;
