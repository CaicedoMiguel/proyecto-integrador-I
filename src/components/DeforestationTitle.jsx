// src/components/DeforestationTitle.jsx
import React, { useRef, useState } from "react";
import { Text3D } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

/**
 * DeforestationTitle component.
 * Displays a 3D text that interacts with the user by highlighting when hovered
 * and triggering a camera movement when clicked.
 *
 * @param {Object} props
 * @param {Function} props.moveCamera - Function to move the camera and show the information canvas.
 */
const DeforestationTitle = ({ moveCamera }) => {
  const [hovered, setHovered] = useState(false); // State to track hover status
  const meshRef = useRef(); // Reference to the 3D text mesh

  /**
   * Handles the click event on the 3D text.
   * Moves the camera to a predefined position and target.
   */
  const handleClick = () => {
    const newPosition = new THREE.Vector3(98.45, 2.85, 133.23); // New camera position
    const newLookAt = new THREE.Vector3(25.69, -15.25, 150.73); // New look-at target
    moveCamera(newPosition, newLookAt); // Calls the camera movement function
    console.log("Camera moved via title click.");
  };

  // Updates the emissive intensity of the text material on each frame
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.material.emissiveIntensity = THREE.MathUtils.lerp(
        meshRef.current.material.emissiveIntensity,
        hovered ? 1 : 0, // Highlight if hovered, otherwise dim
        0.1 // Smooth transition
      );
    }
  });

  return (
    <Text3D
      ref={meshRef}
      font="/fonts/bebas-neue-regular.json" // Path to the font file
      size={10} // Size of the text
      height={2} // Thickness of the text
      curveSegments={12} // Segments for curves
      bevelEnabled // Enables bevel effect
      bevelThickness={0.5} // Bevel thickness
      bevelSize={0.3} // Bevel size
      bevelOffset={0} // Bevel offset
      bevelSegments={5} // Number of bevel segments
      position={[-50, -10, 0]} // Position in the 3D scene
      onClick={handleClick} // Trigger camera movement on click
      onPointerOver={() => setHovered(true)} // Highlight when hovered
      onPointerOut={() => setHovered(false)} // Stop highlighting when hover ends
    >
      LA DEFORESTACIÓN
      {/* Material for the 3D text */}
      <meshPhongMaterial
        color="#1b5e20" // Base color
        emissive="#4caf50" // Emissive color for glow effect
        emissiveIntensity={0} // Initial emissive intensity
        shininess={100} // Shininess of the material
      />
    </Text3D>
  );
};

export default DeforestationTitle;
