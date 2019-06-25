import React from 'react';
import { Link } from 'react-router-dom';
import './header.css'


export const Header = (props) => {


    return (


        <nav>
            <div className="nav-wrapper">
                <h1 className="brand-logo">Bitbook</h1>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><Link to='/posts/'>Feed</Link></li>
                    <li><Link to="/people/">People</Link></li>
                    <li><Link to="/?">Profile</Link></li>
                </ul>
            </div>
        </nav>
    )


}
