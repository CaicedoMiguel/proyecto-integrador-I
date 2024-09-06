import React, { useRef, useEffect, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Environment, useGLTF, Sky } from '@react-three/drei';
import * as THREE from 'three';

function Model() {
  const modelRef = useRef();
  const { scene } = useGLTF('/models/Low_Poly_Forest.glb');

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (modelRef.current) {
      modelRef.current.position.y = Math.cos(t * 0.5) * 0.5;
      modelRef.current.rotation.y += 0.005;
    }
  });

  return <primitive ref={modelRef} object={scene} scale={1} position={[0, 0, 0]} />;
}

function CameraController() {
  const { camera } = useThree();
  const targetRotation = useRef(new THREE.Euler());

  useEffect(() => {
    const handleKeyDown = (event) => {
      const rotationSpeed = 0.1;
      switch(event.key) {
        case 'ArrowLeft':
          targetRotation.current.y += rotationSpeed;
          break;
        case 'ArrowRight':
          targetRotation.current.y -= rotationSpeed;
          break;
        case 'ArrowUp':
          targetRotation.current.x = Math.max(targetRotation.current.x - rotationSpeed, -Math.PI / 2);
          break;
        case 'ArrowDown':
          targetRotation.current.x = Math.min(targetRotation.current.x + rotationSpeed, Math.PI / 2);
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useFrame(() => {
    camera.rotation.x += (targetRotation.current.x - camera.rotation.x) * 0.1;
    camera.rotation.y += (targetRotation.current.y - camera.rotation.y) * 0.1;
  });

  return null;
}

function SkyBackground() {
  return (
    <Sky 
      distance={450000} 
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
      <CameraController />
    </Canvas>
  );
}

useGLTF.preload('/models/Low_Poly_Forest.glb');