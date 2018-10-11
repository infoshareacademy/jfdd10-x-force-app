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
                    <div className='description'></div>
                    <div className='badges'></div>
                </div>
            </div>


        )
    }
}

export default BadgeDealerListItem