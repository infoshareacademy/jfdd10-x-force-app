import React, { Component } from 'react'
import './BadgeDealerListItem.css'

class BadgeDealerListItem extends Component {
    render() {
        return (


            <div className="contener">
                <div className="logo">
                <img src={this.props.avatar} />
                
                </div>
                <div className='section2'>
                    <div className='description'>
                    <p>{this.props.description}</p>

                    </div>
                    <div className='badges'>

                    {
                        this.props.badges.slice(0,5).map(
                            badge => (
                                <img src={badge} />
                            )
                        )
                    }
                    
                    </div>
                </div>
            </div>


        )
    }
}

export default BadgeDealerListItem