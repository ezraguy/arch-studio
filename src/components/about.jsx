import React, { useState } from 'react';
import '../scss/about.scss';
import heroImg from '../images/about-images/image-hero.jpg';
import heritageImg from '../images/about-images/image-heritage.jpg'
import jakeImg from '../images/about-images/avatar-jake.jpg';
import thompsonImg from '../images/about-images/avatar-thompson.jpg';
import jacksonImg from '../images/about-images/avatar-jackson.jpg';
import mariaImg from '../images/about-images/avatar-maria.jpg';
import TwitterIcon from './utils/twitter-icon';
import LinkedInIcon from './utils/linkedIn-icon';

const About = () => {
    const [team] = useState([
        { id: 1, name: 'Jake Richards', img: jakeImg, role: 'Chief Architect' },
        { id: 2, name: 'Thompson Smith', img: thompsonImg, role: 'Header of Fiance' },
        { id: 3, name: 'Jackson Rourke', img: jacksonImg, role: 'Lead Designer' },
        { id: 4, name: 'Maria Simpson', img: mariaImg, role: 'Senior Architect' }])
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

            <div className="heritage">
                <div className="heritage-line"></div>
                <div className="heritage-content">
                    <div className="heritage-header">Our Heritage</div>

                    <div className="heritage-text">Founded in 2007, we started as a trio of architects. Our complimentary skills and relentless attention to detail turned Arch into one of the most sought after boutique firms in the country.</div>
                    <div className="heritage-text"> Speciliazing in Urban Design allowed us to focus on creating exceptional structures that live in harmony with their surroundings. We consider every detail from every surrounding element to inform our designs.</div>
                    <div className="heritage-text">Our small team of world-class professionals provides input on every project.</div>
                </div>
                <div className="heritage-image-wrap">
                    <img src={heritageImg} className="heritage-img" alt="" />
                </div>
            </div>


            <div className="leaders">
                <div className="leaders-title">
                    the leaders
                </div>

                <div className="team">
                    {team.map((worker) => {
                        return (
                            <div className="worker" key={worker.id}>
                                <div className="worker-img-wrap">

                                    <img src={worker.img} className="worker-img" alt="" />
                                    <div className="overlay">
                                        <TwitterIcon fill="white" className="twitter-icon icon" />
                                        <LinkedInIcon fill={"white"} className="icon" />
                                    </div>
                                </div>

                                <div className="worker-name">
                                    {worker.name}
                                </div>
                                <div className="worker-role">
                                    {worker.role}
                                </div>
                                <div className="tablet-icons">
                                    <TwitterIcon fill="black" className="twitter-icon icon" />
                                    <LinkedInIcon fill="black" className="icon" />
                                </div>
                            </div>
                        )

                    })}
                </div>
            </div>
        </div>
    );
}


export default About;