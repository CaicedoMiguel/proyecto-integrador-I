import React, { Suspense } from 'react';
import { Canvas } from "@react-three/fiber";
import { Stars, Sky } from "@react-three/drei";
import * as THREE from "three";
import CameraDeforestation from "../controls/CameraDeforestation";
import DeforestationTitle from "./DeforestationTitle";
import CustomCursor from "../controls/CustomCursor";
import LightsDeforestation from "./LightsDeforestation";
import LostDeforestation from "./LostDeforestation";

const DeforestationScene = ({
  initialPosition,
  targetPosition,
  targetLookAt,
  moveCamera,
  resetCamera,
}) => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{
        position: initialPosition.toArray(),
        fov: 75,
      }}
      style={{ background: "transparent", cursor: "none" }}
    >
      <CameraDeforestation
        targetPosition={targetPosition}
        targetLookAt={targetLookAt}
        moveCamera={moveCamera}
        resetCamera={resetCamera}
      />
      <Suspense fallback={null}>
        <LostDeforestation />
        <DeforestationTitle moveCamera={moveCamera} />
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
      <LightsDeforestation />
    </Canvas>
  );
};

export default DeforestationScene;
