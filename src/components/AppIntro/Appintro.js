import React, { Component } from "react";
import "./AppIntro.css";

class Appintro extends Component {
  state = {
    alreadyShown: localStorage.getItem('alreadyShown')
  }

  handleCloseClick = () => {
    this.setState({
      alreadyShown: true
    })
    localStorage.setItem('alreadyShown', 'true')
  }
  render() {
    if (this.state.alreadyShown) {
      return null
    }
    return (
      <div className="Ficzer">
      {/* <button onClick={this.handleCloseClick}>close</button> */}
        <div className="Ficzerbox">
          <div className="Foto f1" ></div>
          <div className="Opis" ><h3>Zrób trica</h3></div>
        </div>
        <div className="Ficzerbox">
          <div className="Foto f2" ></div>
          <div className="Opis" ><h3>Miejssce na opis</h3></div>
        </div>
        <div className="Ficzerbox">
          <div className="Foto f3" ></div>
          <div className="Opis" ><h3>Zrób sześćiopak</h3></div>
        </div>
        <div className="Ficzerbox">
          <div className="Foto f4" ></div>
          <div className="Opis" ><h3>Miejssce na opis</h3></div>
        </div>
        <div className="Ficzerbox">
          <div className="Foto f5" ></div>
          <div className="Opis" ><h3>Miejssce na opis</h3></div>
        </div>
      </div>
    );
  }
}

export default Appintro;
