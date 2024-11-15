import React, { useRef, useState } from 'react';
import { useThree, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const CustomCursor = () => {
  const { camera, scene, raycaster, pointer } = useThree();
  const [isPointerOver, setIsPointerOver] = useState(false);
  const cursorRef = useRef();

  useFrame(() => {
    if (cursorRef.current) {
      raycaster.setFromCamera(pointer, camera);
      const intersects = raycaster.intersectObjects(scene.children, true);
      
      if (intersects.length > 0) {
        const [intersection] = intersects;
        cursorRef.current.position.copy(intersection.point);
        
        const isInteractive = intersection.object.userData.interactive;
        setIsPointerOver(isInteractive);
      }
    }
  });

  return (
    <mesh ref={cursorRef}>
      <sphereGeometry args={[0.2, 32, 32]} />
      <meshBasicMaterial color={isPointerOver ? "#00ff00" : "#ffffff"} transparent opacity={0.6} />
    </mesh>
  );
};

export default CustomCursor;