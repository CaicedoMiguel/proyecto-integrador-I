import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as THREE from 'three';

const TierraSanta = () => {
  const mountRef = useRef(null);
  const navigate = useNavigate();
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let scene, camera, renderer;
    let bigTextMesh, smallTextMesh;
    let bigTextPositions, smallTextPositions;
    let bigTextInitialPositions, smallTextInitialPositions;
    let animationPhase = 0;
    const clock = new THREE.Clock();

    const init = () => {
      scene = new THREE.Scene();
      const backgroundTexture = new THREE.CanvasTexture(createGradientTexture());
      scene.background = backgroundTexture;

      camera = new THREE.PerspectiveCamera(
        60,
        window.innerWidth / window.innerHeight,
        0.1,
        2000
      );
      camera.position.z = 800;

      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      mountRef.current.appendChild(renderer.domElement);

      const ambientLight = new THREE.AmbientLight(0xffffff, 1);
      scene.add(ambientLight);

      createTextParticles('Salvemos el planeta', 'big');
      createTextParticles('Use scroll', 'small');

      animate();

      window.addEventListener('resize', onWindowResize, false);
      document.addEventListener('click', onDocumentClick, false);
      window.addEventListener('scroll', handleScroll, false);
    };

    const createGradientTexture = () => {
      const size = 512;
      const canvas = document.createElement('canvas');
      canvas.width = size;
      canvas.height = size;
      const context = canvas.getContext('2d');
      if (context) {
        const gradient = context.createLinearGradient(0, 0, size, size);
        gradient.addColorStop(0, '#003300');
        gradient.addColorStop(1, '#000000');
        context.fillStyle = gradient;
        context.fillRect(0, 0, size, size);
      }
      return canvas;
    };

    const createTextParticles = (text, size) => {
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      const width = 1600;
      const height = 600;
      canvas.width = width;
      canvas.height = height;

      if (context) {
        context.fillStyle = '#ffffff';
        context.font = size === 'big' ? '180px Arial' : '50px Arial';
        context.textAlign = 'center';
        context.textBaseline = 'middle';
        context.fillText(text, width / 2, height / 2);

        const imageData = context.getImageData(0, 0, width, height).data;
        const particles = [];
        const gap = 2;

        for (let y = 0; y < height; y += gap) {
          for (let x = 0; x < width; x += gap) {
            const index = (y * width + x) * 4;
            const alpha = imageData[index + 3];
            if (alpha > 128) {
              const particleX = x - width / 2;
              const particleY = -(y - height / 2);
              particles.push(particleX, particleY, 0);
            }
          }
        }

        const positions = new Float32Array(particles);
        const initialPositions = positions.slice();
        const particlesGeometry = new THREE.BufferGeometry();
        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        
        const particlesMaterial = new THREE.PointsMaterial({ 
          color: 0xffffff, 
          size: 3,
          transparent: true,
          opacity: 1
        });

        const particleMesh = new THREE.Points(particlesGeometry, particlesMaterial);
        particleMesh.position.y = size === 'big' ? 100 : -50;
        scene.add(particleMesh);
        
        if (size === 'big') {
          bigTextMesh = particleMesh;
          bigTextPositions = positions;
          bigTextInitialPositions = initialPositions;
        } else {
          smallTextMesh = particleMesh;
          smallTextPositions = positions;
          smallTextInitialPositions = initialPositions;
        }
      }
    };

    const onWindowResize = () => {
      if (camera && renderer) {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      }
    };

    const onDocumentClick = () => {
      if (animationPhase === 0) {
        animationPhase = 1;
        clock.start();
        navigate('/home');
      }
    };

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min(scrollPosition / maxScroll, 1);
      setScrollProgress(progress);

      if (progress >= 1) {
        navigate('/home');
      }
    };

    const animate = () => {
      requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();
      animateBackground();
      animateTextParticles(elapsedTime);
      updateTextOpacity();
      updateCameraPosition();
      if (animationPhase === 1) {
        dissolveTextParticles();
        if (elapsedTime > 2) {
          animationPhase = 2;
          clock.stop();
        }
      }
      renderer.render(scene, camera);
    };

    const animateBackground = () => {
      const time = Date.now() * 0.0005;
      const backgroundTexture = scene.background;
      const context = backgroundTexture.image.getContext('2d');
      if (context) {
        const size = backgroundTexture.image.width;
        const gradient = context.createLinearGradient(0, 0, size, size);
        gradient.addColorStop(0, `hsl(${(time * 100) % 360}, 50%, 20%)`);
        gradient.addColorStop(1, '#000000');
        context.fillStyle = gradient;
        context.fillRect(0, 0, size, size);
        backgroundTexture.needsUpdate = true;
      }
    };

    const animateTextParticles = (time) => {
      if (bigTextMesh && bigTextPositions && bigTextInitialPositions) {
        const positions = bigTextMesh.geometry.attributes.position.array;
        for (let i = 0; i < positions.length; i += 3) {
          positions[i] = bigTextInitialPositions[i] + Math.sin(time + i * 0.002) * 8;
          positions[i + 1] = bigTextInitialPositions[i + 1] + Math.cos(time + i * 0.002) * 8;
          positions[i + 2] = bigTextInitialPositions[i + 2] + Math.sin(time + i * 0.002) * 4;
        }
        bigTextMesh.geometry.attributes.position.needsUpdate = true;
        bigTextMesh.rotation.y = Math.sin(time * 0.2) * 0.1;
      }
      if (smallTextMesh && smallTextPositions && smallTextInitialPositions) {
        const positions = smallTextMesh.geometry.attributes.position.array;
        for (let i = 0; i < positions.length; i += 3) {
          positions[i] = smallTextInitialPositions[i] + Math.cos(time + i * 0.002) * 5;
          positions[i + 1] = smallTextInitialPositions[i + 1] + Math.sin(time + i * 0.002) * 5;
          positions[i + 2] = smallTextInitialPositions[i + 2] + Math.cos(time + i * 0.002) * 3;
        }
        smallTextMesh.geometry.attributes.position.needsUpdate = true;
        smallTextMesh.rotation.y = Math.sin(time * 0.3) * 0.15;
      }
    };

    const dissolveTextParticles = () => {
      if (bigTextMesh && bigTextPositions) {
        const positions = bigTextMesh.geometry.attributes.position.array;
        for (let i = 0; i < positions.length; i += 3) {
          positions[i] += (Math.random() - 0.5) * 15;
          positions[i + 1] += (Math.random() - 0.5) * 15;
          positions[i + 2] += (Math.random() - 0.5) * 15;
        }
        bigTextMesh.geometry.attributes.position.needsUpdate = true;
      }
      if (smallTextMesh && smallTextPositions) {
        const positions = smallTextMesh.geometry.attributes.position.array;
        for (let i = 0; i < positions.length; i += 3) {
          positions[i] += (Math.random() - 0.5) * 15;
          positions[i + 1] += (Math.random() - 0.5) * 15;
          positions[i + 2] += (Math.random() - 0.5) * 15;
        }
        smallTextMesh.geometry.attributes.position.needsUpdate = true;
      }
    };

    const updateTextOpacity = () => {
      if (bigTextMesh && smallTextMesh) {
        const opacity = Math.max(0, 1 - scrollProgress * 2);
        bigTextMesh.material.opacity = opacity;
        smallTextMesh.material.opacity = opacity;
      }
    };

    const updateCameraPosition = () => {
      if (camera) {
        camera.position.y = -scrollProgress * 200;
        camera.position.z = 800 - scrollProgress * 300;
      }
    };

    init();

    return () => {
      if (mountRef.current && mountRef.current.children[0]) {
        mountRef.current.removeChild(mountRef.current.children[0]);
      }
      window.removeEventListener('resize', onWindowResize);
      document.removeEventListener('click', onDocumentClick);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [navigate, scrollProgress]);

  return (
    <>
      <div 
        ref={mountRef} 
        style={{ 
          width: '100%', 
          height: '100vh',
          position: 'fixed',
          top: 0,
          left: 0,
        }}
        aria-label="Animación interactiva de Tierra Santa"
      />
      <div style={{ height: '300vh' }} />
    </>
  );
};

export default TierraSanta;

