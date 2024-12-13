// src/pages/Home.jsx
import React, { Suspense, useEffect, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import {
  OrbitControls,
  Stars,
  Sky,
  Html,
  Text3D,
  Cloud,
} from '@react-three/drei';
import * as THREE from 'three';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import Model from '../../components/Model';
import birdsSound from '../../assets/sounds/birds.wav';


// Hook personalizado para escalado responsivo
const useResponsiveScale = (desktopScale, mobileScale) => {
  const [scale, setScale] = useState(desktopScale);

  useEffect(() => {
    const updateScale = () => {
      if (window.innerWidth < 768) {
        setScale(mobileScale);
      } else {
        setScale(desktopScale);
      }
    };

    updateScale();
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, [desktopScale, mobileScale]);

  return scale;
};

// Componente para manejar la animación de la cámara al cargar la página
const CameraAnimation = () => {
  const [animationComplete, setAnimationComplete] = useState(false);

  useFrame(({ clock, camera }) => {
    if (!animationComplete) {
      const t = Math.min(1, clock.getElapsedTime() * 0.5);
      const newPosition = new THREE.Vector3(0, 40, 300).lerp(new THREE.Vector3(0, 40, 100), t);
      camera.position.copy(newPosition);

      if (t === 1) {
        setAnimationComplete(true);
      }
    }
  });

  return <OrbitControls enableZoom={true} maxDistance={400} minDistance={80} />;
};

// Componente principal Home
const Home = () => {
  const [showDescription, setShowDescription] = useState(false);
  const [infoStep, setInfoStep] = useState(1);
  const textContainerRef = useRef();
  const navigate = useNavigate();

  // Estado para manejar el sonido
  const [isMuted, setIsMuted] = useState(true);
  const [soundActivated, setSoundActivated] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (textContainerRef.current) {
      textContainerRef.current.style.opacity = 0;
      setTimeout(() => {
        textContainerRef.current.style.transition = 'opacity 2s ease-in-out';
        textContainerRef.current.style.opacity = 1;
      }, 2000);
    }
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = isMuted;
    }
  }, [isMuted]);

  const handleTitleClick = () => {
    setShowDescription(!showDescription);
  };

  const handleButtonClick = () => {
    navigate('/deforestation');
  };

  const handleNextClick = () => {
    setInfoStep((prevStep) => prevStep + 1);
  };

  const handleBackClick = () => {
    setInfoStep((prevStep) => Math.max(prevStep - 1, 1));
  };

  const activateSound = () => {
    if (audioRef.current) {
      audioRef.current.muted = false;
      audioRef.current.play().catch((err) => {
        console.warn("No se pudo reproducir el audio:", err);
      });
      setIsMuted(false);
      setSoundActivated(true);
    }
  };

  const renderInfoContent = () => {
    switch (infoStep) {
      case 1:
        return (
          <>
            <p>
              Tierra Santa es una aplicación web informativa<br />
              sobre el medio ambiente mediante<br />
              modelos y objetos en 3D. <br /> <br />
              Nuestra misión es brindar el conocimiento adecuado y <br />
              necesario para cuidar y proteger nuestro<br />
              medioambiente, haciendo que nuestro<br />
              planeta siga siendo esa TIERRA maravillosa.
            </p>
            <button
              onClick={handleNextClick}
              style={buttonStyle}
            >
              Siguiente
            </button>
          </>
        );
      case 2:
        return (
          <>
            <p>
              <strong>Introducción a los Problemas Medioambientales de la Tierra:</strong><br /><br />
              <strong>Cambio Climático:</strong> El aumento de las temperaturas globales está provocando fenómenos meteorológicos extremos, derretimiento de glaciares y aumento del nivel del mar.<br /><br />
              <strong>Deforestación:</strong> La eliminación masiva de bosques reduce la biodiversidad, altera los ciclos del agua y contribuye al aumento de CO₂ en la atmósfera.<br /><br />
              <strong>Pérdida de Biodiversidad:</strong> La extinción de especies reduce la resiliencia de los ecosistemas y su capacidad para proporcionar servicios esenciales.<br /><br />
              Es crucial tomar medidas inmediatas para mitigar estos problemas y proteger nuestro planeta para las futuras generaciones.
            </p>
            <div style={buttonGroupStyle}>
              <button
                onClick={handleBackClick}
                style={buttonStyle}
              >
                Atrás
              </button>
              <button
                onClick={() => setShowDescription(false)}
                style={{ ...buttonStyle, backgroundColor: '#f44336' }}
              >
                Cerrar
              </button>
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div style={containerStyle}>
      <Navbar />

      {/* Elemento de audio, sin autoPlay */}
      <audio ref={audioRef} src={birdsSound} loop muted={true} />

      <Canvas
        shadows
        camera={{ position: [0, 40, 300], fov: 70 }}
        gl={{
          antialias: true,
          toneMapping: THREE.ACESFilmicToneMapping,
          outputColorSpace: THREE.SRGBColorSpace,
        }}
        style={canvasStyle}
      >
        <Suspense fallback={<Html center><div>Loading...</div></Html>}>
          <Model />
          <TierraSantaTitle initial onClick={handleTitleClick} />
          <Sky
            distance={450000}
            sunPosition={[0, -1, -1]}
            inclination={0}
            azimuth={0.1}
            mieCoefficient={0.01}
            mieDirectionalG={0.7}
            rayleigh={1}
            turbidity={10}
          />
          <Stars
            radius={300}
            depth={60}
            count={7000}
            factor={10}
            saturation={0}
            fade
            speed={0}
          />
          <CloudGroup />
        </Suspense>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 20, 5]} intensity={3} castShadow />
        <pointLight position={[-20, 20, 10]} intensity={2} />
        <hemisphereLight intensity={0.6} position={[0, 1, 0]} />
        <CameraAnimation />
      </Canvas>

      {showDescription && (
        <div
          ref={textContainerRef}
          style={descriptionBoxStyle}
        >
          {renderInfoContent()}
        </div>
      )}

      <button
        onClick={handleButtonClick}
        style={adventureButtonStyle}
        onMouseEnter={(e) => {
          e.target.style.transform = 'translateX(-50%) scale(1.1)';
          e.target.style.boxShadow = '0 12px 20px rgba(76, 175, 80, 0.5)';
          e.target.style.backgroundColor = '#F0F0F0';
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = 'translateX(-50%) scale(1)';
          e.target.style.boxShadow = '0 8px 15px rgba(0, 0, 0, 0.2)';
          e.target.style.backgroundColor = '#FFFFFF';
        }}
      >
        Comenzar Aventura
      </button>

      {/* Botón para activar sonido (se muestra solo si aún no se ha activado) */}
      {!soundActivated && (
        <button
          onClick={activateSound}
          style={soundButtonStyle}
          onMouseEnter={(e) => {
            e.target.style.transform = 'scale(1.1)';
            e.target.style.boxShadow = '0 12px 20px rgba(0, 0, 0, 0.3)';
            e.target.style.backgroundColor = '#f0f0f0';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'scale(1)';
            e.target.style.boxShadow = '0 8px 15px rgba(0, 0, 0, 0.2)';
            e.target.style.backgroundColor = '#FFFFFF';
          }}
        >
          Activar Sonido
        </button>
      )}

      {/* Botón para silenciar/activar el sonido una vez activado */}
      {soundActivated && (
        <button
          onClick={() => setIsMuted(!isMuted)}
          style={muteButtonStyle}
          onMouseEnter={(e) => {
            e.target.style.transform = 'scale(1.1)';
            e.target.style.boxShadow = '0 12px 20px rgba(0, 0, 0, 0.3)';
            e.target.style.backgroundColor = '#f0f0f0';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'scale(1)';
            e.target.style.boxShadow = '0 8px 15px rgba(0, 0, 0, 0.2)';
            e.target.style.backgroundColor = '#FFFFFF';
          }}
        >
          {isMuted ? '🔇 Silenciar' : '🔊 Sonido On'}
        </button>
      )}
    </div>
  );
};

