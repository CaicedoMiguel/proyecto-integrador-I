/* eslint-disable react/no-unknown-property */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useGLTF } from '@react-three/drei'

const LostBiodiversity = (props) => {
    const { nodes, materials } = useGLTF('/models/perdida-biodiversidad.glb')
    
      return (
        <group {...props} dispose={null}>
        <group name="Scene">
          <group name="Plane" position={[0, -5.101, 36.979]} scale={[135.026, 169.274, 162.182]}>
            <mesh
              name="Plane_1"
              castShadow
              receiveShadow
              geometry={nodes.Plane_1.geometry}
              material={materials.Material}
            />
            <mesh
              name="Plane_2"
              castShadow
              receiveShadow
              geometry={nodes.Plane_2.geometry}
              material={materials.Grass}
            />
            <mesh
              name="Plane_3"
              castShadow
              receiveShadow
              geometry={nodes.Plane_3.geometry}
              material={materials['Material.002']}
            />
            <mesh
              name="Plane_4"
              castShadow
              receiveShadow
              geometry={nodes.Plane_4.geometry}
              material={materials['Material.003']}
            />
            <mesh
              name="Plane_5"
              castShadow
              receiveShadow
              geometry={nodes.Plane_5.geometry}
              material={materials['Material.001']}
            />
            <mesh
              name="Plane_6"
              castShadow
              receiveShadow
              geometry={nodes.Plane_6.geometry}
              material={materials.Rock}
            />
            <mesh
              name="Plane_7"
              castShadow
              receiveShadow
              geometry={nodes.Plane_7.geometry}
              material={materials.leaves}
            />
            <mesh
              name="Plane_8"
              castShadow
              receiveShadow
              geometry={nodes.Plane_8.geometry}
              material={materials.wood}
            />
            <mesh
              name="Plane_9"
              castShadow
              receiveShadow
              geometry={nodes.Plane_9.geometry}
              material={materials['wood.001']}
            />
            <mesh
              name="Plane_10"
              castShadow
              receiveShadow
              geometry={nodes.Plane_10.geometry}
              material={materials['leaves.001']}
            />
            <mesh
              name="Plane_11"
              castShadow
              receiveShadow
              geometry={nodes.Plane_11.geometry}
              material={materials.Flowers03}
            />
            <mesh
              name="Plane_12"
              castShadow
              receiveShadow
              geometry={nodes.Plane_12.geometry}
              material={materials.Flowers01}
            />
            <mesh
              name="Plane_13"
              castShadow
              receiveShadow
              geometry={nodes.Plane_13.geometry}
              material={materials['Material.004']}
            />
            <mesh
              name="Plane_14"
              castShadow
              receiveShadow
              geometry={nodes.Plane_14.geometry}
              material={materials['Material.005']}
            />
            <mesh
              name="Plane_15"
              castShadow
              receiveShadow
              geometry={nodes.Plane_15.geometry}
              material={materials['15_caribou']}
            />
          </group>
          <group name="Pine" position={[16.592, -3.151, 51.429]} scale={[0.777, 0.949, 0.949]}>
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
              material={materials['Material.003']}
            />
          </group>
          <mesh
            name="Spruce002"
            castShadow
            receiveShadow
            geometry={nodes.Spruce002.geometry}
            material={materials['Material.005']}
            position={[-0.077, -4.502, 25.152]}
            scale={0.917}
          />
          <group
            name="Sketchfab_model"
            position={[80.883, 0.347, 107.959]}
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
                    position={[-1.986, 0.255, -0.069]}
                    rotation={[-0.414, 0.23, 2.263]}
                    scale={0.326}
                  />
                </group>
                <group
                  name="15_caribou"
                  position={[0, 0, -222.41]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                />
              </group>
            </group>
          </group>
          <mesh
            name="Log001"
            castShadow
            receiveShadow
            geometry={nodes.Log001.geometry}
            material={materials['Material.001']}
            position={[68.353, -1.67, 64.214]}
            rotation={[0, -0.443, 0]}
            scale={1.644}
          />
          <mesh
            name="Log003"
            castShadow
            receiveShadow
            geometry={nodes.Log003.geometry}
            material={materials['Material.001']}
            position={[40.334, -2.557, 115.359]}
            rotation={[0, -0.443, 0]}
            scale={1.644}
          />
          <mesh
            name="rock019"
            castShadow
            receiveShadow
            geometry={nodes.rock019.geometry}
            material={materials.Rock}
            position={[-9.537, -3.371, 104.245]}
            scale={5.554}
          />
          <group name="Sphere004" position={[-8.645, 4.417, 17.461]} scale={[0.871, 10.988, 0.871]}>
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
          <group name="Sphere008" position={[-24.747, 2.181, 77.576]} scale={[0.871, 10.988, 0.871]}>
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
          <mesh
            name="Sphere010"
            castShadow
            receiveShadow
            geometry={nodes.Sphere010.geometry}
            material={materials.wood}
            position={[-11.361, 3.636, 85.864]}
            scale={[0.871, 10.988, 0.871]}
          />
          <group
            name="Sphere026"
            position={[-28.351, 4.85, 52.119]}
            rotation={[0, 1.021, 0]}
            scale={[0.871, 10.988, 0.871]}>
            <mesh
              name="Sphere041"
              castShadow
              receiveShadow
              geometry={nodes.Sphere041.geometry}
              material={materials['wood.001']}
            />
            <mesh
              name="Sphere041_1"
              castShadow
              receiveShadow
              geometry={nodes.Sphere041_1.geometry}
              material={materials['leaves.001']}
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
              material={materials['Material.001']}
            />
            <mesh
              name="Plane007_1"
              castShadow
              receiveShadow
              geometry={nodes.Plane007_1.geometry}
              material={materials['Material.004']}
            />
          </group>
          <group
            name="stump_2001"
            position={[43.892, -1.515, 65.37]}
            rotation={[-Math.PI, 0.312, -Math.PI]}
            scale={1.644}>
            <mesh
              name="Plane001"
              castShadow
              receiveShadow
              geometry={nodes.Plane001.geometry}
              material={materials['Material.001']}
            />
            <mesh
              name="Plane001_1"
              castShadow
              receiveShadow
              geometry={nodes.Plane001_1.geometry}
              material={materials['Material.004']}
            />
          </group>
          <group
            name="stump_2004"
            position={[20.521, -1.56, 92.506]}
            rotation={[-Math.PI, 0.312, -Math.PI]}
            scale={1.644}>
            <mesh
              name="Plane004"
              castShadow
              receiveShadow
              geometry={nodes.Plane004.geometry}
              material={materials['Material.001']}
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
            name="stump_2006"
            position={[10.346, -1.871, 37.098]}
            rotation={[-Math.PI, 0.312, -Math.PI]}
            scale={1.644}>
            <mesh
              name="Plane011"
              castShadow
              receiveShadow
              geometry={nodes.Plane011.geometry}
              material={materials['Material.001']}
            />
            <mesh
              name="Plane011_1"
              castShadow
              receiveShadow
              geometry={nodes.Plane011_1.geometry}
              material={materials['Material.004']}
            />
          </group>
        </group>
      </group>
    );
};

export default LostBiodiversity;

useGLTF.preload('/models/perdida-biodiversidad.glb')
