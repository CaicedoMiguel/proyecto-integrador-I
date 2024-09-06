/* eslint-disable react/no-unknown-property */
import { useEffect, useRef, useCallback } from "react";
import useAuthStore from '../../stores/use-auth-store';
import { useNavigate } from 'react-router-dom';
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";                                                                                         
import './Cubo.css'; // Asegúrate de que este archivo CSS exista en la ruta especificada
// import ModelViewer from '../../components/ModelViewer';

const Esfera = () => {
  const { logout } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = useCallback(async () => {
    try {
      await logout();
      navigate('/');
    } catch (error) {
      console.error("Error al hacer logout:", error);
    }
  }, [logout, navigate]);

  const mountRef = useRef(null)

  useEffect(() => {
    const currentRef = mountRef.current;
    const {clientWidth: width, clientHeight: height} = currentRef;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(25, width / height, 0.01, 1000);
    scene.add(camera);
    camera.position.z = 15;
    camera.position.x = 6;

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(width, height);
    currentRef.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;

    const geometry = new THREE.BoxGeometry( 1, 1, 1 ); 
    const material = new THREE.MeshPhongMaterial( { color: 0x0f2c64 } ); 
    const cube = new THREE.Mesh( geometry, material ); scene.add( cube );
    camera.lookAt(cube.position);

    const ambientalLight = new THREE.AmbientLight( 0x404040, 50); // soft white light
    scene.add( ambientalLight ); 

    const light = new THREE.PointLight(0xff0000, 15);
    light.position.set(8, 8, 8);
    scene.add(light);

    const clock = new THREE.Clock();
    let direction = 1;
    let positionX = 0;
    const animate = () => {
      if (positionX > 3 || positionX < -3) {
        direction *= -1;
    }
      const elapsedTime = clock.getElapsedTime();
      cube.rotation.y = elapsedTime;
      cube.rotation.x = elapsedTime;
      positionX += 0.01 * direction;
      cube.position.x = positionX;
      // cube.position.x += 0.01;
      // cube.position.x = Math.sin(elapsedTime);
      cube.position.y = Math.cos(elapsedTime);

      controls.update();
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    const resize = () => {
        const updatedwidth = currentRef.clientWidth;
        const updatedHeight = currentRef.clientHeight;
        renderer.setSize(updatedwidth, updatedHeight);
        camera.aspect = updatedwidth / updatedHeight;
        camera.updateProjectionMatrix();
      
    }
    window.addEventListener('resize', resize);
    animate();

    //Render
    renderer.render(scene, camera);

    return () => {
      currentRef.removeChild(renderer.domElement);
      window.removeEventListener('resize', resize);
    }
  }, [])

  return <div ref={mountRef} style={{ width: '100vh', height: '100vh' }}>
    <h1 className="quiz-header">BIENVENIDO</h1>
    <button onClick={handleLogout} className="quiz-button">Logout</button>
  </div>
  
  
}

export default Esfera ;