// Estilos Responsivos
const containerStyle = {
  width: '100vw',
  height: '100vh',
  position: 'relative',
  margin: 0,
  padding: 0,
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
};

const canvasStyle = {
  flex: 1,
  width: '100%',
  height: '100%',
  display: 'block',
  zIndex: 1,
  opacity: 0.8,
};

const descriptionBoxStyle = {
  position: 'fixed',
  bottom: '10%',
  left: '5%',
  right: '5%',
  padding: '20px',
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
  color: 'white',
  textAlign: 'left',
  borderRadius: '10px',
  zIndex: 2,
  opacity: 1,
  maxWidth: '600px',
  width: '90%',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
  overflowY: 'auto',
  maxHeight: '70vh',
};

const adventureButtonStyle = {
  position: 'fixed',
  bottom: '5%',
  left: '50%',
  transform: 'translateX(-50%)',
  padding: '15px 40px',
  backgroundColor: '#FFFFFF',
  color: '#4CAF50',
  border: '2px solid #4CAF50',
  borderRadius: '30px',
  fontSize: '1.2rem',
  fontWeight: 'bold',
  cursor: 'pointer',
  zIndex: 3,
  transition: 'transform 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease',
  boxShadow: '0 8px 15px rgba(0, 0, 0, 0.2)',
  textShadow: '0px 0px 10px rgba(76, 175, 80, 0.8)',
};

