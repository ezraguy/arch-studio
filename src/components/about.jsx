import React from 'react';
import '../scss/about.scss';
import heroImg from '../images/about-images/image-hero.jpg';
const About = () => {
    return (
        <div className="about">
            <div className="line"></div>
            <div className="page-name">About Us</div>
            <div className="about-main">
                <div className="about-img-wrap">
                    <img src={heroImg} className="about-hero-img" alt="about main" />

                </div>
                <div className="about-content-wrap">
                    <div className="about-banner">
                        <p>About</p>
                    </div>
                    <div className="about-content">
                        <div className="about-line"></div>
                        <div className="about-header">Your Team of professionals</div>
                        <div className="about-text">
                            Our small team of world-class professionals will work with you every step of the way. Strong relationships are at the core of everything we do. This extends to the relationship our projects have with their surroundings.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default About;