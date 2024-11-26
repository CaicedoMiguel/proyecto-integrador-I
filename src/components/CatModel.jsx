import React, { useRef, useEffect, useState } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { RigidBody } from '@react-three/rapier';

const Cat = (props) => {
  const catRef = useRef();
  const [playAnimation, setPlayAnimation] = useState(false);
  const { nodes, materials, animations } = useGLTF('/models/cat.glb');
  const { actions } = useAnimations(animations, catRef);

  useEffect(() => {
    const actionName = 'Scene';
    if (actions[actionName]) {
      if (playAnimation) {
        actions[actionName].reset().play();
      } else {
        actions[actionName].stop();
      }
    }
  }, [playAnimation, actions]);

  const handleClick = () => {
    setPlayAnimation(prev => !prev); // Cambia el estado de reproducción con cada clic
  };

  return (
    <RigidBody type="fixed">
      <group ref={catRef} {...props} dispose={null} scale={[0.04, 0.04, 0.04]} onClick={handleClick}>
        <group name="Sketchfab_Scene">
          <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
            <group name="0df7f1c552db41979cdb0b8efba99edffbx" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Object_2">
                <group name="RootNode">
                  <group name="Rig" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                    <group name="Object_5">
                      <primitive object={nodes._rootJoint} />
                      <skinnedMesh
                        name="Object_43"
                        geometry={nodes.Object_43.geometry}
                        material={materials.Mat_Gradient}
                        skeleton={nodes.Object_43.skeleton}
                      />
                      <group name="Object_42" rotation={[-Math.PI / 2, 0, 0]} scale={100} />
                    </group>
                  </group>
                  <group name="Cat" rotation={[-Math.PI / 2, 0, 0]} scale={100} />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </RigidBody>
  );
};

export default Cat;

useGLTF.preload('/models/cat.glb');
