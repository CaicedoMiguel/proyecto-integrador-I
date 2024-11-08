// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
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
            <li><a href="/">Inicio</a></li>
            <li><a href="/deforestation">Deforestacion</a></li>
            <li><a href="/biodiversity">Biodiversidad</a></li>
            <li><a href="#about">Sobre nosotros</a></li>

          </ul>
        </div>
      )}
    </div>
  );
};


export default Navbar;
