import { useRef } from "react";

const LightsDeforestation = () => {
  const directionalLightRef = useRef();
  const spotLightRef = useRef();

  return (
    <>
      {/* Luz Direccional Principal */}
      <directionalLight
        ref={directionalLightRef}
        castShadow
        position={[100, 200, 100]}
        intensity={1}
        shadow-mapSizeWidth={1024} // camelCase
        shadow-mapSizeHeight={1024} // camelCase
        shadow-camera-near={0.5}
        shadow-camera-far={500}
        shadow-camera-left={-200}
        shadow-camera-right={200}
        shadow-camera-top={200}
        shadow-camera-bottom={-200}
        shadow-radius={4} 
        shadow-bias={-0.0001} 
      />

      {/* Luz Ambiental para iluminar las sombras suavemente */}
      <ambientLight intensity={0.3} color={"#ffffff"} />

      {/* Luz Spot para destacar áreas específicas */}
      <spotLight
        ref={spotLightRef}
        position={[-100, 150, -100]}
        angle={0.3}
        intensity={0.5}
        castShadow
        shadow-mapSizeWidth={512} // camelCase
        shadow-mapSizeHeight={512} // camelCase
        shadow-camera-near={10}
        shadow-camera-far={400}
        shadow-radius={3}
        shadow-bias={-0.0001}
      />
    </>
  );
};

export default LightsDeforestation;