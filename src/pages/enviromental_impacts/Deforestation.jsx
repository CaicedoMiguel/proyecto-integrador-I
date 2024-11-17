// pages/enviroments_impacs/deforestation/Deforestation.js

import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import * as THREE from "three";
import Navbar from "../../components/Navbar";
import DeforestationScene from "../../components/DeforestationScene";
import InfoCanvas from "../../components/InfoCanvasDeforestation";

// Posición inicial de la cámara y objetivo
const initialPosition = new THREE.Vector3(-14.2, 3.59, 60.27);
const initialLookAt = new THREE.Vector3(-8.74, -3.07, 1.32);

// Textos para cada paso
const texts = [
  {
    title: "La Deforestación",
    content:
      "La deforestación amenaza la biodiversidad y acelera el cambio climático al destruir hábitats vitales y reducir los pulmones verdes de nuestro planeta. Cada árbol talado significa menos oxígeno, mayor emisión de carbono y pérdida de especies únicas. Es crucial adoptar prácticas sostenibles y proteger nuestros bosques para asegurar un futuro saludable para las próximas generaciones. Actuar ahora es responsabilidad de todos.",
  },
  {
    title: "La Sensibilización",
    content:
      "La sensibilización es clave para combatir la deforestación. Al educar y concienciar a las comunidades sobre el valor de los bosques y los efectos devastadores de su pérdida, fomentamos acciones responsables y sostenibles. Participa en iniciativas locales, apoya prácticas ecológicas y comparte información para inspirar a otros a proteger nuestro planeta.",
  },
];

const Deforestation = () => {
  const [targetPosition, setTargetPosition] = useState(initialPosition.clone());
  const [targetLookAt, setTargetLookAt] = useState(initialLookAt.clone());
  const [showInfoCanvas, setShowInfoCanvas] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();

  // Función para mover la cámara y mostrar el lienzo de información
  const moveCamera = useCallback((newPosition, newLookAt) => {
    setTargetPosition(newPosition.clone());
    setTargetLookAt(newLookAt.clone());
    setShowInfoCanvas(true);
    setCurrentStep(0);
    console.log("Camera moved to the new position.");
  }, []);

  // Función para reiniciar la cámara y ocultar el lienzo de información
  const resetCamera = useCallback(() => {
    setTargetPosition(initialPosition.clone());
    setTargetLookAt(initialLookAt.clone());
    setShowInfoCanvas(false);
    setCurrentStep(0);
    console.log("Camera reset to the initial position.");
  }, []);

  return (
    <div style={{ width: "100vw", height: "100vh", position: "relative" }}>
      {/* Navbar */}
      <Navbar />

      {/* Botón para navegar a la página de Biodiversidad */}
      <button
        onClick={() => navigate("/biodiversity")}
        style={{
          position: "absolute",
          top: "20px",
          right: "20px",
          padding: "10px 20px",
          fontSize: "16px",
          borderRadius: "8px",
          backgroundColor: "#4CAF50",
          color: "white",
          cursor: "pointer",
          zIndex: 1000,
        }}
      >
        Explora la Biodiversidad
      </button>

      {/* Lienzo de información */}
      {showInfoCanvas && (
        <InfoCanvas
          texts={texts}
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
          setShowInfoCanvas={setShowInfoCanvas}
          resetCamera={resetCamera}
        />
      )}

      {/* Escena 3D de Deforestación */}
      <DeforestationScene
        initialPosition={initialPosition}
        targetPosition={targetPosition}
        targetLookAt={targetLookAt}
        moveCamera={moveCamera}
        resetCamera={resetCamera}
      />
    </div>
  );
};

export default Deforestation;
