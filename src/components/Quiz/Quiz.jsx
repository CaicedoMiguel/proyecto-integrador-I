// src/components/Quiz/Quiz.js

import React, { useState, useEffect } from "react";
import "./Quiz.css";
import InteractiveScene from "./InteractiveScene";
import userDAO from "../../daos/userDAO";
import useAuthStore from "../../stores/use-auth-store";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Función para calcular una única recompensa basada en la cantidad de respuestas correctas.
 * @param {number} correctAnswers - Número de respuestas correctas.
 * @returns {Array} - Array con una única recompensa obtenida o vacío si no se cumple ningún criterio.
 */
const calculateRewards = (correctAnswers) => {
  if (correctAnswers === 5) {
    return [{
      type: "Gold Badge",
      image: "/images/rewards/gold.jpg",
      description: "¡Felicidades! Has acertado 5 preguntas.",
      earnedAt: new Date().toISOString(),
    }];
  } else if (correctAnswers === 4) {
    return [{
      type: "Silver Badge",
      image: "/images/rewards/silver.jpg",
      description: "Has acertado 4 preguntas.",
      earnedAt: new Date().toISOString(),
    }];
  } else if (correctAnswers === 3) {
    return [{
      type: "Bronze Badge",
      image: "/images/rewards/bronze.jpg",
      description: "Has acertado 3 preguntas.",
      earnedAt: new Date().toISOString(),
    }];
  }
  return [];
};

// Escenarios con imágenes, 5 preguntas, cada acierto suma 20 puntos.
const scenarios = [
  {
    description: "¿Cuál de estos elementos ayuda a la reforestación?",
    objects: [
      { position: [-3, 0, 0], label: "Árbol", imgSrc: "/images/arbol.jpg", correct: true },
      { position: [0, 0, 0], label: "Piedra", imgSrc: "/images/piedra.jpg", correct: false },
      { position: [3, 0, 0], label: "Tronco Cortado", imgSrc: "/images/tronco.jpg", correct: false },
    ],
  },
  {
    description: "¿Qué objeto debes recoger para mantener el bosque limpio?",
    objects: [
      { position: [-3, 0, 0], label: "Flor", imgSrc: "/images/flor.jpg", correct: false },
      { position: [0, 0, 0], label: "Basura Plástica", imgSrc: "/images/basura.jpg", correct: true },
      { position: [3, 0, 0], label: "Arbusto", imgSrc: "/images/arbusto.jpg", correct: false },
    ],
  },
  {
    description: "¿Cuál de estos puede servir como refugio para animales?",
    objects: [
      { position: [-3, 0, 0], label: "Caja de Madera", imgSrc: "/images/caja.jpg", correct: true },
      { position: [0, 0, 0], label: "Botella", imgSrc: "/images/botella.jpg", correct: false },
      { position: [3, 0, 0], label: "Lata", imgSrc: "/images/lata.jpg", correct: false },
    ],
  },
  {
    description: "¿Cuál de estos objetos simboliza una acción para mitigar la pérdida de biodiversidad?",
    objects: [
      { position: [-3, 0, 0], label: "Plántula de Árbol", imgSrc: "/images/plantula.jpg", correct: true },
      { position: [0, 0, 0], label: "Motosierra", imgSrc: "/images/motosierra.jpg", correct: false },
      { position: [3, 0, 0], label: "Tronco Talado", imgSrc: "/images/tronco-talado.jpg", correct: false },
    ],
  },
  {
    description: "¿Cuál de estos actos contribuye a la conservación de los hábitats naturales?",
    objects: [
      { position: [-3, 0, 0], label: "Construir un Jardín", imgSrc: "/images/jardin.jpg", correct: true },
      { position: [0, 0, 0], label: "Cortar árboles indiscriminadamente", imgSrc: "/images/cortar-arboles.jpg", correct: false },
      { position: [3, 0, 0], label: "Quemar basura", imgSrc: "/images/quemar-basura.jpg", correct: false },
    ],
  },
];

