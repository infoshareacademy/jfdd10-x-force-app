import React, { Component } from "react";
import "./AppIntro.css";

class Appintro extends Component {
  render() {
    return (
      <div className="Ficzer">
        <div className="Ficzerbox">
          <div className="Foto 1" ></div>
          <div className="Opis" ><h3>Miejssce na opis</h3></div>
        </div>
        <div className="Ficzerbox">
          <div className="Foto 2" ></div>
          <div className="Opis" ><h3>Miejssce na opis</h3></div>
        </div>
        <div className="Ficzerbox">
          <div className="Foto 3" ></div>
          <div className="Opis" ><h3>Miejssce na opis</h3></div>
        </div>
        <div className="Ficzerbox">
          <div className="Foto 4" ></div>
          <div className="Opis" ><h3>Miejssce na opis</h3></div>
        </div>
      </div>
    );
  }
}

export default Appintro;
