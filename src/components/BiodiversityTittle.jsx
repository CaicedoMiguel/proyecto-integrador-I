import React, { useEffect, useRef, useState } from 'react';
import { Text3D } from "@react-three/drei";
import * as THREE from 'three';

const BiodiversityTittle = ({ initial, onClick }) => {

  const textRef = useRef();
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (textRef.current) {
      textRef.current.material.color.set(hovered ? '#FFFF00' : '#4CAF50');
      textRef.current.material.emissive = new THREE.Color(hovered ? '#FFFF00' : '#000000');
    }
  }, [hovered]);
  
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
        color="#aeb1ae"
        // emissive="#818a79"
        metalness={0.7}
        roughness={0.8}
        transparent={false}
        color={hovered ? "#ff6347" : "#aeb1ae"}
      />
    </Text3D>
   );
};

export default BiodiversityTittle;