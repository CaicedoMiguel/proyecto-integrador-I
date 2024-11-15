import React, { useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const DeforestationModel = () => {
  const { scene } = useGLTF('/models/deforestation.glb');

  useEffect(() => {
    scene.position.set(30, -10, 0);
  }, [scene]);

  useFrame((state) => state.invalidate());

  return <primitive object={scene} />;
};

export default DeforestationModel;