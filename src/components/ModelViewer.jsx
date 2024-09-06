import React, { useRef, useState, useEffect, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, useGLTF, Sky } from '@react-three/drei';
import * as THREE from 'three';

function Model() {
  const modelRef = useRef();
  const { scene } = useGLTF('/models/Low_Poly_Forest.glb');
  const [isDragging, setIsDragging] = useState(false); // Para detectar si está arrastrando
  const [rotation, setRotation] = useState({ x: 0, y: 0 }); // Estado para controlar la rotación

  // Cambiar material del modelo
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

  // Detectar el arrastre del mouse para rotar el modelo
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

    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isDragging]);

  // Actualiza la rotación y posición con animación de coseno
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (modelRef.current) {
      modelRef.current.position.y = Math.cos(t * 0.7) * 1; // Animación de coseno en el eje Y
      modelRef.current.rotation.x = rotation.x;
      modelRef.current.rotation.y = rotation.y;
    }
  });

  return <primitive ref={modelRef} object={scene} scale={1.7} position={[0, 0, 0]} />;
}

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
