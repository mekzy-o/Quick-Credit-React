import React, { Component } from 'react'
import HomeHeader from './HomeHeader';
import './Homepage.css';
import SectionOne from './SectionOne';
import SectionTwo from './SectionTwo';
import Footer from './Footer';



export class Homepage extends Component {
    render() {
        return (
            <div>
                <div>
                    <HomeHeader />
                    {/* <SectionOne /> */}
                    <SectionTwo />
                </div>
                <Footer />
            </div>
        )
    }
}

export default Homepage
