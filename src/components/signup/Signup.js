import React, { Component } from 'react';
import Header from '../homepage/HomeHeader';
import Footer from '../homepage/Footer';

export class Signup extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="form-box">
                    <div className="form">
                        <div className="tab-content">
                            <div className='tab-data' id="signup">
                                <h1>Create An Account</h1>
                                <form id='signup-form'>

                                    <label htmlFor="firstname">First Name</label>
                                    <input type="text" id='first-name' required />

                                    <label htmlFor="lastname">Last Name</label>
                                    <input type="text" id='last-name' required />

                                    <label htmlFor="address">Address</label>
                                    <input type="text" id='address' required />

                                    <label htmlFor="email">Email</label>
                                    <input type="email" id='signup-email' required />

                                    <label htmlFor="password">Password</label>
                                    <input type="password" id='signup-password' required />

                                    <label htmlFor="password">Confirm Password</label>
                                    <input type="password" id='confirm-password' required />

                                    <button className='btn1' type="submit">
                                        <a>Signup</a>
                                    </button>
                                    <span className='light-weight'>Already have an account?<a href='login.html'> Login</a></span>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}


