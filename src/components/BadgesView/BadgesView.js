import React, { Component } from "react";
import BadgeList from "../BadgeList/BadgeList";
import "./BadgesView.css";
import { Transition, Icon } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import snapshotToArray from "../../snapshotToArray";

class BadgesView extends Component {
  constructor() {
    super();

    this.state = {
      badges: [],
      currentPage: 1,
      badgesPerPage: 5,
      isVisibleLeft: true,
      isVisableRight: true
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

    this.setState({ isVisableRight: !this.state.isVisableRight });
  }

  handlePageChangeOnArrowLeft(page, number) {
    number.length - number.length + 1 !== page &&
      this.setState({ currentPage: page - 1 });

    this.setState({ isVisibleLeft: !this.state.isVisibleLeft });
  }

  static getDerivedStateFromProps(props) {
    return {
      badges: snapshotToArray(props.badges)
    };
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
        <ul key={badges.id}>
          <BadgeList badges={currentBadges} />
        </ul>
        <div className="container_page_numbers">
          <span>
            <Transition
              animation={"pulse"}
              duration={1000}
              visible={this.state.isVisibleLeft}
            >
              <Icon
                size="huge"
                inverted
                color="blue"
                name="caret left"
                onClick={() =>
                  this.handlePageChangeOnArrowLeft(currentPage, pageNumbers)
                }
              />
            </Transition>
          </span>
          <span id="page-numbers">{renderPageNumbers}</span>

          <span>
            <Transition
              animation={"pulse"}
              duration={1000}
              visible={this.state.isVisableRight}
            >
              <Icon
                size="huge"
                inverted
                color="blue"
                name="caret right"
                onClick={() =>
                  this.handlePageChangeOnArrowRight(currentPage, pageNumbers)
                }
              />
            </Transition>
          </span>
        </div>
      </div>
    );
  }
}

export default BadgesView;
