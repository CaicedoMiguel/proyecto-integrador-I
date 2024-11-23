// src/pages/Deforestation.jsx
import React, { Suspense, useState, useCallback, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Stars, Sky } from "@react-three/drei";
import Navbar from "../../components/Navbar";
import { useNavigate } from "react-router-dom";
import * as THREE from "three";
import CameraDeforestation from "../../controls/CameraDeforestation";
import DeforestationTitle from "../../components/DeforestationTitle";
import CustomCursor from "../../controls/CustomCursor";
import LightsDeforestation from "../../components/LightsDeforestation";
import LostDeforestation from "../../components/LostDeforestation";
import './styles.css'; // Importar la hoja de estilos
import { Physics } from '@react-three/rapier';
import Raccon from "../../components/RacconModel";

/**
 * Definición de posiciones de la cámara fuera del componente para evitar recrearlas en cada render
 */
const cameraPositions = [
  // Paso 0: Posición inicial (Título)
  {
    position: new THREE.Vector3(-14.2, 3.59, 60.27),
    lookAt: new THREE.Vector3(-8.74, -3.07, 1.32),
  },
  // Paso 1: La Deforestación
  {
    position: new THREE.Vector3(98.45, 2.85, 133.23),
    lookAt: new THREE.Vector3(25.69, -15.25, 150.73),
  },
  // Paso 2: La Sensibilización
  {
    position: new THREE.Vector3(50, 10, 80),
    lookAt: new THREE.Vector3(0, 0, 0),
  },
  // Paso 3: Soluciones a la Deforestación
  {
    position: new THREE.Vector3(100, 20, 150),
    lookAt: new THREE.Vector3(10, -5, 20),
  },
  // Paso 4: ¡Juega y Aprende!
  {
    position: new THREE.Vector3(120, 30, 180),
    lookAt: new THREE.Vector3(20, -10, 30),
  },
];

// Arreglo de textos para cada paso
const texts = [
  // Paso 0: Posición inicial (Título)
  {
    title: "Bienvenido a la Exploración de la Deforestación",
    content: "Haz clic en la pantalla para comenzar y aprender más sobre la deforestación, tambien puedes usar las flechas izquierda y derecha del teclado para desplazarte, y la tecla escape para volver a comenzar. Diviertete!",
    isClickable: true, // Indica que se puede hacer clic para avanzar
  },
  // Paso 1: La Deforestación
  {
    title: "La Deforestación",
    content:
      "La deforestación amenaza la biodiversidad y acelera el cambio climático al destruir hábitats vitales y reducir los pulmones verdes de nuestro planeta. Cada árbol talado significa menos oxígeno, mayor emisión de carbono y pérdida de especies únicas. Es crucial adoptar prácticas sostenibles y proteger nuestros bosques para asegurar un futuro saludable para las próximas generaciones. Actuar ahora es responsabilidad de todos.",
  },
  // Paso 2: La Sensibilización
  {
    title: "La Sensibilización",
    content:
      "La sensibilización es clave para combatir la deforestación. Al educar y concienciar a las comunidades sobre el valor de los bosques y los efectos devastadores de su pérdida, fomentamos acciones responsables y sostenibles. Participa en iniciativas locales, apoya prácticas ecológicas y comparte información para inspirar a otros a proteger nuestro planeta.",
  },
  // Paso 3: Soluciones a la Deforestación
  {
    title: "Soluciones a la Deforestación",
    content:
      "Existen múltiples soluciones para enfrentar la deforestación, tales como la reforestación, la implementación de prácticas agrícolas sostenibles, la creación de reservas naturales y la promoción de políticas ambientales estrictas. La tecnología también juega un papel crucial mediante el monitoreo satelital y el uso de drones para detectar actividades ilegales. La colaboración internacional y el apoyo a las comunidades locales son esenciales para el éxito de estas iniciativas.",
  },
  // Paso 4: ¡Juega y Aprende!
  {
    title: "¡Juega y Aprende!",
    content:
      "Participa en nuestro juego interactivo para aprender más sobre la deforestación y cómo puedes contribuir a la preservación de los bosques. Desafía tus conocimientos, toma decisiones estratégicas y descubre cómo tus acciones pueden marcar la diferencia. ¡Diviértete mientras haces del mundo un lugar mejor!",
    isGame: true, // Indicador para manejar la navegación al juego
  },
];

