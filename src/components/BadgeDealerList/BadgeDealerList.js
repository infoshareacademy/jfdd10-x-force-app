import React, { Component } from "react";
import BadgeDealerListItem from "../BadgeDealerListItem/BadgeDealerListItem";
import '../BadgeDealerList/BadgeDealerList.css'

class BadgeDealerList extends Component {
  static propTypes = {};

  isArrayNull = event => {
    this.props.badgeDealers === null && new Error('Error') 
    }


  render() {



    return (
      <div className='badgeDealerList'>
        <h1>Badge dealers</h1>
        <ul>
            {/* {this.props.BadgeDealerList.length === 0 ? 1 : 0} */}
            {this.isArrayNull(this.props.badgeDealers).map(dealer =>(
                <li><BadgeDealerListItem {...dealer}/></li>
            ))}
          {/* {this.props.badgeDealers.map(dealer => (
              
              
            <li><BadgeDealerListItem {...dealer} /></li>
          ))} */}
        </ul>
      </div>
    );
  }
}

export default BadgeDealerList;
