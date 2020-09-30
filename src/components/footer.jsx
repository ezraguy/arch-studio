import React from 'react'
import '../scss/footer.scss';
import Logo from './utils/logo';
import MainButton from '../components/utils/main-button';
const Footer = () => {
    return (
        <div className="footer">
            <div className="name">
                <Logo fill={"white"} />
            </div>
            <div className="links">
                <p>Portfolio</p>
                <p>About Us</p>
                <p>Contact</p>
            </div>

            <div className="btn-wrap">
                <MainButton text={"See Our Portfolio"} />
            </div>
        </div>
    );
}

export default Footer;