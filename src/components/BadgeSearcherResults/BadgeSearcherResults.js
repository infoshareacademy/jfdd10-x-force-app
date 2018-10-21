import React, { Component } from 'react';
import './BadgeSearcherResults.css'
class BadgeSearcherResults extends Component {

render() {

return( 
<div className='badgeSearcherResults'>  
 {/* <div>{this.props.badges.length}</div>     */}

<ul>
{
this.props.badges.slice(0, 5).map(
    badge => (
        <li>{badge.title}</li>
    )
)
}

</ul>
</div>
)
}
} 

export default BadgeSearcherResults