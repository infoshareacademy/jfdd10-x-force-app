import React, { Component } from "react";
import BadgeMaker from "../BadgeMaker/BadgeMaker";
import BadgeDealerMap from "../BadgeDealerMap/BadgeDealerMap";
import BadgesOfDealerView from "../BadgesOfDealerView/BadgesOfDealerView";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";
import UserProfileFormEdit from "../UserProfileFormEdit/UserProfileFormEdit";

class UserProfileView extends Component {
  state = {
    isEditMode: false
  };

  toggleEditMode = event => {
    this.setState({
      isEditMode: !this.state.isEditMode
    });
  };

  render() {
    const user = this.props.user;
    if (!user) {
      return <p>Loading...</p>;
    }
    return (
      <div className="UserProfileView">
        <div>
          {this.state.isEditMode === true && (
            <UserProfileFormEdit
              user={user.uid}
              badges={this.props.badges}
            />
          )}
          <Button onClick={this.toggleEditMode}>Edytuj Profil</Button>

          {console.log(this.state.isEditMode)}
          <div className="dealer_header">
            <p>
              {" "}
              {user.name} {user.surname}
            </p>
          </div>
          <div className="dealer_top">
            <div className="dealer_avatar">
              <img src={user.avatar} alt="" />
            </div>
            <div className="dealer_header">Opis</div>
            <div className="dealer_description">
              <p>{user.description}</p>
            </div>
          </div>
          <div className="dealer_header">Tu mnie znajdziesz</div>
          <div className="dealer_map">
            {user.position && (
              <BadgeDealerMap
                center={user.position}
                dealers={this.state.dealers}
                trainerObject={user}
                badges={this.props.badges}
              />
            )}
          </div>
        </div>

        {user.isTrainer ? <BadgeMaker dealerId={user.uid} /> : null}
        <div className="dealer_header">Te odznaki posiadam</div>
        <div className="dealer_badges">
          <BadgesOfDealerView dealer={user} badges={this.props.badges} />
        </div>
      </div>
    );
  }
}

export default UserProfileView;
