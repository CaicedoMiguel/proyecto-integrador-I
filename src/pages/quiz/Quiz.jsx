import React, { useEffect, useCallback } from "react";
import useAuthStore from '../../stores/use-auth-store';
import { useNavigate } from 'react-router-dom';
import './Quiz.css'; // Asegúrate de que este archivo CSS exista en la ruta especificada

export default function Quiz() {
    const { quiz = { percentageQuizCompleted: 0 }, aumentarPorcentaje, logout } = useAuthStore();
    const navigate = useNavigate();

    const handleLogout = useCallback(async () => {
        try {
            await logout();
            navigate('/'); // Redirige a la página de login después de hacer logout
        } catch (error) {
            console.error("Error al hacer logout:", error);
        }
    }, [logout, navigate]);

    return (
        <div className="quiz-container">
            <h1>Hola</h1>
            <p>Progreso del quiz: {quiz.percentageQuizCompleted}%</p>
            <button onClick={aumentarPorcentaje}>Aumentar</button>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}