import React, { useEffect, useCallback } from "react";
import useQuizStore from "../../stores/use-quiz-store";

export default function Quiz() {
  const { quiz, aumentarPorcentaje } = useQuizStore();

  // Asegúrate de que se quite el fondo de login si llegas aquí
  useEffect(() => {
    document.body.classList.remove('login-background');
  }, []);

  const onHandlerButtonNext = useCallback(() => {
    aumentarPorcentaje();
  }, [aumentarPorcentaje]);

  return (
    <div>
      <h1>Hola</h1>
      <p>Progreso del quiz: {quiz.percentageQuizCompleted}%</p>
      <button onClick={onHandlerButtonNext}>Aumentar</button>
    </div>
  );
}