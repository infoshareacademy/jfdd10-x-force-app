import React, { Component } from 'react';
import './BadgeSearcherResults.css'
import BadgeListItem from '../BadgeListItem/BadgeListItem';
class BadgeSearcherResults extends Component {

render() {

return( 
<div className='badgeSearcherResults'>  
 {/* <div>{this.props.badges.length}</div>     */}

<ul>
{
this.props.badges.slice(0, 5).map(
    badge => (
        <li><BadgeListItem
        key={badge.id}
        id={badge.id}
        logo={badge.logo}
        title={badge.title}
        description={badge.description}
        moreInfo={badge.moreInfo}
      /></li>
    )
)
}

</ul>
</div>
)
}
} 

export default BadgeSearcherResults