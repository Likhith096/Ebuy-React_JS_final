import React from 'react'
import {Link} from 'react-router-dom'
export default function Footer() {
    return (
        <div>
            <footer className="footer section-p1">
                <div className="col">
                    <p>
                        <strong>Address: </strong>P.O. Box No.: 1908,
                        <br />Bull Temple Road, Bangalore - 560 019
                        <br />Karnataka, India.
                    </p>
                    <p>
                        <strong>Phone:</strong> +91-80-26614357
                    </p>
                    <p>
                        <strong>Hours:</strong> 10:00-17:00, Mon-Sat
                    </p>
                </div>
                <div className="col">
                    <h4>About</h4>
                    <Link to="/about">About us</Link>
                    <Link to="/deliveryInfo">Delivery Information</Link>
                    <Link to="/termsandconditions">Terms & Conditions</Link>
                    <Link to="/contact">Contact us</Link>
                </div>
                <div className="col">
                    <h4>My Account</h4>
                    <Link to="/login">Login</Link>
                    <Link to="/cart">View Cart</Link>
                    <Link to="/contact">Help</Link>
                </div>
                <div className="col">
                    <h4>Feedback</h4>
                    <Link to="/contact#rate">Rate Us</Link>
                    <Link to="/contact#rate">Send us an Email</Link>
                </div>
            </footer>
        </div>
    )
}
