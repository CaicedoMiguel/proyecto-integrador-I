// Navbar.js
import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "./Navbar.css"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return(
        <div>
            <button className={`hamburger-button ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </button>
            
            {isOpen && (
                <div className="menu-overlay">
                    <ul className="menu-list">
                        <li><Link to="/">INICIO</Link></li>
                        <li><Link to="/deforestation">DEFORESTACIÓN</Link></li>
                        <li><Link to="/biodiversity">BIODIVERSIDAD</Link></li>
                        <li><Link to="/login">ENTRA</Link></li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Navbar;
