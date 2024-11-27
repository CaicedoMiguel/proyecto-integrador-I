/* eslint-disable react/no-unknown-property */
// eslint-disable-next-line no-unused-vars
import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import * as THREE from 'three'

const Model = (props) => {
  // Crear una referencia para el grupo principal
  const group = useRef()

  // Cargar el modelo GLTF, incluyendo nodos, materiales y animaciones
  const { nodes, materials, animations } = useGLTF("./models/scene3D.glb")

  // Inicializar las animaciones usando la referencia del grupo
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    if (actions && Object.keys(actions).length > 0) {
      // Listar las animaciones disponibles en la consola
      console.log("Animaciones disponibles:", Object.keys(actions))

      // Reproducir la primera animación disponible
      const firstAction = Object.values(actions)[0]
      firstAction.play()

      // Configurar el bucle de la animación para que se repita infinitamente
      firstAction.setLoop(THREE.LoopRepeat, Infinity)
    }
  }, [actions])

  return (
    <group
      ref={group} // Asignar la referencia al grupo principal
      {...props}
      dispose={null}
      position={[0, -30, 0]} // Establece la posición del modelo
      scale={[15, 15, 15]}    // Establece la escala del modelo
    >
      <group name="Scene">
        <group
          name="Birds1"
          position={[0.087, 0.631, 0.44]}
          rotation={[Math.PI / 2, 0, -1.215]}
          scale={0.001}
        >
          {/* Mallas de Birds1 */}
          <mesh
            name="Mesh"
            castShadow
            receiveShadow
            geometry={nodes.Mesh.geometry}
            material={materials.black0}
          />
          <mesh
            name="Mesh_1"
            castShadow
            receiveShadow
            geometry={nodes.Mesh_1.geometry}
            material={materials.black1}
          />
          <mesh
            name="Mesh_2"
            castShadow
            receiveShadow
            geometry={nodes.Mesh_2.geometry}
            material={materials.yellow0}
          />
          <mesh
            name="Mesh_3"
            castShadow
            receiveShadow
            geometry={nodes.Mesh_3.geometry}
            material={materials.green0}
          />
          <mesh
            name="Mesh_4"
            castShadow
            receiveShadow
            geometry={nodes.Mesh_4.geometry}
            material={materials.orange0}
          />
          <mesh
            name="Mesh_5"
            castShadow
            receiveShadow
            geometry={nodes.Mesh_5.geometry}
            material={materials.yellow1}
          />
          <mesh
            name="Mesh_6"
            castShadow
            receiveShadow
            geometry={nodes.Mesh_6.geometry}
            material={materials.orange1}
          />
          <mesh
            name="Mesh_7"
            castShadow
            receiveShadow
            geometry={nodes.Mesh_7.geometry}
            material={materials.yellow2}
          />
          <mesh
            name="Mesh_8"
            castShadow
            receiveShadow
            geometry={nodes.Mesh_8.geometry}
            material={materials.orange2}
          />
          <mesh
            name="Mesh_9"
            castShadow
            receiveShadow
            geometry={nodes.Mesh_9.geometry}
            material={materials.yellow3}
          />
        </group>

        {/* Otras mallas y grupos */}
        <mesh
          name="_Racoon_v1_L3PolySphere_1"
          castShadow
          receiveShadow
          geometry={nodes._Racoon_v1_L3PolySphere_1.geometry}
          material={materials['_Racoon_v1_L3:_Racoon_v2']}
          position={[-2.417, 1.56, -1.004]}
          rotation={[0, -1.26, 0]}
          scale={0.01}
        />
        <mesh
          name="Line001"
          castShadow
          receiveShadow
          geometry={nodes.Line001.geometry}
          material={materials.Mtl_Palm}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          name="Line002"
          castShadow
          receiveShadow
          geometry={nodes.Line002.geometry}
          material={materials.Mtl_weird_Tree}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          name="Line005"
          castShadow
          receiveShadow
          geometry={nodes.Line005.geometry}
          material={materials.Mtl_short_tree}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          name="Cylinder005"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder005.geometry}
          material={materials.Mtl_tree_bulbe}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          name="Cylinder001"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001.geometry}
          material={materials.Mtl_tree_funge}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          name="Cylinder002"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder002.geometry}
          material={materials.Mtl_pino_tree}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          name="Cylinder006"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder006.geometry}
          material={materials.Mtl_tree_bulbe}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          name="Cylinder007"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder007.geometry}
          material={materials.Mtl_tree_bulbe}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          name="Object001"
          castShadow
          receiveShadow
          geometry={nodes.Object001.geometry}
          material={materials.Mtl_BigTree}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          name="Line054"
          castShadow
          receiveShadow
          geometry={nodes.Line054.geometry}
          material={materials.Mtl_houseTree}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          name="Cylinder008"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder008.geometry}
          material={materials.Mtl_pino_tree}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          name="Cylinder009"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder009.geometry}
          material={materials.Mtl_pino_tree}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          name="Line090"
          castShadow
          receiveShadow
          geometry={nodes.Line090.geometry}
          material={materials.Mtl_Palm}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          name="Line091"
          castShadow
          receiveShadow
          geometry={nodes.Line091.geometry}
          material={materials.Mtl_Palm}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          name="Line092"
          castShadow
          receiveShadow
          geometry={nodes.Line092.geometry}
          material={materials.Mtl_tree_funny}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          name="Line093"
          castShadow
          receiveShadow
          geometry={nodes.Line093.geometry}
          material={materials.Mtl_short_tree}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          name="Line094"
          castShadow
          receiveShadow
          geometry={nodes.Line094.geometry}
          material={materials.Mtl_Palm}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          name="Object002"
          castShadow
          receiveShadow
          geometry={nodes.Object002.geometry}
          material={materials.lambert1}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          name="Line095"
          castShadow
          receiveShadow
          geometry={nodes.Line095.geometry}
          material={materials.Mtl_Land}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          name="Object003"
          castShadow
          receiveShadow
          geometry={nodes.Object003.geometry}
          material={materials.Mtl_Land}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          name="Object004"
          castShadow
          receiveShadow
          geometry={nodes.Object004.geometry}
          material={materials.lambert1}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          name="Object005"
          castShadow
          receiveShadow
          geometry={nodes.Object005.geometry}
          material={materials.lambert1}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          name="Object006"
          castShadow
          receiveShadow
          geometry={nodes.Object006.geometry}
          material={materials.lambert1}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          name="Object007"
          castShadow
          receiveShadow
          geometry={nodes.Object007.geometry}
          material={materials.lambert1}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          name="Object008"
          castShadow
          receiveShadow
          geometry={nodes.Object008.geometry}
          material={materials.lambert1}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          name="Line096"
          castShadow
          receiveShadow
          geometry={nodes.Line096.geometry}
          material={materials.Mtl_Palm}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          name="Line097"
          castShadow
          receiveShadow
          geometry={nodes.Line097.geometry}
          material={materials.Mtl_Palm}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          name="Line098"
          castShadow
          receiveShadow
          geometry={nodes.Line098.geometry}
          material={materials.Mtl_Palm}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          name="Line112"
          castShadow
          receiveShadow
          geometry={nodes.Line112.geometry}
          material={materials.Mtl_Palm}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          name="Line113"
          castShadow
          receiveShadow
          geometry={nodes.Line113.geometry}
          material={materials.Mtl_Palm}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
      </group>
    </group>
  )
}

export default Model

// Precargar el modelo GLTF para mejorar el rendimiento
useGLTF.preload('./public/models/scene3D.glb')
