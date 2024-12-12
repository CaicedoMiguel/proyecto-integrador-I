// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Biodiversity from "./pages/enviromental_impacts/Biodiversity";
import Deforestation from "./pages/enviromental_impacts/Deforestation";
import TierraSanta from "./components/tierra-santa";
import QuizPage from "./pages/quiz/QuizPage";
import ProfilePage from "./pages/profile/ProfilePage";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Ruta raíz muestra TierraSanta */}
        <Route path="/" element={<TierraSanta />} />

        {/* Ruta para Home */}
        <Route path="/home" element={<Home />} />

        {/* Resto de rutas */}
        <Route path="/login" element={<Login />} />
        <Route path="/biodiversity" element={<Biodiversity />} />
        <Route path="/deforestation" element={<Deforestation />} />

        {/* Rutas adicionales */}
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/profile" element={<ProfilePage />} />

        {/* Si no coincide con ninguna otra, redirige a "/" */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
