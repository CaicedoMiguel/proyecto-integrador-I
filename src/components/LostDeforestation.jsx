/* eslint-disable react/no-unknown-property */
// eslint-disable-next-line no-unused-vars
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

const LostDeforestation = (props) => {
    const { nodes, materials } = useGLTF('/deforestation.glb')
    return (
      <group {...props} dispose={null}>
      <group position={[0, -5.101, 36.979]} scale={[115.932, 169.274, 174.736]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane_1.geometry}
          material={materials['Material.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane_2.geometry}
          material={materials.Grass}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane_3.geometry}
          material={materials.Rock}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane_4.geometry}
          material={materials.wood}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane_5.geometry}
          material={materials.Flowers03}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane_6.geometry}
          material={materials.Flowers01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane_7.geometry}
          material={materials.leaves}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane_8.geometry}
          material={materials['Material.002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane_9.geometry}
          material={materials['Material.004']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane_10.geometry}
          material={materials['wood.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane_11.geometry}
          material={materials['leaves.001']}
        />
      </group>
      <group
        position={[43.892, -1.515, 65.37]}
        rotation={[-Math.PI, 0.312, -Math.PI]}
        scale={1.644}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001.geometry}
          material={materials['Material.002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001_1.geometry}
          material={materials['Material.004']}
        />
      </group>
      <group
        position={[45.422, -2.558, 15.944]}
        rotation={[-Math.PI, 0.312, -Math.PI]}
        scale={1.644}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane003.geometry}
          material={materials['Material.002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane003_1.geometry}
          material={materials['Material.004']}
        />
      </group>
      <group position={[90.211, -3.951, 30.473]} rotation={[0, 0.345, 0]} scale={1.644}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane008.geometry}
          material={materials['Material.002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane008_1.geometry}
          material={materials['Material.004']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Log001.geometry}
        material={materials['Material.002']}
        position={[68.353, -1.67, 64.214]}
        rotation={[0, 0.932, 0]}
        scale={1.644}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Log003.geometry}
        material={materials['Material.002']}
        position={[26.168, -2.557, 73.037]}
        rotation={[0, -0.443, 0]}
        scale={1.644}
      />
      <group position={[39.59, 1.799, 166.35]} scale={[0.871, 10.988, 0.871]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere021.geometry}
          material={materials['wood.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere021_1.geometry}
          material={materials['leaves.001']}
        />
      </group>
      <group position={[-0.045, 1.393, 189.518]} scale={[0.871, 10.988, 0.871]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere001_1.geometry}
          material={materials['wood.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere001_2.geometry}
          material={materials['leaves.001']}
        />
      </group>
      <group position={[-26.507, 2.958, 153.338]} scale={[0.871, 10.988, 0.871]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere007.geometry}
          material={materials['wood.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere007_1.geometry}
          material={materials['leaves.001']}
        />
      </group>
      <group
        position={[34.77, 2.055, 103.743]}
        rotation={[0, 1.021, 0]}
        scale={[0.871, 10.988, 0.871]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere025_1.geometry}
          material={materials['wood.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere025_2.geometry}
          material={materials['leaves.001']}
        />
      </group>
      <group
        position={[-16.792, 4.165, 175.988]}
        rotation={[0, 1.021, 0]}
        scale={[0.871, 10.988, 0.871]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere028.geometry}
          material={materials['wood.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere028_1.geometry}
          material={materials['leaves.001']}
        />
      </group>
      <group position={[6.574, -0.317, 149.039]} scale={[0.871, 10.988, 0.871]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere031.geometry}
          material={materials['wood.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere031_1.geometry}
          material={materials['leaves.001']}
        />
      </group>
      <group position={[59.733, 1.481, 142.429]} scale={[0.871, 10.988, 0.871]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere034_1.geometry}
          material={materials['wood.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere034_2.geometry}
          material={materials['leaves.001']}
        />
      </group>
      <group
        position={[49.503, 1.729, 196.706]}
        rotation={[0, 1.021, 0]}
        scale={[0.871, 10.988, 0.871]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere035_1.geometry}
          material={materials['wood.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere035_2.geometry}
          material={materials['leaves.001']}
        />
      </group>
      <group
        position={[50.236, -2.813, 124.063]}
        rotation={[-Math.PI, 0.312, -Math.PI]}
        scale={1.644}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane012.geometry}
          material={materials['Material.002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane012_1.geometry}
          material={materials['Material.004']}
        />
      </group>
      <group
        position={[77.052, -1.409, 131.441]}
        rotation={[-Math.PI, 0.312, -Math.PI]}
        scale={2.041}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane013.geometry}
          material={materials['Material.002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane013_1.geometry}
          material={materials['Material.004']}
        />
      </group>
      <group
        position={[44.314, -3.588, 188.535]}
        rotation={[-Math.PI, 0.312, -Math.PI]}
        scale={1.644}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane014.geometry}
          material={materials['Material.002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane014_1.geometry}
          material={materials['Material.004']}
        />
      </group>
      <group
        position={[76.62, -2.827, 165.941]}
        rotation={[-Math.PI, 0.312, -Math.PI]}
        scale={1.644}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane015.geometry}
          material={materials['Material.002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane015_1.geometry}
          material={materials['Material.004']}
        />
      </group>
      <group position={[130.478, -3.205, 85.339]} rotation={[0, 0.345, 0]} scale={1.644}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane017.geometry}
          material={materials['Material.002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane017_1.geometry}
          material={materials['Material.004']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere027.geometry}
        material={materials.leaves}
        position={[55.742, -0.86, 167.463]}
        scale={[7.499, 15.69, 7.499]}
      />
    </group>
  )
    }

export default LostDeforestation;

useGLTF.preload('/models/deforestation.glb')
