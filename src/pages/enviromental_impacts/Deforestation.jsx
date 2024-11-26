import React, { Suspense, useState, useCallback, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Stars, Sky, Html } from "@react-three/drei";
import { useNavigate } from "react-router-dom";
import * as THREE from "three";
import { Physics } from '@react-three/rapier';
import CameraDeforestation from "../../controls/CameraDeforestation";
import DeforestationTitle from "../../components/DeforestationTitle";
import CustomCursor from "../../controls/CustomCursor";
import LightsDeforestation from "../../components/LightsDeforestation";
import LostDeforestation from "../../components/LostDeforestation";
import Dog from "../../components/DogModel";
import './styles.css';


// Camera positions and steps defined as constants
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
    position: new THREE.Vector3(77.34154334345368, -2.6468275771793213, 220.49287339767233),
    lookAt: new THREE.Vector3(-5.723287859275314, -12.093047405869553, -12.732195097274296),
  },
  {
    position: new THREE.Vector3(115.65618342706782, 4.300917195859684, 81.6113805558299),
    lookAt: new THREE.Vector3(93.38266673088074, -5.518344414133743, 56.07500598020611),
  },
  {
    position: new THREE.Vector3(52.53859280193333, 3.15010345942333, 111.65783993430324),
    lookAt: new THREE.Vector3(30.947823498215268, -4.468295888068112, 136.13396587114272),
  },
];

const STEPS = [
  {
    title: "Bienvenido a la Exploración de la Deforestación",
    content: "Haz clic en la pantalla para comenzar y aprender más sobre la deforestación. También puedes usar las flechas izquierda y derecha del teclado para desplazarte, y la tecla escape para volver a comenzar. ¡Diviértete!",
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

const Deforestation = () => {
  const [targetPosition, setTargetPosition] = useState(CAMERA_POSITIONS[0].position.clone());
  const [targetLookAt, setTargetLookAt] = useState(CAMERA_POSITIONS[0].lookAt.clone());
  const [showInfoCanvas, setShowInfoCanvas] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();
  const controlsRef = useRef();
  const modalRef = useRef(null);
  const isFirstRender = useRef(true);
  const [isButtonPressed, setIsButtonPressed] = useState(false);

  const nextStep = useCallback(() => {
    setCurrentStep((prevStep) => {
      if (prevStep < STEPS.length - 1) {
        return prevStep + 1;
      }
      return prevStep;
    });
  }, []);

  const prevStep = useCallback(() => {
    setCurrentStep((prevStep) => {
      if (prevStep > 0) {
        return prevStep - 1;
      }
      return prevStep;
    });
  }, []);

  const resetCamera = useCallback(() => {
    setTargetPosition(CAMERA_POSITIONS[0].position.clone());
    setTargetLookAt(CAMERA_POSITIONS[0].lookAt.clone());
    setShowInfoCanvas(false);
    setCurrentStep(0);
    console.log("Cámara reiniciada a la posición inicial.");
  }, []);

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
      }
    }
  }, [currentStep]);

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

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  useEffect(() => {
    if (showInfoCanvas && modalRef.current) {
      setTimeout(() => {
        modalRef.current.focus();
      }, 0);
    }
  }, [showInfoCanvas]);

  const cameraProps = {
    position: CAMERA_POSITIONS[0].position.toArray(),
    fov: 75,
  };

  const handleButtonPress = () => {
    setIsButtonPressed(true);
    setTimeout(() => setIsButtonPressed(false), 150);
  };

  return (
    <div className="deforestation-container">
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
            <Dog position={[30, -13, 13]} />
          </Physics>
          <Html fullscreen style={{ pointerEvents: 'none' }}>
            <div className="button-container">
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
            </div>
          </Html>
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

      {showInfoCanvas && currentStep >= 1 && currentStep < STEPS.length && (
        <div
          ref={modalRef}
          tabIndex={0}
          className="info-modal"
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
          onClick={() => navigate("/biodiversity")}
            className="nav-button finish-button"
        >
            Finalizar
    </button>
  )}

            <button
              onClick={resetCamera}
              className="nav-button reset-button"
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

