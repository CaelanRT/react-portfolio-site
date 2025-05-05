import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header () {

    

    return (
        <nav className="NavBar">
            <div className="NameButtonDiv">
                <Link to="/">Caelan Roberge-Toll</Link>
            </div>

            <div className="LinksDiv">
                <ul className="ListParent">
                    <li><Link to="/portfolio">Portfolio</Link></li>
                    <li><Link to="/resume">Resume</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
            

        </nav>
    )
}

export default Header;