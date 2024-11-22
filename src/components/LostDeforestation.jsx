import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

const LostDeforestation = (props) => {
    const deforestationRef = useRef();
    const { nodes, materials,animations } = useGLTF('models/deforestation.glb');
    const { actions } = useAnimations(animations, deforestationRef);
    console.log(actions);

    return (
      <group ref={deforestationRef} {...props} dispose={null} position={[30, -10, 0]}>
        <group name="Scene">
        <mesh
          name="Plane"
          castShadow
          receiveShadow
          geometry={nodes.Plane.geometry}
          material={materials['Material.001']}
          position={[0, -5.101, 36.979]}
          scale={[115.932, 169.274, 174.736]}
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
        <group name="Sphere001" position={[-0.045, 1.393, 189.518]} scale={[0.871, 10.988, 0.871]}>
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
        <group
          name="Sphere011"
          position={[34.77, 2.055, 103.743]}
          rotation={[0, 1.021, 0]}
          scale={[0.871, 10.988, 0.871]}>
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
        <group
          name="Sphere017"
          position={[-16.792, 4.165, 175.988]}
          rotation={[0, 1.021, 0]}
          scale={[0.871, 10.988, 0.871]}>
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
        <group name="Sphere025" position={[6.574, -0.317, 149.039]} scale={[0.871, 10.988, 0.871]}>
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
        <group
          name="Sphere035"
          position={[49.503, 1.729, 196.706]}
          rotation={[0, 1.021, 0]}
          scale={[0.871, 10.988, 0.871]}>
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
        <group
          name="stump_2008"
          position={[76.871, -1.819, 131.247]}
          rotation={[-Math.PI, 0.312, -Math.PI]}
          scale={2.041}>
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
        <group
          name="stump_2010"
          position={[76.473, -3.297, 165.718]}
          rotation={[-Math.PI, 0.312, -Math.PI]}
          scale={1.644}>
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



        <group
          name="Esqueleto"
          position={[-26.261, -2.186, 152.126]}
          rotation={[-2.747, -1, 3.065]}
          scale={21.822}>
          <group
            name="Sphere005"
            position={[-0.011, 0.236, 0.056]}
            rotation={[0.108, 0.158, 0.284]}
            scale={[0.04, 0.504, 0.04]}>
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
          <group name="Hueso">
            <group name="Hueso001" position={[0, 0.5, 0]} />
          </group>
        </group>
      </group>
    </group>
  )
    }

export default LostDeforestation;

useGLTF.preload('/models/deforestation.glb')
