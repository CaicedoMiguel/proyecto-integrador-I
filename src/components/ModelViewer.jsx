import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { FlyControls, Environment } from '@react-three/drei';
import Model from './Model';

export default function ModelViewer() {
  return (
   <Canvas
  camera={{ position: [0, 15, 20], fov: 50, near: 0.1, far: 1000 }}
  shadows
  style={{ width: '150%', height: '150%' }}
>
      {/* Luz ambiental suave */}
      <ambientLight intensity={0.3} />
      {/* Luz direccional con sombras */}
      <directionalLight intensity={1.5} position={[10, 10, 10]} castShadow />
      {/* Luz puntual para iluminación adicional */}
      <pointLight intensity={0.8} position={[-10, 10, 10]} />
      
      {/* Mapa de entorno para reflejos en materiales metálicos */}
      <Environment preset="city" />

      <Suspense fallback={null}>
        <Model />
      </Suspense>

      {/* Controles de vuelo */}
      <FlyControls movementSpeed={10} rollSpeed={0.8} dragToLook={true} autoForward={false} 
  resetCameraOnClick={false}/>
    </Canvas>
  );
}
