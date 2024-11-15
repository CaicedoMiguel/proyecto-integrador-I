import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

const CameraDeforestation = ({ targetPosition, targetLookAt }) => {
  const controlsRef = useRef();
  const cameraPosition = useRef(targetPosition.clone());
  const cameraTarget = useRef(targetLookAt.clone());

  const handleKeyDown = (event) => {
    switch (event.code) {
      case "ArrowUp":
        // Mover la cámara a un punto predefinido
        targetPosition.set(98.45, 2.85, 133.23);
        targetLookAt.set(25.69, -15.25, 150.73);
        break;
      case "ArrowDown":
        // Mover la cámara de vuelta a la posición inicial
        targetPosition.set(-14.2, 3.59, 60.27);
        targetLookAt.set(-8.74, -3.07, 1.32);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useFrame(() => {
    // Interpolación suave hacia el objetivo
    cameraPosition.current.lerp(targetPosition, 0.05);
    cameraTarget.current.lerp(targetLookAt, 0.05);

    // Actualizar OrbitControls
    if (controlsRef.current) {
      controlsRef.current.object.position.copy(cameraPosition.current);
      controlsRef.current.target.copy(cameraTarget.current);
      controlsRef.current.update();
    }
  });

  return <OrbitControls ref={controlsRef} />;
};

export default CameraDeforestation;