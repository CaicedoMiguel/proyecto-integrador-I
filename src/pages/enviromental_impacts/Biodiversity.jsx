/* eslint-disable react/no-unknown-property */
// eslint-disable-next-line no-unused-vars
import React, { Suspense, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sky, Stars} from '@react-three/drei';
import Navbar from '../../components/Navbar';
import BiodiversityTittle from '../../components/BiodiversityTittle';
import { useNavigate } from 'react-router-dom';
import LostBiodiversity from '../../components/LostBiodiversity';

const Biodiversity = () => {

  const [showDescription, setShowDescription] = useState(false);
  const textContainerRef = useRef();
  const navigate = useNavigate();

  const handleTitleClick = () => {
    setShowDescription(!showDescription);
  };

  const handleNextClick = () => {
    navigate('/deforestation'); // Navega a la página deforestacion
  };


  return (
    <> 
    <div style={{ width: '100vw', height: '100vh', position: 'relative'}}>
      <Navbar />
      {/* Botón "Siguiente" */}
      <button
        onClick={handleNextClick}
        style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          padding: '10px 20px',
          fontSize: '16px',
          borderRadius: '8px',
          border: 'none',
          backgroundColor: '#4CAF50',
          color: 'white',
          cursor: 'pointer',
          zIndex: 9, // Asegura que el botón esté sobre el Canvas
        }}
      >
        Anterior
      </button>
      <Canvas
      shadows camera={{ position: [30, 5, 160], fov: 60 }}
      >
        
        <Suspense fallback={null}>
          <LostBiodiversity />
          <BiodiversityTittle initial onClick={handleTitleClick} /> 
        </Suspense>
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
        <ambientLight intensity={0.2} />
        <directionalLight 
        position={[5, 7, 2]} intensity={2} castShadow />
        <spotLight
        position={[0, 7, 5]}
        angle={0.6}
        penumbra={1}
        intensity={1.5}
        castShadow
        shadow-mapSize={[2048, 2048]}
      />
        <pointLight position={[-2, 5, 3]} intensity={0.5} castShadow/>
        <OrbitControls 
        minAzimuthAngle={-Math.PI / 8} // Limita la rotación horizontal (izquierda)
        maxAzimuthAngle={Math.PI / 8}   // Limita la rotación horizontal (derecha)
        minPolarAngle={Math.PI / 4}     // Limita la rotación vertical (arriba)
        maxPolarAngle={Math.PI / 2}
        enableZoom={false} 
        enablePan={false}                    
        enableRotate={true}
        />
      </Canvas>

      {showDescription && (
        <div
          ref={textContainerRef}
          style={{
            position: 'absolute',
            bottom: '10%',
            left: '10%',
            padding: '20px',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            color: 'white',
            textAlign: 'center',
            borderRadius: '10px',
            zIndex: 2,
            opacity: 1,
          }}
        >
          Desde un punto de vista humano, la diversidad biológica<br/> es clave para la alimentación, la medicina y el bienestar general. <br/>La pérdida de biodiversidad puede tener consecuencias graves, <br/>como la disminución de recursos naturales, la pérdida de hábitats<br/> y el aumento de enfermedades. Por lo tanto, <br/>conservar la biodiversidad es crucial no solo para la naturaleza, <br/>sino también para el futuro de la humanidad.
        </div>
      )}
    </div>

    </>
  );
};

export default Biodiversity;