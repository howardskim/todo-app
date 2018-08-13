import React from 'react';
import {Link} from 'react-router-dom'

export default (props) => {
    //no need for this because it's just a functional component
    return(
        <li className="collection-item">
            <Link to="/item-details">{props.title}</Link>
        </li>
    )
}
