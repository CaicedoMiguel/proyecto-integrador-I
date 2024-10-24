import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Menu from "./components/Menu";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import ModelViewer from "./components/ModelViewer";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
            <ModelViewer />
            <Menu />
          </div>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;