// src/components/DeforestationTitle.jsx
import React, { useRef } from "react";
import { Text3D } from "@react-three/drei";

/**
 * DeforestationTitle component.
 * Displays a 3D text that is always illuminated.
 *
 */
const DeforestationTitle = () => {
  const meshRef = useRef(); // Reference to the 3D text mesh

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
    >
      DEFORESTACIÓN
      {/* Material for the 3D text */}
      <meshPhongMaterial
        color="#1b5e20" // Base color
        emissive="#4caf50" // Emissive color for glow effect
        emissiveIntensity={1} // Fixed emissive intensity to always glow
        shininess={100} // Shininess of the material
      />
    </Text3D>
  );
};

export default DeforestationTitle;
