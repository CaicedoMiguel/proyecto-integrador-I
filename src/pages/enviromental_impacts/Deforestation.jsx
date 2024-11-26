// src/pages/Deforestation.jsx
import React, { Suspense, useState, useCallback, useEffect, useRef, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { Stars, Sky, OrbitControls } from "@react-three/drei";
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
import Cat from "../../components/CatModel";

// Definición de posiciones de la cámara y textos fuera del componente para evitar recrearlos en cada render
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
    position: new THREE.Vector3(77.34154334345368,-2.6468275771793213, 220.49287339767233),
    lookAt: new THREE.Vector3(-5.723287859275314,-12.093047405869553,-12.732195097274296),
  },
  // Paso 3: Soluciones a la Deforestación
  {
    position: new THREE.Vector3(115.65618342706782, 4.300917195859684, 81.6113805558299),
    lookAt: new THREE.Vector3(93.38266673088074, -5.518344414133743, 56.07500598020611),
  },
  // Paso 4: ¡Juega y Aprende!
  {
    position: new THREE.Vector3(52.53859280193333, 3.15010345942333, 111.65783993430324),
    lookAt: new THREE.Vector3(30.947823498215268, -4.468295888068112, 136.13396587114272),
  },
];

const texts = [
  // Paso 0: Posición inicial (Título)
  {
    title: "Bienvenido a la Exploración de la Deforestación",
    content: "Haz clic en la pantalla para comenzar y aprender más sobre la deforestación. También puedes usar las flechas izquierda y derecha del teclado para desplazarte, y la tecla escape para volver a comenzar. ¡Diviértete!",
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
  const controlsRef = useRef();

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
  }, []);

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
    console.log(`currentStep cambiado a: ${currentStep}`);

    if (isFirstRender.current) {
      // En la primera renderización, no mostrar el modal
      isFirstRender.current = false;
      setShowInfoCanvas(false);
      // En el paso 0, targetPosition ya está establecido en posición0
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
    console.log(`Tecla presionada: ${event.code}, showInfoCanvas: ${showInfoCanvas}, currentStep: ${currentStep}`);

    if (showInfoCanvas) { // Si el modal está abierto
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
    } else { // Si el modal no está abierto
      if (event.code === "ArrowRight") {
        console.log("ArrowRight presionada - avanzar al siguiente paso");
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

  // Memoizar los valores de la cámara para evitar recreaciones innecesarias
  const cameraProps = useMemo(() => ({
    position: cameraPositions[0].position.toArray(),
    fov: 75,
  }), []);

  const handleCameraChange = () => {
    // Obtiene el objetivo actual de la cámara (target) cuando OrbitControls cambia
    if (controlsRef.current) {
      console.log(controlsRef);
    }
  };

  return (
    <div className="deforestation-container">
      {/* Componente Navbar */}
      <Navbar />

      {/* Botón para navegar a la página de Biodiversidad */}
      <button
        onClick={() => navigate("/biodiversity")}
        className="navigate-button"
      >
        Explora la Biodiversidad
      </button>

      {/* Canvas 3D para la escena de deforestación */}
      <Canvas
        frameloop="demand"
        shadows
        camera={cameraProps}
        style={{ background: "transparent" }}
      >
        {/* <OrbitControls ref={controlsRef} onChange={handleCameraChange} /> */}
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
            <Cat position={[30, -13, 13]} />
            {/* <Debug color="black" scale={1.1}> */} {/* Descomenta esto para visualizar los cuerpos de física */}
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
          <CustomCursor />
        </Suspense>
        <LightsDeforestation />
      </Canvas>

      {/* Clickable overlay para el Paso 0 */}
      {currentStep === 0 && (
        <div
          onClick={nextStep}
          className="modal-paso0"
        >
          <h2 className="modal-title">
            {texts[currentStep].title}
          </h2>
          <p className="modal-content">
            {texts[currentStep].content}
          </p>
        </div>
      )}

      {/* Canvas de información para la deforestación (Pasos 1 a 4) */}
      {showInfoCanvas && currentStep >= 1 && currentStep < texts.length && (
        <div
          ref={modalRef}
          tabIndex={0} // Hace que el div sea enfocables
          className="info-modal"
        >
          {/* Botón de cierre para el modal */}
          <button
            onClick={() => {
              setShowInfoCanvas(false);
              // No reiniciar currentStep para permitir la navegación con los botones
            }}
            className="close-button"
            aria-label="Cerrar"
          >
            ×
          </button>

          {/* Contenido dinámico basado en el paso actual */}
          <h2 className="modal-title">
            {texts[currentStep].title}
          </h2>
          <p className="modal-content">
            {texts[currentStep].content}
          </p>

          {/* Botones de navegación */}
          <div className="navigation-buttons">
            {/* Botón Anterior */}
            {currentStep > 0 && (
              <button
                onClick={prevStep}
                className="nav-button prev-button"
              >
                Anterior
              </button>
            )}

            {/* Botón Siguiente o Finalizar */}
            {currentStep < texts.length - 1 ? (
              <button
                onClick={nextStep}
                className="nav-button next-button"
              >
                Siguiente
              </button>
            ) : (
              // Botón Finalizar que navega al juego
              <button
                onClick={() => navigate("/juego")}
                className="nav-button finish-button"
              >
                Finalizar
              </button>
            )}

            {/* Botón Resetear Cámara */}
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
