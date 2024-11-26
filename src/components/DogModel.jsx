import React, { useEffect, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF, useAnimations } from '@react-three/drei';
import { RigidBody } from '@react-three/rapier';
import * as THREE from 'three';

const Dog = (props) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('/models/dog.glb');
  const { actions, names, mixer } = useAnimations(animations, group);

  useEffect(() => {
    if (names.length > 0) {
      const action = actions[names[0]];
      if (action) {
        action.reset().play();
        action.setLoop(THREE.LoopRepeat, Infinity);
        action.setEffectiveTimeScale(1);
        action.setEffectiveWeight(1);
        console.log(`Animación "${names[0]}" iniciada.`);
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

  return (
    <RigidBody type="fixed" colliders="hull">
      <group ref={group} {...props} dispose={null}>
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
      </group>
    </RigidBody>
  );
};

export default Dog;

useGLTF.preload('/models/dog.glb');

