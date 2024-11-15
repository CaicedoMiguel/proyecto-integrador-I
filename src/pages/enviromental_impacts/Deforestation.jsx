import React, { Suspense, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, Sky } from '@react-three/drei';
import Navbar from '../../components/Navbar';
import * as THREE from 'three';
import CameraDeforestation from '../../controls/CameraDeforestation';
import DeforestationTitle from '../../components/DeforestationTitle';
import CustomCursor from '../../controls/CustomCursor';
import DeforestationModel from '../../components/DeforestationModel';

const Deforestation = () => {
  const [targetPosition, setTargetPosition] = useState(
    new THREE.Vector3(-14.2, 3.59, 60.27)
  );
  const [targetLookAt, setTargetLookAt] = useState(
    new THREE.Vector3(-8.74, -3.07, 1.32)
  );
  const controlsRef = useRef();

  const handleCameraChange = () => {
    if (controlsRef.current) {
      console.log('Camera changed:', controlsRef.current.target);
    }
  };

  return (
    <div style={{ width: '100vw', height: '100vh', position: 'relative' }}>
      <Navbar />
      <Canvas
        frameloop="demand"
        shadows
        camera={{
          position: [-14.2, 3.59, 60.27],
          fov: 75,
        }}
        style={{ background: 'transparent', cursor: 'none' }}
      >
        <CameraDeforestation
          targetPosition={targetPosition}
          targetLookAt={targetLookAt}
        />
        <OrbitControls ref={controlsRef} onChange={handleCameraChange} />
        <Suspense fallback={null}>
          <DeforestationModel />
          <DeforestationTitle
            setTargetPosition={setTargetPosition}
            setTargetLookAt={setTargetLookAt}
          />
          <Sky
            sunPosition={[100, 20, 100]}
            turbidity={10}
            rayleigh={2}
            mieCoefficient={0.005}
            mieDirectionalG={0.8}
          />
          <Stars
            radius={300}
            depth={50}
            count={2000}
            factor={7}
            saturation={0}
            fade
          />
          <CustomCursor />
        </Suspense>
        <ambientLight intensity={0.5} />
        <directionalLight
          position={[5, 15, 2]}
          intensity={1.5}
          castShadow
          shadow-mapSize={[2048, 2048]}
        />
        <spotLight
          position={[0, 15, 5]}
          angle={0.6}
          penumbra={1}
          intensity={1.2}
          castShadow
        />
        <pointLight position={[-2, 8, 3]} intensity={0.8} />
      </Canvas>
    </div>
  );
};

export default Deforestation;