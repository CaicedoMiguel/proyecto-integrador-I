import React, { useRef, useState, useMemo } from 'react';
import { useThree, useFrame } from '@react-three/fiber';
import { Raycaster } from 'three';
// Importa react-spring si no lo necesitas, puedes eliminar esta línea
import { useSpring, animated } from '@react-spring/three';

const CustomCursor = () => {
  const { camera, scene, pointer } = useThree();
  const [cursorRole, setCursorRole] = useState('default');
  const cursorRef = useRef();
  const raycaster = useMemo(() => new Raycaster(), []);

  // Definición de roles y sus propiedades (puedes mantener esto si lo necesitas)
  const cursorRoles = useMemo(() => ({
    default: {
      geometry: <sphereGeometry args={[0.2, 16, 16]} />,
      material: <meshBasicMaterial color="#ffffff" transparent opacity={0.6} />,
      scale: [1, 1, 1],
    },
    pointer: {
      geometry: <coneGeometry args={[0.15, 0.4, 32]} />,
      material: <meshBasicMaterial color="#00ff00" transparent opacity={0.8} />,
      scale: [1.2, 1.2, 1.2],
    },
    grab: {
      geometry: <boxGeometry args={[0.2, 0.1, 0.2]} />,
      material: <meshBasicMaterial color="#ff0000" transparent opacity={0.8} />,
      scale: [0.8, 0.8, 0.8],
    },
    // Agrega más roles según sea necesario
  }), []);

  // Animación de escala con react-spring (puedes eliminar esto si no lo necesitas)
  const { scale } = useSpring({
    scale: cursorRoles[cursorRole].scale,
    config: { mass: 1, tension: 500, friction: 20 },
  });

  // Filtrar objetos interactivos una sola vez
  const interactiveObjects = useMemo(() => {
    const objects = [];
    scene.traverse((child) => {
      if (child.userData.interactive) objects.push(child);
    });
    return objects;
  }, [scene]);

  useFrame(() => {
    if (cursorRef.current) {
      raycaster.setFromCamera(pointer, camera);
      const intersects = raycaster.intersectObjects(interactiveObjects, true);

      if (intersects.length > 0) {
        const [intersection] = intersects;
        cursorRef.current.position.copy(intersection.point);

        // Determinar el rol basado en los datos del objeto
        const { role } = intersection.object.userData;
        if (role && role !== cursorRole) {
          setCursorRole(role);
        }
      } else {
        // Si no hay intersección, volver al rol default
        if (cursorRole !== 'default') {
          setCursorRole('default');
        }
      }
    }
  });

  // **Eliminar el renderizado del mesh del cursor**
  return null;

  /*
  // Alternativamente, si quieres mantener el componente pero ocultar el mesh:
  return (
    <animated.mesh
      ref={cursorRef}
      scale={scale}
      renderOrder={999}
      layers={0}
      frustumCulled={false}
      visible={false} // Hacer el mesh invisible
    >
      {cursorRoles[cursorRole].geometry}
      {cursorRoles[cursorRole].material}
    </animated.mesh>
  );
  */
};

export default CustomCursor;
