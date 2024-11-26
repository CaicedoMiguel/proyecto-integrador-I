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

          <RigidBody type="fixed" colliders="trimesh">
  <group
    name="stump_2005"
    position={[14.408, -3.454, 169.232]}
    rotation={[-Math.PI, 0.312, -Math.PI]}
    scale={1.644}
  >
    <mesh
      name="Plane006"
      castShadow
      receiveShadow
      geometry={nodes.Plane006.geometry}
      material={materials['Material.002']}
    />
    <mesh
      name="Plane006_1"
      castShadow
      receiveShadow
      geometry={nodes.Plane006_1.geometry}
      material={materials['Material.004']}
    />
  </group>
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

          <group
          name="stump_2004"
          position={[2.523, -1.56, 78.002]}
          rotation={[-Math.PI, 0.312, -Math.PI]}
          scale={1.644}>
          <mesh
            name="Plane004"
            castShadow
            receiveShadow
            geometry={nodes.Plane004.geometry}
            material={materials['Material.002']}
          />
          <mesh
            name="Plane004_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane004_1.geometry}
            material={materials['Material.004']}
          />
          <mesh
            name="Plane004_2"
            castShadow
            receiveShadow
            geometry={nodes.Plane004_2.geometry}
            material={materials.Grass}
          />
          <mesh
            name="Plane004_3"
            castShadow
            receiveShadow
            geometry={nodes.Plane004_3.geometry}
            material={materials.Rock}
          />
          <mesh
            name="Plane004_4"
            castShadow
            receiveShadow
            geometry={nodes.Plane004_4.geometry}
            material={materials.wood}
          />
          <mesh
            name="Plane004_5"
            castShadow
            receiveShadow
            geometry={nodes.Plane004_5.geometry}
            material={materials.Flowers03}
          />
          <mesh
            name="Plane004_6"
            castShadow
            receiveShadow
            geometry={nodes.Plane004_6.geometry}
            material={materials.Flowers01}
          />
          <mesh
            name="Plane004_7"
            castShadow
            receiveShadow
            geometry={nodes.Plane004_7.geometry}
            material={materials.leaves}
          />
          <mesh
            name="Plane004_8"
            castShadow
            receiveShadow
            geometry={nodes.Plane004_8.geometry}
            material={materials['wood.001']}
          />
          <mesh
            name="Plane004_9"
            castShadow
            receiveShadow
            geometry={nodes.Plane004_9.geometry}
            material={materials['leaves.001']}
          />
        </group>
        </group>
    </group>

          
          
    );
  };
  
  export default LostDeforestation;
  
  useGLTF.preload('/models/deforestation.glb');