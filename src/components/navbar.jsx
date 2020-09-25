import React from 'react';
import '../scss/navbar.scss';
import logo from '../images/logo.svg'
const Navbar = () => {
    return (
        <div className="navbar">
            <img src={logo} alt="logo" className="logo" />
            <div className="nav-items">
                <div className="nav-item">
                    <p>Portfolio</p>

                </div>
                <div className="nav-item">
                    <p>About Us</p>

                </div>
                <div className="nav-item">

                    <p>Contact</p>
                </div>
            </div>
        </div>
    );
}


export default Navbar;