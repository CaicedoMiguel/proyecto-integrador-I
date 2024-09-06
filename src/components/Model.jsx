import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function Model() {
  // Create a reference to the model object
  const modelRef = useRef();
  const { scene } = useGLTF('../../public/models/Low_Poly_Forest.glb');

  // Traverse through the model's scene graph to apply custom material properties
  scene.traverse((child) => {
    if (child.isMesh) {
      child.material.metalness = 0.9;
      child.material.roughness = 0.2;
      child.material.envMapIntensity = 1;
    }
  });

   // Use the useFrame hook to update the model's properties on each frame
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    modelRef.current.position.y = Math.cos(t * 0.5) * 0.5;
    modelRef.current.rotation.y += 0.005; // Añade una rotación suave
  });
// Return the primitive component with the loaded model
  // Apply a scale of 0.5 and set initial position to [0, 0, 0]
  return <primitive ref={modelRef} object={scene} scale={0.5} position={[0, 0, 0]} />;
}