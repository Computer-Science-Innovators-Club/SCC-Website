import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';
import Logo from "../public/SCC.png";

function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <>
        <nav className = "navbar">
            <div className = "navbar-container">
                {/* <div className = "menu-icon" onClick = {handleClick}>
                    <i className = {click ? 'fas fa-times' : 'fas fa-bars'} />
                </div> */}
                <div class = "logo-icon">
                        <Link to = "/" className = 'nav-logo' onClick = {handleClick}>
                            <img src={Logo} alt = "logo"></img>
                        </Link>
                    </div>
                <ul className = {click ? 'nav-menu active' : 'nav-menu'}>
                    <div class = "nav-section">
                        <li className = "nav-item">
                            <Link to = "/csi" className = 'nav-links' onClick = {closeMobileMenu}>CSI</Link>
                        </li>
                        <li className = "nav-item">
                            <Link to = "/acc" className = 'nav-links' onClick = {closeMobileMenu}>ACC</Link>
                        </li>
                        <li className = "nav-item">
                            <Link to = "/magd" className = 'nav-links' onClick = {closeMobileMenu}>MAGD</Link>
                        </li>
                    </div>
                    <div class = "logo">
                        <Link to = "/" className = 'nav-logo' onClick = {closeMobileMenu}>
                            <img src={Logo} alt = "logo"></img>
                        </Link>
                    </div>
                    <div class = "nav-section">
                    <li className = "nav-item">
                        <Link to = "/calendar" className = 'nav-links' onClick = {closeMobileMenu}>Calendar</Link>
                    </li>
                    <li className = "nav-item">
                        <Link to = "/login" className = 'nav-links' onClick = {closeMobileMenu}>Login</Link>
                    </li>
                    <li className = "nav-item">
                        <Link to = "/contact" className = 'nav-links' onClick = {closeMobileMenu}>Contact</Link>
                    </li>

                    </div>
                </ul>
            </div>
        </nav>
        </>
    )
}

export default Navbar
