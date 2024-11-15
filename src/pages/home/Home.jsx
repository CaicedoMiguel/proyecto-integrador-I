import React, { Suspense, useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import {
  OrbitControls,
  useGLTF,
  Stars,
  Sky,
  Environment,
  Html,
  Text3D,
  Cloud,
} from '@react-three/drei';
import * as THREE from 'three';
import Navbar from '../../components/Navbar';

const Home = () => {
  const textContainerRef = useRef();

  useEffect(() => {
    if (textContainerRef.current) {
      textContainerRef.current.style.opacity = 0;
      setTimeout(() => {
        textContainerRef.current.style.transition = 'opacity 2s ease-in-out';
        textContainerRef.current.style.opacity = 1;
      }, 2000); // Aparece después de 2 segundos
    }
  }, []);

  return (
    <div style={{ width: '100vw', height: '100vh', position: 'relative' }}>
      <Navbar />
      <Canvas
        shadows
        camera={{ position: [0, 30, 100], fov: 70 }}
        gl={{ antialias: true, toneMapping: THREE.ACESFilmicToneMapping }}
        style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, zIndex: 1, opacity: 0.8 }}
      >
        <Suspense fallback={
          <Html center>
            <div>Cargando...</div>
          </Html>
        }>
          {/* Modelo Tierra Santa */}
          <TierraSantaModel />
          
          {/* Título Tierra Santa */}
          <TierraSantaTitle initial />

          {/* Ambiente y Cielo */}
          <Environment preset="night" /> {/* Cambié a un entorno nocturno */}
          <Sky
            distance={450000}
            sunPosition={[0, -1, -1]} // Mueve el sol por debajo del horizonte para un efecto nocturno
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
            count={7000} // Aumenté el conteo de estrellas para que se vea más lleno
            factor={10}
            saturation={0}
            fade
            speed={0}
          />
          <CloudGroup />
        </Suspense>

        {/* Iluminación */}
        <ambientLight intensity={0.2} /> {/* Luz ambiental reducida para el entorno nocturno */}
        <directionalLight position={[10, 20, 5]} intensity={0.5} castShadow /> {/* Iluminación más suave */}
        <pointLight position={[-20, 20, 10]} intensity={1} />

        {/* Controles de Órbita */}
        <OrbitControls enableZoom={true} maxDistance={250} minDistance={50} />
      </Canvas>

      {/* Texto en Canvas semi transparente */}
      <div
        ref={textContainerRef}
        style={{
          position: 'absolute',
          bottom: '10%', // Mueve el texto a la parte inferior
          left: '10%', // Ajusta el texto hacia la izquierda
          padding: '20px',
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo semi transparente
          color: 'white',
          textAlign: 'center',
          borderRadius: '10px',
          zIndex: 2,
          opacity: 0, // Inicia invisible
        }}
      >
        TIERRA SANTA <br />
        es una aplicacion web informativa<br />
        sobre el medio ambiente <br />
        mediante modelos y objetos en 3D.<br /> <br />
        Nuestra mision es <br />
        birndarle al usuario el conocimiento adecuado<br />
        que se necesita para cuidar y <br />
        proteger nuestro medio ambiente haciendo<br />
        que nuestro planeta siga siendo esa<br />
        TIERRA maravillosa<br />

        </div>
    </div>
    );
};

// Componente del Modelo Tierra Santa
const TierraSantaModel = () => {
  const { scene } = useGLTF('/models/scene3D.glb', true);
  scene.position.set(0, -30, 0);
  scene.scale.set(15, 15, 15);

  // Se eliminó la rotación del modelo

  return <primitive object={scene} />;
};

// Componente del Título Tierra Santa
const TierraSantaTitle = ({ initial }) => {
  const textRef = useRef();

  useEffect(() => {
    if (initial && textRef.current) {
      textRef.current.position.set(0, 50, -100);
      const mixer = new THREE.AnimationMixer(textRef.current);
      const positionKF = new THREE.VectorKeyframeTrack(
        ".position",
        [0, 2],
        [0, 50, -100, 0, 20, 0]
      );
      const clip = new THREE.AnimationClip("titleEntrance", 2, [positionKF]);
      const action = mixer.clipAction(clip);
      action.setLoop(THREE.LoopOnce);
      action.clampWhenFinished = true;
      action.play();

      const clock = new THREE.Clock();
      const animate = () => {
        requestAnimationFrame(animate);
        const delta = clock.getDelta();
        mixer.update(delta);
      };
      animate();
    }
  }, [initial]);

  return (
    <Text3D
      ref={textRef}
      font="/fonts/bebas-neue-regular.json"
      size={10}
      height={2}
      curveSegments={12}
      bevelEnabled
      bevelThickness={0.5}
      bevelSize={0.3}
      bevelOffset={0}
      bevelSegments={5}
      position={[-50, 20, -10]}
    >
      TIERRA SANTA
      <meshPhongMaterial
        color="#4CAF50"
        emissive="#4CAF50"
        specular="#ffffff"
        shininess={100}
      />
    </Text3D>
  );
};

// Componente para un grupo de nubes
const CloudGroup = () => {
  return (
    <group>
      <Cloud position={[-40, 60, -100]} speed={0.2} opacity={0.5} />
      <Cloud position={[40, 70, -80]} speed={0.1} opacity={0.7} />
      <Cloud position={[0, 80, -90]} speed={0.3} opacity={0.6} />
    </group>
  );
};

export default Home;
