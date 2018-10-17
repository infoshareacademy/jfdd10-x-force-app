import React, { Component } from "react";
import BadgeDealerListItem from "../BadgeDealerListItem/BadgeDealerListItem";
import '../BadgeDealerList/BadgeDealerList.css'

class BadgeDealerList extends Component {


  render() {



    return (
      <div className='badgeDealerList'>
       
        <ul>
            {
              this.props.badgeDealers.length
              ? this.props.badgeDealers.map(dealer =>(
                <li><BadgeDealerListItem badge={this.props.badge} {...dealer}/></li>
                ))
              : 'Array is empty'
            }
         
        </ul>
      </div>
    );
  }
}

export default BadgeDealerList;
