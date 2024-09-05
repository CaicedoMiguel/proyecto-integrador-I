import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function Model() {
  const modelRef = useRef();
  const { scene, materials } = useGLTF('../../public/models/Low_Poly_Forest.glb');

  // Use the original material, but modify it to be metallic
  scene.traverse((child) => {
    if (child.isMesh) {
      const originalMaterial = child.material;

      // Aplicar propiedades de metalicidad y suavidad sin eliminar las texturas
      originalMaterial.metalness = 0.9;  // Metalizado alto
      originalMaterial.roughness = 0.2;  // Suavidad media
      originalMaterial.envMapIntensity = 1;  // Reflejos si hay un environment map
    }
  });

  // Apply cosine-based slow animation to the model
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    modelRef.current.position.y = Math.cos(t * 0.5) * 0.5; // Slower movement using cos
  });

  return <primitive ref={modelRef} object={scene} scale={1} position={[0, 20, 0]} />;
}
