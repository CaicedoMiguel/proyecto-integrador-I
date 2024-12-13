import React, { useState, useRef, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { useGLTF, useAnimations, Html } from '@react-three/drei';
import { RigidBody } from '@react-three/rapier';
import * as THREE from 'three';

const Dog = (props) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('/models/dog.glb');
  const { actions, names, mixer } = useAnimations(animations, group);
  const [showLabel, setShowLabel] = useState(false);
  const { camera } = useThree();

  useEffect(() => {
    if (names.length > 0) {
      const action = actions[names[0]];
      if (action) {
        action.reset().play();
        action.setLoop(THREE.LoopRepeat, Infinity);
        action.setEffectiveTimeScale(1);
        action.setEffectiveWeight(1);
        // Animación iniciada exitosamente
      } else {
        console.error(`La acción de animación "${names[0]}" no se encontró.`);
      }
    } else {
      console.warn('No se encontraron acciones de animación.');
    }

    return () => {
      if (actions) {
        Object.values(actions).forEach(action => action.stop());
      }
    };
  }, [actions, names]);

  useFrame((state, delta) => {
    if (mixer) {
      mixer.update(delta);
    }
  });

  const handleOnClick = () => {
    setShowLabel(!showLabel);
  };

  return (
    <RigidBody type="fixed" colliders="hull">
      <group ref={group} {...props} dispose={null} onClick={handleOnClick}>
        <group name="Scene">
          <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={30}>
            <group name="root">
              <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
                <group name="puppy_46" scale={0.273}>
                  <group name="GLTF_created_0">
                    <primitive object={nodes.GLTF_created_0_rootJoint} />
                    <skinnedMesh
                      name="mesh_0"
                      geometry={nodes.mesh_0.geometry}
                      material={materials.material}
                      skeleton={nodes.mesh_0.skeleton}
                      morphTargetDictionary={nodes.mesh_0.morphTargetDictionary}
                      morphTargetInfluences={nodes.mesh_0.morphTargetInfluences}
                    />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
        {showLabel && (
          <Html
            position={[0, 12, 0]}
            center
            distanceFactor={10}
            occlude={[group]}
            zIndexRange={[0, 0]}
          >
            <div style={{
              fontFamily: 'Bebas Neue, sans-serif',
              fontSize: '80px',
              color: '#ff0000',
              textShadow: 
                '0 1px 0 #ccc, 0 2px 0 #c9c9c9, 0 3px 0 #bbb, 0 4px 0 #b9b9b9, 0 5px 0 #aaa, 0 6px 1px rgba(0,0,0,.1), 0 0 5px rgba(0,0,0,.1), 0 1px 3px rgba(0,0,0,.3), 0 3px 5px rgba(0,0,0,.2), 0 5px 10px rgba(0,0,0,.25), 0 10px 10px rgba(0,0,0,.2), 0 20px 20px rgba(0,0,0,.15)',
              transform: 'scale(3) rotateX(20deg)',
              transformStyle: 'preserve-3d',
              pointerEvents: 'none'
            }}>
              Bienvenido Gua!!!
            </div>
          </Html>
        )}
      </group>
    </RigidBody>
  );
};

export default Dog;

useGLTF.preload('/models/dog.glb');
