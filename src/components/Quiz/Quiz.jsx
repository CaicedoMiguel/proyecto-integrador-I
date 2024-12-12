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

const Quiz = () => {
  const { user } = useAuthStore();
  const [currentScenario, setCurrentScenario] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [rewards, setRewards] = useState([]);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [newReward, setNewReward] = useState(null);

  // Cargar el progreso del usuario al iniciar el componente
  useEffect(() => {
    const loadQuizProgress = async () => {
      if (user) {
        const progress = await userDAO.getQuizProgress(user.uid);
        if (progress.success && progress.data) {
          setCurrentScenario(progress.data.currentScenario || 0);
          setCorrectAnswers(progress.data.correctAnswers || 0);
          setRewards(progress.data.rewards || []);
          setIsQuizCompleted(progress.data.isQuizCompleted || false);
          setIsGameOver(progress.data.isGameOver || false);
        } else {
          // Si no hay progreso, asegurar que los estados están inicializados
          setCurrentScenario(0);
          setCorrectAnswers(0);
          setRewards([]);
          setIsQuizCompleted(false);
          setIsGameOver(false);
        }
      }
    };
    loadQuizProgress();
  }, [user]);

  // Guardar el progreso cada vez que cambia
  useEffect(() => {
    const saveQuizProgress = async () => {
      if (user) {
        await userDAO.updateQuizProgress(user.uid, {
          currentScenario,
          correctAnswers,
          rewards,
          isQuizCompleted,
          isGameOver,
        });
      }
    };
    saveQuizProgress();
  }, [currentScenario, correctAnswers, rewards, user, isQuizCompleted, isGameOver]);

  const handleAction = async (isCorrect) => {
    let newCorrectAnswers = correctAnswers;

    if (isCorrect) {
      newCorrectAnswers += 1;
    }

    // Actualizar el número de respuestas correctas
    setCorrectAnswers(newCorrectAnswers);

    const nextScenario = currentScenario + 1;

    if (nextScenario < scenarios.length) {
      setCurrentScenario(nextScenario);
    } else {
      // Ha completado todas las preguntas
      if (newCorrectAnswers >= 3) {
        setIsQuizCompleted(true);
        const obtainedRewards = calculateRewards(newCorrectAnswers);
        setRewards(obtainedRewards);

        // Guardar recompensas en Firestore
        for (const reward of obtainedRewards) {
          await userDAO.addUserReward(user.uid, reward);
        }

        // Mostrar la recompensa obtenida con animación
        if (obtainedRewards.length > 0) {
          setNewReward(obtainedRewards[0]); // Solo una recompensa
        }
      } else {
        // Menos de 3 respuestas correctas => Game Over
        setIsGameOver(true);
      }
    }
  };

  const handleCloseReward = () => {
    setNewReward(null);
  };

  const handleRestartQuiz = async () => {
    if (user) {
      // Reiniciar el estado local
      setCurrentScenario(0);
      setCorrectAnswers(0);
      setRewards([]);
      setIsQuizCompleted(false);
      setIsGameOver(false);
      setNewReward(null);

      // Reiniciar el progreso en la base de datos
      await userDAO.resetQuizProgress(user.uid);
    }
  };

  if (!user) {
    return <p>Por favor, inicia sesión para participar en el quiz.</p>;
  }

  // Asegurarse de que currentScenario está dentro del rango
  const isValidScenario = currentScenario >= 0 && currentScenario < scenarios.length;
  const currentScenarioData = isValidScenario ? scenarios[currentScenario] : null;

  if (!isValidScenario) {
    return (
      <div className="quiz-container">
        <p>Escenario no válido. Por favor, reinicia el quiz.</p>
        <button onClick={handleRestartQuiz} className="restart-button">
          ¿Quieres volver a jugar?
        </button>
      </div>
    );
  }

  if (isGameOver) {
    return (
      <div className="quiz-container">
        <h2>Game Over</h2>
        <p>Has obtenido {correctAnswers} respuestas correctas.</p>
        <p>Puntuación obtenida: {correctAnswers * 20} puntos</p>
        <button onClick={handleRestartQuiz} className="restart-button">
          ¿Quieres volver a jugar?
        </button>
      </div>
    );
  }

  if (isQuizCompleted) {
    return (
      <div className="quiz-completed">
        <h2>¡Quiz Completado!</h2>
        <p>Has obtenido {correctAnswers} respuestas correctas.</p>
        <p>Puntuación Total: {correctAnswers * 20} puntos</p>
        {rewards.length > 0 && (
          <>
            <h3>Recompensa:</h3>
            <ul className="rewards-list">
              {rewards.map((reward, index) => (
                <li key={index} className="reward-item">
                  <img src={reward.image} alt={reward.type} className="reward-image" />
                  <div className="reward-info">
                    <h4>{reward.type}</h4>
                    <p>{reward.description}</p>
                    <span className="earned-date">Obtenido el: {new Date(reward.earnedAt).toLocaleDateString()}</span>
                  </div>
                </li>
              ))}
            </ul>
          </>
        )}
        <button onClick={handleRestartQuiz} className="restart-button">
          ¿Quieres volver a jugar?
        </button>
      </div>
    );
  }

  return (
    <div className="quiz-container">
      <h2>Pregunta {currentScenario + 1} de {scenarios.length}</h2>
      <p className="description">{currentScenarioData.description}</p>
      <InteractiveScene
        objects={currentScenarioData.objects}
        onAction={handleAction}
      />
      <div className="score">Puntuación Actual: {correctAnswers * 20} puntos</div>

      {/* Animación de nueva recompensa */}
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
            <h3>{newReward.type} Obtenida!</h3>
            <p>{newReward.description}</p>
            <button onClick={handleCloseReward} className="close-button">Cerrar</button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Quiz;
