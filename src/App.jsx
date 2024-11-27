// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Biodiversity from "./pages/enviromental_impacts/Biodiversity";
import Deforestation from "./pages/enviromental_impacts/Deforestation";
import TierraSanta from "./components/tierra-santa";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TierraSanta />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/biodiversity" element={<Biodiversity />} />
        <Route path="/deforestation" element={<Deforestation />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
