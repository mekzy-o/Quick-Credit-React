import React, { Component } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { fa-cc-mastercard } from '@fortawesome/free-solid-svg-icons';

class HomeHeader extends Component {
    render() {

        return (
            <div className="container">
                <header>
                    <h1 className='logo'>QUICK-CREDIT</h1>
                    <ul className="desktop-nav">
                        <li className='current'><a href="index.html">Home</a></li>
                        <li><a href="contact.html">Contact Us</a></li>
                        <li><a href="signup.html">Sign Up</a></li>
                        <li><a href="login.html">Login</a></li>
                    </ul>
                    {/* <div>
                <a "javascript:void(0);" className="toggle" onclick="openMobileNav()">☰</a> */}
                </header>
            </div>
        )

    }
}

export default HomeHeader