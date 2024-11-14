import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useGLTF } from '@react-three/drei';
import Navbar from '../../components/Navbar';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

// Página principal de la deforestación
const Deforestation = () => {
  return (
    <div style={{ width: '100vw', height: '100vh', position: 'relative' }}>
      {/* Navbar fuera del canvas, como parte de la UI */}
      <Navbar />

      {/* Canvas para la escena 3D */}
      <Canvas
        shadows
        camera={{ position: [40, 30, 250], fov: 60 }}
        style={{ background: '#f0f0f0' }}
      >
        {/* Suspense para cargar el modelo 3D */}
        <Suspense fallback={null}>
          {(() => {
            const { scene } = useGLTF('/models/deforestation.glb', true);
            return <primitive object={scene} />;
          })()}
        </Suspense>

        {/* Luces para la escena */}
        <ambientLight intensity={0.2} />
        <directionalLight position={[5, 7, 2]} intensity={2} castShadow />
        <spotLight
          position={[0, 7, 5]}
          angle={0.6}
          penumbra={1}
          intensity={1.5}
          castShadow
          shadow-mapSize={[2048, 2048]}
        />
        <pointLight position={[-2, 5, 3]} intensity={0.5} castShadow />

        {/* Controles de cámara */}
        <OrbitControls enableZoom={true} />
      </Canvas>

      {/* Información sobre la deforestación fuera del canvas */}
      <div
        style={{
          position: 'absolute',
          top: '100px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '80%',
          maxWidth: '800px',
          textAlign: 'center',
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          padding: '20px',
          borderRadius: '8px',
          zIndex: 1, // Asegurarse de que esté encima del canvas
        }}
      >
        <h1>LA DEFORESTACIÓN</h1>
        <p>
          La deforestación es uno de los problemas medioambientales más graves que enfrenta nuestro planeta en la actualidad.
          Consiste en la destrucción masiva de los bosques, ya sea para abrir paso a la agricultura, la ganadería, la
          urbanización, o por la explotación descontrolada de recursos madereros. Cada año se pierden millones de hectáreas
          de selvas y bosques, afectando no solo la biodiversidad, sino también la estabilidad climática y la calidad del aire.
        </p>
      </div>
    </div>
  );
};

export default Deforestation;
