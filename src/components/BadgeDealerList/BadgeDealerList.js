import React, { Component } from "react";
import BadgeDealerListItem from "../BadgeDealerListItem/BadgeDealerListItem";
import '../BadgeDealerList/BadgeDealerList.css'

class BadgeDealerList extends Component {


  render() {



    return (
      <div className='badgeDealerList'>
        <h1>Badge dealers</h1>
        <ul>
            {
              this.props.badgeDealers.length
              ? this.props.badgeDealers.map(dealer =>(
                <li><BadgeDealerListItem {...dealer}/></li>
                ))
              : 'Array is empty'
            }
         
        </ul>
      </div>
    );
  }
}

export default BadgeDealerList;
