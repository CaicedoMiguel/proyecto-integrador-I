import React, { Suspense, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, Sky } from '@react-three/drei';
import Navbar from '../../components/Navbar';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for page navigation
import * as THREE from 'three';
import CameraDeforestation from '../../controls/CameraDeforestation';
import DeforestationTitle from '../../components/DeforestationTitle';
import CustomCursor from '../../controls/CustomCursor';
import DeforestationModel from '../../components/DeforestationModel';

// Main Deforestation Component
const Deforestation = () => {
  // State to manage the camera's target position
  const [targetPosition, setTargetPosition] = useState(
    new THREE.Vector3(-14.2, 3.59, 60.27)
  );

  // State to manage where the camera is looking
  const [targetLookAt, setTargetLookAt] = useState(
    new THREE.Vector3(-8.74, -3.07, 1.32)
  );

  // Ref for the OrbitControls
  const controlsRef = useRef();

  // useNavigate hook for routing to other pages
  const navigate = useNavigate();

  // Logs changes in the camera's target position
  const handleCameraChange = () => {
    if (controlsRef.current) {
      console.log('Camera changed:', controlsRef.current.target);
    }
  };

  // Navigates to the "Biodiversity" page
  const handleNextClick = () => {
    navigate('/biodiversity'); // Navigate to Biodiversity page
  };

  return (
    <div style={{ width: '100vw', height: '100vh', position: 'relative' }}>
      {/* Navbar component */}
      <Navbar />
      
      {/* "Siguiente" Button */}
      <button
        onClick={handleNextClick} // Trigger page navigation on click
        style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          padding: '10px 20px',
          fontSize: '16px',
          borderRadius: '8px',
          border: 'none',
          backgroundColor: '#4CAF50', // Green background
          color: 'white', // White text
          cursor: 'pointer',
          zIndex: 1000, // Ensures button is above Canvas
        }}
      >
        Siguiente
      </button>

      {/* 3D Scene Canvas */}
      <Canvas
        frameloop="demand" // Renders frames on demand for better performance
        shadows // Enables shadows
        camera={{
          position: [-14.2, 3.59, 60.27], // Initial camera position
          fov: 75, // Field of view
        }}
        style={{ background: 'transparent', cursor: 'none' }} // Canvas style
      >
        {/* Custom Camera Controls */}
        <CameraDeforestation
          targetPosition={targetPosition}
          targetLookAt={targetLookAt}
        />

        {/* Orbit Controls for interactive camera movement */}
        <OrbitControls ref={controlsRef} onChange={handleCameraChange} />

        {/* Suspense wraps lazily loaded components */}
        <Suspense fallback={null}>
          {/* 3D Model representing deforestation */}
          <DeforestationModel />

          {/* Title component to set camera targets */}
          <DeforestationTitle
            setTargetPosition={setTargetPosition}
            setTargetLookAt={setTargetLookAt}
          />

          {/* Sky settings for realistic lighting */}
          <Sky
            sunPosition={[100, 20, 100]} // Position of the sun
            turbidity={10} // Atmospheric haze
            rayleigh={2} // Scattering intensity
            mieCoefficient={0.005} // Particulate scattering
            mieDirectionalG={0.8} // Directional scattering
          />

          {/* Starry night effect */}
          <Stars
            radius={300} // Size of the star field
            depth={50} // Distribution depth
            count={2000} // Number of stars
            factor={7} // Star size multiplier
            saturation={0} // No color saturation
            fade // Smooth edges for stars
          />

          {/* Custom cursor for the scene */}
          <CustomCursor />
        </Suspense>

        {/* Ambient light for general illumination */}
        <ambientLight intensity={0.5} />

        {/* Directional light to simulate sunlight */}
        <directionalLight
          position={[5, 15, 2]} // Light position
          intensity={1.5} // Brightness
          castShadow // Enables shadows
          shadow-mapSize={[2048, 2048]} // Shadow map resolution
        />

        {/* Spot light for focused illumination */}
        <spotLight
          position={[0, 15, 5]} // Position of the spot light
          angle={0.6} // Light cone angle
          penumbra={1} // Softness of edges
          intensity={1.2} // Brightness
          castShadow // Enables shadows
        />

        {/* Point light for localized lighting */}
        <pointLight position={[-2, 8, 3]} intensity={0.8} />
      </Canvas>
    </div>
  );
};

export default Deforestation;
