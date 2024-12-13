// src/components/Quices/Quices.jsx

import React, { useState, useEffect } from "react";
import "./Quices.css";
import InteractiveScene from "./InteractiveScene";
import userDAO from "../../daos/userDAO";
import useAuthStore from "../../stores/use-auth-store";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom"; // Importa useNavigate

const calculateRewards = (correctAnswers) => {
  if (correctAnswers === 5) {
    return [{
      type: "Medalla de Oro",
      image: "/images/rewards/gold.jpg",
      description: "¡Felicidades! Has acertado 5 preguntas.",
      earnedAt: new Date().toISOString(),
    }];
  } else if (correctAnswers === 4) {
    return [{
      type: "Medalla de Plata",
      image: "/images/rewards/silver.jpg",
      description: "Has acertado 4 preguntas.",
      earnedAt: new Date().toISOString(),
    }];
  } else if (correctAnswers === 3) {
    return [{
      type: "Medalla de Bronce",
      image: "/images/rewards/bronze.jpg",
      description: "Has acertado 3 preguntas.",
      earnedAt: new Date().toISOString(),
    }];
  }
  return [];
};

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

const Quices = ({ onCorrectAnswersChange }) => {
  const { user } = useAuthStore();
  const navigate = useNavigate(); // Inicializa useNavigate
  const [currentScenario, setCurrentScenario] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [newReward, setNewReward] = useState(null);
  const [quizStats, setQuizStats] = useState({
    totalQuizAttempts: 0,
    failedQuizAttempts: 0,
    maxScore: 0
  });
  const [currentQuizScore, setCurrentQuizScore] = useState(0);

  useEffect(() => {
    const loadQuizProgress = async () => {
      if (user) {
        const progress = await userDAO.getQuizProgress(user.uid);
        console.log("Progreso del quiz:", progress);
        if (progress.success && progress.data) {
          setCurrentScenario(progress.data.currentScenario || 0);
          setCorrectAnswers(progress.data.correctAnswers || 0);
          setIsQuizCompleted(progress.data.isQuizCompleted || false);
          setIsGameOver(progress.data.isGameOver || false);
          setQuizStats({
            totalQuizAttempts: progress.data.totalQuizAttempts || 0,
            failedQuizAttempts: progress.data.failedQuizAttempts || 0,
            maxScore: progress.data.maxScore || 0
          });
          setCurrentQuizScore(progress.data.currentQuizScore || 0);
          if (onCorrectAnswersChange) {
            onCorrectAnswersChange(progress.data.correctAnswers || 0);
          }
        } else {
          resetQuizState();
        }
      }
    };
    loadQuizProgress();
  }, [user, onCorrectAnswersChange]);

  useEffect(() => {
    const saveQuizProgress = async () => {
      if (user) {
        await userDAO.updateQuizProgress(user.uid, {
          currentScenario,
          correctAnswers,
          isQuizCompleted,
          isGameOver,
          totalQuizAttempts: quizStats.totalQuizAttempts,
          failedQuizAttempts: quizStats.failedQuizAttempts,
          maxScore: quizStats.maxScore,
          currentQuizScore
        });
        console.log("Progreso del quiz guardado:", {
          currentScenario,
          correctAnswers,
          isQuizCompleted,
          isGameOver,
          totalQuizAttempts: quizStats.totalQuizAttempts,
          failedQuizAttempts: quizStats.failedQuizAttempts,
          maxScore: quizStats.maxScore,
          currentQuizScore
        });
      }
    };
    saveQuizProgress();
  }, [currentScenario, correctAnswers, isQuizCompleted, isGameOver, quizStats, currentQuizScore, user]);

  useEffect(() => {
    if (onCorrectAnswersChange) {
      console.log("Respuestas correctas cambiaron a:", correctAnswers);
      onCorrectAnswersChange(correctAnswers);
    }
  }, [correctAnswers, onCorrectAnswersChange]);

  const handleAction = async (isCorrect) => {
    console.log("Acción recibida. ¿Correcto?:", isCorrect);
    let updatedCorrectAnswers = correctAnswers;
    let updatedCurrentQuizScore = currentQuizScore;

    if (isCorrect) {
      updatedCorrectAnswers += 1;
      updatedCurrentQuizScore += 20;
    }

    setCorrectAnswers(updatedCorrectAnswers);
    setCurrentQuizScore(updatedCurrentQuizScore);

    console.log("Respuestas correctas actualizadas:", updatedCorrectAnswers);
    console.log("Puntuación actualizada:", updatedCurrentQuizScore);

    const nextScenario = currentScenario + 1;

    if (nextScenario < scenarios.length) {
      setCurrentScenario(nextScenario);
    } else {
      await finishQuiz(updatedCorrectAnswers, updatedCurrentQuizScore);
    }
  };

  const finishQuiz = async (finalCorrectAnswers, finalScore) => {
    const quizPassed = finalCorrectAnswers >= 3;
    const updatedStats = {
      ...quizStats,
      totalQuizAttempts: quizStats.totalQuizAttempts + 1,
      failedQuizAttempts: quizPassed ? quizStats.failedQuizAttempts : quizStats.failedQuizAttempts + 1,
      maxScore: Math.max(quizStats.maxScore, finalScore)
    };

    setQuizStats(updatedStats);
    setIsQuizCompleted(quizPassed);
    setIsGameOver(!quizPassed);

    if (quizPassed) {
      const obtainedRewards = calculateRewards(finalCorrectAnswers);
      console.log("Recompensas obtenidas:", obtainedRewards);

      for (const reward of obtainedRewards) {
        await userDAO.addUserReward(user.uid, reward);
      }

      if (obtainedRewards.length > 0) {
        setNewReward(obtainedRewards[0]);
      }
    }

    await userDAO.updateQuizStats(user.uid, updatedStats);
  };

  const handleCloseReward = () => {
    setNewReward(null);
  };

  const resetQuizState = () => {
    setCurrentScenario(0);
    setCorrectAnswers(0);
    setIsQuizCompleted(false);
    setIsGameOver(false);
    setNewReward(null);
    setCurrentQuizScore(0);
    if (onCorrectAnswersChange) {
      onCorrectAnswersChange(0);
    }
  };

  const handleRestartQuiz = async () => {
    if (user) {
      resetQuizState();
      await userDAO.resetQuizProgress(user.uid);
    }
  };

  // Nueva función manejadora para navegar al perfil
  const handleGoToProfile = () => {
    navigate("/profile"); // Asegúrate de que esta ruta exista en tu enrutador
  };

  if (!user) {
    return <p>Por favor, inicia sesión para participar en el quiz.</p>;
  }

  const isValidScenario = currentScenario >= 0 && currentScenario < scenarios.length;
  const currentScenarioData = isValidScenario ? scenarios[currentScenario] : null;

  return (
    <div className="quices-wrapper">
      {(!isQuizCompleted && !isGameOver && isValidScenario) && (
        <div className="quices-container">
          <h2>Pregunta {currentScenario + 1} de {scenarios.length}</h2>
          <p className="description">{currentScenarioData.description}</p>
          <p>Aciertos hasta ahora: {correctAnswers}</p>
          <p>Puntuación Actual: {currentQuizScore} puntos</p>
          <InteractiveScene
            objects={currentScenarioData.objects}
            onAction={handleAction}
          />
        </div>
      )}

      {isGameOver && (
        <div className="quices-container">
          <h2>Game Over</h2>
          <p>Has obtenido {correctAnswers} respuestas correctas.</p>
          <p>Puntuación obtenida: {currentQuizScore} puntos</p>
          <p>Intentos totales de quiz: {quizStats.totalQuizAttempts}</p>
          <p>Quices perdidos: {quizStats.failedQuizAttempts}</p>
          <p>Puntuación máxima: {quizStats.maxScore} puntos</p>
          <div className="buttons-container"> {/* Contenedor para los botones */}
            <button onClick={handleRestartQuiz} className="restart-button">
              ¿Quieres volver a jugar?
            </button>
            <button onClick={handleGoToProfile} className="profile-button">
              Perfil
            </button>
          </div>
        </div>
      )}

      {isQuizCompleted && (
        <div className="quices-completed">
          <h2>¡Quiz Completado!</h2>
          <p>Has obtenido {correctAnswers} respuestas correctas.</p>
          <p>Puntuación Total: {currentQuizScore} puntos</p>
          <p>Intentos totales de quiz: {quizStats.totalQuizAttempts}</p>
          <p>Quices perdidos: {quizStats.failedQuizAttempts}</p>
          <p>Puntuación máxima: {quizStats.maxScore} puntos</p>
          <div className="buttons-container"> {/* Contenedor para los botones */}
            <button onClick={handleRestartQuiz} className="restart-button">
              ¿Quieres volver a jugar?
            </button>
            <button onClick={handleGoToProfile} className="profile-button">
              Perfil
            </button>
          </div>
        </div>
      )}

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

export default Quices;
