// eslint-disable-next-line no-unused-vars
import React from "react";
import './Navbar.css'

const Navbar = () => {
    return ( 
        <header className="header">
            <a href="/"className="logo">Logo</a>

            <nav className="navbar">
                <a href="/">Home</a>
                <a href="/">Sitemap</a>
            </nav>
        </header>
        
    )
}

export default Navbar