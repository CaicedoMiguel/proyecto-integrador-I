// eslint-disable-next-line no-unused-vars
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const LostDeforestation = (props) => {
    const { nodes, materials } = useGLTF('/deforestation.glb')

    return (
      <group {...props} dispose={null}>
        <group position={[-0.916, -3.433, -0.935]} scale={[0.13, 0.259, 0.13]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle159.geometry}
            material={materials.Grass}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle159_1.geometry}
            material={materials['Material.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle159_2.geometry}
            material={materials.Rock}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle159_3.geometry}
            material={materials.wood}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle159_4.geometry}
            material={materials.Flowers03}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle159_5.geometry}
            material={materials.Flowers01}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle159_6.geometry}
            material={materials['Material.002']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle159_7.geometry}
            material={materials['Material.004']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle159_8.geometry}
            material={materials.leaves}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.rock011.geometry}
          material={materials.Rock}
          position={[37.14, -5.381, 35.897]}
          rotation={[-3.036, 1.422, Math.PI]}
          scale={5.554}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere006.geometry}
          material={materials.wood}
          position={[-21.92, -3.623, 66.677]}
          rotation={[1.692, -0.049, -1.92]}
          scale={[0.491, 10.986, 0.491]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere009.geometry}
          material={materials.wood}
          position={[50.861, 2.194, 102.788]}
          rotation={[0, 0.923, 0]}
          scale={[0.871, 10.988, 0.871]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere010.geometry}
          material={materials.wood}
          position={[-11.361, 3.636, 85.864]}
          scale={[0.871, 10.988, 0.871]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere029.geometry}
          material={materials.wood}
          position={[62.107, 2.102, 100.301]}
          scale={[0.871, 10.988, 0.871]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.rock022.geometry}
          material={materials.Rock}
          position={[85.932, -4.163, 68.797]}
          scale={5.554}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere030.geometry}
          material={materials.leaves}
          position={[89.439, -2.323, 98.52]}
          scale={[3.609, 1.86, 3.609]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere032.geometry}
          material={materials.leaves}
          position={[-30.218, -3.237, 98.52]}
          scale={[3.609, 1.86, 3.609]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere033.geometry}
          material={materials.leaves}
          position={[14.582, -2.295, 17.261]}
          scale={[7.499, 15.69, 7.499]}
        />
        <group position={[-5.41, -1.162, 6.821]} rotation={[-Math.PI, 0.312, -Math.PI]} scale={1.644}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane005.geometry}
            material={materials['Material.002']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane005_1.geometry}
            material={materials['Material.004']}
          />
        </group>
        <group position={[5.518, -2.518, -19.972]} rotation={[0, 0.345, 0]} scale={1.644}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane034.geometry}
            material={materials['Material.002']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane034_1.geometry}
            material={materials['Material.004']}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Log.geometry}
          material={materials['Material.002']}
          position={[-19.431, -1.361, -18.945]}
          rotation={[0, -0.443, 0]}
          scale={1.644}
        />
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
          position={[-45.525, -0.722, 27.121]}
          rotation={[-Math.PI, 0.312, -Math.PI]}
          scale={1.644}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane002.geometry}
            material={materials['Material.002']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane002_1.geometry}
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
        <group position={[2.523, -1.56, 78.002]} rotation={[-Math.PI, 0.312, -Math.PI]} scale={1.644}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane004.geometry}
            material={materials['Material.002']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane004_1.geometry}
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
        <group position={[84.175, -2.751, -28.037]} rotation={[0, 0.345, 0]} scale={1.644}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane009.geometry}
            material={materials['Material.002']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane009_1.geometry}
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
          geometry={nodes.Log002.geometry}
          material={materials['Material.002']}
          position={[-30.341, -3.141, 116.039]}
          rotation={[0, 1.502, 0]}
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
            geometry={nodes.Sphere028_1.geometry}
            material={materials['wood.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Sphere028_2.geometry}
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
        <group position={[-43.87, 2.375, 102.216]} scale={[0.871, 10.988, 0.871]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Sphere039_1.geometry}
            material={materials['wood.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Sphere039_2.geometry}
            material={materials['leaves.001']}
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
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.rock004.geometry}
          material={materials.Rock}
          position={[16.269, -4.767, 67.035]}
          scale={5.554}
        />
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
          geometry={nodes.Sphere002.geometry}
          material={materials.wood}
          position={[-5.947, 4.177, 152.23]}
          scale={[0.871, 10.988, 0.871]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere028.geometry}
          material={materials.wood}
          position={[-40.64, -2.534, -23.927]}
          rotation={[1.692, -0.049, -1.92]}
          scale={[0.491, 10.986, 0.491]}
        />
      </group>
    )
    }

export default LostDeforestation;

useGLTF.preload('/deforestation.glb')
    