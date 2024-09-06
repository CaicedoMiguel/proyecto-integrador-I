import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function Model() {
  const modelRef = useRef();
  const { scene } = useGLTF('../../public/models/Low_Poly_Forest.glb');

  scene.traverse((child) => {
    if (child.isMesh) {
      child.material.metalness = 0.9;
      child.material.roughness = 0.2;
      child.material.envMapIntensity = 1;
    }
  });

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    modelRef.current.position.y = Math.cos(t * 0.5) * 0.5;
    modelRef.current.rotation.y += 0.005; // Añade una rotación suave
  });

  return <primitive ref={modelRef} object={scene} scale={0.5} position={[0, 0, 0]} />;
}