const buttonStyle = {
  padding: '10px 20px',
  backgroundColor: '#4CAF50',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  fontSize: '1rem',
  minWidth: '100px',
};

const buttonGroupStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '20px',
  flexWrap: 'wrap',
  gap: '10px',
};

const soundButtonStyle = {
  position: 'fixed',
  top: '20px',
  right: '20px',
  padding: '10px 20px',
  backgroundColor: '#FFFFFF',
  color: '#4CAF50',
  border: '2px solid #4CAF50',
  borderRadius: '30px',
  fontSize: '1rem',
  fontWeight: 'bold',
  cursor: 'pointer',
  zIndex: 10,
  transition: 'transform 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease',
  boxShadow: '0 8px 15px rgba(0, 0, 0, 0.2)',
  textShadow: '0px 0px 10px rgba(76, 175, 80, 0.8)',
};

const muteButtonStyle = {
  position: 'fixed',
  top: '20px',
  right: '180px',
  padding: '10px 20px',
  backgroundColor: '#FFFFFF',
  color: '#4CAF50',
  border: '2px solid #4CAF50',
  borderRadius: '30px',
  fontSize: '1rem',
  fontWeight: 'bold',
  cursor: 'pointer',
  zIndex: 10,
  transition: 'transform 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease',
  boxShadow: '0 8px 15px rgba(0, 0, 0, 0.2)',
  textShadow: '0px 0px 10px rgba(76, 175, 80, 0.8)',
};

// Componente del Título con Responsividad
const TierraSantaTitle = ({ initial, onClick }) => {
  const textRef = useRef();
  const [hovered, setHovered] = useState(false);
  const scale = useResponsiveScale(1, 0.7); // Escala menor en móviles

  useEffect(() => {
    if (textRef.current) {
      textRef.current.material.color.set(hovered ? '#FFFF00' : '#4CAF50');
      textRef.current.material.emissive = new THREE.Color(hovered ? '#FFFF00' : '#000000');
    }
  }, [hovered]);

  return (
    <Text3D
      ref={textRef}
      font="/fonts/bebas-neue-regular.json"
      size={10 * scale}
      height={2 * scale}
      curveSegments={12}
      bevelEnabled
      bevelThickness={0.5 * scale}
      bevelSize={0.3 * scale}
      bevelOffset={0}
      bevelSegments={5}
      position={[-50 * scale, 20 * scale, -10 * scale]}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={onClick}
    >
      TIERRA SANTA
      <meshPhongMaterial color="#4CAF50" emissive="#000000" emissiveIntensity={0.5} />
    </Text3D>
  );
};

// Componente CloudGroup
const CloudGroup = () => {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const updateScale = () => {
      if (window.innerWidth < 768) {
        setScale(0.8);
      } else {
        setScale(1);
      }
    };

    updateScale();
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, []);

  return (
    <group scale={[scale, scale, scale]}>
      <Cloud position={[-40, 60, -100]} speed={0.2} opacity={0.5} />
      <Cloud position={[40, 70, -80]} speed={0.1} opacity={0.7} />
      <Cloud position={[0, 80, -90]} speed={0.3} opacity={0.6} />
    </group>
  );
};

export default Home;
