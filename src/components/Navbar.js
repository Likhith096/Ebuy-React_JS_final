import React from 'react';
import "./style/home.css";
export default function Navbar() {
    return (
        <div>
            <ul id="navbar">
                <li><a href="search.html"><i className="fas fa-search" aria-hidden="true"></i></a></li>
                <li><a className="active" href="Home.html">Home</a></li>
                <li><a href="shop.html">Shop</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="contact.html">Contact</a></li>
                <li><a href="cart.html"><i className="fa fa-shopping-bag" aria-hidden="true"></i></a></li>
                <li><a href="login.html"><i className="fa fa-sign-in" aria-hidden="true"></i></a></li>
            </ul>
        </div>
    )
}
