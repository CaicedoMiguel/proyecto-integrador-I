import React, { useRef, useState } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier';

const LostDeforestation = (props) => {
    const deforestationRef = useRef();
    const { nodes, materials,animations } = useGLTF('models/deforestation.glb');
    const { actions } = useAnimations(animations, deforestationRef);
    console.log(actions);
    const [fallenTrees, setFallenTrees] = useState([]);

    const handleTreeClick = (event, treeName) => {
      event.stopPropagation();
      if (!fallenTrees.includes(treeName)) {
        setFallenTrees(prevState => [...prevState, treeName]);
      }
    };
  
    const isTreeFallen = (treeName) => fallenTrees.includes(treeName);
  
    const TreeRigidBody = ({ treeName, position, rotation, scale, children }) => (
      <RigidBody
        type={isTreeFallen(treeName) ? "dynamic" : "fixed"}
        mass={5}
        position={position}
        rotation={rotation}
        scale={scale}
        colliders="hull"
        restitution={0.2}
        friction={1}
      >
        <group onClick={(event) => handleTreeClick(event, treeName)}>
          {children}
        </group>
      </RigidBody>
    );
  
    return (
      <group ref={deforestationRef} {...props} dispose={null} position={[30, -10, 0]}>
        <group name="Scene">
          <RigidBody type="fixed" colliders="trimesh">
            <mesh
              name="Plane"
              castShadow
              receiveShadow
              geometry={nodes.Plane.geometry}
              material={materials['Material.001']}
              position={[0, -5.101, 36.979]}
              scale={[115.932, 169.274, 174.736]}
            />
          </RigidBody>
  
          <TreeRigidBody
            treeName="Sphere005"
            position={[-26.507, 2.958, 153.338]}
            scale={[0.871, 10.988, 0.871]}
          >
            <group name="Sphere005">
              <mesh
                name="Sphere007"
                castShadow
                receiveShadow
                geometry={nodes.Sphere007.geometry}
                material={materials['wood.001']}
              />
              <mesh
                name="Sphere007_1"
                castShadow
                receiveShadow
                geometry={nodes.Sphere007_1.geometry}
                material={materials['leaves.001']}
              />
            </group>
          </TreeRigidBody>
  
          <TreeRigidBody
            treeName="Sphere001"
            position={[-0.045, 1.393, 189.518]}
            scale={[0.871, 10.988, 0.871]}
          >
            <group name="Sphere001">
              <mesh
                name="Sphere001_1"
                castShadow
                receiveShadow
                geometry={nodes.Sphere001_1.geometry}
                material={materials['wood.001']}
              />
              <mesh
                name="Sphere001_2"
                castShadow
                receiveShadow
                geometry={nodes.Sphere001_2.geometry}
                material={materials['leaves.001']}
              />
            </group>
          </TreeRigidBody>
  
          <TreeRigidBody
            treeName="Sphere025"
            position={[6.574, -0.317, 149.039]}
            scale={[0.871, 10.988, 0.871]}
          >
            <group name="Sphere025">
              <mesh
                name="Sphere031"
                castShadow
                receiveShadow
                geometry={nodes.Sphere031.geometry}
                material={materials['wood.001']}
              />
              <mesh
                name="Sphere031_1"
                castShadow
                receiveShadow
                geometry={nodes.Sphere031_1.geometry}
                material={materials['leaves.001']}
              />
            </group>
          </TreeRigidBody>
  
          <TreeRigidBody
            treeName="Sphere017"
            position={[-16.792, 4.165, 175.988]}
            rotation={[0, 1.021, 0]}
            scale={[0.871, 10.988, 0.871]}
          >
            <group name="Sphere017">
              <mesh
                name="Sphere028"
                castShadow
                receiveShadow
                geometry={nodes.Sphere028.geometry}
                material={materials['wood.001']}
              />
              <mesh
                name="Sphere028_1"
                castShadow
                receiveShadow
                geometry={nodes.Sphere028_1.geometry}
                material={materials['leaves.001']}
              />
            </group>
          </TreeRigidBody>
  
          {/* Otros objetos de la escena sin físicas */}
          <mesh
            name="Log001"
            castShadow
            receiveShadow
            geometry={nodes.Log001.geometry}
            material={materials['Material.002']}
            position={[68.353, -1.67, 64.214]}
            rotation={[0, 0.932, 0]}
            scale={1.644}
          />
  
          <group name="Sphere030" position={[89.439, -2.323, 98.52]} scale={[3.609, 1.86, 3.609]}>
            <mesh
              name="Sphere027"
              castShadow
              receiveShadow
              geometry={nodes.Sphere027.geometry}
              material={materials.leaves}
            />
            <mesh
              name="Sphere027_1"
              castShadow
              receiveShadow
              geometry={nodes.Sphere027_1.geometry}
              material={materials.wood}
            />
            <mesh
              name="Sphere027_2"
              castShadow
              receiveShadow
              geometry={nodes.Sphere027_2.geometry}
              material={materials.Rock}
            />
            <mesh
              name="Sphere027_3"
              castShadow
              receiveShadow
              geometry={nodes.Sphere027_3.geometry}
              material={materials.Grass}
            />
            <mesh
              name="Sphere027_4"
              castShadow
              receiveShadow
              geometry={nodes.Sphere027_4.geometry}
              material={materials.Flowers03}
            />
            <mesh
              name="Sphere027_5"
              castShadow
              receiveShadow
              geometry={nodes.Sphere027_5.geometry}
              material={materials.Flowers01}
            />
            <mesh
              name="Sphere027_6"
              castShadow
              receiveShadow
              geometry={nodes.Sphere027_6.geometry}
              material={materials['Material.002']}
            />
            <mesh
              name="Sphere027_7"
              castShadow
              receiveShadow
              geometry={nodes.Sphere027_7.geometry}
              material={materials['Material.004']}
            />
            <mesh
              name="Sphere027_8"
              castShadow
              receiveShadow
              geometry={nodes.Sphere027_8.geometry}
              material={materials['wood.001']}
            />
            <mesh
              name="Sphere027_9"
              castShadow
              receiveShadow
              geometry={nodes.Sphere027_9.geometry}
              material={materials['leaves.001']}
            />
          </group>
  
          <group name="Sphere024" position={[39.59, 1.799, 166.35]} scale={[0.871, 10.988, 0.871]}>
            <mesh
              name="Sphere021"
              castShadow
              receiveShadow
              geometry={nodes.Sphere021.geometry}
              material={materials['wood.001']}
            />
            <mesh
              name="Sphere021_1"
              castShadow
              receiveShadow
              geometry={nodes.Sphere021_1.geometry}
              material={materials['leaves.001']}
            />
          </group>
  
          <group name="Sphere011" position={[34.77, 2.055, 103.743]} rotation={[0, 1.021, 0]} scale={[0.871, 10.988, 0.871]}>
            <mesh
              name="Sphere025_1"
              castShadow
              receiveShadow
              geometry={nodes.Sphere025_1.geometry}
              material={materials['wood.001']}
            />
            <mesh
              name="Sphere025_2"
              castShadow
              receiveShadow
              geometry={nodes.Sphere025_2.geometry}
              material={materials['leaves.001']}
            />
          </group>
  
          <group name="Sphere034" position={[59.733, 1.481, 142.429]} scale={[0.871, 10.988, 0.871]}>
            <mesh
              name="Sphere034_1"
              castShadow
              receiveShadow
              geometry={nodes.Sphere034_1.geometry}
              material={materials['wood.001']}
            />
            <mesh
              name="Sphere034_2"
              castShadow
              receiveShadow
              geometry={nodes.Sphere034_2.geometry}
              material={materials['leaves.001']}
            />
          </group>
  
          <group name="Sphere035" position={[49.503, 1.729, 196.706]} rotation={[0, 1.021, 0]} scale={[0.871, 10.988, 0.871]}>
            <mesh
              name="Sphere035_1"
              castShadow
              receiveShadow
              geometry={nodes.Sphere035_1.geometry}
              material={materials['wood.001']}
            />
            <mesh
              name="Sphere035_2"
              castShadow
              receiveShadow
              geometry={nodes.Sphere035_2.geometry}
              material={materials['leaves.001']}
            />
          </group>
  
          <group name="stump_2008" position={[76.871, -1.819, 131.247]} rotation={[-Math.PI, 0.312, -Math.PI]} scale={2.041}>
            <mesh
              name="Plane013"
              castShadow
              receiveShadow
              geometry={nodes.Plane013.geometry}
              material={materials['Material.002']}
            />
            <mesh
              name="Plane013_1"
              castShadow
              receiveShadow
              geometry={nodes.Plane013_1.geometry}
              material={materials['Material.004']}
            />
          </group>
  
          <group name="stump_2010" position={[76.473, -3.297, 165.718]} rotation={[-Math.PI, 0.312, -Math.PI]} scale={1.644}>
            <mesh
              name="Plane015"
              castShadow
              receiveShadow
              geometry={nodes.Plane015.geometry}
              material={materials['Material.002']}
            />
            <mesh
              name="Plane015_1"
              castShadow
              receiveShadow
              geometry={nodes.Plane015_1.geometry}
              material={materials['Material.004']}
            />
          </group>
        </group>
      </group>
    );
  };
  
  export default LostDeforestation;
  
  useGLTF.preload('/models/deforestation.glb');