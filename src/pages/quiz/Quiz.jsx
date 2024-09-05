import useQuizStore from "../../stores/use-quiz-store";
import React, { useEffect, useCallback } from 'react';

export default function Quiz() {
  const { quiz, aumentarPorcentaje } = useQuizStore();

  useEffect(() => {
    document.body.classList.remove("login-background");
  }, []);

  const onHandlerButtonNext = useCallback(() => {
    aumentarPorcentaje();
  });

  return (
    <div>
      <h1>Hola</h1>
      <p>Progreso del quiz: {quiz.percentageQuizCompleted}%</p>
      <button onClick={onHandlerButtonNext}>Aumentar</button>
    </div>
  );
}