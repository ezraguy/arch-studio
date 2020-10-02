import React, { useState, useEffect } from 'react';
import '../scss/navbar.scss';
import hamburger from '../images/icons/icon-hamburger.svg';
import closeIcon from '../images/icons/icon-close.svg';
import Logo from './utils/logo';
import { Link } from "react-router-dom";

const Navbar = () => {
    const [navItemsClass, setNavItemsClass] = useState(false);
    const [navBarClass, setNavBarClass] = useState(false);
    const [navIcon, setNavIcon] = useState(false);
    const [overlay, setOverlay] = useState(false);
    const handleMobileNav = () => {
        setNavItemsClass(!navItemsClass);
        setNavIcon(!navIcon);
        setOverlay(!overlay);
    }
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 100) {
                setNavBarClass(true);
            }
            else {

                setNavBarClass(false);
            }
        })
    }, [])


    return (
        <React.Fragment>
            <div className={navBarClass ? "navbar fixed shadow" : "navbar"}>
                <Link to="/">
                    <Logo fill={"black"} />
                </Link>
                <div className={navItemsClass ? 'nav-items show' : 'nav-items'}>

                    <Link className="nav-item" to="portfolio">
                        <p>Portfolio</p>
                    </Link>

                    <Link className="nav-item" to="about">
                        <p>About Us</p>
                    </Link>

                    <Link className="nav-item" to="contact">
                        <p>Contact</p>
                    </Link>


                </div >
                <button onClick={handleMobileNav} className="burger-icon">
                    <img src={navIcon ? closeIcon : hamburger} alt="burger-icon" /></button>
            </div >
            {
                overlay &&
                <div className="overlay"></div>
            }
        </React.Fragment >
    );
}


export default Navbar;