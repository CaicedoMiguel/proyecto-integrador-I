import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import {
  OrbitControls,
  useGLTF,
  Text3D,
  Stars,
  Sky,
  Environment,
} from '@react-three/drei';
import Navbar from '../../components/Navbar';

const Deforestation = () => {
  return (
    <div style={{ width: '100vw', height: '100vh', position: 'relative' }}>
      <Navbar />

      <Canvas
        shadows
        camera={{ position: [0, 0, 150], fov: 60 }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <DeforestationModel />
          <DeforestationTitle />
          <Environment preset="night" />
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

        <ambientLight intensity={1} />
        <directionalLight position={[5, 15, 2]} intensity={5} castShadow />
        <spotLight
          position={[0, 15, 5]}
          angle={0.6}
          penumbra={1}
          intensity={4}
          castShadow
          shadow-mapSize={[2048, 2048]}
        />
        <pointLight position={[-2, 8, 3]} intensity={1} castShadow />

        <OrbitControls enableZoom={true} />
      </Canvas>
    </div>
  );
};

const DeforestationModel = () => {
  const { scene } = useGLTF('/models/deforestation.glb', true);
  scene.position.set(30, -10, 0); // Mueve el modelo hacia la derecha
  return <primitive object={scene} />;
};

const DeforestationTitle = () => {
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
      position={[-50, -10, 0]} // Mueve el texto hacia la izquierda
    >
      LA DEFORESTACIÓN
      <meshStandardMaterial
        color="#1b5e20"
        metalness={0.7}
        roughness={0.8}
        depthWrite={true}
        transparent={false}
      />
    </Text3D>
  );
};

export default Deforestation;
