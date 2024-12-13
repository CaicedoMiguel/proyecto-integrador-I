// src/pages/enviromental_impacts/Deforestation.jsx
import React, { Suspense, useState, useCallback, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Stars, Sky } from "@react-three/drei";
import { useNavigate } from "react-router-dom";
import * as THREE from "three";
import { Physics } from '@react-three/rapier';
import { useSwipeable } from "react-swipeable";
import CameraDeforestation from "../../controls/CameraDeforestation";
import DeforestationTitle from "../../components/DeforestationTitle";
import CustomCursor from "../../controls/CustomCursor";
import LightsDeforestation from "../../components/LightsDeforestation";
import LostDeforestation from "../../components/LostDeforestation";
import Dog from "../../components/DogModel";
import Navbar from '../../components/navbar/Navbar';
import './Styles.css'; 
import { EffectComposer, Bloom, Vignette } from "@react-three/postprocessing";

// Importa los archivos de sonido
import footSound from '../../assets/sounds/foot.wav';
import deforestationSound from '../../assets/sounds/deforestation.wav';

const CAMERA_POSITIONS = [
  {
    position: new THREE.Vector3(-14.2, 3.59, 60.27),
    lookAt: new THREE.Vector3(-8.74, -3.07, 1.32),
  },
  {
    position: new THREE.Vector3(98.45, 2.85, 133.23),
    lookAt: new THREE.Vector3(25.69, -15.25, 150.73),
  },
  {
    position: new THREE.Vector3(77.34, -2.65, 220.49),
    lookAt: new THREE.Vector3(-5.72, -12.09, -12.73),
  },
  {
    position: new THREE.Vector3(115.66, 4.30, 81.61),
    lookAt: new THREE.Vector3(93.38, -5.52, 56.08),
  },
  {
    position: new THREE.Vector3(52.54, 3.15, 111.66),
    lookAt: new THREE.Vector3(30.95, -4.47, 136.13),
  },
];

// Definición de los pasos informativos
const STEPS = [
  {
    title: "Bienvenido a la Exploración de la Deforestación",
    content: "Haz clic en la pantalla para comenzar y aprender más sobre la deforestación. También puedes usar las flechas izquierda y derecha del teclado para desplazarte, y la tecla escape para volver a comenzar. ¡Diviértete! y no olvides saludar al lomito haciendo click ",
    isClickable: true,
  },
  {
    title: "La Deforestación",
    content: "La deforestación amenaza la biodiversidad y acelera el cambio climático al destruir hábitats vitales y reducir los pulmones verdes de nuestro planeta. Cada árbol talado significa menos oxígeno, mayor emisión de carbono y pérdida de especies únicas. Es crucial adoptar prácticas sostenibles y proteger nuestros bosques para asegurar un futuro saludable para las próximas generaciones. Actuar ahora es responsabilidad de todos.",
  },
  {
    title: "La Sensibilización",
    content: "La sensibilización es clave para combatir la deforestación. Al educar y concienciar a las comunidades sobre el valor de los bosques y los efectos devastadores de su pérdida, fomentamos acciones responsables y sostenibles. Participa en iniciativas locales, apoya prácticas ecológicas y comparte información para inspirar a otros a proteger nuestro planeta.",
  },
  {
    title: "Soluciones a la Deforestación",
    content: "Existen múltiples soluciones para enfrentar la deforestación, tales como la reforestación, la implementación de prácticas agrícolas sostenibles, la creación de reservas naturales y la promoción de políticas ambientales estrictas. La tecnología también juega un papel crucial mediante el monitoreo satelital y el uso de drones para detectar actividades ilegales. La colaboración internacional y el apoyo a las comunidades locales son esenciales para el éxito de estas iniciativas.",
  },
  {
    title: "¡Juega y Aprende!",
    content: "Participa en nuestro juego interactivo para aprender más sobre la deforestación y cómo puedes contribuir a la preservación de los bosques. Desafía tus conocimientos, toma decisiones estratégicas y descubre cómo tus acciones pueden marcar la diferencia. ¡Diviértete mientras haces del mundo un lugar mejor!",
    isGame: true,
  },
];

// Hook personalizado para detectar el tamaño de la ventana
const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // Handler para actualizar el tamaño
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Añadir evento de listener
    window.addEventListener("resize", handleResize);

    // Llamar handler inicialmente
    handleResize();

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};

