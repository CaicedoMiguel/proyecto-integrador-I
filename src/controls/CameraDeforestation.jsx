// src/controls/CameraDeforestation.jsx
import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

/**
 * CameraDeforestation component.
 * Manages the camera's movement and target for the deforestation scene, with interactive controls.
 *
 * @param {Object} props
 * @param {THREE.Vector3} props.targetPosition - The target position to move the camera towards.
 * @param {THREE.Vector3} props.targetLookAt - The target point the camera should look at.
 * @param {Function} props.moveCamera - Function to set a new camera position and target.
 * @param {Function} props.resetCamera - Function to reset the camera to its initial state.
 */
const CameraDeforestation = ({
  targetPosition,
  targetLookAt,
  moveCamera,
  resetCamera,
}) => {
  const controlsRef = useRef(); // Reference for the OrbitControls
  const cameraRef = useRef(); // Reference for the camera object

  /**
   * Initializes the camera reference after the controls are mounted.
   */
  useEffect(() => {
    if (controlsRef.current) {
      cameraRef.current = controlsRef.current.object; // Assigns the camera object from OrbitControls
    }
  }, []);

  /**
   * Handles keyboard events for controlling the camera.
   */
  useEffect(() => {
    const handleKeyDown = (event) => {
      switch (event.code) {
        case "ArrowUp":
          // Move the camera to a new position and target when ArrowUp is pressed
          const newPosition = new THREE.Vector3(98.45, 2.85, 133.23);
          const newLookAt = new THREE.Vector3(25.69, -15.25, 150.73);
          moveCamera(newPosition, newLookAt);
          break;
        case "ArrowDown":
          // Reset the camera when ArrowDown is pressed
          resetCamera();
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [moveCamera, resetCamera]);

  /**
   * Updates the camera's position and look-at target on each frame.
   * Smoothly interpolates the current position and target towards the desired values.
   */
  useFrame(() => {
    if (controlsRef.current && cameraRef.current) {
      // Interpolate the camera position towards the target position
      cameraRef.current.position.lerp(targetPosition, 0.05);

      // Interpolate the OrbitControls' target towards the target look-at point
      controlsRef.current.target.lerp(targetLookAt, 0.05);

      // Update the OrbitControls
      controlsRef.current.update();
    }
  });

  return <OrbitControls ref={controlsRef} />;
};

export default CameraDeforestation;
