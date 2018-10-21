import React, { Component } from "react";
import { Link } from "react-router-dom";

class BadgeView extends Component {
  state = {
    badges: [],
    trainers: []
  };

  componentDidMount() {
    fetch(`${process.env.PUBLIC_URL}/data/badges.json`)
      .then(response => response.json())
      .then(badges => this.setState({ badges }));

    fetch(`${process.env.PUBLIC_URL}/data/trainers.json`)
      .then(response => response.json())
      .then(trainers => this.setState({ trainers }));
  }

  render() {
    const badgeId = parseInt(this.props.match.params.badgeId);
    const badge = this.state.badges.find(badge => badge.id === badgeId);
    // const trainer = this.state.trainers.find(badge => trainer.listOfBadges === badge.id )

    if (badge === undefined) {
      return <p>Loading badge...</p>;
    }
    return (
      <div>
        <img style={{ width: 200, height: 200 }} src={badge.logo} alt="Badge" />
        <p> title: {badge.title}</p>
        <p>
          description: <br /> {badge.description}
        </p>
        <p>
          moreInfo: <br /> {badge.moreInfo}
        </p>
        <div>
          Trainers who can give this badge <br />
          {/* badge.IdTrainerWhoCanGiveThisBadge.map */}
          {badge.IdTrainerWhoCanGiveThisBadge.map(id =>
            this.state.trainers.find(trainer => trainer.id === id)
          )
            .filter(Boolean)
            .map(trainer => (
              <p>
                <Link to={`/badgedealersview/${trainer.id}`}>
                  {trainer.name}
                </Link>
              </p>
            ))}
        </div>
      </div>
    );
  }
}

export default BadgeView;
