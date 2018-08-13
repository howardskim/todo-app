import React from 'react';
import {Link} from 'react-router-dom';
import './404.css'

export default (props)=>{
    return (
        <div className="not-found">
            <div className="not-found-container">
                <h1 className="center">404 - Page Not Found</h1>
                <h5 className="center">
                    <Link to="/">Return Home</Link>
                </h5>
            </div>
        </div>
    )
}