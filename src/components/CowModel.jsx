/* eslint-disable react/no-unknown-property */
import { useEffect, useRef, useState } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

const Cow = (props) => {
    const cowRef = useRef();
    const { nodes, materials, animations } = useGLTF("/models/cow.glb");
    const { actions } = useAnimations(animations, cowRef, );

    const [position, setPosition] = useState([18, -5, 87]);
    const [direction, setDirection] = useState([0.04, 0, 0.04]);

    
    useEffect(() => {
      const bounds = {
        x: [15, 45], // Límites en el eje X
        z: [85, 95], // Límites en el eje Z
      };
      actions["walk"].play()
  
      const interval = setInterval(() => {
        setPosition((prev) => {
          let [x, y, z] = prev;
          let [dx, dy, dz] = direction;
  
          // Verificar límites y cambiar dirección si es necesario
          if (x + dx > bounds.x[1] || x + dx < bounds.x[0]) dx = -dx;
          if (z + dz > bounds.z[1] || z + dz < bounds.z[0]) dz = -dz;
  
          setDirection([dx, dy, dz]);
          return [x + dx, y + dy, z + dz];
        });
      }, 16); // Actualización cada 16 ms ≈ 60 FPS
  
      return () => clearInterval(interval); // Limpiar intervalo al desmontar
    }, [direction]);

    return (
        <RigidBody type="fixed" colliders="hull">
        <group ref={cowRef} position={position} {...props} dispose={null}>
      <group name="Scene">
        <group name="cow_root">
          <skinnedMesh
            name="cow"
            geometry={nodes.cow.geometry}
            material={materials.cowtexture}
            skeleton={nodes.cow.skeleton}
            castShadow
          />
          <primitive object={nodes['DEF-spine004']} />
          <primitive object={nodes['DEF-spine']} />
          <primitive object={nodes['DEF-pelvisL']} />
          <primitive object={nodes['DEF-pelvisR']} />
          <primitive object={nodes['DEF-thighL']} />
          <primitive object={nodes['DEF-thighR']} />
          <primitive object={nodes['DEF-shoulderL']} />
          <primitive object={nodes['DEF-front_thighL']} />
          <primitive object={nodes['DEF-shoulderR']} />
          <primitive object={nodes['DEF-front_thighR']} />
          <primitive object={nodes['DEF-breastL']} />
          <primitive object={nodes['DEF-breastR']} />
          <primitive object={nodes['DEF-spine005']} />
          <primitive object={nodes['DEF-spine006']} />
          <primitive object={nodes['DEF-spine007']} />
          <primitive object={nodes['DEF-spine008']} />
          <primitive object={nodes['DEF-spine009']} />
          <primitive object={nodes['DEF-spine010']} />
          <primitive object={nodes['DEF-spine011']} />
          <primitive object={nodes['DEF-spine001']} />
          <primitive object={nodes['DEF-spine002']} />
          <primitive object={nodes['DEF-spine003']} />
          <primitive object={nodes['DEF-thighL001']} />
          <primitive object={nodes['DEF-shinL']} />
          <primitive object={nodes['DEF-shinL001']} />
          <primitive object={nodes['DEF-footL']} />
          <primitive object={nodes['DEF-footL001']} />
          <primitive object={nodes['DEF-toeL']} />
          <primitive object={nodes['DEF-thighR001']} />
          <primitive object={nodes['DEF-shinR']} />
          <primitive object={nodes['DEF-shinR001']} />
          <primitive object={nodes['DEF-footR']} />
          <primitive object={nodes['DEF-footR001']} />
          <primitive object={nodes['DEF-toeR']} />
          <primitive object={nodes['DEF-front_thighL001']} />
          <primitive object={nodes['DEF-front_shinL']} />
          <primitive object={nodes['DEF-front_shinL001']} />
          <primitive object={nodes['DEF-front_footL']} />
          <primitive object={nodes['DEF-front_footL001']} />
          <primitive object={nodes['DEF-front_toeL']} />
          <primitive object={nodes['DEF-front_thighR001']} />
          <primitive object={nodes['DEF-front_shinR']} />
          <primitive object={nodes['DEF-front_shinR001']} />
          <primitive object={nodes['DEF-front_footR']} />
          <primitive object={nodes['DEF-front_footR001']} />
          <primitive object={nodes['DEF-front_toeR']} />
        </group>
      </group>
    </group>
    </RigidBody>
  )
}

export default Cow;
useGLTF.preload('/cow.glb')
    