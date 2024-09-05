import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

function Model() {
  // Update this path to the correct location of your .glb file
  const { scene } = useGLTF('../../public/models/Low_Poly_Forest.glb');
  return <primitive object={scene} scale={1.5} />;
}

export default function ModelViewer() {
  return (
    <Canvas style={{ width: '100%', height: '400px' }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} />
      <Suspense fallback={null}>
        <Model />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
}