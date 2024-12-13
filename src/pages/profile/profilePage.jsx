import React from "react";
import Rewards from "../../components/UserProfile/Rewards";
import Navbar from '../../components/Navbar/Navbar';

const ProfilePage = () => {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f0f2f5' }}>
      <Navbar />
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '32px 16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '32px' }}>
          <span style={{ fontSize: '32px', marginRight: '16px' }}>👤</span>
          <h1 style={{ fontSize: '32px', fontWeight: 'bold', color: '#333' }}>Perfil de Usuario</h1>
        </div>
        <Rewards />
      </div>
    </div>
  );
};

export default ProfilePage;

