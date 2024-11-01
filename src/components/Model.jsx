/* eslint-disable react/no-unknown-property */
// eslint-disable-next-line no-unused-vars
import React, { useRef } from 'react'
import { useGLTF,  } from '@react-three/drei'

const Model = (props) => {
  const group = useRef()
  const { nodes, materials,  } = useGLTF("./public/models/scene3D.glb");
  // const { actions } = useAnimations(animations, group);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group
          name="Birds1"
          position={[0.087, 0.631, 0.44]}
          rotation={[Math.PI / 2, 0, -1.215]}
          scale={0.001}>
          <mesh name="Mesh" geometry={nodes.Mesh.geometry} material={materials.black0} />
          <mesh name="Mesh_1" geometry={nodes.Mesh_1.geometry} material={materials.black1} />
          <mesh name="Mesh_2" geometry={nodes.Mesh_2.geometry} material={materials.yellow0} />
          <mesh name="Mesh_3" geometry={nodes.Mesh_3.geometry} material={materials.green0} />
          <mesh name="Mesh_4" geometry={nodes.Mesh_4.geometry} material={materials.orange0} />
          <mesh name="Mesh_5" geometry={nodes.Mesh_5.geometry} material={materials.yellow1} />
          <mesh name="Mesh_6" geometry={nodes.Mesh_6.geometry} material={materials.orange1} />
          <mesh name="Mesh_7" geometry={nodes.Mesh_7.geometry} material={materials.yellow2} />
          <mesh name="Mesh_8" geometry={nodes.Mesh_8.geometry} material={materials.orange2} />
          <mesh name="Mesh_9" geometry={nodes.Mesh_9.geometry} material={materials.yellow3} />
        </group>
        <mesh
          name="_Racoon_v1_L3PolySphere_1"
          geometry={nodes._Racoon_v1_L3PolySphere_1.geometry}
          material={materials['_Racoon_v1_L3:_Racoon_v2']}
          position={[-2.417, 1.56, -1.004]}
          rotation={[0, -1.26, 0]}
          scale={0.01}
        />
        <mesh
          name="Line001"
          geometry={nodes.Line001.geometry}
          material={materials.Mtl_Palm}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          name="Line002"
          geometry={nodes.Line002.geometry}
          material={materials.Mtl_weird_Tree}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          name="Line005"
          geometry={nodes.Line005.geometry}
          material={materials.Mtl_short_tree}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          name="Cylinder005"
          geometry={nodes.Cylinder005.geometry}
          material={materials.Mtl_tree_bulbe}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          name="Cylinder001"
          geometry={nodes.Cylinder001.geometry}
          material={materials.Mtl_tree_funge}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          name="Cylinder002"
          geometry={nodes.Cylinder002.geometry}
          material={materials.Mtl_pino_tree}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          name="Cylinder006"
          geometry={nodes.Cylinder006.geometry}
          material={materials.Mtl_tree_bulbe}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          name="Cylinder007"
          geometry={nodes.Cylinder007.geometry}
          material={materials.Mtl_tree_bulbe}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          name="Object001"
          geometry={nodes.Object001.geometry}
          material={materials.Mtl_BigTree}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          name="Line054"
          geometry={nodes.Line054.geometry}
          material={materials.Mtl_houseTree}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          name="Cylinder008"
          geometry={nodes.Cylinder008.geometry}
          material={materials.Mtl_pino_tree}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          name="Cylinder009"
          geometry={nodes.Cylinder009.geometry}
          material={materials.Mtl_pino_tree}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          name="Line090"
          geometry={nodes.Line090.geometry}
          material={materials.Mtl_Palm}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          name="Line091"
          geometry={nodes.Line091.geometry}
          material={materials.Mtl_Palm}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          name="Line092"
          geometry={nodes.Line092.geometry}
          material={materials.Mtl_tree_funny}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          name="Line093"
          geometry={nodes.Line093.geometry}
          material={materials.Mtl_short_tree}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          name="Line094"
          geometry={nodes.Line094.geometry}
          material={materials.Mtl_Palm}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          name="Object002"
          geometry={nodes.Object002.geometry}
          material={materials.lambert1}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          name="Line095"
          geometry={nodes.Line095.geometry}
          material={materials.Mtl_Land}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          name="Object003"
          geometry={nodes.Object003.geometry}
          material={materials.Mtl_Land}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          name="Object004"
          geometry={nodes.Object004.geometry}
          material={materials.lambert1}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          name="Object005"
          geometry={nodes.Object005.geometry}
          material={materials.lambert1}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          name="Object006"
          geometry={nodes.Object006.geometry}
          material={materials.lambert1}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          name="Object007"
          geometry={nodes.Object007.geometry}
          material={materials.lambert1}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          name="Object008"
          geometry={nodes.Object008.geometry}
          material={materials.lambert1}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          name="Line096"
          geometry={nodes.Line096.geometry}
          material={materials.Mtl_Palm}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          name="Line097"
          geometry={nodes.Line097.geometry}
          material={materials.Mtl_Palm}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          name="Line098"
          geometry={nodes.Line098.geometry}
          material={materials.Mtl_Palm}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          name="Line112"
          geometry={nodes.Line112.geometry}
          material={materials.Mtl_Palm}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          name="Line113"
          geometry={nodes.Line113.geometry}
          material={materials.Mtl_Palm}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
      </group>
    </group>
  );
};

export default Model;

useGLTF.preload('./public/models/scene3D.glb')
