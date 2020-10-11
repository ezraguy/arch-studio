import React from 'react'
import '../scss/footer.scss';
import Logo from './utils/logo';
import MainButton from '../components/utils/main-button';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (


        <div className="footer">
            <div className="name">
                <Logo fill={"white"} />
            </div>
            <div className="links">
                <Link className="link" to="portfolio">
                    portfolio
                </Link>
                <Link className="link" to="about">About Us</Link>
                <Link className="link" to="contact">Contact</Link>
            </div>

            <div className="btn-wrap">
                <Link to="/portfolio">
                    <MainButton text={"See Our Portfolio"} />
                </Link>
            </div>
            <div className="attribution">
                Challenge by <a href="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</a>.
Coded by <a href="https://github.com/ezraguy">Guy Ezra</a>.
</div>
        </div>


    );
}

export default Footer;