const Deforestation = () => {
  const [targetPosition, setTargetPosition] = useState(cameraPositions[0].position.clone());
  const [targetLookAt, setTargetLookAt] = useState(cameraPositions[0].lookAt.clone());
  const [showInfoCanvas, setShowInfoCanvas] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();

  const modalRef = useRef(null); // Referencia al modal
  const isFirstRender = useRef(true); // Indicador de primera carga

  /**
   * Función para avanzar al siguiente paso.
   */
  const nextStep = useCallback(() => {
    setCurrentStep((prevStep) => {
      if (prevStep < texts.length - 1) {
        return prevStep + 1;
      }
      return prevStep;
    });
  }, [texts.length]);

  /**
   * Función para retroceder al paso anterior.
   */
  const prevStep = useCallback(() => {
    setCurrentStep((prevStep) => {
      if (prevStep > 0) {
        return prevStep - 1;
      }
      return prevStep;
    });
  }, []);

  /**
   * Función para reiniciar la cámara a su posición inicial y ocultar el canvas de información.
   */
  const resetCamera = useCallback(() => {
    setTargetPosition(cameraPositions[0].position.clone());
    setTargetLookAt(cameraPositions[0].lookAt.clone());
    setShowInfoCanvas(false);
    setCurrentStep(0);
    console.log("Cámara reiniciada a la posición inicial.");
  }, []);

  /**
   * useEffect para sincronizar la posición de la cámara con el paso actual.
   */
  useEffect(() => {
    console.log(`currentStep changed to: ${currentStep}`);

    if (isFirstRender.current) {
      // En la primera renderización, no mostrar el modal
      isFirstRender.current = false;
      setShowInfoCanvas(false);
      // En el paso 0, targetPosition ya está set en posición0
    } else {
      if (currentStep < cameraPositions.length) {
        const { position, lookAt } = cameraPositions[currentStep];
        setTargetPosition(position.clone());
        setTargetLookAt(lookAt.clone());

        // Mostrar el modal para todos los pasos, excepto el paso 0
        setShowInfoCanvas(currentStep !== 0);
      }
    }
  }, [currentStep]);

  /**
   * Función para manejar eventos de teclado.
   * @param {KeyboardEvent} event - El evento de teclado.
   */
  const handleKeyDown = useCallback((event) => {
    console.log(`Key pressed: ${event.code}, showInfoCanvas: ${showInfoCanvas}, currentStep: ${currentStep}`);

    if (showInfoCanvas) { // Si el modal está abierto
      switch (event.code) {
        case "ArrowRight":
          console.log("ArrowRight pressed");
          nextStep();
          break;
        case "ArrowLeft":
          console.log("ArrowLeft pressed");
          prevStep();
          break;
        case "Escape":
          console.log("Escape pressed");
          resetCamera();
          break;
        default:
          break;
      }
    } else { // Si el modal no está abierto
      if (event.code === "ArrowRight") {
        console.log("ArrowRight pressed - avanzar al siguiente paso");
        nextStep();
        setShowInfoCanvas(true); // Mostrar el modal al avanzar
      }
      // Puedes agregar otras acciones si es necesario
    }
  }, [showInfoCanvas, nextStep, prevStep, resetCamera, currentStep]);

  /**
   * useEffect para añadir y limpiar el listener global de keydown.
   */
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    // Limpia el listener al desmontar el componente
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  /**
   * useEffect para enfocar el modal cuando se abre.
   */
  useEffect(() => {
    if (showInfoCanvas && modalRef.current) {
      // Añadir un pequeño retraso para asegurar que el modal esté montado
      setTimeout(() => {
        modalRef.current.focus();
      }, 0);
    }
  }, [showInfoCanvas]);

  return (
    <div style={{ width: "100vw", height: "100vh", position: "relative" }}>
      {/* Componente Navbar */}
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

      {/* Canvas 3D para la escena de deforestación */}
      <Canvas
        frameloop="demand"
        shadows
        camera={{
          position: cameraPositions[0].position.toArray(),
          fov: 75,
        }}
        style={{ background: "transparent" }}
      >
        <CameraDeforestation
          targetPosition={targetPosition}
          targetLookAt={targetLookAt}
          nextStep={nextStep}
          prevStep={prevStep}
          resetCamera={resetCamera}
          isModalOpen={showInfoCanvas} // Pasar la prop aquí
        />
        <Suspense fallback={null}>
        <Physics gravity={[0, -9.81, 0]} defaultContactMaterial={{ restitution: 0.2, friction: 1 }}> 
        <LostDeforestation />
        <Raccon position={[30, -11, 13]}/>
        {/* <Debug color="black" scale={1.1}> */} {/* Descomenta esto para visualizar los cuerpos de física */}</Physics>
          
          <DeforestationTitle />
          <Sky
            sunPosition={[100, 20, 100]}
            turbidity={10}
            rayleigh={2}
            mieCoefficient={0.005}
            mieDirectionalG={0.8}
          />
          <Stars
            radius={300}
            depth={50}
            count={2000}
            factor={7}
            saturation={0}
            fade
          />
          <CustomCursor />
        </Suspense>
        <LightsDeforestation />
      </Canvas>

      {/* Clickable overlay para el Paso 0 */}
      {currentStep === 0 && (
        <div
          onClick={nextStep}
          className="modal-paso0" // Aplicar la clase CSS
        >
          <h2 style={{ fontSize: "28px", marginBottom: "10px", color: "#2c3e50" }}>
            {texts[currentStep].title}
          </h2>
          <p style={{ fontSize: "16px", color: "#555", marginBottom: "20px" }}></p>
          <p
            style={{
              fontSize: "18px",
              lineHeight: "1.6",
              textAlign: "center",
              marginBottom: "30px",
            }}
          >
            {texts[currentStep].content}
          </p>
        </div>
      )}

      {/* Canvas de información para la deforestación (Pasos 1 a 4) */}
      {showInfoCanvas && currentStep >= 1 && currentStep < texts.length && (
        <div
          ref={modalRef}
          tabIndex={0} // Hace que el div sea enfocables
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "70vw",
            maxWidth: "800px",
            backgroundColor: "rgba(255, 255, 255, 0.95)",
            color: "#333",
            padding: "40px",
            borderRadius: "20px",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
            fontFamily: "'bebas-neue-regular', sans-serif",
            outline: "none", // Opcional: elimina el contorno al enfocar
          }}
        >
          {/* Botón de cierre para el modal */}
          <button
            onClick={() => {
              setShowInfoCanvas(false);
              // No reiniciar currentStep para permitir la navegación con los botones
            }}
            style={{
              position: "absolute",
              top: "20px",
              right: "20px",
              background: "transparent",
              border: "none",
              fontSize: "24px",
              cursor: "pointer",
              color: "#666",
              transition: "color 0.3s ease",
            }}
            onMouseOver={(e) => (e.target.style.color = "#f44336")}
            onMouseOut={(e) => (e.target.style.color = "#666")}
            aria-label="Cerrar"
          >
            ×
          </button>

          {/* Contenido dinámico basado en el paso actual */}
          <h2 style={{ fontSize: "28px", marginBottom: "20px", color: "#2c3e50" }}>
            {texts[currentStep].title}
          </h2>
          <p
            style={{
              fontSize: "18px",
              lineHeight: "1.6",
              textAlign: "center",
              marginBottom: "30px",
            }}
          >
            {texts[currentStep].content}
          </p>

          {/* Botones de navegación */}
          <div
            style={{
              display: "flex",
              gap: "20px",
              width: "100%",
              justifyContent: "center",
            }}
          >
            {/* Botón Anterior */}
            {currentStep > 0 && (
              <button
                onClick={prevStep}
                style={{
                  padding: "15px 30px",
                  fontSize: "16px",
                  borderRadius: "50px",
                  backgroundColor: "#f44336",
                  color: "white",
                  cursor: "pointer",
                  border: "none",
                  transition: "background-color 0.3s ease",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                }}
                onMouseOver={(e) => (e.target.style.backgroundColor = "#d32f2f")}
                onMouseOut={(e) => (e.target.style.backgroundColor = "#f44336")}
              >
                Anterior
              </button>
            )}

            {/* Botón Siguiente o Finalizar */}
            {currentStep < texts.length - 1 ? (
              <button
                onClick={nextStep}
                style={{
                  padding: "15px 30px",
                  fontSize: "16px",
                  borderRadius: "50px",
                  backgroundColor: "#4CAF50",
                  color: "white",
                  cursor: "pointer",
                  border: "none",
                  transition: "background-color 0.3s ease",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                }}
                onMouseOver={(e) => (e.target.style.backgroundColor = "#45a049")}
                onMouseOut={(e) => (e.target.style.backgroundColor = "#4CAF50")}
              >
                Siguiente
              </button>
            ) : (
              // Botón Finalizar que navega al juego
              <button
                onClick={() => navigate("/juego")}
                style={{
                  padding: "15px 30px",
                  fontSize: "16px",
                  borderRadius: "50px",
                  backgroundColor: "#4CAF50",
                  color: "white",
                  cursor: "pointer",
                  border: "none",
                  transition: "background-color 0.3s ease",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                }}
                onMouseOver={(e) => (e.target.style.backgroundColor = "#45a049")}
                onMouseOut={(e) => (e.target.style.backgroundColor = "#4CAF50")}
              >
                Finalizar
              </button>
            )}

            {/* Botón Resetear Cámara */}
            <button
              onClick={resetCamera}
              style={{
                padding: "15px 30px",
                fontSize: "16px",
                borderRadius: "50px",
                backgroundColor: "#f44336",
                color: "white",
                cursor: "pointer",
                border: "none",
                transition: "background-color 0.3s ease",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#d32f2f")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#f44336")}
            >
              Regresa
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Deforestation;
