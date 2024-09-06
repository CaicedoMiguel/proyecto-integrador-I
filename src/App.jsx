import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/login/login';
import Quiz from './pages/quiz/quiz';
import Escenario3DPersonalizado from './Escenario3DPersonalizado';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/quiz" element={<Quiz />} />
        </Routes>
        <div className="escenario-container">
          <h1>Mi Escenario 3D Personalizado</h1>
          <Escenario3DPersonalizado />
        </div>
      </div>
    </Router>
  );
}

export default App;
