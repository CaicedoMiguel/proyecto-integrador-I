// eslint-disable-next-line no-unused-vars
import React from "react";
import './Navbar.css'
import { Link, Outlet }  from "react-router-dom";

const Navbar = () => {
    return ( 
        <header className="header">
            <li> <Link className="logo" to="/">Logo</Link></li> 

            <nav className="navbar">
               <li> <Link to="/">Home</Link></li>
               <li> <Link to="/sitemap">Sitemap</Link></li>
            </nav>
            <Outlet />
        </header>
    )   
    
};

export default Navbar