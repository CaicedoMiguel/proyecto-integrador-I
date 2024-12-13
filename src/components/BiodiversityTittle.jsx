import React, { useState } from 'react';
import { Text3D } from "@react-three/drei";
import * as THREE from 'three';

const BiodiversityTittle = ({ initial, onClick }) => {

  const [hovered, setHovered] = useState(false);

  return (
    <Text3D
      font="/fonts/bebas-neue-regular.json"
      size={10}
      height={2}
      curveSegments={12}
      bevelSegments={5}
      position={[0, 20, 40]}
      onPointerOver={() => setHovered(true)} 
      onPointerOut={() => setHovered(false)} 
      onClick={onClick}
    >
      PERDIDA DE BIODIVERSIDAD
      <meshPhongMaterial
        color={hovered ? "#FF0000" : "#aeb1ae"} // Rojo cuando hover
        emissive={hovered ? new THREE.Color('#FF0000') : new THREE.Color('#000000')}
        metalness={0.7}
        roughness={0.8}
        transparent={false}
      />
    </Text3D>
  );
};

export default BiodiversityTittle;
