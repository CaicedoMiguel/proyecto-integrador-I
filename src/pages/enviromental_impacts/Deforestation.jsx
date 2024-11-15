// src/pages/Deforestation/Deforestation.jsx
import React, { Suspense, useState, useCallback } from "react";
import { Canvas } from "@react-three/fiber";
import { Stars, Sky } from "@react-three/drei";
import Navbar from "../../components/Navbar";
import { useNavigate } from "react-router-dom";
import * as THREE from "three";
import CameraDeforestation from "../../controls/CameraDeforestation";
import DeforestationTitle from "../../components/DeforestationTitle";
import CustomCursor from "../../controls/CustomCursor";
import DeforestationModel from "../../components/DeforestationModel";

// Initial camera position and look-at target
const initialPosition = new THREE.Vector3(-14.2, 3.59, 60.27);
const initialLookAt = new THREE.Vector3(-8.74, -3.07, 1.32);

const Deforestation = () => {
  const [targetPosition, setTargetPosition] = useState(initialPosition.clone());
  const [targetLookAt, setTargetLookAt] = useState(initialLookAt.clone());
  const [showInfoCanvas, setShowInfoCanvas] = useState(false); // Determines if the info canvas is displayed
  const navigate = useNavigate();

  /**
   * Function to move the camera to a new position and display the info canvas.
   * @param {THREE.Vector3} newPosition - The new camera position.
   * @param {THREE.Vector3} newLookAt - The new look-at target.
   */
  const moveCamera = useCallback((newPosition, newLookAt) => {
    setTargetPosition(newPosition.clone());
    setTargetLookAt(newLookAt.clone());
    setShowInfoCanvas(true);
    console.log("Camera moved to the new position.");
  }, []);

  /**
   * Function to reset the camera to its initial position and hide the info canvas.
   */
  const resetCamera = useCallback(() => {
    setTargetPosition(initialPosition.clone());
    setTargetLookAt(initialLookAt.clone());
    setShowInfoCanvas(false);
    console.log("Camera reset to the initial position.");
  }, []);

  return (
    <div style={{ width: "100vw", height: "100vh", position: "relative" }}>
      {/* Navbar component */}
      <Navbar />

      {/* Button to navigate to the Biodiversity page */}
      <button
        onClick={() => navigate("/biodiversity")}
        style={{
          position: "absolute",
          top: "20px",
          right: "20px",
          padding: "10px 20px",
          fontSize: "16px",
          borderRadius: "8px",
          backgroundColor: "#4CAF50",
          color: "white",
          cursor: "pointer",
          zIndex: 1000,
        }}
      >
        Next
      </button>

      {/* Info canvas for deforestation */}
      {showInfoCanvas && (
        <div
          style={{
            position: "absolute",
            top: "10%",
            left: "50%",
            transform: "translate(-50%, 0)",
            width: "60vw",
            height: "40vh",
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            color: "black",
            padding: "30px",
            borderRadius: "20px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
          }}
        >
          {/* Close button for the canvas */}
          <button
            onClick={() => setShowInfoCanvas(false)}
            style={{
              position: "absolute",
              top: "15px",
              right: "20px",
              background: "transparent",
              border: "none",
              fontSize: "24px",
              cursor: "pointer",
              color: "#f44336",
            }}
            aria-label="Close"
          >
            &times;
          </button>

          <h2>Deforestation Information</h2>
          <p>
            This area has been significantly affected by deforestation, leading to biodiversity loss and local climate changes.
          </p>

          {/* Navigation buttons */}
          <div
            style={{
              display: "flex",
              gap: "20px",
              marginTop: "30px",
              width: "100%",
              justifyContent: "center",
            }}
          >
            <button
              onClick={() => navigate("/biodiversity")}
              style={{
                padding: "15px 30px",
                fontSize: "16px",
                borderRadius: "10px",
                backgroundColor: "#4CAF50",
                color: "white",
                cursor: "pointer",
                border: "none",
                flex: "1",
                maxWidth: "200px",
                height: "50px",
              }}
            >
              Forward
            </button>
            <button
              onClick={resetCamera}
              style={{
                padding: "15px 30px",
                fontSize: "16px",
                borderRadius: "10px",
                backgroundColor: "#f44336",
                color: "white",
                cursor: "pointer",
                border: "none",
                flex: "1",
                maxWidth: "200px",
                height: "50px",
              }}
            >
              Back
            </button>
          </div>
        </div>
      )}

      {/* 3D Canvas for the Deforestation scene */}
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
          <DeforestationModel />
          <DeforestationTitle moveCamera={moveCamera} />
          <Sky
            sunPosition={[100, 20, 100]}
            turbidity={10}
            rayleigh={2}
            mieCoefficient={0.005}
            mieDirectionalG={0.8}
          />
          <Stars radius={300} depth={50} count={2000} factor={7} saturation={0} fade />
          <CustomCursor />
        </Suspense>
        <ambientLight intensity={0.5} />
        <directionalLight
          position={[5, 15, 2]}
          intensity={1.5}
          castShadow
          shadow-mapSize={[2048, 2048]}
        />
        <spotLight
          position={[0, 15, 5]}
          angle={0.6}
          penumbra={1}
          intensity={1.2}
          castShadow
        />
        <pointLight position={[-2, 8, 3]} intensity={0.8} />
      </Canvas>
    </div>
  );
};

export default Deforestation;
