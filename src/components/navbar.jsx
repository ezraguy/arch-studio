import React, { useState, useEffect } from 'react';
import '../scss/navbar.scss';
import logo from '../images/logo.svg'
import hamburger from '../images/icons/icon-hamburger.svg';
import closeIcon from '../images/icons/icon-close.svg';
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
            <div className={navBarClass ? "navbar fixed" : "navbar"}>
                <img src={logo} alt="logo" className="logo" />
                <div className={navItemsClass ? 'nav-items show' : 'nav-items'}>
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
                <button onClick={handleMobileNav} className="burger-icon">
                    <img src={navIcon ? closeIcon : hamburger} alt="burger-icon" /></button>
            </div>
            {overlay &&
                <div className="overlay"></div>
            }
        </React.Fragment>
    );
}


export default Navbar;