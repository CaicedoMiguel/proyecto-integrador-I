import React, { Suspense, useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, Text3D, Stars, Sky } from '@react-three/drei';
import Navbar from '../../components/Navbar';
import * as THREE from 'three';
import CameraDeforestation from '../../controls/CameraDeforestation';

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
        frameloop="demand" // Renderiza solo cuando algo cambia
        shadows
        camera={{
          position: [-14.2, 3.59, 60.27],
          fov: 75,
        }}
        style={{ background: 'transparent' }}
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

const DeforestationModel = () => {
  const { scene } = useGLTF('/models/deforestation.glb');

  useEffect(() => {
    scene.position.set(30, -10, 0); // Ajusta la posición del modelo
  }, [scene]);

  // Forzar la actualización una vez que el modelo esté listo
  useFrame((state) => state.invalidate());

  return <primitive object={scene} />;
};

const DeforestationTitle = ({ setTargetPosition, setTargetLookAt }) => {
  const moveCameraToNewTarget = () => {
    setTargetPosition(
      new THREE.Vector3(98.45, 2.85, 133.23)
    );
    setTargetLookAt(
      new THREE.Vector3(25.69, -15.25, 150.73)
    );
    console.log('Camera target updated');
  };

  return (
    <Text3D
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
    >
      LA DEFORESTACIÓN
      <meshStandardMaterial
        color="#1b5e20"
        metalness={0.7}
        roughness={0.8}
        depthWrite
        transparent={false}
      />
    </Text3D>
  );
};

export default Deforestation;
