import React, { Fragment, Component } from 'react'

class SectionTwo extends Component {
    render() {
        return (
            <Fragment>
                <section className="box-two">
                    <h2>How Quick-Credit Works</h2>
                    <hr />
                    <div className="how-it-works">
                        <div className="section-2">
                            <h3><i className="fas fa-sign-in-alt"></i></h3>
                            <p><a href="signup.html"> Sign up</a> or <a href="login.html">Login</a> to create an account</p>
                        </div>
                        <div className="section-2">
                            <h3><i className="fas fa-user"></i></h3>
                            <p>As a user, you are eligible to apply for loan, upon admin verification</p>
                        </div>
                        <div className="section-2">
                            <h3><i className="fas fa-money-bill-alt"></i></h3>
                            <p>Once approved, funds are typically received within 5 minutes.</p>
                        </div>

                    </div>
                    <hr />
                </section>
            </Fragment>
        )
    }
}

export default SectionTwo;
