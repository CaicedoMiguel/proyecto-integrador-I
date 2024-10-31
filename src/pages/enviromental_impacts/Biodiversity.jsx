/* eslint-disable react/no-unknown-property */
// eslint-disable-next-line no-unused-vars
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import Navbar from '../../components/Navbar';

const LostBiodiversity = () => {
    const { scene } = useGLTF('./public/models/perdida-biodiversidad.glb'); // Carga el modelo GLB
  
    return <primitive object={scene} />;
  };

const Biodiversity = () => {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Canvas>
        <Suspense fallback={null}>
            <LostBiodiversity />
        </Suspense>
        <OrbitControls enableZoom={true} />
      </Canvas>
    </div>
  );
};

export default Biodiversity;