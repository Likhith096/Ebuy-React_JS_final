import React from 'react'
import "./style/home.css";
import Navbar from './Navbar';
export default function home() {
    return (
        <div>
            {/* <section id="header">
                <a href=""><img src="Images/logo.png" className="logo" /></a>
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
            </section> */}
            <Navbar/>
            <section id="bigpicture">
                <h4>Special-Offer</h4>
                <h2>Super Value deals</h2>
                <h1>For Students</h1>
                <p>Save more with Us </p>
                <button><a href="shop.html"> Shop Now</a></button>
            </section>
            <h2 id="feat">Features</h2>
            <section id="features" >

                <div className="a1">
                    <img src="Images/orderonline.png" alt="Online Order" />
                    <h6>Online Order</h6>
                </div>

                <div className="a2">
                    <img src="Images/savemoney.png" alt="Save Money" />
                    <h6>Save Money</h6>
                </div>

                <div className="a3">
                    <img src="Images/discount.png" alt="Discounts" />
                    <h6>Discounts</h6>
                </div>

                <div className="a5">
                    <img src="Images/time.png" alt="Time Saving" />
                    <h6>Time Saving</h6>
                </div>
            </section>
            <section id="productsection" className="section-p1">
                <h2>Featured Products</h2>
                <p>Winter Season Discounts!</p>
                <div className="products">
                    <div className="pro">
                        <img src="Images/calculator.jpg" alt="calci" />
                        <div className="description">
                            <span >Casio</span>
                            <h5>Scientific Calculator fx-991ex</h5>
                            <div className="stars">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                            <h4>₹1200</h4>
                        </div>
                        <a href="cart.html"><i className="fal fa-shopping-cart cart"></i></a>
                    </div>
                    <div className="pro">
                        <img src="Images/kettle.jpg" alt="calci" />
                        <div className="description">
                            <span >Milton</span>
                            <h5>Stainless Steel Electric Kettle</h5>
                            <div className="stars">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                            <h4>₹1300</h4>
                        </div>
                        <a href="cart.html"><i className="fal fa-shopping-cart cart"></i></a>
                    </div>
                    <div className="pro">
                        <img src="Images/laptop.jpg" alt="calci" />
                        <div className="description">
                            <span >Lenovo</span>
                            <h5>Lenovo ThinkPad L450 (Renewed) </h5>
                            <div className="stars">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                            <h4>₹15,000</h4>
                        </div>
                        <a href="cart.html"><i className="fal fa-shopping-cart cart"></i></a>
                    </div>
                    <div className="pro">
                        <img src="Images/headphones.jpg" alt="calci" />
                        <div className="description">
                            <span >boAt</span>
                            <h5>boAt Rockerz 450 Bluetooth (Renewed)</h5>
                            <div className="stars">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                            <h4>₹1000</h4>
                        </div>
                        <a href="cart.html"><i className="fal fa-shopping-cart cart"></i></a>
                    </div>

                </div>
                <div className="products">
                    <div className="pro">
                        <img src="Images/ps.png" alt="calci" />
                        <div className="description">
                            <span >Phase Shift</span>
                            <h5>Unisex Merchandise</h5>
                            <div className="stars">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>

                            </div>
                            <h4>₹300</h4>
                        </div>
                        <a href="cart.html"><i className="fal fa-shopping-cart cart"></i></a>
                    </div>
                    <div className="pro">
                        <img src="Images/mech.png" alt="calci" />
                        <div className="description">
                            <span >Mech Uniform</span>
                            <h5>Mech Dress </h5>
                            <div className="stars">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                            <h4>₹600</h4>
                        </div>
                        <a href="cart.html"><i className="fal fa-shopping-cart cart"></i></a>
                    </div>
                    <div className="pro">
                        <img src="Images/dbms.png" alt="calci" />
                        <div className="description">
                            <span >DBMS</span>
                            <h5>Database Management System </h5>
                            <div className="stars">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                            <h4>₹500</h4>
                        </div>
                        <a href="cart.html"><i className="fal fa-shopping-cart cart"></i></a>
                    </div>
                    <div className="pro">
                        <img src="Images/coa2.jpg" />
                        <div className="description">
                            <span >COA</span>
                            <h5>Computer Organization and Architecture</h5>
                            <div className="stars">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                            <h4>₹500</h4>
                        </div>
                        <a href="cart.html"><i className="fal fa-shopping-cart cart"></i></a>
                    </div>
                </div>
            </section>

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
                    <a href="about.html">About us</a>
                    <a href="DeliveryInfo.html">Delivery Information</a>
                    <a href="termsandconditions.html">Terms & Conditions</a>
                    <a href="contact.html">Contact us</a>
                </div>
                <div className="col">
                    <h4>My Account</h4>
                    <a href="login.html">Login</a>
                    <a href="cart.html">View Cart</a>
                    <a href="contact.html">Help</a>
                </div>
                <div className="col">
                    <h4>Feedback</h4>
                    <a href="contact.html#rate">Rate Us</a>
                    <a href="contact.html#rate">Send us an Email</a>
                </div>
            </footer>

        </div>
    )
}
