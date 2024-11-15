import React, { useRef, useState } from 'react';
import { Text3D } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const DeforestationTitle = ({ setTargetPosition, setTargetLookAt }) => {
  const [hovered, setHovered] = useState(false);
  const meshRef = useRef();

  const moveCameraToNewTarget = () => {
    setTargetPosition(new THREE.Vector3(98.45, 2.85, 133.23));
    setTargetLookAt(new THREE.Vector3(25.69, -15.25, 150.73));
    console.log('Camera target updated');
  };

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.material.emissiveIntensity = THREE.MathUtils.lerp(
        meshRef.current.material.emissiveIntensity,
        hovered ? 1 : 0,
        0.1
      );
    }
  });

  return (
    <Text3D
      ref={meshRef}
      font="/fonts/bebas-neue-regular.json"
      size={10}
      height={2}
      curveSegments={12}
      bevelEnabled
      bevelThickness={0.5}
      bevelSize={0.3}
      bevelOffset={0}
      bevelSegments={5}
      position={[-50, -10, 0]}
      onClick={moveCameraToNewTarget}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      LA DEFORESTACIÓN
      <meshPhongMaterial
        color="#1b5e20"
        emissive="#4caf50"
        emissiveIntensity={0}
        shininess={100}
      />
    </Text3D>
  );
};

export default DeforestationTitle;