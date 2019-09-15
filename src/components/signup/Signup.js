import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../homepage/HomeHeader';
import Footer from '../homepage/Footer';
import { createAccount } from '../../redux/actions/authAction';

export class Signup extends Component {

    state = {
        firstName: '',
        lastName: '',
        address: '',
        email: '',
        password: '',
    }

    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value,
        })
    }

    handleSubmit = async (event) => {
        const { history, onCreate } = this.props;
        event.preventDefault();
        const { firstName, lastName, address, email, password } = this.state
        await onCreate({
            firstName,
            lastName,
            address,
            email,
            password,
        }, history);
    }
    render() {
        console.log(this.props)
        return (
            <div>
                <Header />
                <div className="form-box">
                    <div className="form">
                        <div className="tab-content">
                            <div className='tab-data' id="signup">
                                <h1>Create An Account</h1>
                                <form id='signup-form' onSubmit={this.handleSubmit}>

                                    <label htmlFor="firstname">First Name</label>
                                    <input type="text" id='firstName' onChange={this.handleChange} required />

                                    <label htmlFor="lastname">Last Name</label>
                                    <input type="text" id='lastName' onChange={this.handleChange} required />

                                    <label htmlFor="address">Address</label>
                                    <input type="text" id='address' onChange={this.handleChange} required />

                                    <label htmlFor="email">Email</label>
                                    <input type="email" id='email' onChange={this.handleChange} required />

                                    <label htmlFor="password">Password</label>
                                    <input type="password" id='password' onChange={this.handleChange} required />

                                    <label htmlFor="password">Confirm Password</label>
                                    <input type="password" id='confirmPassword' required />

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

const mapStateToProps = state => ({
    auth: state.auth
});

const mapDispatchToProps = dispatch => ({
    onCreate: (userData, history) => dispatch(createAccount(userData, history)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Signup);



