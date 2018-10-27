import React, { Component } from "react";
import BadgeList from "../BadgeList/BadgeList";
import "./BadgesView.css";
import { Segment, Icon } from 'semantic-ui-react'
import "semantic-ui-css/semantic.min.css";

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

  handlePageChangeOnArrowRight(page, number) {
    number.length !== page && this.setState({ currentPage: page + 1 });
  }

  handlePageChangeOnArrowLeft(page, number) {
    number.length - number.length + 1 !== page &&
      this.setState({ currentPage: page - 1 });
  }

  componentDidMount() {
    fetch("https://x-force-app.firebaseio.com/badges.json")
      .then(response => response.json())
      .then(data =>
        Object.entries(data || {}).map(([id, value]) => ({ id, ...value }))
      )
      .then(badges => this.setState({ badges }));
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
        </span>
      );
    });

    return (
      <div>
        {console.log(badges)}
        <ul key={badges.id}>
          <BadgeList badges={currentBadges} />
        </ul>
        <div className="container_page_numbers">
        <span><Icon size='huge' inverted color='blue' name='caret left' onClick={() =>this.handlePageChangeOnArrowLeft  (currentPage, pageNumbers)}/></span>
          <span id="page-numbers">{renderPageNumbers}</span>

          <span><Icon size='huge' inverted color='blue' name='caret right' onClick={() =>this.handlePageChangeOnArrowRight(currentPage, pageNumbers)}/></span>
        </div>
      </div>
    );
  }
}

export default BadgesView;
