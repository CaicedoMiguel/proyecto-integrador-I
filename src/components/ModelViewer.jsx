import React, { Suspense, useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment, Sky, SpotLight, useHelper } from '@react-three/drei';
import { SpotLightHelper } from 'three';
import * as THREE from 'three';
import { Model } from './Model';

function Lights() {
  const spotLightRef = useRef();
  useHelper(spotLightRef, SpotLightHelper, 'cyan');

  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} castShadow />
      <SpotLight
        ref={spotLightRef}
        position={[0, 10, 5]}
        angle={0.6}
        penumbra={1}
        intensity={1.5}
        castShadow
        shadow-mapSize={[2048, 2048]}
      />
      <pointLight position={[-5, -5, -5]} intensity={0.5} />
    </>
  );
}

const AnimatedModel = React.forwardRef((props, ref) => {
  const [isDragging, setIsDragging] = useState(false);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseDown = () => setIsDragging(true);
    const handleMouseUp = () => setIsDragging(false);
    const handleMouseMove = (event) => {
      if (isDragging) {
        setRotation((prev) => ({
          x: prev.x + event.movementY * 0.002,
          y: prev.y + event.movementX * 0.002
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

  useFrame(({ clock }) => {
    if (ref.current) {
      const t = clock.getElapsedTime();
      ref.current.position.y = Math.sin(t * 0.2) * 0.05;
      ref.current.rotation.x = rotation.x;
      ref.current.rotation.y = rotation.y;
    }
  });

  return <Model ref={ref} scale={0.4} position={[0, -1, 0]} />;
});

function ModelViewer() {
  const modelRef = useRef();

  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh', backgroundColor: '#87CEEB' }}>
      <Canvas shadows camera={{ position: [0, 2, 3], fov: 60 }}>
        <color attach="background" args={['#87CEEB']} />
        <PerspectiveCamera makeDefault position={[0, 2, 3]} fov={60} />
        <Suspense fallback={null}>
          <AnimatedModel ref={modelRef} />
          <Lights />
          <Environment preset="sunset" />
          <Sky
            distance={450000}
            sunPosition={[0, 1, 0]}
            inclination={0.6}
            azimuth={0.1}
          />
          <OrbitControls 
            enableZoom={true} 
            enablePan={true}
            minDistance={1}
            maxDistance={10}
            target={[0, 0, 0]}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default ModelViewer;