// Definición del Componente Deforestation
const Deforestation = () => {
  const [targetPosition, setTargetPosition] = useState(CAMERA_POSITIONS[0].position.clone());
  const [targetLookAt, setTargetLookAt] = useState(CAMERA_POSITIONS[0].lookAt.clone());
  const [showInfoCanvas, setShowInfoCanvas] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();
  const modalRef = useRef(null);
  const isFirstRender = useRef(true);
  const [isButtonPressed, setIsButtonPressed] = useState(false);
  const size = useWindowSize();
  const isMobile = size.width <= 600;

  // Estado para el mute
  const [isMuted, setIsMuted] = useState(false);

  // Referencias a los objetos de audio
  const footAudioRef = useRef(new Audio(footSound));
  const deforestationAudioRef = useRef(new Audio(deforestationSound));

  // Inicializar los objetos de audio al montar el componente
  useEffect(() => {
    footAudioRef.current.volume = isMuted ? 0 : 0.5;
    deforestationAudioRef.current.volume = isMuted ? 0 : 0.7;
    footAudioRef.current.preload = 'auto';
    deforestationAudioRef.current.preload = 'auto';
  }, [isMuted]);

  // Función para mutear/desmutear
  const toggleMute = () => {
    setIsMuted((prev) => !prev);
  };

  // Funciones para navegar entre los pasos
  const nextStep = useCallback(() => {
    setCurrentStep((prevStep) => {
      if (prevStep < STEPS.length - 1) {
        // Reproducir foot.wav al avanzar
        if (!footAudioRef.current.paused) {
          footAudioRef.current.currentTime = 0;
        }
        if (!isMuted) {
          footAudioRef.current.play().catch((error) => {
            console.error('Error al reproducir foot.wav:', error);
          });
        }
        return prevStep + 1;
      }
      return prevStep;
    });
  }, [isMuted]);

  const prevStep = useCallback(() => {
    setCurrentStep((prevStep) => {
      if (prevStep > 0) {
        // Reproducir foot.wav al retroceder
        if (!footAudioRef.current.paused) {
          footAudioRef.current.currentTime = 0;
        }
        if (!isMuted) {
          footAudioRef.current.play().catch((error) => {
            console.error('Error al reproducir foot.wav:', error);
          });
        }
        return prevStep - 1;
      }
      return prevStep;
    });
  }, [isMuted]);

  const resetCamera = useCallback(() => {
    setTargetPosition(CAMERA_POSITIONS[0].position.clone());
    setTargetLookAt(CAMERA_POSITIONS[0].lookAt.clone());
    setShowInfoCanvas(false);
    setCurrentStep(0);
    console.log("Cámara reiniciada a la posición inicial.");
  }, []);

  // Manejo de cambios en el paso actual
  useEffect(() => {
    console.log(`currentStep cambiado a: ${currentStep}`);

    if (isFirstRender.current) {
      isFirstRender.current = false;
      setShowInfoCanvas(false);
    } else {
      if (currentStep < CAMERA_POSITIONS.length) {
        const { position, lookAt } = CAMERA_POSITIONS[currentStep];
        setTargetPosition(position.clone());
        setTargetLookAt(lookAt.clone());
        setShowInfoCanvas(currentStep !== 0);

        // Si es el último paso, reproducir deforestation.wav
        if (currentStep === STEPS.length - 1 && !isMuted) {
          // Detener foot.wav si está reproduciéndose
          if (!footAudioRef.current.paused) {
            footAudioRef.current.pause();
            footAudioRef.current.currentTime = 0;
          }
          // Reproducir deforestation.wav
          if (!deforestationAudioRef.current.paused) {
            deforestationAudioRef.current.currentTime = 0;
          }
          deforestationAudioRef.current.play().catch((error) => {
            console.error('Error al reproducir deforestation.wav:', error);
          });
        }
      }
    }
  }, [currentStep, isMuted]);

  // Manejo de eventos de teclado
  const handleKeyDown = useCallback((event) => {
    console.log(`Tecla presionada: ${event.code}, showInfoCanvas: ${showInfoCanvas}, currentStep: ${currentStep}`);

    if (showInfoCanvas) {
      switch (event.code) {
        case "ArrowRight":
          console.log("ArrowRight presionada");
          nextStep();
          break;
        case "ArrowLeft":
          console.log("ArrowLeft presionada");
          prevStep();
          break;
        case "Escape":
          console.log("Escape presionada");
          resetCamera();
          break;
        default:
          break;
      }
    } else {
      if (event.code === "ArrowRight") {
        console.log("ArrowRight presionada - avanzar al siguiente paso");
        nextStep();
        setShowInfoCanvas(true);
      }
    }
  }, [showInfoCanvas, nextStep, prevStep, resetCamera, currentStep]);

  // Añadir y limpiar el listener de teclado
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  // Foco en el modal cuando se abre
  useEffect(() => {
    if (showInfoCanvas && modalRef.current) {
      setTimeout(() => {
        modalRef.current.focus();
      }, 0);
    }
  }, [showInfoCanvas]);

  // Propiedades de la cámara ajustadas según el dispositivo
  const cameraProps = {
    position: CAMERA_POSITIONS[0].position.toArray(),
    fov: isMobile ? 60 : 75,
  };

  // Manejo de presión del botón
  const handleButtonPress = () => {
    setIsButtonPressed(true);
    setTimeout(() => setIsButtonPressed(false), 150);
  };

  // Manejo de gestos de swipe
  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (!isMobile) return;
      nextStep();
    },
    onSwipedRight: () => {
      if (!isMobile) return;
      prevStep();
    },
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  // Limpieza al desmontar (detener sonidos)
  useEffect(() => {
    return () => {
      if (footAudioRef.current) {
        footAudioRef.current.pause();
        footAudioRef.current.currentTime = 0;
      }
      if (deforestationAudioRef.current) {
        deforestationAudioRef.current.pause();
        deforestationAudioRef.current.currentTime = 0;
      }
    };
  }, []);

  return (
    <div className="deforestation-container" {...handlers}>
      {/* Navbar */}
      <Navbar />

      {/* Botón de Navegación y Botón de Silencio */}
      <div className="button-container">
        {!isMobile && (
          <>
            <button
              onClick={() => {
                handleButtonPress();
                navigate("/biodiversity");
              }}
              onMouseDown={handleButtonPress}
              onMouseUp={() => setIsButtonPressed(false)}
              onMouseLeave={() => setIsButtonPressed(false)}
              className={`navigate-button-3d ${isButtonPressed ? 'pressed' : ''}`}
            >
              Explora la Biodiversidad
            </button>
            <button 
              onClick={toggleMute} 
              className="mute-button"
            >
              {isMuted ? "Activar Sonido" : "Silenciar"}
            </button>
          </>
        )}
        {isMobile && (
          <button 
            onClick={toggleMute} 
            className="mute-button"
          >
            {isMuted ? "Activar Sonido" : "Silenciar"}
          </button>
        )}
      </div>

      {/* Canvas 3D */}
      <Canvas
        frameloop="always"
        shadows
        camera={cameraProps}
        style={{ background: "transparent" }}
      >
        <CameraDeforestation
          targetPosition={targetPosition}
          targetLookAt={targetLookAt}
          nextStep={nextStep}
          prevStep={prevStep}
          resetCamera={resetCamera}
          isModalOpen={showInfoCanvas}
        />
        <Suspense fallback={null}>
          <Physics gravity={[0, -9.81, 0]} defaultContactMaterial={{ restitution: 0.2, friction: 1 }}>
            <LostDeforestation />
            {!isMobile && <Dog position={[30, -13, 13]} />}
          </Physics>
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
          {!isMobile && <CustomCursor />}

          {/* Postprocesado */}
          <EffectComposer>
            <Bloom intensity={0.8} luminanceThreshold={0.2} luminanceSmoothing={0.9} />
            <Vignette eskil={false} offset={0.1} darkness={0.7} />
          </EffectComposer>
        </Suspense>
        <LightsDeforestation />
      </Canvas>

      {/* Modal Paso 0 */}
      {currentStep === 0 && (
        <div
          onClick={nextStep}
          className="modal-paso0"
        >
          <h2 className="modal-title">
            {STEPS[currentStep].title}
          </h2>
          <p className="modal-content">
            {STEPS[currentStep].content}
          </p>
        </div>
      )}

      {/* Modal de Información */}
      {showInfoCanvas && currentStep >= 1 && currentStep < STEPS.length && (
        <div
          ref={modalRef}
          tabIndex={0}
          className="info-modal"
          role="dialog"
          aria-modal="true"
        >
          <button
            onClick={() => {
              setShowInfoCanvas(false);
            }}
            className="close-button"
            aria-label="Cerrar"
          >
            ×
          </button>

          <h2 className="modal-title">
            {STEPS[currentStep].title}
          </h2>
          <p className="modal-content">
            {STEPS[currentStep].content}
          </p>

          <div className="navigation-buttons">
            {currentStep > 0 && (
              <button
                onClick={prevStep}
                className="nav-button prev-button"
              >
                Anterior
              </button>
            )}

            {currentStep < STEPS.length - 1 ? (
              <button
                onClick={nextStep}
                className="nav-button next-button"
              >
                Siguiente
              </button>
            ) : (
              <button
                onClick={() => navigate("/quiz")}
                className="nav-button finish-button"
              >
                Quiz
              </button>
            )}

            <button
              onClick={resetCamera}
              className="nav-button reset-button"
            >
              Regresa
            </button>
          </div>

          {/* Botones adicionales para navegación táctil */}
          {isMobile && (
            <div className="mobile-navigation-buttons">
              <button onClick={prevStep} className="nav-button prev-button">◀ Anterior</button>
              <button onClick={nextStep} className="nav-button next-button">Siguiente ▶</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Deforestation;
