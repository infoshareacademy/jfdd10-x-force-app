import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import "./AppIntro.css";



const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

class Appintro extends Component {
  // const { classes } = props;
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
      <div className="AppIntro">
      <div className="Ficzer">
     
        <div className="Ficzerbox">
          <div className="Foto f1" ></div>
          <div className="Opis" ><h3>Zrób trica</h3></div>
        </div>
        <div className="Ficzerbox">
          <div className="Foto f2" ></div>
          <div className="Opis" ><h3>Miejssced na opis</h3></div>
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
     
         <Button className="AppButon" variant="outlined"  onClick={this.handleCloseClick}>Przejdź do aplikacji</Button>
         </div>
    );
  }
}

export default withStyles(styles)(Appintro);
