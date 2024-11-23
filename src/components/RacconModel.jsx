import React, { useRef,useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'

const Raccon = (props) => {
const racconRef = useRef();
const { nodes, materials, animations } = useGLTF('/models/raccon.glb');
const { actions } = useAnimations(animations, racconRef);

useEffect(() => {
  // Asegurarse de que la animación "metarig|Idle" está disponible y reproducirla
  if (actions['metarig|Idle']) {
    actions['metarig|Idle'].reset().play();
  }
}, [actions]);

  return (
    <RigidBody type="fixed">
    <group ref={racconRef} {...props} dispose={null}scale={[8, 8, 8]}>
    <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group
            name="fa9cf40ad37842b78717922cf2172025fbx"
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.01}>
            <group name="Object_2">
              <group name="RootNode">
                <group
                  name="Ears_low"
                  position={[0, 105.807, -13.33]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                />
                <group
                  name="Tail_low"
                  position={[0, 105.807, -13.33]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                />
                <group
                  name="Head_low"
                  position={[0, 105.807, -13.33]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                />
                <group
                  name="Suit_low"
                  position={[0, 105.807, -13.33]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                />
                <group
                  name="TieKnot_low"
                  position={[0.124, 101.961, 13.495]}
                  rotation={[-2.323, 0, 0]}
                  scale={100}
                />
                <group
                  name="TieTail_low"
                  position={[0.124, 100.067, 14.554]}
                  rotation={[1.148, -0.013, 3.137]}
                  scale={100}
                />
                <group
                  name="Suitcase_low"
                  position={[42.238, 22.191, 44.853]}
                  rotation={[-Math.PI / 2, 0, 0.279]}
                  scale={100}>
                  <mesh
                    name="Suitcase_low_M_Raccoon_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Suitcase_low_M_Raccoon_0.geometry}
                    material={materials.M_Raccoon}
                  />
                </group>
                <group
                  name="SuitcaseStompstoppers_low"
                  position={[44.713, 8.011, 67.803]}
                  rotation={[-Math.PI / 2, 0, 0.279]}
                  scale={100}>
                  <mesh
                    name="SuitcaseStompstoppers_low_M_Raccoon_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.SuitcaseStompstoppers_low_M_Raccoon_0.geometry}
                    material={materials.M_Raccoon}
                  />
                </group>
                <group
                  name="SuitcaseHandle_low"
                  position={[42.238, 49.091, 44.853]}
                  rotation={[-Math.PI / 2, 0, 0.279]}
                  scale={100}>
                  <mesh
                    name="SuitcaseHandle_low_M_Raccoon_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.SuitcaseHandle_low_M_Raccoon_0.geometry}
                    material={materials.M_Raccoon}
                  />
                </group>
                <group
                  name="Shirt_low"
                  position={[0, 105.807, -13.33]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                />
                <group
                  name="Pot_low"
                  position={[-10.8, 232.797, -38.656]}
                  rotation={[-1.875, -0.296, -0.074]}
                  scale={100}
                />
                <group
                  name="PileOfDirt_low"
                  position={[0.364, 200.951, -27.535]}
                  rotation={[-1.303, 0, 0]}
                  scale={100}
                />
                <group
                  name="PiceOfDirt_low"
                  position={[19.394, 186.524, 6.345]}
                  rotation={[-1.287, -0.034, 0.32]}
                  scale={100}
                />
                <group
                  name="SuitcaseSuportFeet_low"
                  position={[43.059, 2.015, 62.036]}
                  rotation={[-Math.PI / 2, 0, 0.279]}
                  scale={100}>
                  <mesh
                    name="SuitcaseSuportFeet_low_M_Raccoon_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.SuitcaseSuportFeet_low_M_Raccoon_0.geometry}
                    material={materials.M_Raccoon}
                  />
                </group>
                <group
                  name="SuitcaseHingeBase_low"
                  position={[42.238, 22.829, 44.853]}
                  rotation={[-Math.PI / 2, 0, 0.279]}
                  scale={100}>
                  <mesh
                    name="SuitcaseHingeBase_low_M_Raccoon_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.SuitcaseHingeBase_low_M_Raccoon_0.geometry}
                    material={materials.M_Raccoon}
                  />
                </group>
                <group
                  name="SuitcaseHingeCylinder_low"
                  position={[42.048, 22.516, 44.908]}
                  rotation={[0, 0.279, 0]}
                  scale={100}>
                  <mesh
                    name="SuitcaseHingeCylinder_low_M_Raccoon_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.SuitcaseHingeCylinder_low_M_Raccoon_0.geometry}
                    material={materials.M_Raccoon}
                  />
                </group>
                <group
                  name="SuitcaseHandleBase_low"
                  position={[42.238, 22.191, 44.853]}
                  rotation={[0, 0.279, 0]}
                  scale={100}>
                  <mesh
                    name="SuitcaseHandleBase_low_M_Raccoon_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.SuitcaseHandleBase_low_M_Raccoon_0.geometry}
                    material={materials.M_Raccoon}
                  />
                </group>
                <group
                  name="SuitcaseLockHinge_low"
                  position={[42.238, 22.191, 44.853]}
                  rotation={[-Math.PI / 2, 0, -2.862]}
                  scale={100}>
                  <mesh
                    name="SuitcaseLockHinge_low_M_Raccoon_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.SuitcaseLockHinge_low_M_Raccoon_0.geometry}
                    material={materials.M_Raccoon}
                  />
                </group>
                <group
                  name="SuitcaseLockBase_low"
                  position={[42.238, 22.191, 44.853]}
                  rotation={[-Math.PI / 2, 0, 0.279]}
                  scale={100}>
                  <mesh
                    name="SuitcaseLockBase_low_M_Raccoon_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.SuitcaseLockBase_low_M_Raccoon_0.geometry}
                    material={materials.M_Raccoon}
                  />
                </group>
                <group
                  name="SuitcaseLockCube_low"
                  position={[41.885, 22.191, 44.954]}
                  rotation={[-Math.PI / 2, 0, 0.279]}
                  scale={100}>
                  <mesh
                    name="SuitcaseLockCube_low_M_Raccoon_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.SuitcaseLockCube_low_M_Raccoon_0.geometry}
                    material={materials.M_Raccoon}
                  />
                </group>
                <group
                  name="SuitcaseLockHingeBase_low"
                  position={[35.796, 22.191, 46.7]}
                  rotation={[-Math.PI / 2, 0, 0.279]}
                  scale={100}>
                  <mesh
                    name="SuitcaseLockHingeBase_low_M_Raccoon_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.SuitcaseLockHingeBase_low_M_Raccoon_0.geometry}
                    material={materials.M_Raccoon}
                  />
                </group>
                <group
                  name="FishBones_low"
                  position={[41.21, 19.92, 45.64]}
                  rotation={[-1.558, 0.004, 0.279]}
                  scale={100}
                />
                <group
                  name="SuitButton_low"
                  position={[4.223, 84.416, 25.45]}
                  rotation={[-0.44, 0.358, -2.978]}
                  scale={100}
                />
                <group
                  name="ButtonStich1_low"
                  position={[4.501, 84.733, 26.123]}
                  rotation={[-0.44, 0.358, -0.622]}
                  scale={100}
                />
                <group
                  name="ButtonStich2_low"
                  position={[4.501, 84.733, 26.123]}
                  rotation={[-0.44, 0.358, -2.193]}
                  scale={100}
                />
                <group
                  name="Nails_low"
                  position={[41.871, 22.191, 44.959]}
                  rotation={[-Math.PI / 2, 0, 0.279]}
                  scale={100}>
                  <mesh
                    name="Nails_low_M_Raccoon_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Nails_low_M_Raccoon_0.geometry}
                    material={materials.M_Raccoon}
                  />
                </group>
                <group
                  name="Body_low"
                  position={[0, 105.807, -13.33]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                />
                <group
                  name="FishHead_low"
                  position={[49.722, 23.023, 75.324]}
                  rotation={[-Math.PI / 2, 0, 0.279]}
                  scale={100}
                />
                <group
                  name="FishTail_low"
                  position={[34.869, 17.538, 23.526]}
                  rotation={[-Math.PI / 2, 0, 0.279]}
                  scale={100}
                />
                <group
                  name="FishTailEnd_low"
                  position={[31.787, 17.538, 12.777]}
                  rotation={[Math.PI, 1.292, -Math.PI]}
                  scale={100}
                />
                <group
                  name="Fish_Rig"
                  position={[40.866, 16.348, 44.441]}
                  rotation={[-Math.PI / 2, 0, 0.279]}
                  scale={100}>
                  <group name="Object_47">
                    <primitive object={nodes._rootJoint} />
                    <skinnedMesh
                      name="Object_50"
                      geometry={nodes.Object_50.geometry}
                      material={materials.M_Raccoon}
                      skeleton={nodes.Object_50.skeleton}
                    />
                    <skinnedMesh
                      name="Object_52"
                      geometry={nodes.Object_52.geometry}
                      material={materials.M_Raccoon}
                      skeleton={nodes.Object_52.skeleton}
                    />
                    <skinnedMesh
                      name="Object_54"
                      geometry={nodes.Object_54.geometry}
                      material={materials.M_Raccoon}
                      skeleton={nodes.Object_54.skeleton}
                    />
                    <skinnedMesh
                      name="Object_56"
                      geometry={nodes.Object_56.geometry}
                      material={materials.M_Raccoon}
                      skeleton={nodes.Object_56.skeleton}
                    />
                    <group
                      name="Object_49"
                      position={[41.21, 19.92, 45.64]}
                      rotation={[-1.558, 0.004, 0.279]}
                      scale={100}
                    />
                    <group
                      name="Object_51"
                      position={[49.722, 23.023, 75.324]}
                      rotation={[-Math.PI / 2, 0, 0.279]}
                      scale={100}
                    />
                    <group
                      name="Object_53"
                      position={[34.869, 17.538, 23.526]}
                      rotation={[-Math.PI / 2, 0, 0.279]}
                      scale={100}
                    />
                    <group
                      name="Object_55"
                      position={[31.787, 17.538, 12.777]}
                      rotation={[Math.PI, 1.292, -Math.PI]}
                      scale={100}
                    />
                  </group>
                </group>
                <group name="metarig" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                  <group name="Object_64">
                    <primitive object={nodes._rootJoint_1} />
                    <skinnedMesh
                      name="Object_67"
                      geometry={nodes.Object_67.geometry}
                      material={materials.M_Raccoon}
                      skeleton={nodes.Object_67.skeleton}
                    />
                    <skinnedMesh
                      name="Object_69"
                      geometry={nodes.Object_69.geometry}
                      material={materials.M_Raccoon}
                      skeleton={nodes.Object_69.skeleton}
                    />
                    <skinnedMesh
                      name="Object_71"
                      geometry={nodes.Object_71.geometry}
                      material={materials.M_Raccoon}
                      skeleton={nodes.Object_71.skeleton}
                    />
                    <skinnedMesh
                      name="Object_73"
                      geometry={nodes.Object_73.geometry}
                      material={materials.M_Raccoon}
                      skeleton={nodes.Object_73.skeleton}
                    />
                    <skinnedMesh
                      name="Object_75"
                      geometry={nodes.Object_75.geometry}
                      material={materials.M_Raccoon}
                      skeleton={nodes.Object_75.skeleton}
                    />
                    <skinnedMesh
                      name="Object_77"
                      geometry={nodes.Object_77.geometry}
                      material={materials.M_Raccoon}
                      skeleton={nodes.Object_77.skeleton}
                    />
                    <skinnedMesh
                      name="Object_79"
                      geometry={nodes.Object_79.geometry}
                      material={materials.M_Raccoon}
                      skeleton={nodes.Object_79.skeleton}
                    />
                    <skinnedMesh
                      name="Object_81"
                      geometry={nodes.Object_81.geometry}
                      material={materials.M_Raccoon}
                      skeleton={nodes.Object_81.skeleton}
                    />
                    <skinnedMesh
                      name="Object_83"
                      geometry={nodes.Object_83.geometry}
                      material={materials.M_Raccoon}
                      skeleton={nodes.Object_83.skeleton}
                    />
                    <skinnedMesh
                      name="Object_85"
                      geometry={nodes.Object_85.geometry}
                      material={materials.M_Raccoon}
                      skeleton={nodes.Object_85.skeleton}
                    />
                    <skinnedMesh
                      name="Object_87"
                      geometry={nodes.Object_87.geometry}
                      material={materials.M_Raccoon}
                      skeleton={nodes.Object_87.skeleton}
                    />
                    <skinnedMesh
                      name="Object_89"
                      geometry={nodes.Object_89.geometry}
                      material={materials.M_Raccoon}
                      skeleton={nodes.Object_89.skeleton}
                    />
                    <skinnedMesh
                      name="Object_91"
                      geometry={nodes.Object_91.geometry}
                      material={materials.M_Raccoon}
                      skeleton={nodes.Object_91.skeleton}
                    />
                    <skinnedMesh
                      name="Object_93"
                      geometry={nodes.Object_93.geometry}
                      material={materials.M_Raccoon}
                      skeleton={nodes.Object_93.skeleton}
                    />
                    <group
                      name="Object_66"
                      position={[0, 105.807, -13.33]}
                      rotation={[-Math.PI / 2, 0, 0]}
                      scale={100}
                    />
                    <group
                      name="Object_68"
                      position={[0, 105.807, -13.33]}
                      rotation={[-Math.PI / 2, 0, 0]}
                      scale={100}
                    />
                    <group
                      name="Object_70"
                      position={[0, 105.807, -13.33]}
                      rotation={[-Math.PI / 2, 0, 0]}
                      scale={100}
                    />
                    <group
                      name="Object_72"
                      position={[0, 105.807, -13.33]}
                      rotation={[-Math.PI / 2, 0, 0]}
                      scale={100}
                    />
                    <group
                      name="Object_74"
                      position={[0.124, 101.961, 13.495]}
                      rotation={[-2.323, 0, 0]}
                      scale={100}
                    />
                    <group
                      name="Object_76"
                      position={[0.124, 100.067, 14.554]}
                      rotation={[1.148, -0.013, 3.137]}
                      scale={100}
                    />
                    <group
                      name="Object_78"
                      position={[0, 105.807, -13.33]}
                      rotation={[-Math.PI / 2, 0, 0]}
                      scale={100}
                    />
                    <group
                      name="Object_80"
                      position={[-10.8, 232.797, -38.656]}
                      rotation={[-1.875, -0.296, -0.074]}
                      scale={100}
                    />
                    <group
                      name="Object_82"
                      position={[0.364, 200.951, -27.535]}
                      rotation={[-1.303, 0, 0]}
                      scale={100}
                    />
                    <group
                      name="Object_84"
                      position={[19.394, 186.524, 6.345]}
                      rotation={[-1.287, -0.034, 0.32]}
                      scale={100}
                    />
                    <group
                      name="Object_86"
                      position={[4.223, 84.416, 25.45]}
                      rotation={[-0.44, 0.358, -2.978]}
                      scale={100}
                    />
                    <group
                      name="Object_88"
                      position={[4.501, 84.733, 26.123]}
                      rotation={[-0.44, 0.358, -0.622]}
                      scale={100}
                    />
                    <group
                      name="Object_90"
                      position={[4.501, 84.733, 26.123]}
                      rotation={[-0.44, 0.358, -2.193]}
                      scale={100}
                    />
                    <group
                      name="Object_92"
                      position={[0, 105.807, -13.33]}
                      rotation={[-Math.PI / 2, 0, 0]}
                      scale={100}
                    />
                  </group>
                </group>
                <group
                  name="Footprint_1"
                  position={[0, 0.207, -44.347]}
                  rotation={[-Math.PI / 2, 0, 3.058]}
                  scale={100}>
                  <mesh
                    name="Footprint_1_M_Environment_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Footprint_1_M_Environment_0.geometry}
                    material={materials.M_Environment}
                  />
                </group>
                <group
                  name="Footprint_2"
                  position={[21.052, 0.207, -52.104]}
                  rotation={[-Math.PI / 2, 0, 3.058]}
                  scale={100}>
                  <mesh
                    name="Footprint_2_M_Environment_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Footprint_2_M_Environment_0.geometry}
                    material={materials.M_Environment}
                  />
                </group>
                <group
                  name="Footprint_3"
                  position={[6.648, 0.207, -76.48]}
                  rotation={[-Math.PI / 2, 0, 3.058]}
                  scale={100}>
                  <mesh
                    name="Footprint_3_M_Environment_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Footprint_3_M_Environment_0.geometry}
                    material={materials.M_Environment}
                  />
                </group>
                <group name="Ground" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                  <mesh
                    name="Ground_M_Environment_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Ground_M_Environment_0.geometry}
                    material={materials.M_Environment}
                  />
                </group>
                <group
                  name="Speech_Bubble"
                  position={[0, 13.458, 139.583]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={[100, 25.743, 25.331]}>
                  <mesh
                    name="Speech_Bubble_M_EnvironmentLit_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Speech_Bubble_M_EnvironmentLit_0.geometry}
                    material={materials.M_EnvironmentLit}
                  />
                </group>
                <group
                  name="Speech_Bubble_Name"
                  position={[-70.937, 30.229, 161.465]}
                  rotation={[-1.547, -0.125, -0.203]}
                  scale={[24.136, 9.324, 7.871]}>
                  <mesh
                    name="Speech_Bubble_Name_M_EnvironmentLit_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Speech_Bubble_Name_M_EnvironmentLit_0.geometry}
                    material={materials.M_EnvironmentLit}
                  />
                  <group
                    name="Name"
                    position={[-0.052, 0.004, 0.034]}
                    rotation={[3.092, 0.02, 3.141]}
                    scale={[2.698, 6.983, 8.265]}>
                    <mesh
                      name="Name_M_Text_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Name_M_Text_0.geometry}
                      material={materials.M_Text}
                    />
                  </group>
                </group>
                <group
                  name="Text_"
                  position={[0.184, 6.218, 140.235]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={[107.646, 30.308, 107.646]}>
                  <mesh
                    name="Text__M_Text_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Text__M_Text_0.geometry}
                    material={materials.M_Text}
                  />
                </group>
                <group
                  name="Continue_Arrow"
                  position={[0, -23.83, 163.427]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={[4.035, 2.832, 2.338]}>
                  <mesh
                    name="Continue_Arrow_M_EnvironmentLit_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Continue_Arrow_M_EnvironmentLit_0.geometry}
                    material={materials.M_EnvironmentLit}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
    </RigidBody>
  )
}

export default Raccon;

useGLTF.preload('/models/raccon.glb');
