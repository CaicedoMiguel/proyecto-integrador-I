/* eslint-disable react/no-unknown-property */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useGLTF } from '@react-three/drei'

const LostBiodiversity = (props) => {
    const { nodes, materials } = useGLTF('/models/perdida-biodiversidad.glb')
    
      return (
        <group {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="Plane"
          castShadow
          receiveShadow
          geometry={nodes.Plane.geometry}
          material={materials['Material.001']}
          position={[0, -5.101, 36.979]}
          scale={[135.026, 169.274, 162.182]}
        />
        <group name="rock022" position={[85.932, -4.163, 68.797]} scale={5.554}>
          <mesh
            name="rock013"
            castShadow
            receiveShadow
            geometry={nodes.rock013.geometry}
            material={materials.Rock}
          />
          <mesh
            name="rock013_1"
            castShadow
            receiveShadow
            geometry={nodes.rock013_1.geometry}
            material={materials.Grass}
          />
          <mesh
            name="rock013_2"
            castShadow
            receiveShadow
            geometry={nodes.rock013_2.geometry}
            material={materials.wood}
          />
          <mesh
            name="rock013_3"
            castShadow
            receiveShadow
            geometry={nodes.rock013_3.geometry}
            material={materials.Flowers03}
          />
          <mesh
            name="rock013_4"
            castShadow
            receiveShadow
            geometry={nodes.rock013_4.geometry}
            material={materials.Flowers01}
          />
          <mesh
            name="rock013_5"
            castShadow
            receiveShadow
            geometry={nodes.rock013_5.geometry}
            material={materials.leaves}
          />
          <mesh
            name="rock013_6"
            castShadow
            receiveShadow
            geometry={nodes.rock013_6.geometry}
            material={materials['Material.002']}
          />
          <mesh
            name="rock013_7"
            castShadow
            receiveShadow
            geometry={nodes.rock013_7.geometry}
            material={materials['Material.004']}
          />
          <mesh
            name="rock013_8"
            castShadow
            receiveShadow
            geometry={nodes.rock013_8.geometry}
            material={materials['Material.003']}
          />
          <mesh
            name="rock013_9"
            castShadow
            receiveShadow
            geometry={nodes.rock013_9.geometry}
            material={materials['Material.005']}
          />
          <mesh
            name="rock013_10"
            castShadow
            receiveShadow
            geometry={nodes.rock013_10.geometry}
            material={materials['Material.006']}
          />
          <mesh
            name="rock013_11"
            castShadow
            receiveShadow
            geometry={nodes.rock013_11.geometry}
            material={materials['wood.001']}
          />
          <mesh
            name="rock013_12"
            castShadow
            receiveShadow
            geometry={nodes.rock013_12.geometry}
            material={materials['leaves.001']}
          />
        </group>
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
        </group>
        <group
          name="stump_1001"
          position={[40.174, -3.629, 21.226]}
          rotation={[0, 0.345, 0]}
          scale={1.644}>
          <mesh
            name="Plane007"
            castShadow
            receiveShadow
            geometry={nodes.Plane007.geometry}
            material={materials['Material.002']}
          />
          <mesh
            name="Plane007_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane007_1.geometry}
            material={materials['Material.004']}
          />
        </group>
        <mesh
          name="Log003"
          castShadow
          receiveShadow
          geometry={nodes.Log003.geometry}
          material={materials['Material.002']}
          position={[26.168, -2.557, 73.037]}
          rotation={[0, -0.443, 0]}
          scale={1.644}
        />
        <group
          name="stump_2006"
          position={[1.114, -1.871, 37.098]}
          rotation={[-Math.PI, 0.312, -Math.PI]}
          scale={1.644}>
          <mesh
            name="Plane011"
            castShadow
            receiveShadow
            geometry={nodes.Plane011.geometry}
            material={materials['Material.002']}
          />
          <mesh
            name="Plane011_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane011_1.geometry}
            material={materials['Material.004']}
          />
        </group>
        <group name="Pine004" position={[-36.879, -6.943, 35.663]} scale={[0.777, 0.949, 0.949]}>
          <mesh
            name="Plane024"
            castShadow
            receiveShadow
            geometry={nodes.Plane024.geometry}
            material={materials['Material.003']}
          />
          <mesh
            name="Plane024_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane024_1.geometry}
            material={materials['Material.005']}
          />
        </group>
        <group name="Sphere004" position={[-33.58, 4.417, 17.461]} scale={[0.871, 10.988, 0.871]}>
          <mesh
            name="Sphere034"
            castShadow
            receiveShadow
            geometry={nodes.Sphere034.geometry}
            material={materials['wood.001']}
          />
          <mesh
            name="Sphere034_1"
            castShadow
            receiveShadow
            geometry={nodes.Sphere034_1.geometry}
            material={materials['leaves.001']}
          />
        </group>
        <group name="Sphere008" position={[-43.437, 2.181, 48.598]} scale={[0.871, 10.988, 0.871]}>
          <mesh
            name="Sphere036"
            castShadow
            receiveShadow
            geometry={nodes.Sphere036.geometry}
            material={materials['wood.001']}
          />
          <mesh
            name="Sphere036_1"
            castShadow
            receiveShadow
            geometry={nodes.Sphere036_1.geometry}
            material={materials['leaves.001']}
          />
        </group>
        <group
          name="Sphere028"
          position={[-42.292, 3.266, -4.078]}
          rotation={[0, 1.021, 0]}
          scale={[0.871, 10.988, 0.871]}>
          <mesh
            name="Sphere042"
            castShadow
            receiveShadow
            geometry={nodes.Sphere042.geometry}
            material={materials['wood.001']}
          />
          <mesh
            name="Sphere042_1"
            castShadow
            receiveShadow
            geometry={nodes.Sphere042_1.geometry}
            material={materials['leaves.001']}
          />
        </group>
        <group
          name="Sketchfab_model"
          position={[80.883, 0, 107.959]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.179}>
          <group name="animalSkullsfbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="RootNode">
              <group
                name="07_otter"
                position={[-252.388, 0, -111.205]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={100}
              />
              <group name="14_bighorn_sheep" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh
                  name="14_bighorn_sheep_14_bighorn_sheep_0"
                  castShadow
                  receiveShadow
                  geometry={nodes['14_bighorn_sheep_14_bighorn_sheep_0'].geometry}
                  material={materials['14_bighorn_sheep']}
                  position={[-4.239, 2.315, -0.105]}
                  rotation={[-0.041, 0.307, 1.706]}
                  scale={0.326}
                />
                <mesh
                  name="14_bighorn_sheep_14_bighorn_sheep_0001"
                  castShadow
                  receiveShadow
                  geometry={nodes['14_bighorn_sheep_14_bighorn_sheep_0001'].geometry}
                  material={materials['14_bighorn_sheep']}
                  position={[0.854, 0.255, -0.069]}
                  rotation={[-0.073, -0.302, -1.811]}
                  scale={0.326}
                />
              </group>
              <group
                name="15_caribou"
                position={[0, 0, -222.41]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={100}>
                <mesh
                  name="15_caribou_15_caribou_0"
                  castShadow
                  receiveShadow
                  geometry={nodes['15_caribou_15_caribou_0'].geometry}
                  material={materials['15_caribou']}
                  position={[-2.89, 3.126, 0]}
                  scale={0.471}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
    );
};

export default LostBiodiversity;

useGLTF.preload('/models/perdida-biodiversidad.glb')
