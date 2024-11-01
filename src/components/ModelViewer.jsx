/* eslint-disable react/no-unknown-property */
// eslint-disable-next-line no-unused-vars 
import React, { useRef } from 'react';
import { Canvas,  } from '@react-three/fiber';
import {  OrbitControls, SpotLight, useHelper } from '@react-three/drei';
import { DirectionalLightHelper, } from 'three';
import Model from './Model';

function Lights ()  {
  const directionalLightRef = useRef();
  useHelper(directionalLightRef, DirectionalLightHelper, 'cyan');
}

function ModelViewer () {

    return (
      <>
        <div style={{ position: 'relative', height: '100vh', width: 'auto', backgroundColor: 'transparent' }}>

        <Canvas shadows camera={{ position: [3, 15, 20], fov: 75 }}>
          <Model />
          <ambientLight intensity={1} />
          <directionalLight 
          position={[5, 10, 2]} intensity={5} castShadow />
          <SpotLight
          position={[0, 10, 5]}
          angle={0.6}
          penumbra={1}
          intensity={1.5}
          castShadow
          shadow-mapSize={[2048, 2048]}
        />
        <pointLight position={[-2, 5, 3]} intensity={0.5} castShadow/>
          <OrbitControls
              enableZoom={false} 
              enablePan={false}
              minDistance={1}
              maxDistance={10}
              target={[0, 0, 0]}
            />
          <Lights />
        </Canvas>
        </div>
      </>
  
    )
  }  





// function ModelViewer() {
//   const modelRef = useRef();

//   return (
//     <div style={{ position: 'relative', width: '100vw', height: '100vh', backgroundColor: '#87CEEB' }}>
//       <Canvas shadows camera={{ position: [0, 2, 3], fov: 60 }}>
        
//         <color attach="background" args={['#87CEEB']} />
//         <PerspectiveCamera makeDefault position={[0, 2, 3]} fov={60} />
//       <ambientLight intensity={0.6} />
//       <directionalLight position={[5, 5, 5]} intensity={0.8} castShadow />
//       <SpotLight
//         ref={spotLightRef}
//         position={[0, 10, 5]}
//         angle={0.6}
//         penumbra={1}
//         intensity={1.5}
//         castShadow
//         shadow-mapSize={[2048, 2048]}
//       />
//       <pointLight position={[-5, -5, -5]} intensity={0.5} />
//       <Suspense fallback={null}>
//           <Lights />
//           <Environment preset="sunset" />
//           <Sky
//             distance={450000}
//             sunPosition={[0, 1, 0]}
//             inclination={0.6}
//             azimuth={0.1}
//           />
//           <OrbitControls 
//             enableZoom={true} 
//             enablePan={true}
//             minDistance={1}
//             maxDistance={10}
//             target={[0, 0, 0]}
//           />
//         </Suspense>
//       </Canvas>

//     </div>
  // );
// }

export default ModelViewer;