/**
 * Quiz Component
 * 
 * Este componente maneja la lógica del quiz, incluyendo la presentación de preguntas,
 * el manejo de respuestas, y la actualización del progreso del quiz en Firestore.
 */
const Quiz = ({ onCorrectAnswersChange }) => {
  const { user } = useAuthStore();
  const [currentScenario, setCurrentScenario] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [newReward, setNewReward] = useState(null);
  const [totalAttempts, setTotalAttempts] = useState(0);
  const [failedAttempts, setFailedAttempts] = useState(0);
  const [score, setScore] = useState(0);

  // Cargar el progreso del usuario al iniciar el componente
  useEffect(() => {
    const loadQuizProgress = async () => {
      if (user) {
        const progress = await userDAO.getQuizProgress(user.uid);
        console.log("Progreso del quiz:", progress); // Log para depuración
        if (progress.success && progress.data) {
          setCurrentScenario(progress.data.currentScenario || 0);
          setCorrectAnswers(progress.data.correctAnswers || 0);
          setIsQuizCompleted(progress.data.isQuizCompleted || false);
          setIsGameOver(progress.data.isGameOver || false);
          setTotalAttempts(progress.data.totalAttempts || 0);
          setFailedAttempts(progress.data.failedAttempts || 0);
          setScore(progress.data.score || 0);
          // Notificar al padre el número de respuestas correctas inicial
          if (onCorrectAnswersChange) {
            onCorrectAnswersChange(progress.data.correctAnswers || 0);
          }
        } else {
          setCurrentScenario(0);
          setCorrectAnswers(0);
          setIsQuizCompleted(false);
          setIsGameOver(false);
          setTotalAttempts(0);
          setFailedAttempts(0);
          setScore(0);
          // Notificar al padre el número de respuestas correctas inicial (0)
          if (onCorrectAnswersChange) {
            onCorrectAnswersChange(0);
          }
        }
      }
    };
    loadQuizProgress();
  }, [user, onCorrectAnswersChange]);

  // Guardar el progreso cada vez que cambia
  useEffect(() => {
    const saveQuizProgress = async () => {
      if (user) {
        await userDAO.updateQuizProgress(user.uid, {
          currentScenario,
          correctAnswers,
          totalAttempts,
          failedAttempts,
          isQuizCompleted,
          isGameOver,
        });
        console.log("Progreso del quiz guardado:", {
          currentScenario,
          correctAnswers,
          totalAttempts,
          failedAttempts,
          isQuizCompleted,
          isGameOver,
        }); // Log para depuración
      }
    };
    saveQuizProgress();
  }, [currentScenario, correctAnswers, totalAttempts, failedAttempts, isQuizCompleted, isGameOver, user]);

  // Notificar al padre cada vez que correctAnswers cambia
  useEffect(() => {
    if (onCorrectAnswersChange) {
      console.log("Respuestas correctas cambiaron a:", correctAnswers); // Log para depuración
      onCorrectAnswersChange(correctAnswers);
    }
  }, [correctAnswers, onCorrectAnswersChange]);

  /**
   * Maneja la acción del usuario al seleccionar una respuesta.
   * @param {boolean} isCorrect - Indica si la respuesta fue correcta.
   */
  const handleAction = async (isCorrect) => {
    console.log("Acción recibida. ¿Correcto?:", isCorrect); // Log para depuración
    let updatedCorrectAnswers = correctAnswers;
    let updatedTotalAttempts = totalAttempts + 1;
    let updatedFailedAttempts = failedAttempts;

    if (isCorrect) {
      updatedCorrectAnswers += 1;
    } else {
      updatedFailedAttempts += 1;
    }

    setCorrectAnswers(updatedCorrectAnswers);
    setTotalAttempts(updatedTotalAttempts);
    setFailedAttempts(updatedFailedAttempts);

    // Actualizar la puntuación en tiempo real
    const currentScore = updatedCorrectAnswers * 20;
    setScore(currentScore);
    console.log("Respuestas correctas actualizadas:", updatedCorrectAnswers); // Log para depuración
    console.log("Puntuación actualizada:", currentScore); // Log para depuración

    const nextScenario = currentScenario + 1;

    if (nextScenario < scenarios.length) {
      setCurrentScenario(nextScenario);
    } else {
      // Ha completado todas las preguntas
      if (updatedCorrectAnswers >= 3) {
        const obtainedRewards = calculateRewards(updatedCorrectAnswers);
        console.log("Recompensas obtenidas:", obtainedRewards); // Log para depuración

        // Guardar la puntuación final en Firestore
        await userDAO.updateUserScore(user.uid, currentScore);

        // Guardar recompensas en Firestore
        for (const reward of obtainedRewards) {
          await userDAO.addUserReward(user.uid, reward);
        }

        // Mostrar la recompensa obtenida con animación
        if (obtainedRewards.length > 0) {
          setNewReward(obtainedRewards[0]); // Solo una recompensa
        }

        // Ajustar el estado del quiz a completado
        setIsQuizCompleted(true);
      } else {
        // Menos de 3 respuestas correctas => Game Over
        await userDAO.updateUserScore(user.uid, currentScore);
        setIsGameOver(true);
      }
    }
  };

  /**
   * Cierra el popup de recompensa.
   */
  const handleCloseReward = () => {
    setNewReward(null);
  };

  /**
   * Reinicia el quiz y el progreso del usuario.
   */
  const handleRestartQuiz = async () => {
    if (user) {
      setCurrentScenario(0);
      setCorrectAnswers(0);
      setIsQuizCompleted(false);
      setIsGameOver(false);
      setNewReward(null);
      setTotalAttempts(0);
      setFailedAttempts(0);
      setScore(0); // Reiniciar la puntuación

      await userDAO.resetQuizProgress(user.uid);
      if (onCorrectAnswersChange) {
        onCorrectAnswersChange(0);
      }
    }
  };

  if (!user) {
    return <p>Por favor, inicia sesión para participar en el quiz.</p>;
  }

  // Asegurarse de que currentScenario está dentro del rango
  const isValidScenario = currentScenario >= 0 && currentScenario < scenarios.length;
  const currentScenarioData = isValidScenario ? scenarios[currentScenario] : null;

  // En lugar de retornar diferentes bloques con condicionales sin el popup,
  // vamos a mostrar el popup siempre al final y usar condicionales parciales.

  return (
    <div className="quiz-wrapper">

      {/* Mostrar el contenido principal si no está completado ni en game over */}
      {(!isQuizCompleted && !isGameOver && isValidScenario) && (
        <div className="quiz-container">
          <h2>Pregunta {currentScenario + 1} de {scenarios.length}</h2>
          <p className="description">{currentScenarioData.description}</p>
          <p>Aciertos hasta ahora: {correctAnswers}</p>
          <p>Puntuación Actual: {score} puntos</p>
          <InteractiveScene
            objects={currentScenarioData.objects}
            onAction={handleAction}
          />
        </div>
      )}

      {/* Mostrar Game Over */}
      {isGameOver && (
        <div className="quiz-container">
          <h2>Game Over</h2>
          <p>Has obtenido {correctAnswers} respuestas correctas.</p>
          <p>Puntuación obtenida: {score} puntos</p>
          <button onClick={handleRestartQuiz} className="restart-button">
            ¿Quieres volver a jugar?
          </button>
        </div>
      )}

      {/* Mostrar Quiz Completado */}
      {isQuizCompleted && (
        <div className="quiz-completed">
          <h2>¡Quiz Completado!</h2>
          <p>Has obtenido {correctAnswers} respuestas correctas.</p>
          <p>Puntuación Total: {score} puntos</p>
          <button onClick={handleRestartQuiz} className="restart-button">
            ¿Quieres volver a jugar?
          </button>
        </div>
      )}

      {/* Animación de nueva recompensa siempre al final */}
      <AnimatePresence>
        {newReward && (
          <motion.div
            className="reward-popup"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            <img src={newReward.image} alt={newReward.type} className="popup-image" />
            <h3>{newReward.type} ¡Obtenida!</h3>
            <p>{newReward.description}</p>
            <button onClick={handleCloseReward} className="close-button">Cerrar</button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Quiz;
