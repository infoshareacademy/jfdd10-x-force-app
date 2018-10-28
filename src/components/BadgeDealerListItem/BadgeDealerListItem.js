import React, { Component } from 'react'
import './BadgeDealerListItem.css'
import { Link } from 'react-router-dom'
import { Button,  } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
class BadgeDealerListItem extends Component {
    render() {
        return (


            <div className="contener">
                <div className="logo">
                
                <img className='avatar'  src={this.props.avatar} alt='' />
                
                
                </div>
                <div className='section2'>
                    <div className='description'>
                    <p className='name'>{this.props.name} {this.props.surname}</p>
                    <p className='description'>{this.props.description}</p>
                    
                    
                    </div>
                    <div className='badges'>

                {this.props.listOfBadges
              .map(badgeId => this.props.badges.find(b => b.id === badgeId))
              .map(badgeItem => 
                badgeItem && <img  src={badgeItem.logo} alt={badgeItem.logo}/>
              )}

                   
                    
                    </div>
                    <p className='link_contener' ><Link className='link' to={`/badgedealersview/${this.props.id}`}><Button inverted  color="blue" className="IntroButton">Więcej </Button></Link></p>
                </div>
            </div>


        )
    }
}

export default BadgeDealerListItem