import React, { useEffect, useCallback } from "react";
import useAuthStore from '../../stores/use-auth-store';
import { useNavigate } from 'react-router-dom';
import './Quiz.css'; // Asegúrate de que este archivo CSS exista en la ruta especificada
import ModelViewer from '../../components/ModelViewer';

export default function Component() {
  const { quiz = { percentageQuizCompleted: 0 }, aumentarPorcentaje, logout } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = useCallback(async () => {
    try {
      await logout();
      navigate('/');
    } catch (error) {
      console.error("Error al hacer logout:", error);
    }
  }, [logout, navigate]);

  return (
    <div className="quiz-container">
      <h1 className="quiz-header">TIERRA SANTA</h1>
      <div className="model-viewer-container">
        <ModelViewer />
      </div>
      <p className="quiz-progress">Progreso del quiz: {quiz.percentageQuizCompleted}%</p>
      <button onClick={aumentarPorcentaje} className="quiz-button">Aumentar</button>
      <button onClick={handleLogout} className="quiz-button">Logout</button>
    </div>
  );
}