// src/controls/CameraDeforestation.jsx
import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

/**
 * CameraDeforestation component.
 * Maneja el movimiento de la cámara y el objetivo para la escena de deforestación, con controles interactivos.
 *
 * @param {Object} props
 * @param {THREE.Vector3} props.targetPosition - La posición objetivo hacia la cual mover la cámara.
 * @param {THREE.Vector3} props.targetLookAt - El punto objetivo al que la cámara debe mirar.
 * @param {Function} props.nextStep - Función para avanzar al siguiente paso.
 * @param {Function} props.prevStep - Función para retroceder al paso anterior.
 * @param {Function} props.resetCamera - Función para reiniciar la cámara a su estado inicial.
 * @param {boolean} props.isModalOpen - Indica si el modal está actualmente abierto.
 */
const CameraDeforestation = ({
  targetPosition,
  targetLookAt,
  nextStep,
  prevStep,
  resetCamera,
  isModalOpen,
}) => {
  const controlsRef = useRef(); // Referencia para los OrbitControls
  const cameraRef = useRef(); // Referencia para el objeto de la cámara

  /**
   * Inicializa la referencia de la cámara después de montar los controles.
   */
  useEffect(() => {
    if (controlsRef.current) {
      cameraRef.current = controlsRef.current.object;
      console.log('Camera initialized:', cameraRef.current.position);
      controlsRef.current.enableKeys = false; // Deshabilitar las teclas predeterminadas de OrbitControls
      controlsRef.current.enabled = !isModalOpen; // Deshabilita completamente los controles cuando el modal está abierto
    }
  }, [isModalOpen]);

  /**
   * Actualiza la posición de la cámara y el objetivo en cada frame.
   * Interpola suavemente la posición y el objetivo actuales hacia los valores deseados.
   */
  useFrame(() => {
    if (controlsRef.current && cameraRef.current) {
      // Interpola la posición de la cámara hacia la posición objetivo
      cameraRef.current.position.lerp(targetPosition, 0.05);

      // Interpola el objetivo de los OrbitControls hacia el punto objetivo
      controlsRef.current.target.lerp(targetLookAt, 0.05);

      // Actualiza los OrbitControls
      controlsRef.current.update();
    }
  });

  return <OrbitControls ref={controlsRef} />;
};

export default CameraDeforestation;
