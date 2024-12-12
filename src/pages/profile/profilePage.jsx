// src/pages/profile/ProfilePage.js

import React from "react";
import Rewards from "../../components/UserProfile/Rewards";
import Navbar from '../../components/Navbar/Navbar';
import "./ProfilePage.css";

const ProfilePage = () => {
  return (
    <div className="profile-page">
      <Navbar />
      <h1>Perfil de Usuario</h1>
      {/* Puedes agregar más información del perfil aquí */}
      <Rewards />
    </div>
  );
};

export default ProfilePage;
