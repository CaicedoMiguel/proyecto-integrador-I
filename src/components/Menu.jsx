import React from 'react';

function Menu() {
  return (
    <div style={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      textAlign: 'center',
      color: 'white',
      fontSize: '24px',
      textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
    }}>
      <h1 style={{ fontSize: '48px', marginBottom: '20px' }}>Menú</h1>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li style={{ marginBottom: '10px' }}>Sobre nosotros</li>
        <li style={{ marginBottom: '10px' }}>Impacto ambiental</li>
        <li style={{ marginBottom: '10px' }}>Participa</li>
        <li style={{ marginBottom: '10px' }}>Contáctenos</li>
        <li style={{ marginBottom: '10px' }}>Únete</li>
      </ul>
    </div>
  );
}

export default Menu;