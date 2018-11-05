import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import "./BadgeListItem.css";
import { Button } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { Card } from "semantic-ui-react";

class BadgeListItem extends Component {
  render() {
    return (
        <Card raised style={{ margin: '20px 0'}}>
          <div
            style={{
              padding: 30
            }}
          >
            <div
              style={{
                height: 230,
                background: `white url(${
                  this.props.logo
                }) no-repeat center center`,
                backgroundSize: "contain"
              }}
            />
          </div>
          <Card.Content>
            <Card.Header>{this.props.title}</Card.Header>
            <Card.Meta>
              <span className="date">Joined in 2015</span>
            </Card.Meta>
            <Card.Description>{this.props.description}</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Link className="link" to={`/badges/${this.props.id}`}>
              <Button toggle inverted color="blue" className="IntroButton">
                Więcej
              </Button>
            </Link>
          </Card.Content>
        </Card>
    );
  }
}
export default BadgeListItem;
