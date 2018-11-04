import React, { Component } from "react";
import BadgeMaker from "../BadgeMaker/BadgeMaker";
import BadgeDealerMap from "../BadgeDealerMap/BadgeDealerMap";
import BadgesOfDealerView from "../BadgesOfDealerView/BadgesOfDealerView";
import UserSearcher from "../UserSearcher/UserSearcher"
class UserProfileView extends Component {
  render() {
    const user = this.props.user;
    if (!user) {
      return <p>Loading...</p>;
    }
    console.log(this.props.badges);
    return (
      <div className="UserProfileView">
        <div>
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
        <div>
          <UserSearcher users={this.props.users}/>
          </div>
      </div>
    );
  }
}

export default UserProfileView;
