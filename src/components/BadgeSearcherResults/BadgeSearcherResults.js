import React, { Component } from 'react';

class BadgeSearcherResults extends Component {

render() {

return( 
<div>  
 <div>{this.props.badges.length}</div>    

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