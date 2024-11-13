/* eslint-disable react/no-unknown-property */
// eslint-disable-next-line no-unused-vars
import React, { useRef } from 'react'
import { useGLTF,  } from '@react-three/drei'

const Model = (props) => {
  //const group = useRef()
  const { nodes, materials,  } = useGLTF("./public/models/scene3D.glb");
  // const { actions } = useAnimations(animations, group);

  return (
    <group {...props} dispose={null}>
      <group position={[0.087, 0.631, 0.44]} rotation={[Math.PI / 2, 0, -1.215]} scale={0.001}>
        <mesh castShadow receiveShadow geometry={nodes.Mesh.geometry} material={materials.black0} />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_1.geometry}
          material={materials.black1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_2.geometry}
          material={materials.yellow0}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_3.geometry}
          material={materials.green0}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_4.geometry}
          material={materials.orange0}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_5.geometry}
          material={materials.yellow1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_6.geometry}
          material={materials.orange1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_7.geometry}
          material={materials.yellow2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_8.geometry}
          material={materials.orange2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_9.geometry}
          material={materials.yellow3}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes._Racoon_v1_L3PolySphere_1.geometry}
        material={materials['_Racoon_v1_L3:_Racoon_v2']}
        position={[-2.417, 1.56, -1.004]}
        rotation={[0, -1.26, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Line001.geometry}
        material={materials.Mtl_Palm}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Line002.geometry}
        material={materials.Mtl_weird_Tree}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Line005.geometry}
        material={materials.Mtl_short_tree}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder005.geometry}
        material={materials.Mtl_tree_bulbe}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder001.geometry}
        material={materials.Mtl_tree_funge}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder002.geometry}
        material={materials.Mtl_pino_tree}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder006.geometry}
        material={materials.Mtl_tree_bulbe}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder007.geometry}
        material={materials.Mtl_tree_bulbe}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object001.geometry}
        material={materials.Mtl_BigTree}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Line054.geometry}
        material={materials.Mtl_houseTree}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder008.geometry}
        material={materials.Mtl_pino_tree}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder009.geometry}
        material={materials.Mtl_pino_tree}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Line090.geometry}
        material={materials.Mtl_Palm}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Line091.geometry}
        material={materials.Mtl_Palm}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Line092.geometry}
        material={materials.Mtl_tree_funny}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Line093.geometry}
        material={materials.Mtl_short_tree}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Line094.geometry}
        material={materials.Mtl_Palm}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object002.geometry}
        material={materials.lambert1}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        receiveShadow
        geometry={nodes.Line095.geometry}
        material={materials.Mtl_Land}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object003.geometry}
        material={materials.Mtl_Land}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object004.geometry}
        material={materials.lambert1}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object005.geometry}
        material={materials.lambert1}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object006.geometry}
        material={materials.lambert1}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object007.geometry}
        material={materials.lambert1}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object008.geometry}
        material={materials.lambert1}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Line096.geometry}
        material={materials.Mtl_Palm}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Line097.geometry}
        material={materials.Mtl_Palm}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Line098.geometry}
        material={materials.Mtl_Palm}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Line112.geometry}
        material={materials.Mtl_Palm}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Line113.geometry}
        material={materials.Mtl_Palm}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Racoon2.geometry}
        material={materials['_Racoon_v1_L3:_Racoon_v2.001']}
        position={[-1.766, 1.366, 1.661]}
        rotation={[0, 0.195, 0]}
        scale={0.01}
      />
    </group>
  )
};

export default Model;

useGLTF.preload('./public/models/scene3D.glb')
