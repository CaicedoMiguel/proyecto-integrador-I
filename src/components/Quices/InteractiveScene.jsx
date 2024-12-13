import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";

const InteractiveObject = ({ position, label, imgSrc, onClick }) => {
  return (
    <group position={position}>
      <Html position={[0, 0, 0]} style={{ textAlign: 'center' }}>
        <div
          onClick={onClick}
          style={{
            cursor: 'pointer',
            background: 'rgba(255, 255, 255, 0.9)',
            padding: '10px',
            borderRadius: '8px',
            textAlign: 'center',
            boxShadow: '0 0 5px rgba(0,0,0,0.3)',
            userSelect: 'none',
            transform: 'translate(-50%, -50%)',
          }}
        >
          {imgSrc && (
            <img
              src={imgSrc}
              alt={label}
              style={{
                width: '150px',
                height: '150px',
                objectFit: 'cover',
                marginBottom: '10px',
                borderRadius: '8px',
              }}
            />
          )}
          <div style={{ fontSize: '18px', fontWeight: 'bold' }}>{label}</div>
        </div>
      </Html>
    </group>
  );
};

const InteractiveScene = ({ objects, onAction }) => {
  const handleObjectClick = (correct) => {
    onAction(correct);
  };

  return (
    <div style={{ width: '100%', height: '400px' }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <OrbitControls enableZoom={false} enablePan={false} />
        {objects.map((obj, index) => (
          <InteractiveObject
            key={index}
            position={obj.position}
            label={obj.label}
            imgSrc={obj.imgSrc}
            onClick={() => handleObjectClick(obj.correct)}
          />
        ))}
      </Canvas>
    </div>
  );
};

export default InteractiveScene;
