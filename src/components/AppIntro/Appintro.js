import React, { Component } from "react";
import { Button } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

import "./AppIntro.css";

class Appintro extends Component {
  // const { classes } = props;
  state = {
    alreadyShown: localStorage.getItem("alreadyShown")
  };

  handleCloseClick = () => {
    this.setState({
      alreadyShown: true
    });
    localStorage.setItem("alreadyShown", "true");
  };

  render() {
    if (this.state.alreadyShown) {
      return null;
    }
    return (
      <div className="AppIntro">
        <div className="Ficzer">
          <div className="Ficzerbox">
            <div className="Foto f1" />
            <div className="Opis">
              <h3>
                <br />
                To nie puszka szpinaku powiększa biceps a wyselekcjonowane
                ćwiczenia pod okiem doświadczonego trenera z którym powiększysz
                obwód bicepsa trwale !
              </h3>
            </div>
          </div>
          <div className="Ficzerbox">
            <div className="Foto f2" />
            <div className="Opis">
              <h3>
                <br />
                CrossFit – program treningu siłowego i kondycyjnego, który
                opiera się na wzroście dziesięciu najważniejszych zdolności
                siłowych. Podczas ćwiczeń rozwija się siłę i masę mięśni, aby
                wzmocnić siłę ruchu mięśni.
              </h3>
            </div>
          </div>
          <div className="Ficzerbox">
            <div className="Foto f3" />
            <div className="Opis">
              <h3>
                <br />
                Martwy ciąg do obok przysiadu jedno z najpotrzebniejszych
                ćwiczeń siłowych. Jest to ćwiczenie wielostawowe, angażujące
                wiele grup mięśniowych, ale głównie prostowniki grzbietowe,
                mięsień najszerszy grzbiet, dwugłowy oraz mięśnie
                pośladkowe.Jego technika jest dość trudno, ale ziemia jest dla
                tego produktu
              </h3>
            </div>
          </div>
          <div className="Ficzerbox">
            <div className="Foto f4" />
            <div className="Opis">
              <h3>
                <br />
                Wyciskanie sztangi w leżeniu na ławce poziomej – popularne
                ćwiczenie angażujące duże partie mięśniowe: mięśnie klatki
                piersiowej, mięśnie trójgłowe ramion, przednie aktony mięśni
                naramiennych.
              </h3>
            </div>
          </div>
          <div className="Ficzerbox">
            <div className="Foto f5" />
            <div className="Opis">
              <h3>
                <br />
                Joga ma nieocenioną wartość w służbie nowoczesnego
                macierzyństwa. Traktuje kobietę w ciąży ze szczególną uwagą i
                pomaga jej utrzymać holistyczną harmonię w obrębie ciała, umysłu
                i serca.
              </h3>
            </div>
          </div>
        </div>

        <div className='AppIntroButton'>
          <Button inverted  color="blue" className="IntroButton"
            onClick={this.handleCloseClick}   
          >
            Przejdź do aplikacji
          </Button>
        </div>
      </div>
    );
  }
}

export default Appintro;
