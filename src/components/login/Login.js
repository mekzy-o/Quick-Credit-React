import React, { Component } from 'react';
import Header from '../homepage/HomeHeader';
import Footer from '../homepage/Footer';

export class Login extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="form-box">
                    <div className="form">
                        <div className="tab-content">

                            <div id="login" className="tab-data">
                                <h1>Sign In</h1>
                                <form id='login-form'>
                                    <label for="email"> Email</label>
                                    <input type="email" id='email' autocomplete="off" />

                                    <label for="password"> Password</label>
                                    <input className='name' id='password' type="password" autocomplete="off" />

                                    <button className='btn1' id='login-btn' type="submit">Login</button>
                                    <span className='light-weight'>Dont have an account?<a href='signup.html'> Sign Up</a></span>
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

export default Login
