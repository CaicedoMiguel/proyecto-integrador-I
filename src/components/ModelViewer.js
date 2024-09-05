import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import modelPath from '../models/low_poly_forest.glb'; // Ruta correcta de tu modelo

function Model() {
  const { scene } = useGLTF(modelPath);
  return <primitive object={scene} scale={1.5} />;
}

function ModelViewer() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} />
      <Model />
      <OrbitControls />
    </Canvas>
  );
}

export default ModelViewer;
