// src/components/navbar/Navbar.js
import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import "./Navbar.css";
import useAuthStore from "../../stores/use-auth-store";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuthStore(); // Cambié signOut por logout (según tu código anterior)
  const navigate = useNavigate(); // Hook para navegación

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSignOut = async () => {
    await logout(); // Cerrar sesión
    setIsOpen(false);
    navigate("/home"); // Redirigir a la página de inicio después de cerrar sesión
  };

  return (
    <div>
      <button 
        className={`hamburger-button ${isOpen ? 'open' : ''}`} 
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </button>
      
      {isOpen && (
        <div className="menu-overlay" onClick={toggleMenu}>
          <ul className="menu-list" onClick={(e) => e.stopPropagation()}>
            {/* Cambiamos INICIO a /home */}
            <li><Link to="/home" onClick={() => setIsOpen(false)}>INICIO</Link></li>
            <li><Link to="/deforestation" onClick={() => setIsOpen(false)}>DEFORESTACIÓN</Link></li>
            <li><Link to="/biodiversity" onClick={() => setIsOpen(false)}>BIODIVERSIDAD</Link></li>

            {user ? (
              <>
                <li><Link to="/quiz" onClick={() => setIsOpen(false)}>QUIZ</Link></li>
                <li><Link to="/profile" onClick={() => setIsOpen(false)}>PERFIL</Link></li>
                <li><button onClick={handleSignOut} className="signout-button">Cerrar Sesión</button></li>
              </>
            ) : (
              <li><Link to="/login" onClick={() => setIsOpen(false)}>ENTRA</Link></li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
