// src/pages/QuizPage/QuizPage.jsx

import React, { useState, useCallback } from "react";
import Quices from "../../components/Quices/Quices";
import Navbar from '../../components/navbar/Navbar';
import "./QuizPage.css";

const QuizPage = () => {
  const [correctAnswers, setCorrectAnswers] = useState(0);

  // Función para determinar la imagen de fondo según las respuestas correctas
  const getBackgroundImage = (correctAnswers) => {
    if (correctAnswers >= 5) return "/images/level5.jpg";
    if (correctAnswers >= 4) return "/images/level4.jpg";
    if (correctAnswers >= 3) return "/images/level3.jpg";
    if (correctAnswers >= 2) return "/images/level2.jpg";
    return "/images/level1.jpg";
  };

  // Memorizar la función para evitar que su referencia cambie en cada render
  const handleCorrectAnswersChange = useCallback((newCorrectAnswers) => {
    setCorrectAnswers(newCorrectAnswers);
  }, []);

  return (
    <div 
      className="quiz-page" 
      style={{
        backgroundImage: `url(${getBackgroundImage(correctAnswers)})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh', // Asegura que el fondo cubra al menos la altura de la ventana
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Navbar />
      <div className="quiz-content">
        <Quices onCorrectAnswersChange={handleCorrectAnswersChange} />
      </div>
    </div>
  );
};

export default QuizPage;
