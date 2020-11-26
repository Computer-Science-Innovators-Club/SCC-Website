import React from 'react'
import { Link } from 'react-router-dom';
import './Footer.css';
import Logo from "../public/SCC.png";

function Footer() {

    return (
        <div className = "footer-container">
            <div className = "footer">
                <div className = "footer-1">
                    <div class = "footer-text">
                        <p>southcodingclub@gmail.com</p>
                        <p>WWP High School South</p>
                    </div>
                    {/* <img className = "footer-logo" src = {Logo} alt = "SCC"></img> */}
                </div>

                <ul className = "footer-2">
                    <li className = "footer-item">
                        <Link to = "/calendar" className = 'footer-links' >Calendar</Link>
                    </li>
                    <li className = "footer-item">
                        <Link to = "/login" className = 'footer-links' >Login</Link>
                    </li>
                    <li className = "footer-item">
                        <Link to = "/contact" className = 'footer-links' >Contact</Link>
                    </li>
                </ul>
            </div>
            <div className = "copyright">
                <p>Copyright &copy; 2020- All rights reserved. </p>
            </div>
        </div>
    )
}

export default Footer
