import React from 'react';
import "./style/home.css";
import {Link} from "react-router-dom";
export default function Navbar() {
    return (
        <div>
            <ul id="navbar">
                <li><Link to="/search"><i className="fas fa-search" aria-hidden="true"></i></Link></li>
                <li><Link className="active" to="/">Home</Link></li>
                <li><Link to="/shop">Shop</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/cart"><i className="fa fa-shopping-bag" aria-hidden="true"></i></Link></li>
                <li><Link to="/login"><i className="fa fa-sign-in" aria-hidden="true"></i></Link></li>
            </ul>
        </div>
    )
}
