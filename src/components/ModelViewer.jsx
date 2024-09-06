import React, { useRef, useState, useEffect, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, useGLTF, Sky } from '@react-three/drei';
import * as THREE from 'three';

/**
 * Model Component
 * 
 * This component loads a 3D model, applies custom material properties, and handles user interactions
 * for rotating the model. It also animates the model's position and rotation.
 * 
 * @returns {JSX.Element} The 3D model rendered in the scene.
 */
function Model() {
  const modelRef = useRef();
  const { scene } = useGLTF('/models/Low_Poly_Forest.glb');
  const [isDragging, setIsDragging] = useState(false);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  // Change the material of the model
  scene.traverse((child) => {
    if (child.isMesh) {
      const originalMaterial = child.material.clone();
      child.material = new THREE.MeshPhongMaterial({
        map: originalMaterial.map,
        color: originalMaterial.color,
        flatShading: true,
        shininess: 50,
        specular: new THREE.Color(0x111111)
      });
      child.material.needsUpdate = true;
    }
  });

  // Detect mouse drag to rotate the model
  useEffect(() => {
    const handleMouseDown = () => setIsDragging(true);
    const handleMouseUp = () => setIsDragging(false);
    const handleMouseMove = (event) => {
      if (isDragging) {
        setRotation((prev) => ({
          x: prev.x + event.movementY * 0.01,
          y: prev.y + event.movementX * 0.01
        }));
      }
    };

    // Add event listeners for mouse actions
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isDragging]);

  // Animate the model's position and rotation
  let direction = 1;
  let positionX = 0;

  useFrame(({ clock }) => {
    if (positionX > 3 || positionX < -3) {
      direction *= -1;
  }
    const t = clock.getElapsedTime();
    if (modelRef.current) {
      positionX += 0.01 * direction;
      modelRef.current.position.x = positionX; // Animación de coseno en X
      modelRef.current.position.y = Math.sin(t * 0.8) * 1.5; // Animación de seno en Y
      modelRef.current.rotation.x = rotation.x;
      modelRef.current.rotation.y = rotation.y;
    }
  });

  return <primitive ref={modelRef} object={scene} scale={2} position={[0, 0, 0]} />;
}

/**
 * SkyBackground Component
 * 
 * This component sets up the background sky with specific properties.
 * 
 * @returns {JSX.Element} The sky background element.
 */
function SkyBackground() {
  return (
    <Sky
      distance={100}
      sunPosition={[0, 1, 0]}
      inclination={0.6}
      azimuth={0.1}
    />
  );
}

export default function ModelViewer() {
  return (
    <Canvas
      camera={{ position: [0, 10, 20], fov: 50 }}
      style={{ width: '100vw', height: '100vh' }}
    >
      <SkyBackground />
      <ambientLight intensity={0.5} />
      <directionalLight intensity={0.8} position={[5, 5, 5]} castShadow />
      <Suspense fallback={null}>
        <Model />
        <Environment preset="sunset" />
      </Suspense>
    </Canvas>
  );
}

useGLTF.preload('/models/Low_Poly_Forest.glb');