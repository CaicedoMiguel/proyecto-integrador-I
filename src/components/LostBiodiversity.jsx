// eslint-disable-next-line no-unused-vars
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const LostBiodiversity = (props) => {
    const { nodes, materials } = useGLTF('/perdida-biodiversidad.glb')
    
      return (
        <group {...props} dispose={null}>
        <group name="Scene">
          <mesh
            name="Plane"
            geometry={nodes.Plane.geometry}
            material={materials.Material}
            position={[0, -5.101, 36.979]}
            scale={[135.026, 169.274, 162.182]}>
            <mesh
              name="Circle038"
              geometry={nodes.Circle038.geometry}
              material={materials.Grass}
              position={[-0.057, 0.012, 0.001]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_1"
              geometry={nodes.Circle038_1.geometry}
              material={materials.Grass}
              position={[-0.036, 0.012, 0.023]}
              scale={0}
            />
            <mesh
              name="Circle038_2"
              geometry={nodes.Circle038_2.geometry}
              material={materials.Grass}
              position={[-0.025, 0.011, 0.054]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_3"
              geometry={nodes.Circle038_3.geometry}
              material={materials.Grass}
              position={[0.492, 0, 0.533]}
              scale={[0, 0.001, 0]}
            />
            <mesh
              name="Circle038_4"
              geometry={nodes.Circle038_4.geometry}
              material={materials.Grass}
              position={[0.443, 0.001, 0.501]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_5"
              geometry={nodes.Circle038_5.geometry}
              material={materials.Grass}
              position={[-0.597, 0.038, 0.022]}
              scale={[0.002, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_6"
              geometry={nodes.Circle038_6.geometry}
              material={materials.Grass}
              position={[-0.033, 0.016, 0.565]}
              scale={[0.001, 0.001, 0]}
            />
            <mesh
              name="Circle038_7"
              geometry={nodes.Circle038_7.geometry}
              material={materials.Grass}
              position={[-0.013, 0.02, 0.54]}
              scale={[0.001, 0.001, 0]}
            />
            <mesh
              name="Circle038_8"
              geometry={nodes.Circle038_8.geometry}
              material={materials.Grass}
              position={[-0.063, 0.015, 0.512]}
              scale={0.001}
            />
            <mesh
              name="Circle038_9"
              geometry={nodes.Circle038_9.geometry}
              material={materials.Grass}
              position={[-0.036, 0.005, -0.475]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_10"
              geometry={nodes.Circle038_10.geometry}
              material={materials.Grass}
              position={[-0.025, 0.005, -0.446]}
              scale={[0.002, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_11"
              geometry={nodes.Circle038_11.geometry}
              material={materials.Grass}
              position={[0.242, 0.012, -0.467]}
              scale={0}
            />
            <mesh
              name="Circle038_12"
              geometry={nodes.Circle038_12.geometry}
              material={materials.Grass}
              position={[0.193, 0.004, -0.499]}
              scale={0.001}
            />
            <mesh
              name="Circle038_13"
              geometry={nodes.Circle038_13.geometry}
              material={materials.Grass}
              position={[0.214, 0.021, -0.227]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_14"
              geometry={nodes.Circle038_14.geometry}
              material={materials.Grass}
              position={[0.225, 0.017, -0.196]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_15"
              geometry={nodes.Circle038_15.geometry}
              material={materials.Grass}
              position={[0.242, 0.024, -0.217]}
              scale={0}
            />
            <mesh
              name="Circle038_16"
              geometry={nodes.Circle038_16.geometry}
              material={materials.Grass}
              position={[0.446, 0.02, -0.276]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_17"
              geometry={nodes.Circle038_17.geometry}
              material={materials.Grass}
              position={[0.466, 0.015, -0.241]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_18"
              geometry={nodes.Circle038_18.geometry}
              material={materials.Grass}
              position={[-0.275, 0.008, -0.197]}
              scale={0}
            />
            <mesh
              name="Circle038_19"
              geometry={nodes.Circle038_19.geometry}
              material={materials.Grass}
              position={[-0.258, 0.01, -0.217]}
              scale={0.001}
            />
            <mesh
              name="Circle038_20"
              geometry={nodes.Circle038_20.geometry}
              material={materials.Grass}
              position={[-0.057, 0.014, -0.249]}
              scale={0.001}
            />
            <mesh
              name="Circle038_21"
              geometry={nodes.Circle038_21.geometry}
              material={materials.Grass}
              position={[-0.036, 0.012, -0.227]}
              scale={0.001}
            />
            <mesh
              name="Circle038_22"
              geometry={nodes.Circle038_22.geometry}
              material={materials.Grass}
              position={[-0.025, 0.011, -0.196]}
              scale={0.001}
            />
            <mesh
              name="Circle038_23"
              geometry={nodes.Circle038_23.geometry}
              material={materials.Grass}
              position={[-0.008, 0.01, -0.217]}
              scale={[0.002, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_24"
              geometry={nodes.Circle038_24.geometry}
              material={materials.Grass}
              position={[-0.057, 0.014, -0.249]}
              scale={[0.001, 0.001, 0]}
            />
            <mesh
              name="Circle038_25"
              geometry={nodes.Circle038_25.geometry}
              material={materials.Grass}
              position={[-0.036, 0.012, -0.227]}
              scale={[0, 0.001, 0]}
            />
            <mesh
              name="Circle038_26"
              geometry={nodes.Circle038_26.geometry}
              material={materials.Grass}
              position={[-0.575, 0.027, -0.204]}
              scale={[0.001, 0.001, 0]}
            />
            <mesh
              name="Circle038_27"
              geometry={nodes.Circle038_27.geometry}
              material={materials.Grass}
              position={[-0.556, 0.024, -0.221]}
              scale={0}
            />
            <mesh
              name="Circle038_28"
              geometry={nodes.Circle038_28.geometry}
              material={materials.Grass}
              position={[-0.598, 0.018, -0.277]}
              scale={0}
            />
            <mesh
              name="Circle038_29"
              geometry={nodes.Circle038_29.geometry}
              material={materials.Grass}
              position={[-0.582, 0.022, -0.242]}
              scale={0.001}
            />
            <mesh
              name="Circle038_30"
              geometry={nodes.Circle038_30.geometry}
              material={materials.Grass}
              position={[-0.304, 0.008, 0.575]}
              scale={0.001}
            />
            <mesh
              name="Circle038_31"
              geometry={nodes.Circle038_31.geometry}
              material={materials.Grass}
              position={[-0.277, 0.006, 0.547]}
              scale={[0.002, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_32"
              geometry={nodes.Circle038_32.geometry}
              material={materials.Grass}
              position={[-0.097, 0.012, 0.783]}
              scale={0}
            />
            <mesh
              name="Circle038_33"
              geometry={nodes.Circle038_33.geometry}
              material={materials.Grass}
              position={[-0.066, 0.007, 0.796]}
              scale={[0, 0.001, 0]}
            />
            <mesh
              name="Circle038_34"
              geometry={nodes.Circle038_34.geometry}
              material={materials.Grass}
              position={[-0.521, 0.011, 0.299]}
              scale={[0.001, 0.001, 0]}
            />
            <mesh
              name="Circle038_35"
              geometry={nodes.Circle038_35.geometry}
              material={materials.Grass}
              position={[-0.507, 0.011, 0.282]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_36"
              geometry={nodes.Circle038_36.geometry}
              material={materials.Grass}
              position={[-0.557, 0.012, 0.251]}
              scale={0.001}
            />
            <mesh
              name="Circle038_37"
              geometry={nodes.Circle038_37.geometry}
              material={materials.Grass}
              position={[0.761, 0.016, 0.57]}
              scale={[0.001, 0.001, 0]}
            />
            <mesh
              name="Circle038_38"
              geometry={nodes.Circle038_38.geometry}
              material={materials.Grass}
              position={[0.771, 0.018, 0.599]}
              scale={0.001}
            />
            <mesh
              name="Circle038_39"
              geometry={nodes.Circle038_39.geometry}
              material={materials.Grass}
              position={[0.242, 0, 0.533]}
              scale={0.001}
            />
            <mesh
              name="Circle038_40"
              geometry={nodes.Circle038_40.geometry}
              material={materials.Grass}
              position={[0.193, 0.001, 0.501]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_41"
              geometry={nodes.Circle038_41.geometry}
              material={materials.Grass}
              position={[0.214, 0.001, 0.523]}
              scale={0.001}
            />
            <mesh
              name="Circle038_42"
              geometry={nodes.Circle038_42.geometry}
              material={materials.Grass}
              position={[0.225, 0.001, 0.554]}
              scale={[0, 0.001, 0]}
            />
            <mesh
              name="Circle038_43"
              geometry={nodes.Circle038_43.geometry}
              material={materials.Grass}
              position={[0.242, 0, 0.533]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_44"
              geometry={nodes.Circle038_44.geometry}
              material={materials.Grass}
              position={[0.193, 0.004, 0.751]}
              scale={[0.002, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_45"
              geometry={nodes.Circle038_45.geometry}
              material={materials.Grass}
              position={[0.214, 0.004, 0.773]}
              scale={[0.001, 0.001, 0]}
            />
            <mesh
              name="Circle038_46"
              geometry={nodes.Circle038_46.geometry}
              material={materials.Grass}
              position={[0.225, 0.003, 0.804]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_47"
              geometry={nodes.Circle038_47.geometry}
              material={materials.Grass}
              position={[0.505, 0.002, 0.798]}
              scale={0}
            />
            <mesh
              name="Circle038_48"
              geometry={nodes.Circle038_48.geometry}
              material={materials.Grass}
              position={[0.193, 0, 0.001]}
              scale={0}
            />
            <mesh
              name="Circle038_49"
              geometry={nodes.Circle038_49.geometry}
              material={materials.Grass}
              position={[0.214, 0, 0.023]}
              scale={0.001}
            />
            <mesh
              name="Circle038_50"
              geometry={nodes.Circle038_50.geometry}
              material={materials.Grass}
              position={[0.225, 0.002, 0.304]}
              scale={0.001}
            />
            <mesh
              name="Circle038_51"
              geometry={nodes.Circle038_51.geometry}
              material={materials.Grass}
              position={[0.492, 0.008, 0.283]}
              scale={0}
            />
            <mesh
              name="Circle038_52"
              geometry={nodes.Circle038_52.geometry}
              material={materials.Grass}
              position={[0.443, 0.005, 0.251]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_53"
              geometry={nodes.Circle038_53.geometry}
              material={materials.Grass}
              position={[0.761, 0.007, -0.015]}
              scale={0}
            />
            <mesh
              name="Circle038_54"
              geometry={nodes.Circle038_54.geometry}
              material={materials.Grass}
              position={[0.761, 0.01, 0.024]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_55"
              geometry={nodes.Circle038_55.geometry}
              material={materials.Grass}
              position={[0.794, 0.006, -0.012]}
              scale={[0.002, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_56"
              geometry={nodes.Circle038_56.geometry}
              material={materials.Grass}
              position={[0.693, 0.01, 0.251]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_57"
              geometry={nodes.Circle038_57.geometry}
              material={materials.Grass}
              position={[0.717, 0.01, 0.273]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_58"
              geometry={nodes.Circle038_58.geometry}
              material={materials.Grass}
              position={[-0.275, 0.005, 0.054]}
              scale={[0.002, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_59"
              geometry={nodes.Circle038_59.geometry}
              material={materials.Grass}
              position={[-0.258, 0.003, 0.033]}
              scale={0}
            />
            <mesh
              name="Circle038_60"
              geometry={nodes.Circle038_60.geometry}
              material={materials.Grass}
              position={[-0.307, 0.008, 0.001]}
              scale={0.001}
            />
            <mesh
              name="Circle038_61"
              geometry={nodes.Circle038_61.geometry}
              material={materials.Grass}
              position={[-0.286, 0.006, 0.023]}
              scale={0.001}
            />
            <mesh
              name="Circle038_62"
              geometry={nodes.Circle038_62.geometry}
              material={materials.Grass}
              position={[-0.293, 0.003, 0.322]}
              scale={0.001}
            />
            <mesh
              name="Circle038_63"
              geometry={nodes.Circle038_63.geometry}
              material={materials.Grass}
              position={[-0.275, 0.002, 0.303]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_64"
              geometry={nodes.Circle038_64.geometry}
              material={materials.Grass}
              position={[-0.32, 0.002, 0.266]}
              scale={[0.002, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_65"
              geometry={nodes.Circle038_65.geometry}
              material={materials.Grass}
              position={[-0.036, 0.011, 0.273]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_66"
              geometry={nodes.Circle038_66.geometry}
              material={materials.Grass}
              position={[-0.025, 0.012, 0.304]}
              scale={0.001}
            />
            <mesh
              name="Circle038_67"
              geometry={nodes.Circle038_67.geometry}
              material={materials.Grass}
              position={[-0.008, 0.012, 0.283]}
              scale={[0.002, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_68"
              geometry={nodes.Circle038_68.geometry}
              material={materials.Grass}
              position={[-0.057, 0.01, 0.251]}
              scale={[0.002, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_69"
              geometry={nodes.Circle038_69.geometry}
              material={materials.Grass}
              position={[-0.167, 0.007, 0.28]}
              scale={0}
            />
            <mesh
              name="Circle038_70"
              geometry={nodes.Circle038_70.geometry}
              material={materials.Grass}
              position={[-0.152, 0.007, 0.307]}
              scale={[0.002, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_71"
              geometry={nodes.Circle038_71.geometry}
              material={materials.Grass}
              position={[-0.134, 0.008, 0.284]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_72"
              geometry={nodes.Circle038_72.geometry}
              material={materials.Grass}
              position={[-0.193, 0.005, 0.264]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_73"
              geometry={nodes.Circle038_73.geometry}
              material={materials.Grass}
              position={[-0.163, 0.007, 0.401]}
              scale={0.001}
            />
            <mesh
              name="Circle038_74"
              geometry={nodes.Circle038_74.geometry}
              material={materials.Grass}
              position={[-0.154, 0.006, 0.437]}
              scale={[0.002, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_75"
              geometry={nodes.Circle038_75.geometry}
              material={materials.Grass}
              position={[-0.136, 0.007, 0.414]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_76"
              geometry={nodes.Circle038_76.geometry}
              material={materials.Grass}
              position={[-0.057, 0.013, 0.376]}
              scale={0.001}
            />
            <mesh
              name="Circle038_77"
              geometry={nodes.Circle038_77.geometry}
              material={materials.Grass}
              position={[-0.423, 0.006, 0.282]}
              scale={0.001}
            />
            <mesh
              name="Circle038_78"
              geometry={nodes.Circle038_78.geometry}
              material={materials.Grass}
              position={[-0.431, 0.008, 0.328]}
              scale={0}
            />
            <mesh
              name="Circle038_79"
              geometry={nodes.Circle038_79.geometry}
              material={materials.Grass}
              position={[-0.263, 0.004, 0.412]}
              scale={0}
            />
            <mesh
              name="Circle038_80"
              geometry={nodes.Circle038_80.geometry}
              material={materials.Grass}
              position={[-0.348, 0.008, 0.408]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_81"
              geometry={nodes.Circle038_81.geometry}
              material={materials.Grass}
              position={[-0.31, 0.006, 0.417]}
              scale={0}
            />
            <mesh
              name="Circle038_82"
              geometry={nodes.Circle038_82.geometry}
              material={materials.Grass}
              position={[-0.29, 0.005, 0.44]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_83"
              geometry={nodes.Circle038_83.geometry}
              material={materials.Grass}
              position={[-0.263, 0.004, 0.412]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_84"
              geometry={nodes.Circle038_84.geometry}
              material={materials.Grass}
              position={[-0.348, 0.008, 0.408]}
              scale={0.001}
            />
            <mesh
              name="Circle038_85"
              geometry={nodes.Circle038_85.geometry}
              material={materials.Grass}
              position={[-0.428, 0.022, 0.023]}
              scale={[0.002, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_86"
              geometry={nodes.Circle038_86.geometry}
              material={materials.Grass}
              position={[-0.41, 0.017, 0.053]}
              scale={0}
            />
            <mesh
              name="Circle038_87"
              geometry={nodes.Circle038_87.geometry}
              material={materials.Grass}
              position={[-0.386, 0.015, 0.033]}
              scale={[0.002, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_88"
              geometry={nodes.Circle038_88.geometry}
              material={materials.Grass}
              position={[-0.463, 0.028, 0]}
              scale={[0, 0.001, 0]}
            />
            <mesh
              name="Circle038_89"
              geometry={nodes.Circle038_89.geometry}
              material={materials.Grass}
              position={[-0.428, 0.022, 0.023]}
              scale={0}
            />
            <mesh
              name="Circle038_90"
              geometry={nodes.Circle038_90.geometry}
              material={materials.Grass}
              position={[-0.41, 0.017, 0.053]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_91"
              geometry={nodes.Circle038_91.geometry}
              material={materials.Grass}
              position={[-0.384, 0.007, 0.158]}
              scale={0.001}
            />
            <mesh
              name="Circle038_92"
              geometry={nodes.Circle038_92.geometry}
              material={materials.Grass}
              position={[-0.448, 0.017, 0.126]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_93"
              geometry={nodes.Circle038_93.geometry}
              material={materials.Grass}
              position={[-0.289, 0.007, 0.152]}
              scale={0}
            />
            <mesh
              name="Circle038_94"
              geometry={nodes.Circle038_94.geometry}
              material={materials.Grass}
              position={[-0.283, 0.005, 0.188]}
              scale={0}
            />
            <mesh
              name="Circle038_95"
              geometry={nodes.Circle038_95.geometry}
              material={materials.Grass}
              position={[0.908, 0.007, 0.275]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_96"
              geometry={nodes.Circle038_96.geometry}
              material={materials.Grass}
              position={[0.842, 0.01, 0.246]}
              scale={0.001}
            />
            <mesh
              name="Circle038_97"
              geometry={nodes.Circle038_97.geometry}
              material={materials.Grass}
              position={[0.869, 0.007, 0.397]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_98"
              geometry={nodes.Circle038_98.geometry}
              material={materials.Grass}
              position={[0.6, 0.008, 0.304]}
              scale={0}
            />
            <mesh
              name="Circle038_99"
              geometry={nodes.Circle038_99.geometry}
              material={materials.Grass}
              position={[0.617, 0.01, 0.408]}
              scale={[0.002, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_100"
              geometry={nodes.Circle038_100.geometry}
              material={materials.Grass}
              position={[0.568, 0.012, 0.376]}
              scale={0.001}
            />
            <mesh
              name="Circle038_101"
              geometry={nodes.Circle038_101.geometry}
              material={materials.Grass}
              position={[0.589, 0.01, 0.398]}
              scale={0.001}
            />
            <mesh
              name="Circle038_102"
              geometry={nodes.Circle038_102.geometry}
              material={materials.Grass}
              position={[0.6, 0.009, 0.429]}
              scale={0}
            />
            <mesh
              name="Circle038_103"
              geometry={nodes.Circle038_103.geometry}
              material={materials.Grass}
              position={[0.617, 0.01, 0.408]}
              scale={0.001}
            />
            <mesh
              name="Circle038_104"
              geometry={nodes.Circle038_104.geometry}
              material={materials.Grass}
              position={[0.705, 0.008, 0.376]}
              scale={0.001}
            />
            <mesh
              name="Circle038_105"
              geometry={nodes.Circle038_105.geometry}
              material={materials.Grass}
              position={[0.737, 0.008, 0.408]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_106"
              geometry={nodes.Circle038_106.geometry}
              material={materials.Grass}
              position={[0.761, 0.011, 0.454]}
              scale={0.001}
            />
            <mesh
              name="Circle038_107"
              geometry={nodes.Circle038_107.geometry}
              material={materials.Grass}
              position={[0.776, 0.009, 0.426]}
              scale={[0, 0.001, 0]}
            />
            <mesh
              name="Circle038_108"
              geometry={nodes.Circle038_108.geometry}
              material={materials.Grass}
              position={[0.705, 0.008, 0.376]}
              scale={[0.002, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_109"
              geometry={nodes.Circle038_109.geometry}
              material={materials.Grass}
              position={[0.737, 0.008, 0.408]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_110"
              geometry={nodes.Circle038_110.geometry}
              material={materials.Grass}
              position={[0.6, 0.01, 0.179]}
              scale={0}
            />
            <mesh
              name="Circle038_111"
              geometry={nodes.Circle038_111.geometry}
              material={materials.Grass}
              position={[0.617, 0.012, 0.158]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_112"
              geometry={nodes.Circle038_112.geometry}
              material={materials.Grass}
              position={[0.693, 0.017, 0.126]}
              scale={0.001}
            />
            <mesh
              name="Circle038_113"
              geometry={nodes.Circle038_113.geometry}
              material={materials.Grass}
              position={[0.339, 0.002, 0.273]}
              scale={[0.002, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_114"
              geometry={nodes.Circle038_114.geometry}
              material={materials.Grass}
              position={[0.35, 0.002, 0.429]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_115"
              geometry={nodes.Circle038_115.geometry}
              material={materials.Grass}
              position={[0.117, 0.01, 0.283]}
              scale={0.001}
            />
            <mesh
              name="Circle038_116"
              geometry={nodes.Circle038_116.geometry}
              material={materials.Grass}
              position={[0.068, 0.012, 0.251]}
              scale={[0.001, 0.001, 0]}
            />
            <mesh
              name="Circle038_117"
              geometry={nodes.Circle038_117.geometry}
              material={materials.Grass}
              position={[0.089, 0.007, 0.398]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_118"
              geometry={nodes.Circle038_118.geometry}
              material={materials.Grass}
              position={[0.1, 0.005, 0.429]}
              scale={0}
            />
            <mesh
              name="Circle038_119"
              geometry={nodes.Circle038_119.geometry}
              material={materials.Grass}
              position={[0.117, 0.003, 0.408]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_120"
              geometry={nodes.Circle038_120.geometry}
              material={materials.Grass}
              position={[0.193, 0.001, 0.376]}
              scale={0.001}
            />
            <mesh
              name="Circle038_121"
              geometry={nodes.Circle038_121.geometry}
              material={materials.Grass}
              position={[0.214, 0.001, 0.398]}
              scale={0}
            />
            <mesh
              name="Circle038_122"
              geometry={nodes.Circle038_122.geometry}
              material={materials.Grass}
              position={[0.225, 0, 0.429]}
              scale={0}
            />
            <mesh
              name="Circle038_123"
              geometry={nodes.Circle038_123.geometry}
              material={materials.Grass}
              position={[0.117, 0.003, 0.033]}
              scale={[0.002, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_124"
              geometry={nodes.Circle038_124.geometry}
              material={materials.Grass}
              position={[0.068, 0.007, 0.001]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_125"
              geometry={nodes.Circle038_125.geometry}
              material={materials.Grass}
              position={[0.089, 0.008, 0.148]}
              scale={[0.002, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_126"
              geometry={nodes.Circle038_126.geometry}
              material={materials.Grass}
              position={[0.1, 0.009, 0.179]}
              scale={0}
            />
            <mesh
              name="Circle038_127"
              geometry={nodes.Circle038_127.geometry}
              material={materials.Grass}
              position={[0.117, 0.008, 0.158]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_128"
              geometry={nodes.Circle038_128.geometry}
              material={materials.Grass}
              position={[0.193, 0.003, 0.126]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_129"
              geometry={nodes.Circle038_129.geometry}
              material={materials.Grass}
              position={[0.214, 0.003, 0.148]}
              scale={[0.001, 0.001, 0]}
            />
            <mesh
              name="Circle038_130"
              geometry={nodes.Circle038_130.geometry}
              material={materials.Grass}
              position={[0.35, 0.008, 0.804]}
              scale={[0.002, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_131"
              geometry={nodes.Circle038_131.geometry}
              material={materials.Grass}
              position={[0.366, 0, 0.913]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_132"
              geometry={nodes.Circle038_132.geometry}
              material={materials.Grass}
              position={[0.318, 0, 0.876]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_133"
              geometry={nodes.Circle038_133.geometry}
              material={materials.Grass}
              position={[0.338, 0, 0.903]}
              scale={0.001}
            />
            <mesh
              name="Circle038_134"
              geometry={nodes.Circle038_134.geometry}
              material={materials.Grass}
              position={[0.491, 0.001, 0.954]}
              scale={0.001}
            />
            <mesh
              name="Circle038_135"
              geometry={nodes.Circle038_135.geometry}
              material={materials.Grass}
              position={[0.522, 0.001, 0.947]}
              scale={[0.001, 0.001, 0]}
            />
            <mesh
              name="Circle038_136"
              geometry={nodes.Circle038_136.geometry}
              material={materials.Grass}
              position={[0.47, 0.001, 0.909]}
              scale={0}
            />
            <mesh
              name="Circle038_137"
              geometry={nodes.Circle038_137.geometry}
              material={materials.Grass}
              position={[0.491, 0.001, 0.933]}
              scale={0.001}
            />
            <mesh
              name="Circle038_138"
              geometry={nodes.Circle038_138.geometry}
              material={materials.Grass}
              position={[0.491, 0.001, 0.954]}
              scale={[0.002, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_139"
              geometry={nodes.Circle038_139.geometry}
              material={materials.Grass}
              position={[0.522, 0.001, 0.947]}
              scale={[0, 0.001, 0]}
            />
            <mesh
              name="Circle038_140"
              geometry={nodes.Circle038_140.geometry}
              material={materials.Grass}
              position={[0.47, 0.001, 0.909]}
              scale={0.001}
            />
            <mesh
              name="Circle038_141"
              geometry={nodes.Circle038_141.geometry}
              material={materials.Grass}
              position={[0.085, 0, 0.776]}
              scale={[0.002, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_142"
              geometry={nodes.Circle038_142.geometry}
              material={materials.Grass}
              position={[0.095, 0, 0.808]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_143"
              geometry={nodes.Circle038_143.geometry}
              material={materials.Grass}
              position={[0.116, 0, 0.784]}
              scale={[0.001, 0.001, 0]}
            />
            <mesh
              name="Circle038_144"
              geometry={nodes.Circle038_144.geometry}
              material={materials.Grass}
              position={[0.068, 0.001, 0.751]}
              scale={[0.002, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_145"
              geometry={nodes.Circle038_145.geometry}
              material={materials.Grass}
              position={[0.085, 0, 0.776]}
              scale={0.001}
            />
            <mesh
              name="Circle038_146"
              geometry={nodes.Circle038_146.geometry}
              material={materials.Grass}
              position={[0.089, 0, 0.955]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_147"
              geometry={nodes.Circle038_147.geometry}
              material={materials.Grass}
              position={[0.239, 0, 0.924]}
              scale={0}
            />
            <mesh
              name="Circle038_148"
              geometry={nodes.Circle038_148.geometry}
              material={materials.Grass}
              position={[0.068, 0.012, 0.501]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_149"
              geometry={nodes.Circle038_149.geometry}
              material={materials.Grass}
              position={[0.088, 0.008, 0.524]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_150"
              geometry={nodes.Circle038_150.geometry}
              material={materials.Grass}
              position={[0.098, 0.004, 0.681]}
              scale={0.001}
            />
            <mesh
              name="Circle038_151"
              geometry={nodes.Circle038_151.geometry}
              material={materials.Grass}
              position={[0.242, 0.002, 0.658]}
              scale={[0, 0.001, 0]}
            />
            <mesh
              name="Circle038_152"
              geometry={nodes.Circle038_152.geometry}
              material={materials.Grass}
              position={[0.6, 0.001, 0.797]}
              scale={0.001}
            />
            <mesh
              name="Circle038_153"
              geometry={nodes.Circle038_153.geometry}
              material={materials.Grass}
              position={[0.626, 0.002, 0.826]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_154"
              geometry={nodes.Circle038_154.geometry}
              material={materials.Grass}
              position={[0.605, 0.004, 0.554]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_155"
              geometry={nodes.Circle038_155.geometry}
              material={materials.Grass}
              position={[0.62, 0.007, 0.533]}
              scale={0.001}
            />
            <mesh
              name="Circle038_156"
              geometry={nodes.Circle038_156.geometry}
              material={materials.Grass}
              position={[0.716, 0.013, 0.645]}
              scale={0}
            />
            <mesh
              name="Circle038_157"
              geometry={nodes.Circle038_157.geometry}
              material={materials.Grass}
              position={[0.739, 0.014, 0.673]}
              scale={0}
            />
            <mesh
              name="Circle038_158"
              geometry={nodes.Circle038_158.geometry}
              material={materials.Grass}
              position={[0.747, 0.012, 0.702]}
              scale={0}
            />
            <mesh
              name="Circle038_159"
              geometry={nodes.Circle038_159.geometry}
              material={materials.Grass}
              position={[0.766, 0.017, 0.683]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_160"
              geometry={nodes.Circle038_160.geometry}
              material={materials.Grass}
              position={[-0.688, 0.017, -0.277]}
              scale={[0.002, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_161"
              geometry={nodes.Circle038_161.geometry}
              material={materials.Grass}
              position={[-0.683, 0.019, -0.26]}
              scale={0.001}
            />
            <mesh
              name="Circle038_162"
              geometry={nodes.Circle038_162.geometry}
              material={materials.Grass}
              position={[-0.587, 0.039, -0.072]}
              scale={[0, 0.001, 0]}
            />
            <mesh
              name="Circle038_163"
              geometry={nodes.Circle038_163.geometry}
              material={materials.Grass}
              position={[-0.569, 0.039, -0.093]}
              scale={0.001}
            />
            <mesh
              name="Circle038_164"
              geometry={nodes.Circle038_164.geometry}
              material={materials.Grass}
              position={[-0.618, 0.038, -0.125]}
              scale={[0, 0.001, 0]}
            />
            <mesh
              name="Circle038_165"
              geometry={nodes.Circle038_165.geometry}
              material={materials.Grass}
              position={[-0.161, 0.016, -0.227]}
              scale={0.001}
            />
            <mesh
              name="Circle038_166"
              geometry={nodes.Circle038_166.geometry}
              material={materials.Grass}
              position={[-0.15, 0.008, -0.071]}
              scale={0.001}
            />
            <mesh
              name="Circle038_167"
              geometry={nodes.Circle038_167.geometry}
              material={materials.Grass}
              position={[-0.133, 0.01, -0.092]}
              scale={[0.002, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_168"
              geometry={nodes.Circle038_168.geometry}
              material={materials.Grass}
              position={[-0.182, 0.007, -0.124]}
              scale={0}
            />
            <mesh
              name="Circle038_169"
              geometry={nodes.Circle038_169.geometry}
              material={materials.Grass}
              position={[-0.036, 0.012, -0.102]}
              scale={0.001}
            />
            <mesh
              name="Circle038_170"
              geometry={nodes.Circle038_170.geometry}
              material={materials.Grass}
              position={[-0.025, 0.013, -0.071]}
              scale={0}
            />
            <mesh
              name="Circle038_171"
              geometry={nodes.Circle038_171.geometry}
              material={materials.Grass}
              position={[-0.008, 0.013, -0.092]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_172"
              geometry={nodes.Circle038_172.geometry}
              material={materials.Grass}
              position={[-0.057, 0.012, -0.124]}
              scale={0.001}
            />
            <mesh
              name="Circle038_173"
              geometry={nodes.Circle038_173.geometry}
              material={materials.Grass}
              position={[-0.425, 0.013, -0.228]}
              scale={0}
            />
            <mesh
              name="Circle038_174"
              geometry={nodes.Circle038_174.geometry}
              material={materials.Grass}
              position={[-0.409, 0.014, -0.197]}
              scale={0.001}
            />
            <mesh
              name="Circle038_175"
              geometry={nodes.Circle038_175.geometry}
              material={materials.Grass}
              position={[-0.386, 0.01, -0.217]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_176"
              geometry={nodes.Circle038_176.geometry}
              material={materials.Grass}
              position={[-0.453, 0.013, -0.25]}
              scale={[0.002, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_177"
              geometry={nodes.Circle038_177.geometry}
              material={materials.Grass}
              position={[-0.428, 0.022, -0.103]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_178"
              geometry={nodes.Circle038_178.geometry}
              material={materials.Grass}
              position={[-0.411, 0.021, -0.072]}
              scale={0.001}
            />
            <mesh
              name="Circle038_179"
              geometry={nodes.Circle038_179.geometry}
              material={materials.Grass}
              position={[-0.386, 0.017, -0.093]}
              scale={[0.001, 0.001, 0]}
            />
            <mesh
              name="Circle038_180"
              geometry={nodes.Circle038_180.geometry}
              material={materials.Grass}
              position={[-0.459, 0.026, -0.125]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_181"
              geometry={nodes.Circle038_181.geometry}
              material={materials.Grass}
              position={[-0.286, 0.005, -0.102]}
              scale={[0, 0.001, 0]}
            />
            <mesh
              name="Circle038_182"
              geometry={nodes.Circle038_182.geometry}
              material={materials.Grass}
              position={[-0.275, 0.004, -0.072]}
              scale={0}
            />
            <mesh
              name="Circle038_183"
              geometry={nodes.Circle038_183.geometry}
              material={materials.Grass}
              position={[-0.386, 0.006, -0.355]}
              scale={0.001}
            />
            <mesh
              name="Circle038_184"
              geometry={nodes.Circle038_184.geometry}
              material={materials.Grass}
              position={[-0.435, 0.004, -0.384]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_185"
              geometry={nodes.Circle038_185.geometry}
              material={materials.Grass}
              position={[-0.287, 0.013, -0.357]}
              scale={0.001}
            />
            <mesh
              name="Circle038_186"
              geometry={nodes.Circle038_186.geometry}
              material={materials.Grass}
              position={[-0.275, 0.013, -0.324]}
              scale={0.001}
            />
            <mesh
              name="Circle038_187"
              geometry={nodes.Circle038_187.geometry}
              material={materials.Grass}
              position={[0.373, 0.024, -0.258]}
              scale={0.001}
            />
            <mesh
              name="Circle038_188"
              geometry={nodes.Circle038_188.geometry}
              material={materials.Grass}
              position={[0.322, 0.032, -0.281]}
              scale={[0.002, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_189"
              geometry={nodes.Circle038_189.geometry}
              material={materials.Grass}
              position={[0.344, 0.027, -0.261]}
              scale={0.001}
            />
            <mesh
              name="Circle038_190"
              geometry={nodes.Circle038_190.geometry}
              material={materials.Grass}
              position={[0.35, 0.002, -0.071]}
              scale={0.001}
            />
            <mesh
              name="Circle038_191"
              geometry={nodes.Circle038_191.geometry}
              material={materials.Grass}
              position={[0.367, 0.003, -0.092]}
              scale={0}
            />
            <mesh
              name="Circle038_192"
              geometry={nodes.Circle038_192.geometry}
              material={materials.Grass}
              position={[0.443, 0.007, -0.124]}
              scale={0.001}
            />
            <mesh
              name="Circle038_193"
              geometry={nodes.Circle038_193.geometry}
              material={materials.Grass}
              position={[0.089, 0.008, -0.227]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_194"
              geometry={nodes.Circle038_194.geometry}
              material={materials.Grass}
              position={[0.1, 0.006, -0.196]}
              scale={0}
            />
            <mesh
              name="Circle038_195"
              geometry={nodes.Circle038_195.geometry}
              material={materials.Grass}
              position={[0.242, 0.002, -0.092]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_196"
              geometry={nodes.Circle038_196.geometry}
              material={materials.Grass}
              position={[0.068, 0.001, -0.499]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_197"
              geometry={nodes.Circle038_197.geometry}
              material={materials.Grass}
              position={[0.089, 0.003, -0.477]}
              scale={0.001}
            />
            <mesh
              name="Circle038_198"
              geometry={nodes.Circle038_198.geometry}
              material={materials.Grass}
              position={[0.1, 0.005, -0.446]}
              scale={0.001}
            />
            <mesh
              name="Circle038_199"
              geometry={nodes.Circle038_199.geometry}
              material={materials.Grass}
              position={[0.117, 0.01, -0.342]}
              scale={[0, 0.001, 0]}
            />
            <mesh
              name="Circle038_200"
              geometry={nodes.Circle038_200.geometry}
              material={materials.Grass}
              position={[0.068, 0.008, -0.374]}
              scale={0}
            />
            <mesh
              name="Circle038_201"
              geometry={nodes.Circle038_201.geometry}
              material={materials.Grass}
              position={[0.089, 0.009, -0.352]}
              scale={[0, 0.001, 0]}
            />
            <mesh
              name="Circle038_202"
              geometry={nodes.Circle038_202.geometry}
              material={materials.Grass}
              position={[0.225, 0.029, -0.321]}
              scale={0}
            />
            <mesh
              name="Circle038_203"
              geometry={nodes.Circle038_203.geometry}
              material={materials.Grass}
              position={[0.242, 0.033, -0.342]}
              scale={0}
            />
            <mesh
              name="Circle038_204"
              geometry={nodes.Circle038_204.geometry}
              material={materials.Grass}
              position={[0.193, 0.024, -0.374]}
              scale={[0, 0.001, 0]}
            />
            <mesh
              name="Circle038_205"
              geometry={nodes.Circle038_205.geometry}
              material={materials.Grass}
              position={[0.214, 0.027, -0.352]}
              scale={0}
            />
            <mesh
              name="Circle038_206"
              geometry={nodes.Circle038_206.geometry}
              material={materials.Grass}
              position={[0.653, 0.007, -0.227]}
              scale={0}
            />
            <mesh
              name="Circle038_207"
              geometry={nodes.Circle038_207.geometry}
              material={materials.Grass}
              position={[0.681, 0.004, -0.263]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_208"
              geometry={nodes.Circle038_208.geometry}
              material={materials.Grass}
              position={[0.606, 0.005, -0.285]}
              scale={0}
            />
            <mesh
              name="Circle038_209"
              geometry={nodes.Circle038_209.geometry}
              material={materials.Grass}
              position={[0.625, 0.013, -0.102]}
              scale={0}
            />
            <mesh
              name="Circle038_210"
              geometry={nodes.Circle038_210.geometry}
              material={materials.Grass}
              position={[0.634, 0.013, -0.071]}
              scale={0.001}
            />
            <mesh
              name="Circle038_211"
              geometry={nodes.Circle038_211.geometry}
              material={materials.Grass}
              position={[0.662, 0.014, -0.092]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_212"
              geometry={nodes.Circle038_212.geometry}
              material={materials.Grass}
              position={[0.599, 0.012, -0.124]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_213"
              geometry={nodes.Circle038_213.geometry}
              material={materials.Grass}
              position={[0.625, 0.013, -0.102]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_214"
              geometry={nodes.Circle038_214.geometry}
              material={materials.Grass}
              position={[0.634, 0.013, -0.071]}
              scale={0}
            />
            <mesh
              name="Circle038_215"
              geometry={nodes.Circle038_215.geometry}
              material={materials.Grass}
              position={[0.786, 0.001, -0.112]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_216"
              geometry={nodes.Circle038_216.geometry}
              material={materials.Grass}
              position={[0.737, 0.006, -0.128]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_217"
              geometry={nodes.Circle038_217.geometry}
              material={materials.Grass}
              position={[0.322, 0.009, -0.48]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_218"
              geometry={nodes.Circle038_218.geometry}
              material={materials.Grass}
              position={[0.377, 0.021, -0.378]}
              scale={[0, 0.001, 0]}
            />
            <mesh
              name="Circle038_219"
              geometry={nodes.Circle038_219.geometry}
              material={materials.Grass}
              position={[0.406, 0.016, -0.411]}
              scale={0.001}
            />
            <mesh
              name="Circle038_220"
              geometry={nodes.Circle038_220.geometry}
              material={materials.Grass}
              position={[0.346, 0.02, -0.417]}
              scale={0}
            />
            <mesh
              name="Circle038_221"
              geometry={nodes.Circle038_221.geometry}
              material={materials.Grass}
              position={[0.371, 0.019, -0.406]}
              scale={[0.002, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_222"
              geometry={nodes.Circle038_222.geometry}
              material={materials.Grass}
              position={[0.488, 0.008, -0.354]}
              scale={0.001}
            />
            <mesh
              name="Circle038_223"
              geometry={nodes.Circle038_223.geometry}
              material={materials.Grass}
              position={[0.503, 0.005, -0.375]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_224"
              geometry={nodes.Circle038_224.geometry}
              material={materials.Grass}
              position={[0.474, 0.005, -0.433]}
              scale={0}
            />
            <mesh
              name="Circle038_225"
              geometry={nodes.Circle038_225.geometry}
              material={materials.Grass}
              position={[0.484, 0.007, -0.398]}
              scale={0}
            />
            <mesh
              name="Circle038_226"
              geometry={nodes.Circle038_226.geometry}
              material={materials.Grass}
              position={[-0.15, 0.017, -0.322]}
              scale={0.001}
            />
            <mesh
              name="Circle038_227"
              geometry={nodes.Circle038_227.geometry}
              material={materials.Grass}
              position={[-0.008, 0.006, -0.342]}
              scale={[0.002, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_228"
              geometry={nodes.Circle038_228.geometry}
              material={materials.Grass}
              position={[-0.057, 0.01, -0.374]}
              scale={0.001}
            />
            <mesh
              name="Circle038_229"
              geometry={nodes.Circle038_229.geometry}
              material={materials.Grass}
              position={[-0.036, 0.008, -0.352]}
              scale={[0.002, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_230"
              geometry={nodes.Circle038_230.geometry}
              material={materials.Grass}
              position={[-0.54, 0.01, -0.325]}
              scale={0.001}
            />
            <mesh
              name="Circle038_231"
              geometry={nodes.Circle038_231.geometry}
              material={materials.Grass}
              position={[-0.143, 0.005, 0.55]}
              scale={0}
            />
            <mesh
              name="Circle038_232"
              geometry={nodes.Circle038_232.geometry}
              material={materials.Grass}
              position={[-0.213, 0.01, 0.648]}
              scale={0.001}
            />
            <mesh
              name="Circle038_233"
              geometry={nodes.Circle038_233.geometry}
              material={materials.Grass}
              position={[-0.188, 0.012, 0.669]}
              scale={[0.002, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_234"
              geometry={nodes.Circle038_234.geometry}
              material={materials.Grass}
              position={[-0.187, 0.015, 0.709]}
              scale={0.001}
            />
            <mesh
              name="Circle038_235"
              geometry={nodes.Circle038_235.geometry}
              material={materials.Grass}
              position={[-0.022, 0.007, 0.677]}
              scale={0}
            />
            <mesh
              name="Circle038_236"
              geometry={nodes.Circle038_236.geometry}
              material={materials.Grass}
              position={[-0.716, 0.025, 0.001]}
              scale={0}
            />
            <mesh
              name="Circle038_237"
              geometry={nodes.Circle038_237.geometry}
              material={materials.Grass}
              position={[-0.684, 0.019, 0.145]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_238"
              geometry={nodes.Circle038_238.geometry}
              material={materials.Grass}
              position={[-0.666, 0.018, 0.175]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_239"
              geometry={nodes.Circle038_239.geometry}
              material={materials.Grass}
              position={[-0.661, 0.021, 0.157]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_240"
              geometry={nodes.Circle038_240.geometry}
              material={materials.Grass}
              position={[-0.705, 0.019, 0.126]}
              scale={0}
            />
            <mesh
              name="Circle038_241"
              geometry={nodes.Circle038_241.geometry}
              material={materials.Grass}
              position={[-0.566, 0.024, 0.148]}
              scale={0.001}
            />
            <mesh
              name="Circle038_242"
              geometry={nodes.Circle038_242.geometry}
              material={materials.Grass}
              position={[-0.546, 0.02, 0.179]}
              scale={0.001}
            />
            <mesh
              name="Circle038_243"
              geometry={nodes.Circle038_243.geometry}
              material={materials.Grass}
              position={[0.367, 0.001, 0.533]}
              scale={[0, 0.001, 0]}
            />
            <mesh
              name="Circle038_244"
              geometry={nodes.Circle038_244.geometry}
              material={materials.Grass}
              position={[0.318, 0.001, 0.501]}
              scale={0}
            />
            <mesh
              name="Circle038_245"
              geometry={nodes.Circle038_245.geometry}
              material={materials.Grass}
              position={[0.339, 0.001, 0.523]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_246"
              geometry={nodes.Circle038_246.geometry}
              material={materials.Grass}
              position={[0.35, 0.006, 0.679]}
              scale={[0, 0.001, 0]}
            />
            <mesh
              name="Circle038_247"
              geometry={nodes.Circle038_247.geometry}
              material={materials.Grass}
              position={[0.367, 0.004, 0.658]}
              scale={[0.002, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_248"
              geometry={nodes.Circle038_248.geometry}
              material={materials.Grass}
              position={[0.443, 0, 0.626]}
              scale={0.001}
            />
            <mesh
              name="Circle038_249"
              geometry={nodes.Circle038_249.geometry}
              material={materials.Grass}
              position={[0.339, 0.003, 0.023]}
              scale={[0.001, 0.001, 0]}
            />
            <mesh
              name="Circle038_250"
              geometry={nodes.Circle038_250.geometry}
              material={materials.Grass}
              position={[0.35, 0.007, 0.054]}
              scale={[0.002, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_251"
              geometry={nodes.Circle038_251.geometry}
              material={materials.Grass}
              position={[0.367, 0.005, 0.033]}
              scale={[0.002, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_252"
              geometry={nodes.Circle038_252.geometry}
              material={materials.Grass}
              position={[0.318, 0.01, 0.126]}
              scale={0}
            />
            <mesh
              name="Circle038_253"
              geometry={nodes.Circle038_253.geometry}
              material={materials.Grass}
              position={[0.339, 0.011, 0.148]}
              scale={[0.001, 0.001, 0]}
            />
            <mesh
              name="Circle038_254"
              geometry={nodes.Circle038_254.geometry}
              material={materials.Grass}
              position={[0.35, 0.009, 0.179]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_255"
              geometry={nodes.Circle038_255.geometry}
              material={materials.Grass}
              position={[0.88, 0.007, 0.028]}
              scale={0}
            />
            <mesh
              name="Circle038_256"
              geometry={nodes.Circle038_256.geometry}
              material={materials.Grass}
              position={[0.838, 0.013, 0.121]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_257"
              geometry={nodes.Circle038_257.geometry}
              material={materials.Grass}
              position={[0.866, 0.011, 0.142]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_258"
              geometry={nodes.Circle038_258.geometry}
              material={materials.Grass}
              position={[0.883, 0.009, 0.172]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_259"
              geometry={nodes.Circle038_259.geometry}
              material={materials.Grass}
              position={[0.904, 0.009, 0.15]}
              scale={0}
            />
            <mesh
              name="Circle038_260"
              geometry={nodes.Circle038_260.geometry}
              material={materials.Grass}
              position={[0.838, 0.013, 0.121]}
              scale={0}
            />
            <mesh
              name="Circle038_261"
              geometry={nodes.Circle038_261.geometry}
              material={materials.Grass}
              position={[-0.161, 0.006, 0.023]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_262"
              geometry={nodes.Circle038_262.geometry}
              material={materials.Grass}
              position={[-0.15, 0.005, 0.054]}
              scale={[0, 0.001, 0]}
            />
            <mesh
              name="Circle038_263"
              geometry={nodes.Circle038_263.geometry}
              material={materials.Grass}
              position={[-0.133, 0.006, 0.033]}
              scale={[0, 0.001, 0]}
            />
            <mesh
              name="Circle038_264"
              geometry={nodes.Circle038_264.geometry}
              material={materials.Grass}
              position={[-0.182, 0.004, 0.126]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_265"
              geometry={nodes.Circle038_265.geometry}
              material={materials.Grass}
              position={[-0.162, 0.004, 0.149]}
              scale={0.001}
            />
            <mesh
              name="Circle038_266"
              geometry={nodes.Circle038_266.geometry}
              material={materials.Grass}
              position={[-0.152, 0.004, 0.181]}
              scale={[0.001, 0.001, 0]}
            />
            <mesh
              name="Circle038_267"
              geometry={nodes.Circle038_267.geometry}
              material={materials.Grass}
              position={[-0.133, 0.003, 0.158]}
              scale={0.001}
            />
            <mesh
              name="Circle038_268"
              geometry={nodes.Circle038_268.geometry}
              material={materials.Grass}
              position={[-0.057, 0.005, 0.126]}
              scale={0}
            />
            <mesh
              name="Circle038_269"
              geometry={nodes.Circle038_269.geometry}
              material={materials.Grass}
              position={[-0.036, 0.007, 0.148]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_270"
              geometry={nodes.Circle038_270.geometry}
              material={materials.Grass}
              position={[-0.087, 0.009, 0.241]}
              scale={0.001}
            />
            <mesh
              name="Circle038_271"
              geometry={nodes.Circle038_271.geometry}
              material={materials.Grass}
              position={[-0.07, 0.008, 0.221]}
              scale={0}
            />
            <mesh
              name="Circle038_272"
              geometry={nodes.Circle038_272.geometry}
              material={materials.Grass}
              position={[-0.12, 0.005, 0.188]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_273"
              geometry={nodes.Circle038_273.geometry}
              material={materials.Grass}
              position={[-0.036, 0.009, 0.21]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_274"
              geometry={nodes.Circle038_274.geometry}
              material={materials.Grass}
              position={[-0.219, 0.005, 0.187]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_275"
              geometry={nodes.Circle038_275.geometry}
              material={materials.Grass}
              position={[-0.205, 0.005, 0.233]}
              scale={0.001}
            />
            <mesh
              name="Circle038_276"
              geometry={nodes.Circle038_276.geometry}
              material={materials.Grass}
              position={[-0.256, 0.005, 0.202]}
              scale={0.001}
            />
            <mesh
              name="Circle038_277"
              geometry={nodes.Circle038_277.geometry}
              material={materials.Grass}
              position={[-0.166, 0.005, 0.216]}
              scale={0}
            />
            <mesh
              name="Circle038_278"
              geometry={nodes.Circle038_278.geometry}
              material={materials.Grass}
              position={[-0.154, 0.007, 0.246]}
              scale={0.001}
            />
            <mesh
              name="Circle038_279"
              geometry={nodes.Circle038_279.geometry}
              material={materials.Grass}
              position={[-0.134, 0.006, 0.222]}
              scale={0.001}
            />
            <mesh
              name="Circle038_280"
              geometry={nodes.Circle038_280.geometry}
              material={materials.Grass}
              position={[-0.245, 0.004, 0.063]}
              scale={0.001}
            />
            <mesh
              name="Circle038_281"
              geometry={nodes.Circle038_281.geometry}
              material={materials.Grass}
              position={[-0.224, 0.005, 0.085]}
              scale={0}
            />
            <mesh
              name="Circle038_282"
              geometry={nodes.Circle038_282.geometry}
              material={materials.Grass}
              position={[-0.212, 0.006, 0.116]}
              scale={[0.002, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_283"
              geometry={nodes.Circle038_283.geometry}
              material={materials.Grass}
              position={[-0.133, 0.003, 0.096]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_284"
              geometry={nodes.Circle038_284.geometry}
              material={materials.Grass}
              position={[0.757, 0.017, 0.125]}
              scale={0.001}
            />
            <mesh
              name="Circle038_285"
              geometry={nodes.Circle038_285.geometry}
              material={materials.Grass}
              position={[0.785, 0.013, 0.209]}
              scale={[0.002, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_286"
              geometry={nodes.Circle038_286.geometry}
              material={materials.Grass}
              position={[0.886, 0.008, 0.235]}
              scale={0.001}
            />
            <mesh
              name="Circle038_287"
              geometry={nodes.Circle038_287.geometry}
              material={materials.Grass}
              position={[0.84, 0.006, 0.005]}
              scale={0}
            />
            <mesh
              name="Circle038_288"
              geometry={nodes.Circle038_288.geometry}
              material={materials.Grass}
              position={[0.825, 0.001, -0.061]}
              scale={0.001}
            />
            <mesh
              name="Circle038_289"
              geometry={nodes.Circle038_289.geometry}
              material={materials.Grass}
              position={[0.825, 0.004, -0.02]}
              scale={[0, 0.001, 0]}
            />
            <mesh
              name="Circle038_290"
              geometry={nodes.Circle038_290.geometry}
              material={materials.Grass}
              position={[0.802, 0.014, 0.11]}
              scale={0}
            />
            <mesh
              name="Circle038_291"
              geometry={nodes.Circle038_291.geometry}
              material={materials.Grass}
              position={[0.827, 0.011, 0.084]}
              scale={0}
            />
            <mesh
              name="Circle038_292"
              geometry={nodes.Circle038_292.geometry}
              material={materials.Grass}
              position={[0.845, 0.008, 0.046]}
              scale={0}
            />
            <mesh
              name="Circle038_293"
              geometry={nodes.Circle038_293.geometry}
              material={materials.Grass}
              position={[0.864, 0.009, 0.075]}
              scale={0}
            />
            <mesh
              name="Circle038_294"
              geometry={nodes.Circle038_294.geometry}
              material={materials.Grass}
              position={[0.879, 0.01, 0.109]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_295"
              geometry={nodes.Circle038_295.geometry}
              material={materials.Grass}
              position={[0.895, 0.008, 0.088]}
              scale={0.001}
            />
            <mesh
              name="Circle038_296"
              geometry={nodes.Circle038_296.geometry}
              material={materials.Grass}
              position={[0.845, 0.008, 0.046]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_297"
              geometry={nodes.Circle038_297.geometry}
              material={materials.Grass}
              position={[0.401, 0.013, 0.148]}
              scale={0}
            />
            <mesh
              name="Circle038_298"
              geometry={nodes.Circle038_298.geometry}
              material={materials.Grass}
              position={[0.413, 0.01, 0.179]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_299"
              geometry={nodes.Circle038_299.geometry}
              material={materials.Grass}
              position={[0.43, 0.01, 0.158]}
              scale={[0.001, 0.001, 0]}
            />
            <mesh
              name="Circle038_300"
              geometry={nodes.Circle038_300.geometry}
              material={materials.Grass}
              position={[0.38, 0.01, 0.188]}
              scale={[0.002, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_301"
              geometry={nodes.Circle038_301.geometry}
              material={materials.Grass}
              position={[0.464, 0.006, 0.21]}
              scale={[0, 0.001, 0]}
            />
            <mesh
              name="Circle038_302"
              geometry={nodes.Circle038_302.geometry}
              material={materials.Grass}
              position={[0.288, 0.004, 0.179]}
              scale={[0.001, 0.001, 0]}
            />
            <mesh
              name="Circle038_303"
              geometry={nodes.Circle038_303.geometry}
              material={materials.Grass}
              position={[0.305, 0.007, 0.158]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_304"
              geometry={nodes.Circle038_304.geometry}
              material={materials.Grass}
              position={[0.255, 0.001, 0.126]}
              scale={[0.002, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_305"
              geometry={nodes.Circle038_305.geometry}
              material={materials.Grass}
              position={[0.276, 0.004, 0.148]}
              scale={[0.002, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_306"
              geometry={nodes.Circle038_306.geometry}
              material={materials.Grass}
              position={[0.288, 0.002, 0.241]}
              scale={[0, 0.001, 0]}
            />
            <mesh
              name="Circle038_307"
              geometry={nodes.Circle038_307.geometry}
              material={materials.Grass}
              position={[0.367, 0.006, 0.221]}
              scale={0.001}
            />
            <mesh
              name="Circle038_308"
              geometry={nodes.Circle038_308.geometry}
              material={materials.Grass}
              position={[0.318, 0.006, 0.188]}
              scale={[0.002, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_309"
              geometry={nodes.Circle038_309.geometry}
              material={materials.Grass}
              position={[0.276, 0.001, 0.023]}
              scale={0}
            />
            <mesh
              name="Circle038_310"
              geometry={nodes.Circle038_310.geometry}
              material={materials.Grass}
              position={[0.288, 0.006, 0.116]}
              scale={0}
            />
            <mesh
              name="Circle038_311"
              geometry={nodes.Circle038_311.geometry}
              material={materials.Grass}
              position={[0.367, 0.014, 0.096]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_312"
              geometry={nodes.Circle038_312.geometry}
              material={materials.Grass}
              position={[0.318, 0.005, 0.063]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_313"
              geometry={nodes.Circle038_313.geometry}
              material={materials.Grass}
              position={[0.401, 0.002, 0.648]}
              scale={0.001}
            />
            <mesh
              name="Circle038_314"
              geometry={nodes.Circle038_314.geometry}
              material={materials.Grass}
              position={[0.413, 0.005, 0.679]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_315"
              geometry={nodes.Circle038_315.geometry}
              material={materials.Grass}
              position={[0.43, 0.007, 0.721]}
              scale={0.001}
            />
            <mesh
              name="Circle038_316"
              geometry={nodes.Circle038_316.geometry}
              material={materials.Grass}
              position={[0.443, 0.004, 0.688]}
              scale={0.001}
            />
            <mesh
              name="Circle038_317"
              geometry={nodes.Circle038_317.geometry}
              material={materials.Grass}
              position={[0.464, 0.003, 0.71]}
              scale={0.001}
            />
            <mesh
              name="Circle038_318"
              geometry={nodes.Circle038_318.geometry}
              material={materials.Grass}
              position={[0.475, 0.003, 0.741]}
              scale={0.001}
            />
            <mesh
              name="Circle038_319"
              geometry={nodes.Circle038_319.geometry}
              material={materials.Grass}
              position={[0.492, 0.001, 0.721]}
              scale={0.001}
            />
            <mesh
              name="Circle038_320"
              geometry={nodes.Circle038_320.geometry}
              material={materials.Grass}
              position={[0.255, 0, 0.626]}
              scale={0.001}
            />
            <mesh
              name="Circle038_321"
              geometry={nodes.Circle038_321.geometry}
              material={materials.Grass}
              position={[0.276, 0.002, 0.648]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_322"
              geometry={nodes.Circle038_322.geometry}
              material={materials.Grass}
              position={[0.288, 0.009, 0.741]}
              scale={0.001}
            />
            <mesh
              name="Circle038_323"
              geometry={nodes.Circle038_323.geometry}
              material={materials.Grass}
              position={[0.305, 0.008, 0.721]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_324"
              geometry={nodes.Circle038_324.geometry}
              material={materials.Grass}
              position={[0.255, 0.004, 0.688]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_325"
              geometry={nodes.Circle038_325.geometry}
              material={materials.Grass}
              position={[0.276, 0.006, 0.71]}
              scale={[0.001, 0.001, 0]}
            />
            <mesh
              name="Circle038_326"
              geometry={nodes.Circle038_326.geometry}
              material={materials.Grass}
              position={[0.288, 0.009, 0.741]}
              scale={[0, 0.001, 0]}
            />
            <mesh
              name="Circle038_327"
              geometry={nodes.Circle038_327.geometry}
              material={materials.Grass}
              position={[0.305, 0.008, 0.721]}
              scale={0.001}
            />
            <mesh
              name="Circle038_328"
              geometry={nodes.Circle038_328.geometry}
              material={materials.Grass}
              position={[0.318, 0.006, 0.688]}
              scale={0}
            />
            <mesh
              name="Circle038_329"
              geometry={nodes.Circle038_329.geometry}
              material={materials.Grass}
              position={[0.339, 0.009, 0.71]}
              scale={0.001}
            />
            <mesh
              name="Circle038_330"
              geometry={nodes.Circle038_330.geometry}
              material={materials.Grass}
              position={[0.288, 0, 0.554]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_331"
              geometry={nodes.Circle038_331.geometry}
              material={materials.Grass}
              position={[0.305, 0.001, 0.533]}
              scale={0}
            />
            <mesh
              name="Circle038_332"
              geometry={nodes.Circle038_332.geometry}
              material={materials.Grass}
              position={[0.255, 0, 0.501]}
              scale={0.001}
            />
            <mesh
              name="Circle038_333"
              geometry={nodes.Circle038_333.geometry}
              material={materials.Grass}
              position={[0.276, 0, 0.585]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_334"
              geometry={nodes.Circle038_334.geometry}
              material={materials.Grass}
              position={[0.288, 0, 0.616]}
              scale={[0.002, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_335"
              geometry={nodes.Circle038_335.geometry}
              material={materials.Grass}
              position={[0.305, 0, 0.596]}
              scale={0}
            />
            <mesh
              name="Circle038_336"
              geometry={nodes.Circle038_336.geometry}
              material={materials.Grass}
              position={[0.318, 0.001, 0.563]}
              scale={0.001}
            />
            <mesh
              name="Circle038_337"
              geometry={nodes.Circle038_337.geometry}
              material={materials.Grass}
              position={[0.339, 0, 0.585]}
              scale={0.001}
            />
            <mesh
              name="Circle038_338"
              geometry={nodes.Circle038_338.geometry}
              material={materials.Grass}
              position={[-0.61, 0.02, 0.179]}
              scale={[0.002, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_339"
              geometry={nodes.Circle038_339.geometry}
              material={materials.Grass}
              position={[-0.599, 0.022, 0.158]}
              scale={0.001}
            />
            <mesh
              name="Circle038_340"
              geometry={nodes.Circle038_340.geometry}
              material={materials.Grass}
              position={[-0.662, 0.024, 0.126]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_341"
              geometry={nodes.Circle038_341.geometry}
              material={materials.Grass}
              position={[-0.632, 0.023, 0.148]}
              scale={[0.002, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_342"
              geometry={nodes.Circle038_342.geometry}
              material={materials.Grass}
              position={[-0.59, 0.014, 0.241]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_343"
              geometry={nodes.Circle038_343.geometry}
              material={materials.Grass}
              position={[-0.58, 0.015, 0.221]}
              scale={0}
            />
            <mesh
              name="Circle038_344"
              geometry={nodes.Circle038_344.geometry}
              material={materials.Grass}
              position={[-0.576, 0.019, 0.188]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_345"
              geometry={nodes.Circle038_345.geometry}
              material={materials.Grass}
              position={[-0.705, 0.014, 0.184]}
              scale={0.001}
            />
            <mesh
              name="Circle038_346"
              geometry={nodes.Circle038_346.geometry}
              material={materials.Grass}
              position={[-0.688, 0.014, 0.21]}
              scale={[0.002, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_347"
              geometry={nodes.Circle038_347.geometry}
              material={materials.Grass}
              position={[-0.683, 0.015, 0.2]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_348"
              geometry={nodes.Circle038_348.geometry}
              material={materials.Grass}
              position={[-0.685, 0.016, 0.177]}
              scale={0}
            />
            <mesh
              name="Circle038_349"
              geometry={nodes.Circle038_349.geometry}
              material={materials.Grass}
              position={[-0.734, 0.015, 0.086]}
              scale={0.001}
            />
            <mesh
              name="Circle038_350"
              geometry={nodes.Circle038_350.geometry}
              material={materials.Grass}
              position={[-0.725, 0.016, 0.116]}
              scale={0.001}
            />
            <mesh
              name="Circle038_351"
              geometry={nodes.Circle038_351.geometry}
              material={materials.Grass}
              position={[-0.716, 0.019, 0.096]}
              scale={0.001}
            />
            <mesh
              name="Circle038_352"
              geometry={nodes.Circle038_352.geometry}
              material={materials.Grass}
              position={[-0.711, 0.022, 0.063]}
              scale={[0, 0.001, 0]}
            />
            <mesh
              name="Circle038_353"
              geometry={nodes.Circle038_353.geometry}
              material={materials.Grass}
              position={[-0.114, 0.009, 0.662]}
              scale={[0.002, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_354"
              geometry={nodes.Circle038_354.geometry}
              material={materials.Grass}
              position={[-0.116, 0.011, 0.704]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_355"
              geometry={nodes.Circle038_355.geometry}
              material={materials.Grass}
              position={[-0.089, 0.009, 0.677]}
              scale={0.001}
            />
            <mesh
              name="Circle038_356"
              geometry={nodes.Circle038_356.geometry}
              material={materials.Grass}
              position={[-0.162, 0.015, 0.723]}
              scale={[0.002, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_357"
              geometry={nodes.Circle038_357.geometry}
              material={materials.Grass}
              position={[-0.146, 0.015, 0.75]}
              scale={0.001}
            />
            <mesh
              name="Circle038_358"
              geometry={nodes.Circle038_358.geometry}
              material={materials.Grass}
              position={[-0.143, 0.016, 0.788]}
              scale={0.001}
            />
            <mesh
              name="Circle038_359"
              geometry={nodes.Circle038_359.geometry}
              material={materials.Grass}
              position={[-0.109, 0.012, 0.754]}
              scale={[0.002, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_360"
              geometry={nodes.Circle038_360.geometry}
              material={materials.Grass}
              position={[-0.162, 0.015, 0.723]}
              scale={0.001}
            />
            <mesh
              name="Circle038_361"
              geometry={nodes.Circle038_361.geometry}
              material={materials.Grass}
              position={[-0.146, 0.015, 0.75]}
              scale={[0.002, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_362"
              geometry={nodes.Circle038_362.geometry}
              material={materials.Grass}
              position={[-0.041, 0.006, 0.755]}
              scale={0.001}
            />
            <mesh
              name="Circle038_363"
              geometry={nodes.Circle038_363.geometry}
              material={materials.Grass}
              position={[-0.016, 0.004, 0.73]}
              scale={[0.001, 0.001, 0]}
            />
            <mesh
              name="Circle038_364"
              geometry={nodes.Circle038_364.geometry}
              material={materials.Grass}
              position={[-0.307, 0.014, 0.672]}
              scale={[0.002, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_365"
              geometry={nodes.Circle038_365.geometry}
              material={materials.Grass}
              position={[-0.209, 0.018, 0.749]}
              scale={0.001}
            />
            <mesh
              name="Circle038_366"
              geometry={nodes.Circle038_366.geometry}
              material={materials.Grass}
              position={[-0.215, 0.022, 0.795]}
              scale={0}
            />
            <mesh
              name="Circle038_367"
              geometry={nodes.Circle038_367.geometry}
              material={materials.Grass}
              position={[-0.225, 0.009, 0.619]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_368"
              geometry={nodes.Circle038_368.geometry}
              material={materials.Grass}
              position={[-0.201, 0.007, 0.581]}
              scale={[0, 0.001, 0]}
            />
            <mesh
              name="Circle038_369"
              geometry={nodes.Circle038_369.geometry}
              material={materials.Grass}
              position={[-0.177, 0.007, 0.6]}
              scale={0}
            />
            <mesh
              name="Circle038_370"
              geometry={nodes.Circle038_370.geometry}
              material={materials.Grass}
              position={[-0.162, 0.008, 0.626]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_371"
              geometry={nodes.Circle038_371.geometry}
              material={materials.Grass}
              position={[-0.597, 0.014, -0.303]}
              scale={[0.002, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_372"
              geometry={nodes.Circle038_372.geometry}
              material={materials.Grass}
              position={[-0.571, 0.011, -0.321]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_373"
              geometry={nodes.Circle038_373.geometry}
              material={materials.Grass}
              position={[-0.562, 0.014, -0.3]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_374"
              geometry={nodes.Circle038_374.geometry}
              material={materials.Grass}
              position={[-0.564, 0.017, -0.27]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_375"
              geometry={nodes.Circle038_375.geometry}
              material={materials.Grass}
              position={[-0.07, 0.012, -0.342]}
              scale={0}
            />
            <mesh
              name="Circle038_376"
              geometry={nodes.Circle038_376.geometry}
              material={materials.Grass}
              position={[-0.12, 0.015, -0.374]}
              scale={0.001}
            />
            <mesh
              name="Circle038_377"
              geometry={nodes.Circle038_377.geometry}
              material={materials.Grass}
              position={[-0.099, 0.014, -0.352]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_378"
              geometry={nodes.Circle038_378.geometry}
              material={materials.Grass}
              position={[-0.087, 0.014, -0.321]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_379"
              geometry={nodes.Circle038_379.geometry}
              material={materials.Grass}
              position={[-0.07, 0.014, -0.28]}
              scale={[0.002, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_380"
              geometry={nodes.Circle038_380.geometry}
              material={materials.Grass}
              position={[-0.12, 0.017, -0.312]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_381"
              geometry={nodes.Circle038_381.geometry}
              material={materials.Grass}
              position={[-0.036, 0.01, -0.29]}
              scale={[0.002, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_382"
              geometry={nodes.Circle038_382.geometry}
              material={materials.Grass}
              position={[-0.025, 0.01, -0.259]}
              scale={0.001}
            />
            <mesh
              name="Circle038_383"
              geometry={nodes.Circle038_383.geometry}
              material={materials.Grass}
              position={[-0.008, 0.008, -0.279]}
              scale={0.001}
            />
            <mesh
              name="Circle038_384"
              geometry={nodes.Circle038_384.geometry}
              material={materials.Grass}
              position={[-0.057, 0.012, -0.312]}
              scale={0}
            />
            <mesh
              name="Circle038_385"
              geometry={nodes.Circle038_385.geometry}
              material={materials.Grass}
              position={[-0.036, 0.01, -0.29]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_386"
              geometry={nodes.Circle038_386.geometry}
              material={materials.Grass}
              position={[-0.212, 0.015, -0.259]}
              scale={[0.002, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_387"
              geometry={nodes.Circle038_387.geometry}
              material={materials.Grass}
              position={[-0.195, 0.016, -0.28]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_388"
              geometry={nodes.Circle038_388.geometry}
              material={materials.Grass}
              position={[-0.245, 0.014, -0.312]}
              scale={0.001}
            />
            <mesh
              name="Circle038_389"
              geometry={nodes.Circle038_389.geometry}
              material={materials.Grass}
              position={[-0.161, 0.017, -0.29]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_390"
              geometry={nodes.Circle038_390.geometry}
              material={materials.Grass}
              position={[-0.149, 0.016, -0.383]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_391"
              geometry={nodes.Circle038_391.geometry}
              material={materials.Grass}
              position={[0.457, 0.01, -0.397]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_392"
              geometry={nodes.Circle038_392.geometry}
              material={materials.Grass}
              position={[0.41, 0.02, -0.379]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_393"
              geometry={nodes.Circle038_393.geometry}
              material={materials.Grass}
              position={[0.473, 0.013, -0.318]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_394"
              geometry={nodes.Circle038_394.geometry}
              material={materials.Grass}
              position={[0.478, 0.014, -0.273]}
              scale={[0.001, 0.001, 0]}
            />
            <mesh
              name="Circle038_395"
              geometry={nodes.Circle038_395.geometry}
              material={materials.Grass}
              position={[0.496, 0.01, -0.293]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_396"
              geometry={nodes.Circle038_396.geometry}
              material={materials.Grass}
              position={[0.257, 0.033, -0.377]}
              scale={[0.001, 0.001, 0]}
            />
            <mesh
              name="Circle038_397"
              geometry={nodes.Circle038_397.geometry}
              material={materials.Grass}
              position={[0.286, 0.03, -0.368]}
              scale={0.001}
            />
            <mesh
              name="Circle038_398"
              geometry={nodes.Circle038_398.geometry}
              material={materials.Grass}
              position={[0.298, 0.029, -0.343]}
              scale={0.001}
            />
            <mesh
              name="Circle038_399"
              geometry={nodes.Circle038_399.geometry}
              material={materials.Grass}
              position={[0.313, 0.03, -0.307]}
              scale={0}
            />
            <mesh
              name="Circle038_400"
              geometry={nodes.Circle038_400.geometry}
              material={materials.Grass}
              position={[0.256, 0.033, -0.315]}
              scale={0}
            />
            <mesh
              name="Circle038_401"
              geometry={nodes.Circle038_401.geometry}
              material={materials.Grass}
              position={[0.281, 0.031, -0.303]}
              scale={0}
            />
            <mesh
              name="Circle038_402"
              geometry={nodes.Circle038_402.geometry}
              material={materials.Grass}
              position={[0.291, 0.032, -0.277]}
              scale={[0, 0.001, 0]}
            />
            <mesh
              name="Circle038_403"
              geometry={nodes.Circle038_403.geometry}
              material={materials.Grass}
              position={[0.385, 0.027, -0.339]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_404"
              geometry={nodes.Circle038_404.geometry}
              material={materials.Grass}
              position={[0.334, 0.026, -0.349]}
              scale={[0.002, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_405"
              geometry={nodes.Circle038_405.geometry}
              material={materials.Grass}
              position={[0.355, 0.027, -0.336]}
              scale={[0.001, 0.001, 0]}
            />
            <mesh
              name="Circle038_406"
              geometry={nodes.Circle038_406.geometry}
              material={materials.Grass}
              position={[0.359, 0.031, -0.308]}
              scale={0}
            />
            <mesh
              name="Circle038_407"
              geometry={nodes.Circle038_407.geometry}
              material={materials.Grass}
              position={[0.385, 0.027, -0.339]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_408"
              geometry={nodes.Circle038_408.geometry}
              material={materials.Grass}
              position={[0.254, 0.005, -0.499]}
              scale={[0.002, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_409"
              geometry={nodes.Circle038_409.geometry}
              material={materials.Grass}
              position={[0.281, 0.022, -0.425]}
              scale={[0.002, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_410"
              geometry={nodes.Circle038_410.geometry}
              material={materials.Grass}
              position={[0.302, 0.025, -0.406]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_411"
              geometry={nodes.Circle038_411.geometry}
              material={materials.Grass}
              position={[0.318, 0.019, -0.43]}
              scale={0.001}
            />
            <mesh
              name="Circle038_412"
              geometry={nodes.Circle038_412.geometry}
              material={materials.Grass}
              position={[0.321, 0.013, -0.455]}
              scale={0.001}
            />
            <mesh
              name="Circle038_413"
              geometry={nodes.Circle038_413.geometry}
              material={materials.Grass}
              position={[0.356, 0.013, -0.451]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_414"
              geometry={nodes.Circle038_414.geometry}
              material={materials.Grass}
              position={[0.388, 0.013, -0.443]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_415"
              geometry={nodes.Circle038_415.geometry}
              material={materials.Grass}
              position={[0.396, 0.009, -0.459]}
              scale={0}
            />
            <mesh
              name="Circle038_416"
              geometry={nodes.Circle038_416.geometry}
              material={materials.Grass}
              position={[0.517, 0.003, -0.413]}
              scale={0}
            />
            <mesh
              name="Circle038_417"
              geometry={nodes.Circle038_417.geometry}
              material={materials.Grass}
              position={[0.537, 0.003, -0.381]}
              scale={[0.001, 0.001, 0]}
            />
            <mesh
              name="Circle038_418"
              geometry={nodes.Circle038_418.geometry}
              material={materials.Grass}
              position={[0.552, 0.004, -0.347]}
              scale={[0.002, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_419"
              geometry={nodes.Circle038_419.geometry}
              material={materials.Grass}
              position={[0.58, 0.005, -0.307]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_420"
              geometry={nodes.Circle038_420.geometry}
              material={materials.Grass}
              position={[0.513, 0.006, -0.332]}
              scale={0}
            />
            <mesh
              name="Circle038_421"
              geometry={nodes.Circle038_421.geometry}
              material={materials.Grass}
              position={[0.54, 0.006, -0.31]}
              scale={[0, 0.001, 0]}
            />
            <mesh
              name="Circle038_422"
              geometry={nodes.Circle038_422.geometry}
              material={materials.Grass}
              position={[0.558, 0.007, -0.28]}
              scale={0}
            />
            <mesh
              name="Circle038_423"
              geometry={nodes.Circle038_423.geometry}
              material={materials.Grass}
              position={[0.668, 0.001, -0.328]}
              scale={0}
            />
            <mesh
              name="Circle038_424"
              geometry={nodes.Circle038_424.geometry}
              material={materials.Grass}
              position={[0.687, 0.013, -0.125]}
              scale={[0.002, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_425"
              geometry={nodes.Circle038_425.geometry}
              material={materials.Grass}
              position={[0.69, 0.012, -0.049]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_426"
              geometry={nodes.Circle038_426.geometry}
              material={materials.Grass}
              position={[0.7, 0.012, -0.027]}
              scale={0.001}
            />
            <mesh
              name="Circle038_427"
              geometry={nodes.Circle038_427.geometry}
              material={materials.Grass}
              position={[0.724, 0.009, -0.052]}
              scale={[0, 0.001, 0]}
            />
            <mesh
              name="Circle038_428"
              geometry={nodes.Circle038_428.geometry}
              material={materials.Grass}
              position={[0.74, 0.007, -0.081]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_429"
              geometry={nodes.Circle038_429.geometry}
              material={materials.Grass}
              position={[0.766, 0.005, -0.073]}
              scale={0.001}
            />
            <mesh
              name="Circle038_430"
              geometry={nodes.Circle038_430.geometry}
              material={materials.Grass}
              position={[0.787, 0.004, -0.058]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_431"
              geometry={nodes.Circle038_431.geometry}
              material={materials.Grass}
              position={[0.567, 0.01, -0.029]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_432"
              geometry={nodes.Circle038_432.geometry}
              material={materials.Grass}
              position={[0.507, 0.007, -0.062]}
              scale={0.001}
            />
            <mesh
              name="Circle038_433"
              geometry={nodes.Circle038_433.geometry}
              material={materials.Grass}
              position={[0.612, 0.013, -0.04]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_434"
              geometry={nodes.Circle038_434.geometry}
              material={materials.Grass}
              position={[0.619, 0.014, -0.009]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_435"
              geometry={nodes.Circle038_435.geometry}
              material={materials.Grass}
              position={[0.584, 0.007, -0.239]}
              scale={[0, 0.001, 0]}
            />
            <mesh
              name="Circle038_436"
              geometry={nodes.Circle038_436.geometry}
              material={materials.Grass}
              position={[0.508, 0.01, -0.252]}
              scale={0}
            />
            <mesh
              name="Circle038_437"
              geometry={nodes.Circle038_437.geometry}
              material={materials.Grass}
              position={[0.541, 0.008, -0.239]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_438"
              geometry={nodes.Circle038_438.geometry}
              material={materials.Grass}
              position={[0.556, 0.011, -0.135]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_439"
              geometry={nodes.Circle038_439.geometry}
              material={materials.Grass}
              position={[0.582, 0.01, -0.161]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_440"
              geometry={nodes.Circle038_440.geometry}
              material={materials.Grass}
              position={[0.508, 0.01, -0.188]}
              scale={0.001}
            />
            <mesh
              name="Circle038_441"
              geometry={nodes.Circle038_441.geometry}
              material={materials.Grass}
              position={[0.54, 0.01, -0.169]}
              scale={[0.002, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_442"
              geometry={nodes.Circle038_442.geometry}
              material={materials.Grass}
              position={[0.556, 0.011, -0.135]}
              scale={0.001}
            />
            <mesh
              name="Circle038_443"
              geometry={nodes.Circle038_443.geometry}
              material={materials.Grass}
              position={[0.18, 0.02, -0.279]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_444"
              geometry={nodes.Circle038_444.geometry}
              material={materials.Grass}
              position={[0.13, 0.011, -0.312]}
              scale={0.001}
            />
            <mesh
              name="Circle038_445"
              geometry={nodes.Circle038_445.geometry}
              material={materials.Grass}
              position={[0.151, 0.015, -0.29]}
              scale={[0.002, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_446"
              geometry={nodes.Circle038_446.geometry}
              material={materials.Grass}
              position={[0.163, 0.016, -0.259]}
              scale={0.001}
            />
            <mesh
              name="Circle038_447"
              geometry={nodes.Circle038_447.geometry}
              material={materials.Grass}
              position={[0.18, 0.02, -0.279]}
              scale={0.001}
            />
            <mesh
              name="Circle038_448"
              geometry={nodes.Circle038_448.geometry}
              material={materials.Grass}
              position={[0.193, 0.023, -0.312]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_449"
              geometry={nodes.Circle038_449.geometry}
              material={materials.Grass}
              position={[0.214, 0.026, -0.29]}
              scale={0}
            />
            <mesh
              name="Circle038_450"
              geometry={nodes.Circle038_450.geometry}
              material={materials.Grass}
              position={[0.038, 0.007, -0.321]}
              scale={0}
            />
            <mesh
              name="Circle038_451"
              geometry={nodes.Circle038_451.geometry}
              material={materials.Grass}
              position={[0.055, 0.008, -0.342]}
              scale={0}
            />
            <mesh
              name="Circle038_452"
              geometry={nodes.Circle038_452.geometry}
              material={materials.Grass}
              position={[0.005, 0.007, -0.312]}
              scale={[0.001, 0.001, 0]}
            />
            <mesh
              name="Circle038_453"
              geometry={nodes.Circle038_453.geometry}
              material={materials.Grass}
              position={[0.089, 0.007, -0.415]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_454"
              geometry={nodes.Circle038_454.geometry}
              material={materials.Grass}
              position={[0.1, 0.009, -0.384]}
              scale={0.001}
            />
            <mesh
              name="Circle038_455"
              geometry={nodes.Circle038_455.geometry}
              material={materials.Grass}
              position={[0.117, 0.008, -0.404]}
              scale={0}
            />
            <mesh
              name="Circle038_456"
              geometry={nodes.Circle038_456.geometry}
              material={materials.Grass}
              position={[0.068, 0.005, -0.437]}
              scale={0.001}
            />
            <mesh
              name="Circle038_457"
              geometry={nodes.Circle038_457.geometry}
              material={materials.Grass}
              position={[0.089, 0.007, -0.415]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_458"
              geometry={nodes.Circle038_458.geometry}
              material={materials.Grass}
              position={[0.163, 0.001, -0.071]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_459"
              geometry={nodes.Circle038_459.geometry}
              material={materials.Grass}
              position={[0.18, 0.001, -0.092]}
              scale={0}
            />
            <mesh
              name="Circle038_460"
              geometry={nodes.Circle038_460.geometry}
              material={materials.Grass}
              position={[0.13, 0, -0.062]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_461"
              geometry={nodes.Circle038_461.geometry}
              material={materials.Grass}
              position={[0.214, 0.001, -0.04]}
              scale={0}
            />
            <mesh
              name="Circle038_462"
              geometry={nodes.Circle038_462.geometry}
              material={materials.Grass}
              position={[0.225, 0, -0.009]}
              scale={0}
            />
            <mesh
              name="Circle038_463"
              geometry={nodes.Circle038_463.geometry}
              material={materials.Grass}
              position={[0.055, 0.008, -0.029]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_464"
              geometry={nodes.Circle038_464.geometry}
              material={materials.Grass}
              position={[0.068, 0.006, -0.062]}
              scale={0.001}
            />
            <mesh
              name="Circle038_465"
              geometry={nodes.Circle038_465.geometry}
              material={materials.Grass}
              position={[0.089, 0.004, -0.04]}
              scale={0.001}
            />
            <mesh
              name="Circle038_466"
              geometry={nodes.Circle038_466.geometry}
              material={materials.Grass}
              position={[0.038, 0.008, -0.196]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_467"
              geometry={nodes.Circle038_467.geometry}
              material={materials.Grass}
              position={[0.055, 0.008, -0.217]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_468"
              geometry={nodes.Circle038_468.geometry}
              material={materials.Grass}
              position={[0.005, 0.01, -0.187]}
              scale={0.001}
            />
            <mesh
              name="Circle038_469"
              geometry={nodes.Circle038_469.geometry}
              material={materials.Grass}
              position={[0.026, 0.009, -0.165]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_470"
              geometry={nodes.Circle038_470.geometry}
              material={materials.Grass}
              position={[0.1, 0.003, -0.134]}
              scale={[0.002, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_471"
              geometry={nodes.Circle038_471.geometry}
              material={materials.Grass}
              position={[0.43, 0.005, -0.092]}
              scale={[0, 0.001, 0]}
            />
            <mesh
              name="Circle038_472"
              geometry={nodes.Circle038_472.geometry}
              material={materials.Grass}
              position={[0.38, 0.004, -0.124]}
              scale={0}
            />
            <mesh
              name="Circle038_473"
              geometry={nodes.Circle038_473.geometry}
              material={materials.Grass}
              position={[0.401, 0.002, -0.04]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_474"
              geometry={nodes.Circle038_474.geometry}
              material={materials.Grass}
              position={[0.413, 0.001, -0.009]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_475"
              geometry={nodes.Circle038_475.geometry}
              material={materials.Grass}
              position={[0.43, 0.003, -0.029]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_476"
              geometry={nodes.Circle038_476.geometry}
              material={materials.Grass}
              position={[0.443, 0.005, -0.062]}
              scale={0.001}
            />
            <mesh
              name="Circle038_477"
              geometry={nodes.Circle038_477.geometry}
              material={materials.Grass}
              position={[0.276, 0.003, -0.102]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_478"
              geometry={nodes.Circle038_478.geometry}
              material={materials.Grass}
              position={[0.288, 0.002, -0.071]}
              scale={[0.002, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_479"
              geometry={nodes.Circle038_479.geometry}
              material={materials.Grass}
              position={[0.305, 0.002, -0.092]}
              scale={0.001}
            />
            <mesh
              name="Circle038_480"
              geometry={nodes.Circle038_480.geometry}
              material={materials.Grass}
              position={[0.255, 0.003, -0.124]}
              scale={0.001}
            />
            <mesh
              name="Circle038_481"
              geometry={nodes.Circle038_481.geometry}
              material={materials.Grass}
              position={[0.276, 0.001, -0.04]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_482"
              geometry={nodes.Circle038_482.geometry}
              material={materials.Grass}
              position={[0.35, 0, -0.009]}
              scale={0}
            />
            <mesh
              name="Circle038_483"
              geometry={nodes.Circle038_483.geometry}
              material={materials.Grass}
              position={[0.367, 0.001, -0.029]}
              scale={0.001}
            />
            <mesh
              name="Circle038_484"
              geometry={nodes.Circle038_484.geometry}
              material={materials.Grass}
              position={[0.318, 0.002, -0.062]}
              scale={0.001}
            />
            <mesh
              name="Circle038_485"
              geometry={nodes.Circle038_485.geometry}
              material={materials.Grass}
              position={[0.339, 0.001, -0.04]}
              scale={[0.001, 0.001, 0]}
            />
            <mesh
              name="Circle038_486"
              geometry={nodes.Circle038_486.geometry}
              material={materials.Grass}
              position={[0.35, 0, -0.009]}
              scale={0.001}
            />
            <mesh
              name="Circle038_487"
              geometry={nodes.Circle038_487.geometry}
              material={materials.Grass}
              position={[0.367, 0.001, -0.029]}
              scale={[0, 0.001, 0]}
            />
            <mesh
              name="Circle038_488"
              geometry={nodes.Circle038_488.geometry}
              material={materials.Grass}
              position={[0.256, 0.032, -0.252]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_489"
              geometry={nodes.Circle038_489.geometry}
              material={materials.Grass}
              position={[0.278, 0.027, -0.237]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_490"
              geometry={nodes.Circle038_490.geometry}
              material={materials.Grass}
              position={[0.289, 0.02, -0.207]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_491"
              geometry={nodes.Circle038_491.geometry}
              material={materials.Grass}
              position={[0.307, 0.025, -0.236]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_492"
              geometry={nodes.Circle038_492.geometry}
              material={materials.Grass}
              position={[0.255, 0.018, -0.188]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_493"
              geometry={nodes.Circle038_493.geometry}
              material={materials.Grass}
              position={[0.277, 0.013, -0.168]}
              scale={0.001}
            />
            <mesh
              name="Circle038_494"
              geometry={nodes.Circle038_494.geometry}
              material={materials.Grass}
              position={[0.288, 0.005, -0.135]}
              scale={0}
            />
            <mesh
              name="Circle038_495"
              geometry={nodes.Circle038_495.geometry}
              material={materials.Grass}
              position={[0.305, 0.01, -0.161]}
              scale={0.001}
            />
            <mesh
              name="Circle038_496"
              geometry={nodes.Circle038_496.geometry}
              material={materials.Grass}
              position={[0.255, 0.018, -0.188]}
              scale={[0.002, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_497"
              geometry={nodes.Circle038_497.geometry}
              material={materials.Grass}
              position={[0.341, 0.013, -0.178]}
              scale={0.001}
            />
            <mesh
              name="Circle038_498"
              geometry={nodes.Circle038_498.geometry}
              material={materials.Grass}
              position={[0.351, 0.005, -0.137]}
              scale={0}
            />
            <mesh
              name="Circle038_499"
              geometry={nodes.Circle038_499.geometry}
              material={materials.Grass}
              position={[0.369, 0.01, -0.168]}
              scale={[0.002, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_500"
              geometry={nodes.Circle038_500.geometry}
              material={materials.Grass}
              position={[-0.374, 0.006, -0.392]}
              scale={0}
            />
            <mesh
              name="Circle038_501"
              geometry={nodes.Circle038_501.geometry}
              material={materials.Grass}
              position={[-0.287, 0.012, -0.291]}
              scale={[0.001, 0.001, 0]}
            />
            <mesh
              name="Circle038_502"
              geometry={nodes.Circle038_502.geometry}
              material={materials.Grass}
              position={[-0.275, 0.012, -0.259]}
              scale={0.001}
            />
            <mesh
              name="Circle038_503"
              geometry={nodes.Circle038_503.geometry}
              material={materials.Grass}
              position={[-0.258, 0.013, -0.28]}
              scale={[0.002, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_504"
              geometry={nodes.Circle038_504.geometry}
              material={materials.Grass}
              position={[-0.308, 0.011, -0.316]}
              scale={0}
            />
            <mesh
              name="Circle038_505"
              geometry={nodes.Circle038_505.geometry}
              material={materials.Grass}
              position={[-0.287, 0.012, -0.291]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_506"
              geometry={nodes.Circle038_506.geometry}
              material={materials.Grass}
              position={[-0.476, 0.008, -0.325]}
              scale={[0.001, 0.001, 0]}
            />
            <mesh
              name="Circle038_507"
              geometry={nodes.Circle038_507.geometry}
              material={materials.Grass}
              position={[-0.453, 0.006, -0.348]}
              scale={[0.002, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_508"
              geometry={nodes.Circle038_508.geometry}
              material={materials.Grass}
              position={[-0.517, 0.01, -0.313]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_509"
              geometry={nodes.Circle038_509.geometry}
              material={materials.Grass}
              position={[-0.498, 0.012, -0.291]}
              scale={[0.002, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_510"
              geometry={nodes.Circle038_510.geometry}
              material={materials.Grass}
              position={[-0.408, 0.009, -0.26]}
              scale={[0.002, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_511"
              geometry={nodes.Circle038_511.geometry}
              material={materials.Grass}
              position={[-0.386, 0.007, -0.284]}
              scale={0.001}
            />
            <mesh
              name="Circle038_512"
              geometry={nodes.Circle038_512.geometry}
              material={materials.Grass}
              position={[-0.444, 0.008, -0.317]}
              scale={0.001}
            />
            <mesh
              name="Circle038_513"
              geometry={nodes.Circle038_513.geometry}
              material={materials.Grass}
              position={[-0.421, 0.009, -0.294]}
              scale={[0, 0.001, 0]}
            />
            <mesh
              name="Circle038_514"
              geometry={nodes.Circle038_514.geometry}
              material={materials.Grass}
              position={[-0.408, 0.009, -0.26]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_515"
              geometry={nodes.Circle038_515.geometry}
              material={materials.Grass}
              position={[-0.386, 0.007, -0.284]}
              scale={[0.002, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_516"
              geometry={nodes.Circle038_516.geometry}
              material={materials.Grass}
              position={[-0.369, 0.015, -0.125]}
              scale={0}
            />
            <mesh
              name="Circle038_517"
              geometry={nodes.Circle038_517.geometry}
              material={materials.Grass}
              position={[-0.348, 0.013, -0.103]}
              scale={0}
            />
            <mesh
              name="Circle038_518"
              geometry={nodes.Circle038_518.geometry}
              material={materials.Grass}
              position={[-0.275, 0.004, -0.009]}
              scale={0}
            />
            <mesh
              name="Circle038_519"
              geometry={nodes.Circle038_519.geometry}
              material={materials.Grass}
              position={[-0.258, 0.002, -0.029]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_520"
              geometry={nodes.Circle038_520.geometry}
              material={materials.Grass}
              position={[-0.307, 0.008, -0.062]}
              scale={[0.001, 0.001, 0]}
            />
            <mesh
              name="Circle038_521"
              geometry={nodes.Circle038_521.geometry}
              material={materials.Grass}
              position={[-0.286, 0.005, -0.04]}
              scale={0.001}
            />
            <mesh
              name="Circle038_522"
              geometry={nodes.Circle038_522.geometry}
              material={materials.Grass}
              position={[-0.275, 0.004, -0.009]}
              scale={0}
            />
            <mesh
              name="Circle038_523"
              geometry={nodes.Circle038_523.geometry}
              material={materials.Grass}
              position={[-0.479, 0.029, -0.093]}
              scale={0}
            />
            <mesh
              name="Circle038_524"
              geometry={nodes.Circle038_524.geometry}
              material={materials.Grass}
              position={[-0.555, 0.039, -0.063]}
              scale={0}
            />
            <mesh
              name="Circle038_525"
              geometry={nodes.Circle038_525.geometry}
              material={materials.Grass}
              position={[-0.524, 0.035, -0.04]}
              scale={[0, 0.001, 0]}
            />
            <mesh
              name="Circle038_526"
              geometry={nodes.Circle038_526.geometry}
              material={materials.Grass}
              position={[-0.509, 0.034, -0.01]}
              scale={[0, 0.001, 0]}
            />
            <mesh
              name="Circle038_527"
              geometry={nodes.Circle038_527.geometry}
              material={materials.Grass}
              position={[-0.482, 0.03, -0.03]}
              scale={0.001}
            />
            <mesh
              name="Circle038_528"
              geometry={nodes.Circle038_528.geometry}
              material={materials.Grass}
              position={[-0.555, 0.039, -0.063]}
              scale={0}
            />
            <mesh
              name="Circle038_529"
              geometry={nodes.Circle038_529.geometry}
              material={materials.Grass}
              position={[-0.429, 0.023, -0.04]}
              scale={[0.002, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_530"
              geometry={nodes.Circle038_530.geometry}
              material={materials.Grass}
              position={[-0.497, 0.022, -0.197]}
              scale={0}
            />
            <mesh
              name="Circle038_531"
              geometry={nodes.Circle038_531.geometry}
              material={materials.Grass}
              position={[-0.472, 0.018, -0.218]}
              scale={0}
            />
            <mesh
              name="Circle038_532"
              geometry={nodes.Circle038_532.geometry}
              material={materials.Grass}
              position={[-0.538, 0.019, -0.25]}
              scale={0.001}
            />
            <mesh
              name="Circle038_533"
              geometry={nodes.Circle038_533.geometry}
              material={materials.Grass}
              position={[-0.511, 0.02, -0.228]}
              scale={[0, 0.001, 0]}
            />
            <mesh
              name="Circle038_534"
              geometry={nodes.Circle038_534.geometry}
              material={materials.Grass}
              position={[-0.502, 0.03, -0.135]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_535"
              geometry={nodes.Circle038_535.geometry}
              material={materials.Grass}
              position={[-0.476, 0.025, -0.155]}
              scale={[0, 0.001, 0]}
            />
            <mesh
              name="Circle038_536"
              geometry={nodes.Circle038_536.geometry}
              material={materials.Grass}
              position={[-0.544, 0.028, -0.188]}
              scale={0.001}
            />
            <mesh
              name="Circle038_537"
              geometry={nodes.Circle038_537.geometry}
              material={materials.Grass}
              position={[-0.516, 0.028, -0.166]}
              scale={0}
            />
            <mesh
              name="Circle038_538"
              geometry={nodes.Circle038_538.geometry}
              material={materials.Grass}
              position={[-0.502, 0.03, -0.135]}
              scale={0.001}
            />
            <mesh
              name="Circle038_539"
              geometry={nodes.Circle038_539.geometry}
              material={materials.Grass}
              position={[-0.476, 0.025, -0.155]}
              scale={[0.002, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_540"
              geometry={nodes.Circle038_540.geometry}
              material={materials.Grass}
              position={[-0.456, 0.019, -0.187]}
              scale={0.001}
            />
            <mesh
              name="Circle038_541"
              geometry={nodes.Circle038_541.geometry}
              material={materials.Grass}
              position={[-0.426, 0.018, -0.165]}
              scale={[0.002, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_542"
              geometry={nodes.Circle038_542.geometry}
              material={materials.Grass}
              position={[-0.41, 0.019, -0.135]}
              scale={0}
            />
            <mesh
              name="Circle038_543"
              geometry={nodes.Circle038_543.geometry}
              material={materials.Grass}
              position={[-0.386, 0.015, -0.155]}
              scale={[0.002, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_544"
              geometry={nodes.Circle038_544.geometry}
              material={materials.Grass}
              position={[-0.456, 0.019, -0.187]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_545"
              geometry={nodes.Circle038_545.geometry}
              material={materials.Grass}
              position={[-0.426, 0.018, -0.165]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_546"
              geometry={nodes.Circle038_546.geometry}
              material={materials.Grass}
              position={[-0.087, 0.011, -0.071]}
              scale={[0, 0.001, 0]}
            />
            <mesh
              name="Circle038_547"
              geometry={nodes.Circle038_547.geometry}
              material={materials.Grass}
              position={[-0.07, 0.012, -0.092]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_548"
              geometry={nodes.Circle038_548.geometry}
              material={materials.Grass}
              position={[-0.12, 0.011, -0.124]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_549"
              geometry={nodes.Circle038_549.geometry}
              material={materials.Grass}
              position={[-0.099, 0.011, -0.102]}
              scale={0.001}
            />
            <mesh
              name="Circle038_550"
              geometry={nodes.Circle038_550.geometry}
              material={materials.Grass}
              position={[-0.087, 0.011, -0.009]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_551"
              geometry={nodes.Circle038_551.geometry}
              material={materials.Grass}
              position={[-0.008, 0.014, -0.029]}
              scale={[0, 0.001, 0]}
            />
            <mesh
              name="Circle038_552"
              geometry={nodes.Circle038_552.geometry}
              material={materials.Grass}
              position={[-0.245, 0.001, -0.124]}
              scale={[0.002, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_553"
              geometry={nodes.Circle038_553.geometry}
              material={materials.Grass}
              position={[-0.224, 0.003, -0.102]}
              scale={0}
            />
            <mesh
              name="Circle038_554"
              geometry={nodes.Circle038_554.geometry}
              material={materials.Grass}
              position={[-0.212, 0.004, -0.071]}
              scale={0.001}
            />
            <mesh
              name="Circle038_555"
              geometry={nodes.Circle038_555.geometry}
              material={materials.Grass}
              position={[-0.195, 0.005, -0.092]}
              scale={[0.002, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_556"
              geometry={nodes.Circle038_556.geometry}
              material={materials.Grass}
              position={[-0.245, 0.001, -0.124]}
              scale={0}
            />
            <mesh
              name="Circle038_557"
              geometry={nodes.Circle038_557.geometry}
              material={materials.Grass}
              position={[-0.224, 0.002, -0.04]}
              scale={0}
            />
            <mesh
              name="Circle038_558"
              geometry={nodes.Circle038_558.geometry}
              material={materials.Grass}
              position={[-0.212, 0.003, -0.009]}
              scale={0}
            />
            <mesh
              name="Circle038_559"
              geometry={nodes.Circle038_559.geometry}
              material={materials.Grass}
              position={[-0.133, 0.009, -0.029]}
              scale={[0, 0.001, 0]}
            />
            <mesh
              name="Circle038_560"
              geometry={nodes.Circle038_560.geometry}
              material={materials.Grass}
              position={[-0.182, 0.006, -0.062]}
              scale={[0.002, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_561"
              geometry={nodes.Circle038_561.geometry}
              material={materials.Grass}
              position={[-0.224, 0.012, -0.227]}
              scale={0}
            />
            <mesh
              name="Circle038_562"
              geometry={nodes.Circle038_562.geometry}
              material={materials.Grass}
              position={[-0.212, 0.01, -0.196]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_563"
              geometry={nodes.Circle038_563.geometry}
              material={materials.Grass}
              position={[-0.195, 0.013, -0.217]}
              scale={0.001}
            />
            <mesh
              name="Circle038_564"
              geometry={nodes.Circle038_564.geometry}
              material={materials.Grass}
              position={[-0.245, 0.007, -0.187]}
              scale={0.001}
            />
            <mesh
              name="Circle038_565"
              geometry={nodes.Circle038_565.geometry}
              material={materials.Grass}
              position={[-0.161, 0.011, -0.165]}
              scale={[0.001, 0.001, 0]}
            />
            <mesh
              name="Circle038_566"
              geometry={nodes.Circle038_566.geometry}
              material={materials.Grass}
              position={[-0.15, 0.01, -0.134]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_567"
              geometry={nodes.Circle038_567.geometry}
              material={materials.Grass}
              position={[-0.632, 0.038, -0.093]}
              scale={0.001}
            />
            <mesh
              name="Circle038_568"
              geometry={nodes.Circle038_568.geometry}
              material={materials.Grass}
              position={[-0.683, 0.038, -0.125]}
              scale={0.001}
            />
            <mesh
              name="Circle038_569"
              geometry={nodes.Circle038_569.geometry}
              material={materials.Grass}
              position={[-0.661, 0.038, -0.103]}
              scale={0.001}
            />
            <mesh
              name="Circle038_570"
              geometry={nodes.Circle038_570.geometry}
              material={materials.Grass}
              position={[-0.65, 0.039, -0.072]}
              scale={0.001}
            />
            <mesh
              name="Circle038_571"
              geometry={nodes.Circle038_571.geometry}
              material={materials.Grass}
              position={[-0.635, 0.04, -0.03]}
              scale={[0.001, 0.001, 0]}
            />
            <mesh
              name="Circle038_572"
              geometry={nodes.Circle038_572.geometry}
              material={materials.Grass}
              position={[-0.683, 0.038, -0.062]}
              scale={[0.001, 0.001, 0]}
            />
            <mesh
              name="Circle038_573"
              geometry={nodes.Circle038_573.geometry}
              material={materials.Grass}
              position={[-0.662, 0.039, -0.04]}
              scale={0.001}
            />
            <mesh
              name="Circle038_574"
              geometry={nodes.Circle038_574.geometry}
              material={materials.Grass}
              position={[-0.591, 0.041, -0.01]}
              scale={0.001}
            />
            <mesh
              name="Circle038_575"
              geometry={nodes.Circle038_575.geometry}
              material={materials.Grass}
              position={[-0.723, 0.025, -0.092]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_576"
              geometry={nodes.Circle038_576.geometry}
              material={materials.Grass}
              position={[-0.747, 0.018, -0.124]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_577"
              geometry={nodes.Circle038_577.geometry}
              material={materials.Grass}
              position={[-0.737, 0.018, -0.04]}
              scale={0}
            />
            <mesh
              name="Circle038_578"
              geometry={nodes.Circle038_578.geometry}
              material={materials.Grass}
              position={[-0.731, 0.019, -0.009]}
              scale={0}
            />
            <mesh
              name="Circle038_579"
              geometry={nodes.Circle038_579.geometry}
              material={materials.Grass}
              position={[-0.692, 0.037, -0.03]}
              scale={0}
            />
            <mesh
              name="Circle038_580"
              geometry={nodes.Circle038_580.geometry}
              material={materials.Grass}
              position={[-0.716, 0.027, -0.062]}
              scale={0}
            />
            <mesh
              name="Circle038_581"
              geometry={nodes.Circle038_581.geometry}
              material={materials.Grass}
              position={[-0.706, 0.031, -0.04]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_582"
              geometry={nodes.Circle038_582.geometry}
              material={materials.Grass}
              position={[-0.714, 0.02, -0.203]}
              scale={0.001}
            />
            <mesh
              name="Circle038_583"
              geometry={nodes.Circle038_583.geometry}
              material={materials.Grass}
              position={[-0.702, 0.02, -0.233]}
              scale={[0.002, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_584"
              geometry={nodes.Circle038_584.geometry}
              material={materials.Grass}
              position={[-0.732, 0.018, -0.184]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_585"
              geometry={nodes.Circle038_585.geometry}
              material={materials.Grass}
              position={[0.674, 0.005, 0.666]}
              scale={[0, 0.001, 0]}
            />
            <mesh
              name="Circle038_586"
              geometry={nodes.Circle038_586.geometry}
              material={materials.Grass}
              position={[0.691, 0.005, 0.71]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_587"
              geometry={nodes.Circle038_587.geometry}
              material={materials.Grass}
              position={[0.566, 0, 0.668]}
              scale={[0.001, 0.001, 0]}
            />
            <mesh
              name="Circle038_588"
              geometry={nodes.Circle038_588.geometry}
              material={materials.Grass}
              position={[0.506, 0, 0.626]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_589"
              geometry={nodes.Circle038_589.geometry}
              material={materials.Grass}
              position={[0.531, 0, 0.651]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_590"
              geometry={nodes.Circle038_590.geometry}
              material={materials.Grass}
              position={[0.548, 0, 0.69]}
              scale={0.001}
            />
            <mesh
              name="Circle038_591"
              geometry={nodes.Circle038_591.geometry}
              material={materials.Grass}
              position={[0.566, 0, 0.668]}
              scale={0}
            />
            <mesh
              name="Circle038_592"
              geometry={nodes.Circle038_592.geometry}
              material={materials.Grass}
              position={[0.507, 0, 0.69]}
              scale={0.001}
            />
            <mesh
              name="Circle038_593"
              geometry={nodes.Circle038_593.geometry}
              material={materials.Grass}
              position={[0.621, 0.001, 0.752]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_594"
              geometry={nodes.Circle038_594.geometry}
              material={materials.Grass}
              position={[0.539, 0.002, 0.554]}
              scale={0.001}
            />
            <mesh
              name="Circle038_595"
              geometry={nodes.Circle038_595.geometry}
              material={materials.Grass}
              position={[0.556, 0.003, 0.533]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_596"
              geometry={nodes.Circle038_596.geometry}
              material={materials.Grass}
              position={[0.505, 0, 0.563]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_597"
              geometry={nodes.Circle038_597.geometry}
              material={materials.Grass}
              position={[0.595, 0.002, 0.585]}
              scale={0.001}
            />
            <mesh
              name="Circle038_598"
              geometry={nodes.Circle038_598.geometry}
              material={materials.Grass}
              position={[0.61, 0.001, 0.616]}
              scale={0.001}
            />
            <mesh
              name="Circle038_599"
              geometry={nodes.Circle038_599.geometry}
              material={materials.Grass}
              position={[0.583, 0.003, 0.881]}
              scale={0}
            />
            <mesh
              name="Circle038_600"
              geometry={nodes.Circle038_600.geometry}
              material={materials.Grass}
              position={[0.531, 0.001, 0.845]}
              scale={[0.001, 0.001, 0]}
            />
            <mesh
              name="Circle038_601"
              geometry={nodes.Circle038_601.geometry}
              material={materials.Grass}
              position={[0.558, 0.002, 0.874]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_602"
              geometry={nodes.Circle038_602.geometry}
              material={materials.Grass}
              position={[0.163, 0.003, 0.679]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_603"
              geometry={nodes.Circle038_603.geometry}
              material={materials.Grass}
              position={[0.18, 0.003, 0.658]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_604"
              geometry={nodes.Circle038_604.geometry}
              material={materials.Grass}
              position={[0.13, 0.006, 0.626]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_605"
              geometry={nodes.Circle038_605.geometry}
              material={materials.Grass}
              position={[0.151, 0.003, 0.71]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_606"
              geometry={nodes.Circle038_606.geometry}
              material={materials.Grass}
              position={[0.163, 0.002, 0.741]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_607"
              geometry={nodes.Circle038_607.geometry}
              material={materials.Grass}
              position={[0.18, 0.003, 0.721]}
              scale={0}
            />
            <mesh
              name="Circle038_608"
              geometry={nodes.Circle038_608.geometry}
              material={materials.Grass}
              position={[0.13, 0.003, 0.688]}
              scale={0.001}
            />
            <mesh
              name="Circle038_609"
              geometry={nodes.Circle038_609.geometry}
              material={materials.Grass}
              position={[0.214, 0.004, 0.71]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_610"
              geometry={nodes.Circle038_610.geometry}
              material={materials.Grass}
              position={[0.225, 0.005, 0.741]}
              scale={0.001}
            />
            <mesh
              name="Circle038_611"
              geometry={nodes.Circle038_611.geometry}
              material={materials.Grass}
              position={[0.242, 0.005, 0.721]}
              scale={0}
            />
            <mesh
              name="Circle038_612"
              geometry={nodes.Circle038_612.geometry}
              material={materials.Grass}
              position={[-0.013, 0.009, 0.65]}
              scale={0}
            />
            <mesh
              name="Circle038_613"
              geometry={nodes.Circle038_613.geometry}
              material={materials.Grass}
              position={[0.014, 0.007, 0.664]}
              scale={[0.002, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_614"
              geometry={nodes.Circle038_614.geometry}
              material={materials.Grass}
              position={[0.1, 0.001, 0.741]}
              scale={0.001}
            />
            <mesh
              name="Circle038_615"
              geometry={nodes.Circle038_615.geometry}
              material={materials.Grass}
              position={[0.117, 0.002, 0.721]}
              scale={[0.001, 0.001, 0]}
            />
            <mesh
              name="Circle038_616"
              geometry={nodes.Circle038_616.geometry}
              material={materials.Grass}
              position={[0.063, 0.004, 0.694]}
              scale={0.001}
            />
            <mesh
              name="Circle038_617"
              geometry={nodes.Circle038_617.geometry}
              material={materials.Grass}
              position={[0.087, 0.003, 0.713]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_618"
              geometry={nodes.Circle038_618.geometry}
              material={materials.Grass}
              position={[0.032, 0.014, 0.561]}
              scale={[0.002, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_619"
              geometry={nodes.Circle038_619.geometry}
              material={materials.Grass}
              position={[0.052, 0.013, 0.537]}
              scale={[0.002, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_620"
              geometry={nodes.Circle038_620.geometry}
              material={materials.Grass}
              position={[-0.004, 0.016, 0.576]}
              scale={[0.002, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_621"
              geometry={nodes.Circle038_621.geometry}
              material={materials.Grass}
              position={[0.016, 0.012, 0.599]}
              scale={[0.002, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_622"
              geometry={nodes.Circle038_622.geometry}
              material={materials.Grass}
              position={[0.026, 0.009, 0.633]}
              scale={[0, 0.001, 0]}
            />
            <mesh
              name="Circle038_623"
              geometry={nodes.Circle038_623.geometry}
              material={materials.Grass}
              position={[0.116, 0.005, 0.597]}
              scale={0}
            />
            <mesh
              name="Circle038_624"
              geometry={nodes.Circle038_624.geometry}
              material={materials.Grass}
              position={[0.063, 0.01, 0.569]}
              scale={0.001}
            />
            <mesh
              name="Circle038_625"
              geometry={nodes.Circle038_625.geometry}
              material={materials.Grass}
              position={[0.149, 0, 0.909]}
              scale={0.001}
            />
            <mesh
              name="Circle038_626"
              geometry={nodes.Circle038_626.geometry}
              material={materials.Grass}
              position={[0.153, 0, 1.046]}
              scale={0}
            />
            <mesh
              name="Circle038_627"
              geometry={nodes.Circle038_627.geometry}
              material={materials.Grass}
              position={[0.234, 0, 1.016]}
              scale={[0.002, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_628"
              geometry={nodes.Circle038_628.geometry}
              material={materials.Grass}
              position={[0.188, 0, 0.968]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_629"
              geometry={nodes.Circle038_629.geometry}
              material={materials.Grass}
              position={[0.207, 0, 1.001]}
              scale={0.001}
            />
            <mesh
              name="Circle038_630"
              geometry={nodes.Circle038_630.geometry}
              material={materials.Grass}
              position={[0.01, 0.001, 0.957]}
              scale={0.001}
            />
            <mesh
              name="Circle038_631"
              geometry={nodes.Circle038_631.geometry}
              material={materials.Grass}
              position={[0.026, 0.001, 0.936]}
              scale={0.001}
            />
            <mesh
              name="Circle038_632"
              geometry={nodes.Circle038_632.geometry}
              material={materials.Grass}
              position={[-0.057, 0.001, 0.924]}
              scale={0.001}
            />
            <mesh
              name="Circle038_633"
              geometry={nodes.Circle038_633.geometry}
              material={materials.Grass}
              position={[0.009, 0, 0.982]}
              scale={0.001}
            />
            <mesh
              name="Circle038_634"
              geometry={nodes.Circle038_634.geometry}
              material={materials.Grass}
              position={[0.032, 0, 1.01]}
              scale={[0, 0.001, 0]}
            />
            <mesh
              name="Circle038_635"
              geometry={nodes.Circle038_635.geometry}
              material={materials.Grass}
              position={[0.043, 0, 0.997]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_636"
              geometry={nodes.Circle038_636.geometry}
              material={materials.Grass}
              position={[0.05, 0, 0.966]}
              scale={0.001}
            />
            <mesh
              name="Circle038_637"
              geometry={nodes.Circle038_637.geometry}
              material={materials.Grass}
              position={[0.078, 0, 0.994]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_638"
              geometry={nodes.Circle038_638.geometry}
              material={materials.Grass}
              position={[0.018, 0.001, 0.819]}
              scale={0}
            />
            <mesh
              name="Circle038_639"
              geometry={nodes.Circle038_639.geometry}
              material={materials.Grass}
              position={[0.045, 0.001, 0.791]}
              scale={[0, 0.001, 0]}
            />
            <mesh
              name="Circle038_640"
              geometry={nodes.Circle038_640.geometry}
              material={materials.Grass}
              position={[0.005, 0.002, 0.751]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_641"
              geometry={nodes.Circle038_641.geometry}
              material={materials.Grass}
              position={[-0.009, 0.001, 0.863]}
              scale={0.001}
            />
            <mesh
              name="Circle038_642"
              geometry={nodes.Circle038_642.geometry}
              material={materials.Grass}
              position={[-0.005, 0.001, 0.899]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_643"
              geometry={nodes.Circle038_643.geometry}
              material={materials.Grass}
              position={[0.027, 0.001, 0.867]}
              scale={[0.002, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_644"
              geometry={nodes.Circle038_644.geometry}
              material={materials.Grass}
              position={[-0.026, 0.001, 0.838]}
              scale={0}
            />
            <mesh
              name="Circle038_645"
              geometry={nodes.Circle038_645.geometry}
              material={materials.Grass}
              position={[0.076, 0, 0.845]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_646"
              geometry={nodes.Circle038_646.geometry}
              material={materials.Grass}
              position={[0.088, 0, 0.875]}
              scale={[0, 0.001, 0]}
            />
            <mesh
              name="Circle038_647"
              geometry={nodes.Circle038_647.geometry}
              material={materials.Grass}
              position={[0.114, 0, 0.848]}
              scale={0}
            />
            <mesh
              name="Circle038_648"
              geometry={nodes.Circle038_648.geometry}
              material={materials.Grass}
              position={[0.053, 0.001, 0.825]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_649"
              geometry={nodes.Circle038_649.geometry}
              material={materials.Grass}
              position={[0.076, 0, 0.845]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_650"
              geometry={nodes.Circle038_650.geometry}
              material={materials.Grass}
              position={[0.088, 0, 0.875]}
              scale={0}
            />
            <mesh
              name="Circle038_651"
              geometry={nodes.Circle038_651.geometry}
              material={materials.Grass}
              position={[0.114, 0, 0.848]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_652"
              geometry={nodes.Circle038_652.geometry}
              material={materials.Grass}
              position={[0.382, 0, 0.878]}
              scale={[0.002, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_653"
              geometry={nodes.Circle038_653.geometry}
              material={materials.Grass}
              position={[0.409, 0, 0.91]}
              scale={0.001}
            />
            <mesh
              name="Circle038_654"
              geometry={nodes.Circle038_654.geometry}
              material={materials.Grass}
              position={[0.418, 0, 0.942]}
              scale={0.001}
            />
            <mesh
              name="Circle038_655"
              geometry={nodes.Circle038_655.geometry}
              material={materials.Grass}
              position={[0.443, 0.001, 0.929]}
              scale={0}
            />
            <mesh
              name="Circle038_656"
              geometry={nodes.Circle038_656.geometry}
              material={materials.Grass}
              position={[0.379, 0, 0.947]}
              scale={0}
            />
            <mesh
              name="Circle038_657"
              geometry={nodes.Circle038_657.geometry}
              material={materials.Grass}
              position={[0.275, 0, 0.907]}
              scale={0.001}
            />
            <mesh
              name="Circle038_658"
              geometry={nodes.Circle038_658.geometry}
              material={materials.Grass}
              position={[0.284, 0, 0.948]}
              scale={0}
            />
            <mesh
              name="Circle038_659"
              geometry={nodes.Circle038_659.geometry}
              material={materials.Grass}
              position={[0.299, 0, 1.001]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_660"
              geometry={nodes.Circle038_660.geometry}
              material={materials.Grass}
              position={[0.25, 0, 0.967]}
              scale={[0.002, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_661"
              geometry={nodes.Circle038_661.geometry}
              material={materials.Grass}
              position={[0.27, 0, 0.995]}
              scale={0.001}
            />
            <mesh
              name="Circle038_662"
              geometry={nodes.Circle038_662.geometry}
              material={materials.Grass}
              position={[0.28, 0, 1.034]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_663"
              geometry={nodes.Circle038_663.geometry}
              material={materials.Grass}
              position={[0.364, 0, 0.985]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_664"
              geometry={nodes.Circle038_664.geometry}
              material={materials.Grass}
              position={[0.318, 0.006, 0.813]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_665"
              geometry={nodes.Circle038_665.geometry}
              material={materials.Grass}
              position={[0.151, 0.006, 0.148]}
              scale={[0, 0.001, 0]}
            />
            <mesh
              name="Circle038_666"
              geometry={nodes.Circle038_666.geometry}
              material={materials.Grass}
              position={[0.163, 0.006, 0.179]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_667"
              geometry={nodes.Circle038_667.geometry}
              material={materials.Grass}
              position={[0.18, 0.006, 0.22]}
              scale={[0, 0.001, 0]}
            />
            <mesh
              name="Circle038_668"
              geometry={nodes.Circle038_668.geometry}
              material={materials.Grass}
              position={[0.13, 0.009, 0.188]}
              scale={0}
            />
            <mesh
              name="Circle038_669"
              geometry={nodes.Circle038_669.geometry}
              material={materials.Grass}
              position={[0.151, 0.008, 0.21]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_670"
              geometry={nodes.Circle038_670.geometry}
              material={materials.Grass}
              position={[0.038, 0.01, 0.179]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_671"
              geometry={nodes.Circle038_671.geometry}
              material={materials.Grass}
              position={[0.055, 0.009, 0.158]}
              scale={[0.001, 0.001, 0]}
            />
            <mesh
              name="Circle038_672"
              geometry={nodes.Circle038_672.geometry}
              material={materials.Grass}
              position={[0.005, 0.009, 0.126]}
              scale={[0, 0.001, 0]}
            />
            <mesh
              name="Circle038_673"
              geometry={nodes.Circle038_673.geometry}
              material={materials.Grass}
              position={[0.026, 0.009, 0.148]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_674"
              geometry={nodes.Circle038_674.geometry}
              material={materials.Grass}
              position={[0.038, 0.011, 0.241]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_675"
              geometry={nodes.Circle038_675.geometry}
              material={materials.Grass}
              position={[0.117, 0.011, 0.22]}
              scale={[0.001, 0.001, 0]}
            />
            <mesh
              name="Circle038_676"
              geometry={nodes.Circle038_676.geometry}
              material={materials.Grass}
              position={[0.005, 0.014, 0.001]}
              scale={0.001}
            />
            <mesh
              name="Circle038_677"
              geometry={nodes.Circle038_677.geometry}
              material={materials.Grass}
              position={[0.026, 0.011, 0.023]}
              scale={0.001}
            />
            <mesh
              name="Circle038_678"
              geometry={nodes.Circle038_678.geometry}
              material={materials.Grass}
              position={[0.038, 0.008, 0.116]}
              scale={0}
            />
            <mesh
              name="Circle038_679"
              geometry={nodes.Circle038_679.geometry}
              material={materials.Grass}
              position={[0.055, 0.008, 0.096]}
              scale={0.001}
            />
            <mesh
              name="Circle038_680"
              geometry={nodes.Circle038_680.geometry}
              material={materials.Grass}
              position={[0.068, 0.007, 0.063]}
              scale={[0, 0.001, 0]}
            />
            <mesh
              name="Circle038_681"
              geometry={nodes.Circle038_681.geometry}
              material={materials.Grass}
              position={[0.089, 0.006, 0.085]}
              scale={0.001}
            />
            <mesh
              name="Circle038_682"
              geometry={nodes.Circle038_682.geometry}
              material={materials.Grass}
              position={[0.163, 0.001, 0.429]}
              scale={0.001}
            />
            <mesh
              name="Circle038_683"
              geometry={nodes.Circle038_683.geometry}
              material={materials.Grass}
              position={[0.18, 0.001, 0.471]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_684"
              geometry={nodes.Circle038_684.geometry}
              material={materials.Grass}
              position={[0.13, 0.002, 0.438]}
              scale={0.001}
            />
            <mesh
              name="Circle038_685"
              geometry={nodes.Circle038_685.geometry}
              material={materials.Grass}
              position={[0.026, 0.014, 0.398]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_686"
              geometry={nodes.Circle038_686.geometry}
              material={materials.Grass}
              position={[0.1, 0.006, 0.491]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_687"
              geometry={nodes.Circle038_687.geometry}
              material={materials.Grass}
              position={[0.055, 0.011, 0.283]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_688"
              geometry={nodes.Circle038_688.geometry}
              material={materials.Grass}
              position={[0.068, 0.01, 0.313]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_689"
              geometry={nodes.Circle038_689.geometry}
              material={materials.Grass}
              position={[0.401, 0.004, 0.398]}
              scale={0}
            />
            <mesh
              name="Circle038_690"
              geometry={nodes.Circle038_690.geometry}
              material={materials.Grass}
              position={[0.413, 0.004, 0.429]}
              scale={0.001}
            />
            <mesh
              name="Circle038_691"
              geometry={nodes.Circle038_691.geometry}
              material={materials.Grass}
              position={[0.43, 0.005, 0.408]}
              scale={0.001}
            />
            <mesh
              name="Circle038_692"
              geometry={nodes.Circle038_692.geometry}
              material={materials.Grass}
              position={[0.38, 0.002, 0.438]}
              scale={0.001}
            />
            <mesh
              name="Circle038_693"
              geometry={nodes.Circle038_693.geometry}
              material={materials.Grass}
              position={[0.464, 0.004, 0.46]}
              scale={[0, 0.001, 0]}
            />
            <mesh
              name="Circle038_694"
              geometry={nodes.Circle038_694.geometry}
              material={materials.Grass}
              position={[0.475, 0.001, 0.491]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_695"
              geometry={nodes.Circle038_695.geometry}
              material={materials.Grass}
              position={[0.305, 0.001, 0.408]}
              scale={[0, 0.001, 0]}
            />
            <mesh
              name="Circle038_696"
              geometry={nodes.Circle038_696.geometry}
              material={materials.Grass}
              position={[0.255, 0, 0.376]}
              scale={0}
            />
            <mesh
              name="Circle038_697"
              geometry={nodes.Circle038_697.geometry}
              material={materials.Grass}
              position={[0.276, 0, 0.398]}
              scale={0.001}
            />
            <mesh
              name="Circle038_698"
              geometry={nodes.Circle038_698.geometry}
              material={materials.Grass}
              position={[0.288, 0.001, 0.491]}
              scale={[0, 0.001, 0]}
            />
            <mesh
              name="Circle038_699"
              geometry={nodes.Circle038_699.geometry}
              material={materials.Grass}
              position={[0.305, 0.001, 0.471]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_700"
              geometry={nodes.Circle038_700.geometry}
              material={materials.Grass}
              position={[0.255, 0, 0.438]}
              scale={[0, 0.001, 0]}
            />
            <mesh
              name="Circle038_701"
              geometry={nodes.Circle038_701.geometry}
              material={materials.Grass}
              position={[0.339, 0.002, 0.46]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_702"
              geometry={nodes.Circle038_702.geometry}
              material={materials.Grass}
              position={[0.35, 0.002, 0.491]}
              scale={0}
            />
            <mesh
              name="Circle038_703"
              geometry={nodes.Circle038_703.geometry}
              material={materials.Grass}
              position={[0.305, 0.001, 0.346]}
              scale={0}
            />
            <mesh
              name="Circle038_704"
              geometry={nodes.Circle038_704.geometry}
              material={materials.Grass}
              position={[0.255, 0.001, 0.313]}
              scale={0}
            />
            <mesh
              name="Circle038_705"
              geometry={nodes.Circle038_705.geometry}
              material={materials.Grass}
              position={[0.276, 0.001, 0.335]}
              scale={0}
            />
            <mesh
              name="Circle038_706"
              geometry={nodes.Circle038_706.geometry}
              material={materials.Grass}
              position={[0.288, 0.001, 0.366]}
              scale={0.001}
            />
            <mesh
              name="Circle038_707"
              geometry={nodes.Circle038_707.geometry}
              material={materials.Grass}
              position={[0.305, 0.001, 0.346]}
              scale={0}
            />
            <mesh
              name="Circle038_708"
              geometry={nodes.Circle038_708.geometry}
              material={materials.Grass}
              position={[0.63, 0.015, 0.126]}
              scale={0.001}
            />
            <mesh
              name="Circle038_709"
              geometry={nodes.Circle038_709.geometry}
              material={materials.Grass}
              position={[0.651, 0.014, 0.148]}
              scale={0}
            />
            <mesh
              name="Circle038_710"
              geometry={nodes.Circle038_710.geometry}
              material={materials.Grass}
              position={[0.663, 0.009, 0.241]}
              scale={[0, 0.001, 0]}
            />
            <mesh
              name="Circle038_711"
              geometry={nodes.Circle038_711.geometry}
              material={materials.Grass}
              position={[0.68, 0.011, 0.221]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_712"
              geometry={nodes.Circle038_712.geometry}
              material={materials.Grass}
              position={[0.693, 0.013, 0.188]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_713"
              geometry={nodes.Circle038_713.geometry}
              material={materials.Grass}
              position={[0.714, 0.013, 0.21]}
              scale={0}
            />
            <mesh
              name="Circle038_714"
              geometry={nodes.Circle038_714.geometry}
              material={materials.Grass}
              position={[0.538, 0.006, 0.179]}
              scale={[0.001, 0.001, 0]}
            />
            <mesh
              name="Circle038_715"
              geometry={nodes.Circle038_715.geometry}
              material={materials.Grass}
              position={[0.555, 0.008, 0.158]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_716"
              geometry={nodes.Circle038_716.geometry}
              material={materials.Grass}
              position={[0.505, 0.003, 0.126]}
              scale={0}
            />
            <mesh
              name="Circle038_717"
              geometry={nodes.Circle038_717.geometry}
              material={materials.Grass}
              position={[0.526, 0.006, 0.21]}
              scale={0}
            />
            <mesh
              name="Circle038_718"
              geometry={nodes.Circle038_718.geometry}
              material={materials.Grass}
              position={[0.6, 0.007, 0.241]}
              scale={0.001}
            />
            <mesh
              name="Circle038_719"
              geometry={nodes.Circle038_719.geometry}
              material={materials.Grass}
              position={[0.617, 0.008, 0.221]}
              scale={0}
            />
            <mesh
              name="Circle038_720"
              geometry={nodes.Circle038_720.geometry}
              material={materials.Grass}
              position={[0.506, 0.004, 0.001]}
              scale={0}
            />
            <mesh
              name="Circle038_721"
              geometry={nodes.Circle038_721.geometry}
              material={materials.Grass}
              position={[0.53, 0.006, 0.023]}
              scale={[0.002, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_722"
              geometry={nodes.Circle038_722.geometry}
              material={materials.Grass}
              position={[0.541, 0.007, 0.054]}
              scale={0.001}
            />
            <mesh
              name="Circle038_723"
              geometry={nodes.Circle038_723.geometry}
              material={materials.Grass}
              position={[0.557, 0.008, 0.096]}
              scale={0.001}
            />
            <mesh
              name="Circle038_724"
              geometry={nodes.Circle038_724.geometry}
              material={materials.Grass}
              position={[0.506, 0.004, 0.063]}
              scale={0.001}
            />
            <mesh
              name="Circle038_725"
              geometry={nodes.Circle038_725.geometry}
              material={materials.Grass}
              position={[0.593, 0.012, 0.085]}
              scale={[0.002, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_726"
              geometry={nodes.Circle038_726.geometry}
              material={materials.Grass}
              position={[0.601, 0.013, 0.116]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_727"
              geometry={nodes.Circle038_727.geometry}
              material={materials.Grass}
              position={[0.696, 0.01, 0.417]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_728"
              geometry={nodes.Circle038_728.geometry}
              material={materials.Grass}
              position={[0.631, 0.01, 0.376]}
              scale={[0.002, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_729"
              geometry={nodes.Circle038_729.geometry}
              material={materials.Grass}
              position={[0.664, 0.011, 0.471]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_730"
              geometry={nodes.Circle038_730.geometry}
              material={materials.Grass}
              position={[0.684, 0.012, 0.512]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_731"
              geometry={nodes.Circle038_731.geometry}
              material={materials.Grass}
              position={[0.707, 0.012, 0.495]}
              scale={0.001}
            />
            <mesh
              name="Circle038_732"
              geometry={nodes.Circle038_732.geometry}
              material={materials.Grass}
              position={[0.632, 0.01, 0.44]}
              scale={[0.002, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_733"
              geometry={nodes.Circle038_733.geometry}
              material={materials.Grass}
              position={[0.755, 0.013, 0.496]}
              scale={0}
            />
            <mesh
              name="Circle038_734"
              geometry={nodes.Circle038_734.geometry}
              material={materials.Grass}
              position={[0.781, 0.016, 0.546]}
              scale={0.001}
            />
            <mesh
              name="Circle038_735"
              geometry={nodes.Circle038_735.geometry}
              material={materials.Grass}
              position={[0.8, 0.015, 0.523]}
              scale={0}
            />
            <mesh
              name="Circle038_736"
              geometry={nodes.Circle038_736.geometry}
              material={materials.Grass}
              position={[0.719, 0.011, 0.459]}
              scale={0}
            />
            <mesh
              name="Circle038_737"
              geometry={nodes.Circle038_737.geometry}
              material={materials.Grass}
              position={[0.526, 0.011, 0.398]}
              scale={[0.002, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_738"
              geometry={nodes.Circle038_738.geometry}
              material={materials.Grass}
              position={[0.538, 0.008, 0.429]}
              scale={0}
            />
            <mesh
              name="Circle038_739"
              geometry={nodes.Circle038_739.geometry}
              material={materials.Grass}
              position={[0.555, 0.006, 0.471]}
              scale={0}
            />
            <mesh
              name="Circle038_740"
              geometry={nodes.Circle038_740.geometry}
              material={materials.Grass}
              position={[0.505, 0.007, 0.438]}
              scale={0.001}
            />
            <mesh
              name="Circle038_741"
              geometry={nodes.Circle038_741.geometry}
              material={materials.Grass}
              position={[0.526, 0.005, 0.46]}
              scale={0}
            />
            <mesh
              name="Circle038_742"
              geometry={nodes.Circle038_742.geometry}
              material={materials.Grass}
              position={[0.6, 0.008, 0.491]}
              scale={0.001}
            />
            <mesh
              name="Circle038_743"
              geometry={nodes.Circle038_743.geometry}
              material={materials.Grass}
              position={[0.555, 0.008, 0.283]}
              scale={0}
            />
            <mesh
              name="Circle038_744"
              geometry={nodes.Circle038_744.geometry}
              material={materials.Grass}
              position={[0.505, 0.007, 0.251]}
              scale={0.001}
            />
            <mesh
              name="Circle038_745"
              geometry={nodes.Circle038_745.geometry}
              material={materials.Grass}
              position={[0.526, 0.008, 0.273]}
              scale={[0.002, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_746"
              geometry={nodes.Circle038_746.geometry}
              material={materials.Grass}
              position={[0.538, 0.012, 0.366]}
              scale={[0.002, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_747"
              geometry={nodes.Circle038_747.geometry}
              material={materials.Grass}
              position={[0.555, 0.011, 0.346]}
              scale={0.001}
            />
            <mesh
              name="Circle038_748"
              geometry={nodes.Circle038_748.geometry}
              material={materials.Grass}
              position={[0.505, 0.01, 0.313]}
              scale={0}
            />
            <mesh
              name="Circle038_749"
              geometry={nodes.Circle038_749.geometry}
              material={materials.Grass}
              position={[0.589, 0.01, 0.335]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_750"
              geometry={nodes.Circle038_750.geometry}
              material={materials.Grass}
              position={[0.6, 0.011, 0.366]}
              scale={[0, 0.001, 0]}
            />
            <mesh
              name="Circle038_751"
              geometry={nodes.Circle038_751.geometry}
              material={materials.Grass}
              position={[0.617, 0.01, 0.346]}
              scale={0}
            />
            <mesh
              name="Circle038_752"
              geometry={nodes.Circle038_752.geometry}
              material={materials.Grass}
              position={[0.779, 0.005, 0.376]}
              scale={[0.001, 0.001, 0]}
            />
            <mesh
              name="Circle038_753"
              geometry={nodes.Circle038_753.geometry}
              material={materials.Grass}
              position={[0.808, 0.007, 0.407]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_754"
              geometry={nodes.Circle038_754.geometry}
              material={materials.Grass}
              position={[0.825, 0.009, 0.449]}
              scale={0.001}
            />
            <mesh
              name="Circle038_755"
              geometry={nodes.Circle038_755.geometry}
              material={materials.Grass}
              position={[0.837, 0.008, 0.416]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_756"
              geometry={nodes.Circle038_756.geometry}
              material={materials.Grass}
              position={[0.802, 0.012, 0.474]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_757"
              geometry={nodes.Circle038_757.geometry}
              material={materials.Grass}
              position={[0.824, 0.012, 0.499]}
              scale={[0.001, 0.001, 0]}
            />
            <mesh
              name="Circle038_758"
              geometry={nodes.Circle038_758.geometry}
              material={materials.Grass}
              position={[0.837, 0.013, 0.538]}
              scale={0.001}
            />
            <mesh
              name="Circle038_759"
              geometry={nodes.Circle038_759.geometry}
              material={materials.Grass}
              position={[0.843, 0.01, 0.501]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_760"
              geometry={nodes.Circle038_760.geometry}
              material={materials.Grass}
              position={[0.85, 0.008, 0.453]}
              scale={0.001}
            />
            <mesh
              name="Circle038_761"
              geometry={nodes.Circle038_761.geometry}
              material={materials.Grass}
              position={[0.864, 0.007, 0.473]}
              scale={[0.002, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_762"
              geometry={nodes.Circle038_762.geometry}
              material={materials.Grass}
              position={[0.807, 0.009, 0.301]}
              scale={[0, 0.001, 0]}
            />
            <mesh
              name="Circle038_763"
              geometry={nodes.Circle038_763.geometry}
              material={materials.Grass}
              position={[0.827, 0.009, 0.279]}
              scale={[0, 0.001, 0]}
            />
            <mesh
              name="Circle038_764"
              geometry={nodes.Circle038_764.geometry}
              material={materials.Grass}
              position={[0.768, 0.009, 0.313]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_765"
              geometry={nodes.Circle038_765.geometry}
              material={materials.Grass}
              position={[-0.352, 0.004, 0.214]}
              scale={0}
            />
            <mesh
              name="Circle038_766"
              geometry={nodes.Circle038_766.geometry}
              material={materials.Grass}
              position={[-0.344, 0.003, 0.249]}
              scale={0}
            />
            <mesh
              name="Circle038_767"
              geometry={nodes.Circle038_767.geometry}
              material={materials.Grass}
              position={[-0.478, 0.028, 0.033]}
              scale={[0.002, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_768"
              geometry={nodes.Circle038_768.geometry}
              material={materials.Grass}
              position={[-0.559, 0.041, 0]}
              scale={[0, 0.001, 0]}
            />
            <mesh
              name="Circle038_769"
              geometry={nodes.Circle038_769.geometry}
              material={materials.Grass}
              position={[-0.522, 0.034, 0.022]}
              scale={[0, 0.001, 0]}
            />
            <mesh
              name="Circle038_770"
              geometry={nodes.Circle038_770.geometry}
              material={materials.Grass}
              position={[-0.488, 0.023, 0.116]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_771"
              geometry={nodes.Circle038_771.geometry}
              material={materials.Grass}
              position={[-0.469, 0.022, 0.095]}
              scale={[0.002, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_772"
              geometry={nodes.Circle038_772.geometry}
              material={materials.Grass}
              position={[-0.544, 0.034, 0.063]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_773"
              geometry={nodes.Circle038_773.geometry}
              material={materials.Grass}
              position={[-0.424, 0.016, 0.085]}
              scale={0}
            />
            <mesh
              name="Circle038_774"
              geometry={nodes.Circle038_774.geometry}
              material={materials.Grass}
              position={[-0.407, 0.012, 0.116]}
              scale={[0, 0.001, 0]}
            />
            <mesh
              name="Circle038_775"
              geometry={nodes.Circle038_775.geometry}
              material={materials.Grass}
              position={[-0.385, 0.011, 0.095]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_776"
              geometry={nodes.Circle038_776.geometry}
              material={materials.Grass}
              position={[-0.456, 0.013, 0.442]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_777"
              geometry={nodes.Circle038_777.geometry}
              material={materials.Grass}
              position={[-0.415, 0.011, 0.449]}
              scale={0.001}
            />
            <mesh
              name="Circle038_778"
              geometry={nodes.Circle038_778.geometry}
              material={materials.Grass}
              position={[-0.39, 0.009, 0.469]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_779"
              geometry={nodes.Circle038_779.geometry}
              material={materials.Grass}
              position={[-0.357, 0.007, 0.497]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_780"
              geometry={nodes.Circle038_780.geometry}
              material={materials.Grass}
              position={[-0.44, 0.011, 0.491]}
              scale={[0, 0.001, 0]}
            />
            <mesh
              name="Circle038_781"
              geometry={nodes.Circle038_781.geometry}
              material={materials.Grass}
              position={[-0.306, 0.005, 0.475]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_782"
              geometry={nodes.Circle038_782.geometry}
              material={materials.Grass}
              position={[-0.287, 0.005, 0.5]}
              scale={[0, 0.001, 0]}
            />
            <mesh
              name="Circle038_783"
              geometry={nodes.Circle038_783.geometry}
              material={materials.Grass}
              position={[-0.262, 0.004, 0.474]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_784"
              geometry={nodes.Circle038_784.geometry}
              material={materials.Grass}
              position={[-0.341, 0.007, 0.464]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_785"
              geometry={nodes.Circle038_785.geometry}
              material={materials.Grass}
              position={[-0.306, 0.005, 0.475]}
              scale={0}
            />
            <mesh
              name="Circle038_786"
              geometry={nodes.Circle038_786.geometry}
              material={materials.Grass}
              position={[-0.287, 0.005, 0.5]}
              scale={0}
            />
            <mesh
              name="Circle038_787"
              geometry={nodes.Circle038_787.geometry}
              material={materials.Grass}
              position={[-0.456, 0.008, 0.291]}
              scale={[0.002, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_788"
              geometry={nodes.Circle038_788.geometry}
              material={materials.Grass}
              position={[-0.495, 0.01, 0.251]}
              scale={[0.002, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_789"
              geometry={nodes.Circle038_789.geometry}
              material={materials.Grass}
              position={[-0.477, 0.009, 0.276]}
              scale={0.001}
            />
            <mesh
              name="Circle038_790"
              geometry={nodes.Circle038_790.geometry}
              material={materials.Grass}
              position={[-0.467, 0.012, 0.418]}
              scale={[0.002, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_791"
              geometry={nodes.Circle038_791.geometry}
              material={materials.Grass}
              position={[-0.072, 0.012, 0.412]}
              scale={[0.001, 0.001, 0]}
            />
            <mesh
              name="Circle038_792"
              geometry={nodes.Circle038_792.geometry}
              material={materials.Grass}
              position={[-0.12, 0.009, 0.376]}
              scale={0}
            />
            <mesh
              name="Circle038_793"
              geometry={nodes.Circle038_793.geometry}
              material={materials.Grass}
              position={[-0.101, 0.01, 0.401]}
              scale={0.001}
            />
            <mesh
              name="Circle038_794"
              geometry={nodes.Circle038_794.geometry}
              material={materials.Grass}
              position={[-0.096, 0.01, 0.506]}
              scale={0.001}
            />
            <mesh
              name="Circle038_795"
              geometry={nodes.Circle038_795.geometry}
              material={materials.Grass}
              position={[-0.076, 0.013, 0.481]}
              scale={[0, 0.001, 0]}
            />
            <mesh
              name="Circle038_796"
              geometry={nodes.Circle038_796.geometry}
              material={materials.Grass}
              position={[-0.06, 0.014, 0.444]}
              scale={0}
            />
            <mesh
              name="Circle038_797"
              geometry={nodes.Circle038_797.geometry}
              material={materials.Grass}
              position={[-0.039, 0.017, 0.465]}
              scale={0.001}
            />
            <mesh
              name="Circle038_798"
              geometry={nodes.Circle038_798.geometry}
              material={materials.Grass}
              position={[-0.214, 0.004, 0.432]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_799"
              geometry={nodes.Circle038_799.geometry}
              material={materials.Grass}
              position={[-0.197, 0.005, 0.411]}
              scale={[0.001, 0.001, 0]}
            />
            <mesh
              name="Circle038_800"
              geometry={nodes.Circle038_800.geometry}
              material={materials.Grass}
              position={[-0.245, 0.003, 0.439]}
              scale={[0.001, 0.001, 0]}
            />
            <mesh
              name="Circle038_801"
              geometry={nodes.Circle038_801.geometry}
              material={materials.Grass}
              position={[-0.226, 0.004, 0.464]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_802"
              geometry={nodes.Circle038_802.geometry}
              material={materials.Grass}
              position={[-0.216, 0.004, 0.498]}
              scale={0}
            />
            <mesh
              name="Circle038_803"
              geometry={nodes.Circle038_803.geometry}
              material={materials.Grass}
              position={[-0.2, 0.004, 0.478]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_804"
              geometry={nodes.Circle038_804.geometry}
              material={materials.Grass}
              position={[-0.245, 0.003, 0.439]}
              scale={[0.002, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_805"
              geometry={nodes.Circle038_805.geometry}
              material={materials.Grass}
              position={[-0.226, 0.004, 0.464]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_806"
              geometry={nodes.Circle038_806.geometry}
              material={materials.Grass}
              position={[-0.16, 0.004, 0.509]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_807"
              geometry={nodes.Circle038_807.geometry}
              material={materials.Grass}
              position={[-0.142, 0.005, 0.488]}
              scale={[0.001, 0.001, 0]}
            />
            <mesh
              name="Circle038_808"
              geometry={nodes.Circle038_808.geometry}
              material={materials.Grass}
              position={[-0.267, 0.002, 0.277]}
              scale={[0.002, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_809"
              geometry={nodes.Circle038_809.geometry}
              material={materials.Grass}
              position={[-0.239, 0.004, 0.291]}
              scale={0.001}
            />
            <mesh
              name="Circle038_810"
              geometry={nodes.Circle038_810.geometry}
              material={materials.Grass}
              position={[-0.222, 0.004, 0.315]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_811"
              geometry={nodes.Circle038_811.geometry}
              material={materials.Grass}
              position={[-0.205, 0.005, 0.295]}
              scale={0}
            />
            <mesh
              name="Circle038_812"
              geometry={nodes.Circle038_812.geometry}
              material={materials.Grass}
              position={[-0.267, 0.002, 0.277]}
              scale={0.001}
            />
            <mesh
              name="Circle038_813"
              geometry={nodes.Circle038_813.geometry}
              material={materials.Grass}
              position={[-0.229, 0.004, 0.342]}
              scale={0}
            />
            <mesh
              name="Circle038_814"
              geometry={nodes.Circle038_814.geometry}
              material={materials.Grass}
              position={[-0.213, 0.005, 0.368]}
              scale={[0, 0.001, 0]}
            />
            <mesh
              name="Circle038_815"
              geometry={nodes.Circle038_815.geometry}
              material={materials.Grass}
              position={[-0.133, 0.008, 0.346]}
              scale={0}
            />
            <mesh
              name="Circle038_816"
              geometry={nodes.Circle038_816.geometry}
              material={materials.Grass}
              position={[-0.12, 0.009, 0.251]}
              scale={[0.002, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_817"
              geometry={nodes.Circle038_817.geometry}
              material={materials.Grass}
              position={[-0.099, 0.01, 0.335]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_818"
              geometry={nodes.Circle038_818.geometry}
              material={materials.Grass}
              position={[-0.025, 0.014, 0.366]}
              scale={0.001}
            />
            <mesh
              name="Circle038_819"
              geometry={nodes.Circle038_819.geometry}
              material={materials.Grass}
              position={[-0.008, 0.015, 0.346]}
              scale={0}
            />
            <mesh
              name="Circle038_820"
              geometry={nodes.Circle038_820.geometry}
              material={materials.Grass}
              position={[-0.057, 0.011, 0.313]}
              scale={0}
            />
            <mesh
              name="Circle038_821"
              geometry={nodes.Circle038_821.geometry}
              material={materials.Grass}
              position={[-0.036, 0.013, 0.335]}
              scale={0.001}
            />
            <mesh
              name="Circle038_822"
              geometry={nodes.Circle038_822.geometry}
              material={materials.Grass}
              position={[-0.368, 0.006, 0.329]}
              scale={[0, 0.001, 0]}
            />
            <mesh
              name="Circle038_823"
              geometry={nodes.Circle038_823.geometry}
              material={materials.Grass}
              position={[-0.361, 0.007, 0.378]}
              scale={0}
            />
            <mesh
              name="Circle038_824"
              geometry={nodes.Circle038_824.geometry}
              material={materials.Grass}
              position={[-0.414, 0.008, 0.348]}
              scale={0.001}
            />
            <mesh
              name="Circle038_825"
              geometry={nodes.Circle038_825.geometry}
              material={materials.Grass}
              position={[-0.398, 0.009, 0.375]}
              scale={[0.001, 0.001, 0]}
            />
            <mesh
              name="Circle038_826"
              geometry={nodes.Circle038_826.geometry}
              material={materials.Grass}
              position={[-0.396, 0.01, 0.412]}
              scale={0}
            />
            <mesh
              name="Circle038_827"
              geometry={nodes.Circle038_827.geometry}
              material={materials.Grass}
              position={[-0.267, 0.003, 0.355]}
              scale={[0, 0.001, 0]}
            />
            <mesh
              name="Circle038_828"
              geometry={nodes.Circle038_828.geometry}
              material={materials.Grass}
              position={[-0.369, 0.016, 0.001]}
              scale={[0.002, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_829"
              geometry={nodes.Circle038_829.geometry}
              material={materials.Grass}
              position={[-0.348, 0.012, 0.023]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_830"
              geometry={nodes.Circle038_830.geometry}
              material={materials.Grass}
              position={[-0.337, 0.008, 0.116]}
              scale={0.001}
            />
            <mesh
              name="Circle038_831"
              geometry={nodes.Circle038_831.geometry}
              material={materials.Grass}
              position={[-0.32, 0.008, 0.095]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_832"
              geometry={nodes.Circle038_832.geometry}
              material={materials.Grass}
              position={[-0.369, 0.011, 0.063]}
              scale={0.001}
            />
            <mesh
              name="Circle038_833"
              geometry={nodes.Circle038_833.geometry}
              material={materials.Grass}
              position={[-0.348, 0.009, 0.085]}
              scale={0.001}
            />
            <mesh
              name="Circle038_834"
              geometry={nodes.Circle038_834.geometry}
              material={materials.Grass}
              position={[-0.275, 0.007, 0.116]}
              scale={0.001}
            />
            <mesh
              name="Circle038_835"
              geometry={nodes.Circle038_835.geometry}
              material={materials.Grass}
              position={[-0.258, 0.006, 0.096]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_836"
              geometry={nodes.Circle038_836.geometry}
              material={materials.Grass}
              position={[0.63, 0.006, 0.251]}
              scale={0.001}
            />
            <mesh
              name="Circle038_837"
              geometry={nodes.Circle038_837.geometry}
              material={materials.Grass}
              position={[0.652, 0.008, 0.273]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_838"
              geometry={nodes.Circle038_838.geometry}
              material={materials.Grass}
              position={[0.666, 0.008, 0.304]}
              scale={[0, 0.001, 0]}
            />
            <mesh
              name="Circle038_839"
              geometry={nodes.Circle038_839.geometry}
              material={materials.Grass}
              position={[0.682, 0.009, 0.283]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_840"
              geometry={nodes.Circle038_840.geometry}
              material={materials.Grass}
              position={[0.631, 0.008, 0.313]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_841"
              geometry={nodes.Circle038_841.geometry}
              material={materials.Grass}
              position={[0.655, 0.009, 0.335]}
              scale={[0, 0.001, 0]}
            />
            <mesh
              name="Circle038_842"
              geometry={nodes.Circle038_842.geometry}
              material={materials.Grass}
              position={[0.742, 0.007, 0.366]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_843"
              geometry={nodes.Circle038_843.geometry}
              material={materials.Grass}
              position={[0.712, 0.011, 0.012]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_844"
              geometry={nodes.Circle038_844.geometry}
              material={materials.Grass}
              position={[0.653, 0.016, -0.002]}
              scale={0}
            />
            <mesh
              name="Circle038_845"
              geometry={nodes.Circle038_845.geometry}
              material={materials.Grass}
              position={[0.677, 0.014, 0.012]}
              scale={0.001}
            />
            <mesh
              name="Circle038_846"
              geometry={nodes.Circle038_846.geometry}
              material={materials.Grass}
              position={[0.665, 0.016, 0.115]}
              scale={0.001}
            />
            <mesh
              name="Circle038_847"
              geometry={nodes.Circle038_847.geometry}
              material={materials.Grass}
              position={[0.69, 0.015, 0.089]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_848"
              geometry={nodes.Circle038_848.geometry}
              material={materials.Grass}
              position={[0.641, 0.016, 0.062]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_849"
              geometry={nodes.Circle038_849.geometry}
              material={materials.Grass}
              position={[0.732, 0.013, 0.071]}
              scale={0.001}
            />
            <mesh
              name="Circle038_850"
              geometry={nodes.Circle038_850.geometry}
              material={materials.Grass}
              position={[0.413, 0.004, 0.304]}
              scale={[0.002, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_851"
              geometry={nodes.Circle038_851.geometry}
              material={materials.Grass}
              position={[0.43, 0.005, 0.283]}
              scale={0.001}
            />
            <mesh
              name="Circle038_852"
              geometry={nodes.Circle038_852.geometry}
              material={materials.Grass}
              position={[0.38, 0.002, 0.251]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_853"
              geometry={nodes.Circle038_853.geometry}
              material={materials.Grass}
              position={[0.401, 0.004, 0.335]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_854"
              geometry={nodes.Circle038_854.geometry}
              material={materials.Grass}
              position={[0.475, 0.011, 0.366]}
              scale={[0.001, 0.001, 0]}
            />
            <mesh
              name="Circle038_855"
              geometry={nodes.Circle038_855.geometry}
              material={materials.Grass}
              position={[0.18, 0.006, 0.283]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_856"
              geometry={nodes.Circle038_856.geometry}
              material={materials.Grass}
              position={[0.13, 0.011, 0.251]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_857"
              geometry={nodes.Circle038_857.geometry}
              material={materials.Grass}
              position={[0.151, 0.008, 0.273]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_858"
              geometry={nodes.Circle038_858.geometry}
              material={materials.Grass}
              position={[0.163, 0.002, 0.366]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_859"
              geometry={nodes.Circle038_859.geometry}
              material={materials.Grass}
              position={[0.18, 0.003, 0.346]}
              scale={0.001}
            />
            <mesh
              name="Circle038_860"
              geometry={nodes.Circle038_860.geometry}
              material={materials.Grass}
              position={[0.13, 0.007, 0.313]}
              scale={0.001}
            />
            <mesh
              name="Circle038_861"
              geometry={nodes.Circle038_861.geometry}
              material={materials.Grass}
              position={[0.151, 0.004, 0.335]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_862"
              geometry={nodes.Circle038_862.geometry}
              material={materials.Grass}
              position={[0.163, 0.002, 0.366]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_863"
              geometry={nodes.Circle038_863.geometry}
              material={materials.Grass}
              position={[0.242, 0.001, 0.346]}
              scale={[0.001, 0.001, 0]}
            />
            <mesh
              name="Circle038_864"
              geometry={nodes.Circle038_864.geometry}
              material={materials.Grass}
              position={[0.193, 0.003, 0.313]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_865"
              geometry={nodes.Circle038_865.geometry}
              material={materials.Grass}
              position={[0.214, 0.002, 0.335]}
              scale={0.001}
            />
            <mesh
              name="Circle038_866"
              geometry={nodes.Circle038_866.geometry}
              material={materials.Grass}
              position={[0.163, 0.002, 0.054]}
              scale={[0.001, 0.001, 0]}
            />
            <mesh
              name="Circle038_867"
              geometry={nodes.Circle038_867.geometry}
              material={materials.Grass}
              position={[0.18, 0.001, 0.033]}
              scale={[0, 0.001, 0]}
            />
            <mesh
              name="Circle038_868"
              geometry={nodes.Circle038_868.geometry}
              material={materials.Grass}
              position={[0.193, 0.002, 0.063]}
              scale={0.001}
            />
            <mesh
              name="Circle038_869"
              geometry={nodes.Circle038_869.geometry}
              material={materials.Grass}
              position={[0.214, 0.001, 0.085]}
              scale={[0.001, 0.001, 0]}
            />
            <mesh
              name="Circle038_870"
              geometry={nodes.Circle038_870.geometry}
              material={materials.Grass}
              position={[0.225, 0.001, 0.116]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_871"
              geometry={nodes.Circle038_871.geometry}
              material={materials.Grass}
              position={[0.436, 0.007, 0.79]}
              scale={[0, 0.001, 0]}
            />
            <mesh
              name="Circle038_872"
              geometry={nodes.Circle038_872.geometry}
              material={materials.Grass}
              position={[0.38, 0.015, 0.751]}
              scale={0}
            />
            <mesh
              name="Circle038_873"
              geometry={nodes.Circle038_873.geometry}
              material={materials.Grass}
              position={[0.403, 0.01, 0.775]}
              scale={0}
            />
            <mesh
              name="Circle038_874"
              geometry={nodes.Circle038_874.geometry}
              material={materials.Grass}
              position={[0.427, 0.001, 0.883]}
              scale={0}
            />
            <mesh
              name="Circle038_875"
              geometry={nodes.Circle038_875.geometry}
              material={materials.Grass}
              position={[0.529, 0.002, 0.889]}
              scale={0}
            />
            <mesh
              name="Circle038_876"
              geometry={nodes.Circle038_876.geometry}
              material={materials.Grass}
              position={[0.457, 0.004, 0.83]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_877"
              geometry={nodes.Circle038_877.geometry}
              material={materials.Grass}
              position={[0.489, 0.002, 0.865]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_878"
              geometry={nodes.Circle038_878.geometry}
              material={materials.Grass}
              position={[0.513, 0.002, 0.912]}
              scale={0.001}
            />
            <mesh
              name="Circle038_879"
              geometry={nodes.Circle038_879.geometry}
              material={materials.Grass}
              position={[0.529, 0.002, 0.889]}
              scale={[0, 0.001, 0]}
            />
            <mesh
              name="Circle038_880"
              geometry={nodes.Circle038_880.geometry}
              material={materials.Grass}
              position={[0.13, 0, 0.751]}
              scale={0}
            />
            <mesh
              name="Circle038_881"
              geometry={nodes.Circle038_881.geometry}
              material={materials.Grass}
              position={[0.151, 0.001, 0.773]}
              scale={[0.002, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_882"
              geometry={nodes.Circle038_882.geometry}
              material={materials.Grass}
              position={[0.163, 0.001, 0.804]}
              scale={0.001}
            />
            <mesh
              name="Circle038_883"
              geometry={nodes.Circle038_883.geometry}
              material={materials.Grass}
              position={[0.18, 0.001, 0.846]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_884"
              geometry={nodes.Circle038_884.geometry}
              material={materials.Grass}
              position={[0.13, 0, 0.813]}
              scale={[0, 0.001, 0]}
            />
            <mesh
              name="Circle038_885"
              geometry={nodes.Circle038_885.geometry}
              material={materials.Grass}
              position={[0.151, 0, 0.835]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_886"
              geometry={nodes.Circle038_886.geometry}
              material={materials.Grass}
              position={[0.225, 0, 0.866]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_887"
              geometry={nodes.Circle038_887.geometry}
              material={materials.Grass}
              position={[0.242, 0.001, 0.846]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_888"
              geometry={nodes.Circle038_888.geometry}
              material={materials.Grass}
              position={[0.13, 0.001, 0.501]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_889"
              geometry={nodes.Circle038_889.geometry}
              material={materials.Grass}
              position={[0.151, 0.002, 0.523]}
              scale={0}
            />
            <mesh
              name="Circle038_890"
              geometry={nodes.Circle038_890.geometry}
              material={materials.Grass}
              position={[0.163, 0.004, 0.616]}
              scale={[0.002, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_891"
              geometry={nodes.Circle038_891.geometry}
              material={materials.Grass}
              position={[0.18, 0.003, 0.596]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_892"
              geometry={nodes.Circle038_892.geometry}
              material={materials.Grass}
              position={[0.633, 0.01, 0.504]}
              scale={[0.001, 0.001, 0]}
            />
            <mesh
              name="Circle038_893"
              geometry={nodes.Circle038_893.geometry}
              material={materials.Grass}
              position={[0.667, 0.01, 0.537]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_894"
              geometry={nodes.Circle038_894.geometry}
              material={materials.Grass}
              position={[0.683, 0.01, 0.571]}
              scale={0}
            />
            <mesh
              name="Circle038_895"
              geometry={nodes.Circle038_895.geometry}
              material={materials.Grass}
              position={[0.709, 0.013, 0.561]}
              scale={[0.001, 0.001, 0]}
            />
            <mesh
              name="Circle038_896"
              geometry={nodes.Circle038_896.geometry}
              material={materials.Grass}
              position={[0.633, 0.01, 0.504]}
              scale={0.001}
            />
            <mesh
              name="Circle038_897"
              geometry={nodes.Circle038_897.geometry}
              material={materials.Grass}
              position={[0.668, 0.007, 0.595]}
              scale={[0.001, 0.001, 0]}
            />
            <mesh
              name="Circle038_898"
              geometry={nodes.Circle038_898.geometry}
              material={materials.Grass}
              position={[0.682, 0.008, 0.627]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_899"
              geometry={nodes.Circle038_899.geometry}
              material={materials.Grass}
              position={[0.782, 0.021, 0.637]}
              scale={0.001}
            />
            <mesh
              name="Circle038_900"
              geometry={nodes.Circle038_900.geometry}
              material={materials.Grass}
              position={[0.724, 0.014, 0.592]}
              scale={0.001}
            />
            <mesh
              name="Circle038_901"
              geometry={nodes.Circle038_901.geometry}
              material={materials.Grass}
              position={[-0.592, 0.012, 0.265]}
              scale={0.001}
            />
            <mesh
              name="Circle038_902"
              geometry={nodes.Circle038_902.geometry}
              material={materials.Grass}
              position={[-0.516, 0.011, 0.355]}
              scale={0.001}
            />
            <mesh
              name="Circle038_903"
              geometry={nodes.Circle038_903.geometry}
              material={materials.Grass}
              position={[-0.116, 0.012, 0.817]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_904"
              geometry={nodes.Circle038_904.geometry}
              material={materials.Grass}
              position={[-0.202, 0.022, 0.819]}
              scale={[0.001, 0.001, 0]}
            />
            <mesh
              name="Circle038_905"
              geometry={nodes.Circle038_905.geometry}
              material={materials.Grass}
              position={[-0.159, 0.017, 0.82]}
              scale={[0, 0.001, 0]}
            />
            <mesh
              name="Circle038_906"
              geometry={nodes.Circle038_906.geometry}
              material={materials.Grass}
              position={[-0.135, 0.014, 0.837]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_907"
              geometry={nodes.Circle038_907.geometry}
              material={materials.Grass}
              position={[-0.116, 0.012, 0.817]}
              scale={0}
            />
            <mesh
              name="Circle038_908"
              geometry={nodes.Circle038_908.geometry}
              material={materials.Grass}
              position={[-0.099, 0.009, 0.842]}
              scale={[0, 0.001, 0]}
            />
            <mesh
              name="Circle038_909"
              geometry={nodes.Circle038_909.geometry}
              material={materials.Grass}
              position={[-0.079, 0.006, 0.866]}
              scale={0.001}
            />
            <mesh
              name="Circle038_910"
              geometry={nodes.Circle038_910.geometry}
              material={materials.Grass}
              position={[-0.078, 0.004, 0.904]}
              scale={0.001}
            />
            <mesh
              name="Circle038_911"
              geometry={nodes.Circle038_911.geometry}
              material={materials.Grass}
              position={[-0.352, 0.008, 0.556]}
              scale={[0, 0.001, 0]}
            />
            <mesh
              name="Circle038_912"
              geometry={nodes.Circle038_912.geometry}
              material={materials.Grass}
              position={[-0.398, 0.009, 0.584]}
              scale={[0.002, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_913"
              geometry={nodes.Circle038_913.geometry}
              material={materials.Grass}
              position={[-0.372, 0.009, 0.603]}
              scale={[0, 0.001, 0]}
            />
            <mesh
              name="Circle038_914"
              geometry={nodes.Circle038_914.geometry}
              material={materials.Grass}
              position={[-0.359, 0.01, 0.632]}
              scale={0}
            />
            <mesh
              name="Circle038_915"
              geometry={nodes.Circle038_915.geometry}
              material={materials.Grass}
              position={[-0.35, 0.01, 0.617]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_916"
              geometry={nodes.Circle038_916.geometry}
              material={materials.Grass}
              position={[-0.338, 0.009, 0.586]}
              scale={0}
            />
            <mesh
              name="Circle038_917"
              geometry={nodes.Circle038_917.geometry}
              material={materials.Grass}
              position={[-0.323, 0.01, 0.613]}
              scale={[0.002, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_918"
              geometry={nodes.Circle038_918.geometry}
              material={materials.Grass}
              position={[-0.636, 0.026, -0.221]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_919"
              geometry={nodes.Circle038_919.geometry}
              material={materials.Grass}
              position={[-0.616, 0.023, -0.242]}
              scale={0.001}
            />
            <mesh
              name="Circle038_920"
              geometry={nodes.Circle038_920.geometry}
              material={materials.Grass}
              position={[-0.657, 0.016, -0.306]}
              scale={0.001}
            />
            <mesh
              name="Circle038_921"
              geometry={nodes.Circle038_921.geometry}
              material={materials.Grass}
              position={[-0.653, 0.031, -0.18]}
              scale={[0, 0.001, 0]}
            />
            <mesh
              name="Circle038_922"
              geometry={nodes.Circle038_922.geometry}
              material={materials.Grass}
              position={[-0.583, 0.036, -0.136]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_923"
              geometry={nodes.Circle038_923.geometry}
              material={materials.Grass}
              position={[-0.563, 0.033, -0.156]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_924"
              geometry={nodes.Circle038_924.geometry}
              material={materials.Grass}
              position={[-0.12, 0.015, -0.187]}
              scale={0}
            />
            <mesh
              name="Circle038_925"
              geometry={nodes.Circle038_925.geometry}
              material={materials.Grass}
              position={[-0.036, 0.012, -0.165]}
              scale={0}
            />
            <mesh
              name="Circle038_926"
              geometry={nodes.Circle038_926.geometry}
              material={materials.Grass}
              position={[-0.025, 0.012, -0.134]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_927"
              geometry={nodes.Circle038_927.geometry}
              material={materials.Grass}
              position={[-0.32, 0.009, -0.217]}
              scale={0.001}
            />
            <mesh
              name="Circle038_928"
              geometry={nodes.Circle038_928.geometry}
              material={materials.Grass}
              position={[-0.369, 0.011, -0.187]}
              scale={0}
            />
            <mesh
              name="Circle038_929"
              geometry={nodes.Circle038_929.geometry}
              material={materials.Grass}
              position={[-0.348, 0.011, -0.165]}
              scale={0.001}
            />
            <mesh
              name="Circle038_930"
              geometry={nodes.Circle038_930.geometry}
              material={materials.Grass}
              position={[-0.337, 0.011, -0.134]}
              scale={0}
            />
            <mesh
              name="Circle038_931"
              geometry={nodes.Circle038_931.geometry}
              material={materials.Grass}
              position={[-0.258, 0.004, -0.155]}
              scale={0}
            />
            <mesh
              name="Circle038_932"
              geometry={nodes.Circle038_932.geometry}
              material={materials.Grass}
              position={[-0.307, 0.009, -0.187]}
              scale={[0, 0.001, 0]}
            />
            <mesh
              name="Circle038_933"
              geometry={nodes.Circle038_933.geometry}
              material={materials.Grass}
              position={[-0.327, 0.01, -0.402]}
              scale={0}
            />
            <mesh
              name="Circle038_934"
              geometry={nodes.Circle038_934.geometry}
              material={materials.Grass}
              position={[-0.273, 0.014, -0.384]}
              scale={0.001}
            />
            <mesh
              name="Circle038_935"
              geometry={nodes.Circle038_935.geometry}
              material={materials.Grass}
              position={[0.433, 0.018, -0.242]}
              scale={0.001}
            />
            <mesh
              name="Circle038_936"
              geometry={nodes.Circle038_936.geometry}
              material={materials.Grass}
              position={[0.388, 0.031, -0.306]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_937"
              geometry={nodes.Circle038_937.geometry}
              material={materials.Grass}
              position={[0.407, 0.023, -0.265]}
              scale={0}
            />
            <mesh
              name="Circle038_938"
              geometry={nodes.Circle038_938.geometry}
              material={materials.Grass}
              position={[0.413, 0.007, -0.137]}
              scale={0}
            />
            <mesh
              name="Circle038_939"
              geometry={nodes.Circle038_939.geometry}
              material={materials.Grass}
              position={[0.431, 0.01, -0.162]}
              scale={0}
            />
            <mesh
              name="Circle038_940"
              geometry={nodes.Circle038_940.geometry}
              material={materials.Grass}
              position={[0.445, 0.014, -0.2]}
              scale={[0.001, 0.001, 0]}
            />
            <mesh
              name="Circle038_941"
              geometry={nodes.Circle038_941.geometry}
              material={materials.Grass}
              position={[0.465, 0.011, -0.17]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_942"
              geometry={nodes.Circle038_942.geometry}
              material={materials.Grass}
              position={[0.475, 0.009, -0.135]}
              scale={[0, 0.001, 0]}
            />
            <mesh
              name="Circle038_943"
              geometry={nodes.Circle038_943.geometry}
              material={materials.Grass}
              position={[0.492, 0.01, -0.155]}
              scale={[0.002, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_944"
              geometry={nodes.Circle038_944.geometry}
              material={materials.Grass}
              position={[0.13, 0.01, -0.249]}
              scale={[0.002, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_945"
              geometry={nodes.Circle038_945.geometry}
              material={materials.Grass}
              position={[0.151, 0.011, -0.227]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_946"
              geometry={nodes.Circle038_946.geometry}
              material={materials.Grass}
              position={[0.163, 0.002, -0.134]}
              scale={0}
            />
            <mesh
              name="Circle038_947"
              geometry={nodes.Circle038_947.geometry}
              material={materials.Grass}
              position={[0.18, 0.006, -0.154]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_948"
              geometry={nodes.Circle038_948.geometry}
              material={materials.Grass}
              position={[0.193, 0.012, -0.187]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_949"
              geometry={nodes.Circle038_949.geometry}
              material={materials.Grass}
              position={[0.214, 0.01, -0.165]}
              scale={0.001}
            />
            <mesh
              name="Circle038_950"
              geometry={nodes.Circle038_950.geometry}
              material={materials.Grass}
              position={[0.163, 0.009, -0.446]}
              scale={0}
            />
            <mesh
              name="Circle038_951"
              geometry={nodes.Circle038_951.geometry}
              material={materials.Grass}
              position={[0.18, 0.008, -0.467]}
              scale={[0, 0.001, 0]}
            />
            <mesh
              name="Circle038_952"
              geometry={nodes.Circle038_952.geometry}
              material={materials.Grass}
              position={[0.13, 0.002, -0.499]}
              scale={[0.001, 0.001, 0]}
            />
            <mesh
              name="Circle038_953"
              geometry={nodes.Circle038_953.geometry}
              material={materials.Grass}
              position={[0.151, 0.012, -0.415]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_954"
              geometry={nodes.Circle038_954.geometry}
              material={materials.Grass}
              position={[0.163, 0.017, -0.384]}
              scale={[0.001, 0.001, 0]}
            />
            <mesh
              name="Circle038_955"
              geometry={nodes.Circle038_955.geometry}
              material={materials.Grass}
              position={[0.18, 0.017, -0.404]}
              scale={[0.002, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_956"
              geometry={nodes.Circle038_956.geometry}
              material={materials.Grass}
              position={[0.13, 0.007, -0.437]}
              scale={0.001}
            />
            <mesh
              name="Circle038_957"
              geometry={nodes.Circle038_957.geometry}
              material={materials.Grass}
              position={[0.214, 0.02, -0.415]}
              scale={0.001}
            />
            <mesh
              name="Circle038_958"
              geometry={nodes.Circle038_958.geometry}
              material={materials.Grass}
              position={[0.713, 0.004, -0.224]}
              scale={0}
            />
            <mesh
              name="Circle038_959"
              geometry={nodes.Circle038_959.geometry}
              material={materials.Grass}
              position={[0.769, 0.001, -0.16]}
              scale={[0.002, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_960"
              geometry={nodes.Circle038_960.geometry}
              material={materials.Grass}
              position={[-0.118, 0.01, -0.491]}
              scale={0.001}
            />
            <mesh
              name="Circle038_961"
              geometry={nodes.Circle038_961.geometry}
              material={materials.Grass}
              position={[-0.098, 0.012, -0.413]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_962"
              geometry={nodes.Circle038_962.geometry}
              material={materials.Grass}
              position={[-0.087, 0.012, -0.384]}
              scale={0}
            />
            <mesh
              name="Circle038_963"
              geometry={nodes.Circle038_963.geometry}
              material={materials.Grass}
              position={[-0.07, 0.01, -0.403]}
              scale={0.001}
            />
            <mesh
              name="Circle038_964"
              geometry={nodes.Circle038_964.geometry}
              material={materials.Grass}
              position={[-0.057, 0.008, -0.435]}
              scale={[0.002, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_965"
              geometry={nodes.Circle038_965.geometry}
              material={materials.Grass}
              position={[-0.036, 0.006, -0.414]}
              scale={[0.001, 0.001, 0]}
            />
            <mesh
              name="Circle038_966"
              geometry={nodes.Circle038_966.geometry}
              material={materials.Grass}
              position={[-0.095, 0.009, 0.566]}
              scale={[0, 0.001, 0]}
            />
            <mesh
              name="Circle038_967"
              geometry={nodes.Circle038_967.geometry}
              material={materials.Grass}
              position={[-0.078, 0.012, 0.546]}
              scale={[0.002, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_968"
              geometry={nodes.Circle038_968.geometry}
              material={materials.Grass}
              position={[-0.127, 0.006, 0.575]}
              scale={0}
            />
            <mesh
              name="Circle038_969"
              geometry={nodes.Circle038_969.geometry}
              material={materials.Grass}
              position={[-0.105, 0.008, 0.595]}
              scale={0}
            />
            <mesh
              name="Circle038_970"
              geometry={nodes.Circle038_970.geometry}
              material={materials.Grass}
              position={[-0.093, 0.008, 0.624]}
              scale={0}
            />
            <mesh
              name="Circle038_971"
              geometry={nodes.Circle038_971.geometry}
              material={materials.Grass}
              position={[-0.078, 0.009, 0.607]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_972"
              geometry={nodes.Circle038_972.geometry}
              material={materials.Grass}
              position={[-0.065, 0.012, 0.576]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_973"
              geometry={nodes.Circle038_973.geometry}
              material={materials.Grass}
              position={[-0.046, 0.012, 0.6]}
              scale={[0, 0.001, 0]}
            />
            <mesh
              name="Circle038_974"
              geometry={nodes.Circle038_974.geometry}
              material={materials.Grass}
              position={[-0.641, 0.034, 0.053]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_975"
              geometry={nodes.Circle038_975.geometry}
              material={materials.Grass}
              position={[-0.629, 0.036, 0.033]}
              scale={0}
            />
            <mesh
              name="Circle038_976"
              geometry={nodes.Circle038_976.geometry}
              material={materials.Grass}
              position={[-0.672, 0.032, 0.063]}
              scale={[0.002, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_977"
              geometry={nodes.Circle038_977.geometry}
              material={materials.Grass}
              position={[-0.647, 0.03, 0.085]}
              scale={0}
            />
            <mesh
              name="Circle038_978"
              geometry={nodes.Circle038_978.geometry}
              material={materials.Grass}
              position={[-0.629, 0.027, 0.116]}
              scale={[0.002, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_979"
              geometry={nodes.Circle038_979.geometry}
              material={materials.Grass}
              position={[-0.616, 0.029, 0.095]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_980"
              geometry={nodes.Circle038_980.geometry}
              material={materials.Grass}
              position={[-0.609, 0.033, 0.063]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_981"
              geometry={nodes.Circle038_981.geometry}
              material={materials.Grass}
              position={[0.401, 0.001, 0.523]}
              scale={0.001}
            />
            <mesh
              name="Circle038_982"
              geometry={nodes.Circle038_982.geometry}
              material={materials.Grass}
              position={[0.413, 0.001, 0.554]}
              scale={0.001}
            />
            <mesh
              name="Circle038_983"
              geometry={nodes.Circle038_983.geometry}
              material={materials.Grass}
              position={[0.43, 0.001, 0.533]}
              scale={0.001}
            />
            <mesh
              name="Circle038_984"
              geometry={nodes.Circle038_984.geometry}
              material={materials.Grass}
              position={[0.38, 0.002, 0.501]}
              scale={0.001}
            />
            <mesh
              name="Circle038_985"
              geometry={nodes.Circle038_985.geometry}
              material={materials.Grass}
              position={[0.401, 0.001, 0.523]}
              scale={[0.002, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_986"
              geometry={nodes.Circle038_986.geometry}
              material={materials.Grass}
              position={[0.475, 0, 0.616]}
              scale={0.001}
            />
            <mesh
              name="Circle038_987"
              geometry={nodes.Circle038_987.geometry}
              material={materials.Grass}
              position={[0.492, 0, 0.596]}
              scale={0.001}
            />
            <mesh
              name="Circle038_988"
              geometry={nodes.Circle038_988.geometry}
              material={materials.Grass}
              position={[0.38, 0, 0.001]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_989"
              geometry={nodes.Circle038_989.geometry}
              material={materials.Grass}
              position={[0.401, 0.003, 0.023]}
              scale={[0.002, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_990"
              geometry={nodes.Circle038_990.geometry}
              material={materials.Grass}
              position={[0.413, 0.013, 0.116]}
              scale={0.001}
            />
            <mesh
              name="Circle038_991"
              geometry={nodes.Circle038_991.geometry}
              material={materials.Grass}
              position={[0.43, 0.009, 0.096]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_992"
              geometry={nodes.Circle038_992.geometry}
              material={materials.Grass}
              position={[0.443, 0.006, 0.063]}
              scale={[0, 0.001, 0]}
            />
            <mesh
              name="Circle038_993"
              geometry={nodes.Circle038_993.geometry}
              material={materials.Grass}
              position={[0.464, 0.006, 0.085]}
              scale={0.001}
            />
            <mesh
              name="Circle038_994"
              geometry={nodes.Circle038_994.geometry}
              material={materials.Grass}
              position={[-0.087, 0.007, 0.054]}
              scale={[0.002, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_995"
              geometry={nodes.Circle038_995.geometry}
              material={materials.Grass}
              position={[-0.07, 0.006, 0.096]}
              scale={0}
            />
            <mesh
              name="Circle038_996"
              geometry={nodes.Circle038_996.geometry}
              material={materials.Grass}
              position={[-0.12, 0.005, 0.063]}
              scale={0}
            />
            <mesh
              name="Circle038_997"
              geometry={nodes.Circle038_997.geometry}
              material={materials.Grass}
              position={[-0.099, 0.005, 0.085]}
              scale={[0.001, 0.002, 0.001]}
            />
            <mesh
              name="Circle038_998"
              geometry={nodes.Circle038_998.geometry}
              material={materials.Grass}
              position={[-0.025, 0.008, 0.116]}
              scale={0.001}
            />
            <mesh
              name="Circle038_999"
              geometry={nodes.Circle038_999.geometry}
              material={materials.Grass}
              position={[-0.008, 0.01, 0.096]}
              scale={0.001}
            />
          </mesh>
          <mesh
            name="Circle005"
            geometry={nodes.Circle005.geometry}
            material={materials.Grass}
            position={[-35.819, -3.053, -1.652]}
            rotation={[0, 0.026, 0]}
            scale={[0.176, 0.35, 0.176]}
          />
          <mesh
            name="Circle012"
            geometry={nodes.Circle012.geometry}
            material={materials.Grass}
            position={[-31.347, -2.973, -0.139]}
            rotation={[0, 1.285, 0]}
            scale={[0.152, 0.276, 0.152]}
          />
          <mesh
            name="Circle015"
            geometry={nodes.Circle015.geometry}
            material={materials.Grass}
            position={[-35.84, -3.536, 3.196]}
            rotation={[0, 0.826, 0]}
            scale={[0.121, 0.219, 0.121]}
          />
          <mesh
            name="Circle018"
            geometry={nodes.Circle018.geometry}
            material={materials.Grass}
            position={[-31.552, -3.216, 3.009]}
            rotation={[0, 0.33, 0]}
            scale={[0.15, 0.199, 0.15]}
          />
          <mesh
            name="Circle001"
            geometry={nodes.Circle001.geometry}
            material={materials.Grass}
            position={[-16.783, -3.389, 11.136]}
            rotation={[0, 0.026, 0]}
            scale={[0.176, 0.35, 0.176]}
          />
          <mesh
            name="Circle002"
            geometry={nodes.Circle002.geometry}
            material={materials.Grass}
            position={[-12.311, -3.389, 12.648]}
            rotation={[0, 1.285, 0]}
            scale={[0.152, 0.276, 0.152]}
          />
          <mesh
            name="Circle003"
            geometry={nodes.Circle003.geometry}
            material={materials.Grass}
            position={[-16.803, -3.279, 15.984]}
            rotation={[0, 0.826, 0]}
            scale={[0.121, 0.219, 0.121]}
          />
          <mesh
            name="Circle004"
            geometry={nodes.Circle004.geometry}
            material={materials.Grass}
            position={[-12.516, -3.285, 15.797]}
            rotation={[0, 0.33, 0]}
            scale={[0.15, 0.199, 0.15]}
          />
          <mesh
            name="Circle006"
            geometry={nodes.Circle006.geometry}
            material={materials.Grass}
            position={[-15.475, -2.704, -1.652]}
            rotation={[0, 0.026, 0]}
            scale={[0.176, 0.35, 0.176]}
          />
          <mesh
            name="Circle007"
            geometry={nodes.Circle007.geometry}
            material={materials.Grass}
            position={[-11.003, -3.128, -0.139]}
            rotation={[0, 1.285, 0]}
            scale={[0.152, 0.276, 0.152]}
          />
          <mesh
            name="Circle008"
            geometry={nodes.Circle008.geometry}
            material={materials.Grass}
            position={[-15.496, -2.962, 3.196]}
            rotation={[0, 0.826, 0]}
            scale={[0.121, 0.219, 0.121]}
          />
          <mesh
            name="Circle009"
            geometry={nodes.Circle009.geometry}
            material={materials.Grass}
            position={[-11.208, -3.342, 3.009]}
            rotation={[0, 0.33, 0]}
            scale={[0.15, 0.199, 0.15]}
          />
          <mesh
            name="Circle010"
            geometry={nodes.Circle010.geometry}
            material={materials.Grass}
            position={[3.561, -3.396, 11.136]}
            rotation={[0, 0.026, 0]}
            scale={[0.176, 0.35, 0.176]}
          />
          <mesh
            name="Circle011"
            geometry={nodes.Circle011.geometry}
            material={materials.Grass}
            position={[8.033, -3.743, 12.648]}
            rotation={[0, 1.285, 0]}
            scale={[0.152, 0.276, 0.152]}
          />
          <mesh
            name="Circle013"
            geometry={nodes.Circle013.geometry}
            material={materials.Grass}
            position={[3.541, -3.518, 15.984]}
            rotation={[0, 0.826, 0]}
            scale={[0.121, 0.219, 0.121]}
          />
          <mesh
            name="Circle014"
            geometry={nodes.Circle014.geometry}
            material={materials.Grass}
            position={[7.829, -3.743, 15.797]}
            rotation={[0, 0.33, 0]}
            scale={[0.15, 0.199, 0.15]}
          />
          <mesh
            name="Circle016"
            geometry={nodes.Circle016.geometry}
            material={materials.Grass}
            position={[2.835, -3.833, -10.225]}
            rotation={[0, 0.026, 0]}
            scale={[0.176, 0.35, 0.176]}
          />
          <mesh
            name="Circle017"
            geometry={nodes.Circle017.geometry}
            material={materials.Grass}
            position={[7.307, -3.833, -8.713]}
            rotation={[0, 1.285, 0]}
            scale={[0.152, 0.276, 0.152]}
          />
          <mesh
            name="Circle019"
            geometry={nodes.Circle019.geometry}
            material={materials.Grass}
            position={[2.814, -3.833, -5.378]}
            rotation={[0, 0.826, 0]}
            scale={[0.121, 0.219, 0.121]}
          />
          <mesh
            name="Circle020"
            geometry={nodes.Circle020.geometry}
            material={materials.Grass}
            position={[7.102, -3.833, -5.564]}
            rotation={[0, 0.33, 0]}
            scale={[0.15, 0.199, 0.15]}
          />
          <mesh
            name="Circle021"
            geometry={nodes.Circle021.geometry}
            material={materials.Grass}
            position={[21.871, -4.347, 2.563]}
            rotation={[0, 0.026, 0]}
            scale={[0.176, 0.35, 0.176]}
          />
          <mesh
            name="Circle022"
            geometry={nodes.Circle022.geometry}
            material={materials.Grass}
            position={[26.343, -3.591, 4.075]}
            rotation={[0, 1.285, 0]}
            scale={[0.152, 0.276, 0.152]}
          />
          <mesh
            name="Circle023"
            geometry={nodes.Circle023.geometry}
            material={materials.Grass}
            position={[21.85, -4.521, 7.41]}
            rotation={[0, 0.826, 0]}
            scale={[0.121, 0.219, 0.121]}
          />
          <mesh
            name="Circle024"
            geometry={nodes.Circle024.geometry}
            material={materials.Grass}
            position={[26.138, -3.687, 7.223]}
            rotation={[0, 0.33, 0]}
            scale={[0.15, 0.199, 0.15]}
          />
          <mesh
            name="Circle025"
            geometry={nodes.Circle025.geometry}
            material={materials.Grass}
            position={[-9.227, -3.009, -8.045]}
            rotation={[0, 0.026, 0]}
            scale={[0.176, 0.35, 0.176]}
          />
          <mesh
            name="Circle026"
            geometry={nodes.Circle026.geometry}
            material={materials.Grass}
            position={[-4.754, -3.389, -6.533]}
            rotation={[0, 1.285, 0]}
            scale={[0.152, 0.276, 0.152]}
          />
          <mesh
            name="Circle027"
            geometry={nodes.Circle027.geometry}
            material={materials.Grass}
            position={[-9.247, -3.122, -3.198]}
            rotation={[0, 0.826, 0]}
            scale={[0.121, 0.219, 0.121]}
          />
          <mesh
            name="Circle028"
            geometry={nodes.Circle028.geometry}
            material={materials.Grass}
            position={[-4.959, -3.517, -3.385]}
            rotation={[0, 0.33, 0]}
            scale={[0.15, 0.199, 0.15]}
          />
          <mesh
            name="Circle029"
            geometry={nodes.Circle029.geometry}
            material={materials.Grass}
            position={[9.81, -3.743, 4.742]}
            rotation={[0, 0.026, 0]}
            scale={[0.176, 0.35, 0.176]}
          />
          <mesh
            name="Circle030"
            geometry={nodes.Circle030.geometry}
            material={materials.Grass}
            position={[14.282, -3.806, 6.254]}
            rotation={[0, 1.285, 0]}
            scale={[0.152, 0.276, 0.152]}
          />
          <mesh
            name="Circle031"
            geometry={nodes.Circle031.geometry}
            material={materials.Grass}
            position={[9.789, -3.743, 9.59]}
            rotation={[0, 0.826, 0]}
            scale={[0.121, 0.219, 0.121]}
          />
          <mesh
            name="Circle032"
            geometry={nodes.Circle032.geometry}
            material={materials.Grass}
            position={[14.077, -4.096, 9.403]}
            rotation={[0, 0.33, 0]}
            scale={[0.15, 0.199, 0.15]}
          />
          <mesh
            name="Circle033"
            geometry={nodes.Circle033.geometry}
            material={materials.Grass}
            position={[-9.227, -3.397, 19.274]}
            rotation={[0, 0.026, 0]}
            scale={[0.176, 0.35, 0.176]}
          />
          <mesh
            name="Circle034"
            geometry={nodes.Circle034.geometry}
            material={materials.Grass}
            position={[-4.754, -3.436, 20.786]}
            rotation={[0, 1.285, 0]}
            scale={[0.152, 0.276, 0.152]}
          />
          <mesh
            name="Circle035"
            geometry={nodes.Circle035.geometry}
            material={materials.Grass}
            position={[-9.247, -3.397, 24.121]}
            rotation={[0, 0.826, 0]}
            scale={[0.121, 0.219, 0.121]}
          />
          <mesh
            name="Circle036"
            geometry={nodes.Circle036.geometry}
            material={materials.Grass}
            position={[-4.959, -3.228, 23.935]}
            rotation={[0, 0.33, 0]}
            scale={[0.15, 0.199, 0.15]}
          />
          <mesh
            name="Circle037"
            geometry={nodes.Circle037.geometry}
            material={materials.Grass}
            position={[9.81, -3.851, 32.062]}
            rotation={[0, 0.026, 0]}
            scale={[0.176, 0.35, 0.176]}
          />
          <mesh
            name="Circle038_1000"
            geometry={nodes.Circle038_1000.geometry}
            material={materials.Grass}
            position={[14.282, -4.454, 33.574]}
            rotation={[0, 1.285, 0]}
            scale={[0.152, 0.276, 0.152]}
          />
          <mesh
            name="Circle039"
            geometry={nodes.Circle039.geometry}
            material={materials.Grass}
            position={[9.789, -3.876, 36.909]}
            rotation={[0, 0.826, 0]}
            scale={[0.121, 0.219, 0.121]}
          />
          <mesh
            name="Circle040"
            geometry={nodes.Circle040.geometry}
            material={materials.Grass}
            position={[14.077, -4.337, 36.722]}
            rotation={[0, 0.33, 0]}
            scale={[0.15, 0.199, 0.15]}
          />
          <mesh
            name="Circle041"
            geometry={nodes.Circle041.geometry}
            material={materials.Grass}
            position={[-8.564, -3.355, 27.957]}
            rotation={[0, 0.619, 0]}
            scale={[0.176, 0.35, 0.176]}
          />
          <mesh
            name="Circle042"
            geometry={nodes.Circle042.geometry}
            material={materials.Grass}
            position={[-4.011, -3.186, 26.711]}
            rotation={[-Math.PI, 1.263, -Math.PI]}
            scale={[0.152, 0.276, 0.152]}
          />
          <mesh
            name="Circle043"
            geometry={nodes.Circle043.geometry}
            material={materials.Grass}
            position={[-5.872, -3.108, 31.988]}
            rotation={[0, 1.419, 0]}
            scale={[0.121, 0.219, 0.121]}
          />
          <mesh
            name="Circle044"
            geometry={nodes.Circle044.geometry}
            material={materials.Grass}
            position={[-2.421, -3.108, 29.436]}
            rotation={[0, 0.923, 0]}
            scale={[0.15, 0.199, 0.15]}
          />
          <mesh
            name="Circle045"
            geometry={nodes.Circle045.geometry}
            material={materials.Grass}
            position={[14.368, -4.47, 27.919]}
            rotation={[0, 0.619, 0]}
            scale={[0.176, 0.35, 0.176]}
          />
          <mesh
            name="Circle046"
            geometry={nodes.Circle046.geometry}
            material={materials.Grass}
            position={[18.922, -4.943, 26.673]}
            rotation={[-Math.PI, 1.263, -Math.PI]}
            scale={[0.152, 0.276, 0.152]}
          />
          <mesh
            name="Circle047"
            geometry={nodes.Circle047.geometry}
            material={materials.Grass}
            position={[17.061, -4.691, 31.95]}
            rotation={[0, 1.419, 0]}
            scale={[0.121, 0.219, 0.121]}
          />
          <mesh
            name="Circle048"
            geometry={nodes.Circle048.geometry}
            material={materials.Grass}
            position={[20.512, -5.178, 29.398]}
            rotation={[0, 0.923, 0]}
            scale={[0.15, 0.199, 0.15]}
          />
          <mesh
            name="Circle049"
            geometry={nodes.Circle049.geometry}
            material={materials.Grass}
            position={[7.13, -3.84, 17.93]}
            rotation={[0, 0.619, 0]}
            scale={[0.176, 0.35, 0.176]}
          />
          <mesh
            name="Circle050"
            geometry={nodes.Circle050.geometry}
            material={materials.Grass}
            position={[11.683, -4.331, 16.684]}
            rotation={[-Math.PI, 1.263, -Math.PI]}
            scale={[0.152, 0.276, 0.152]}
          />
          <mesh
            name="Circle051"
            geometry={nodes.Circle051.geometry}
            material={materials.Grass}
            position={[9.822, -4.008, 21.961]}
            rotation={[0, 1.419, 0]}
            scale={[0.121, 0.219, 0.121]}
          />
          <mesh
            name="Circle052"
            geometry={nodes.Circle052.geometry}
            material={materials.Grass}
            position={[13.274, -4.347, 19.409]}
            rotation={[0, 0.923, 0]}
            scale={[0.15, 0.199, 0.15]}
          />
          <mesh
            name="Circle053"
            geometry={nodes.Circle053.geometry}
            material={materials.Grass}
            position={[30.062, -4.943, 17.892]}
            rotation={[0, 0.619, 0]}
            scale={[0.176, 0.35, 0.176]}
          />
          <mesh
            name="Circle054"
            geometry={nodes.Circle054.geometry}
            material={materials.Grass}
            position={[34.616, -4.95, 16.646]}
            rotation={[-Math.PI, 1.263, -Math.PI]}
            scale={[0.152, 0.276, 0.152]}
          />
          <mesh
            name="Circle055"
            geometry={nodes.Circle055.geometry}
            material={materials.Grass}
            position={[32.755, -4.95, 21.923]}
            rotation={[0, 1.419, 0]}
            scale={[0.121, 0.219, 0.121]}
          />
          <mesh
            name="Circle056"
            geometry={nodes.Circle056.geometry}
            material={materials.Grass}
            position={[36.206, -4.95, 19.372]}
            rotation={[0, 0.923, 0]}
            scale={[0.15, 0.199, 0.15]}
          />
          <mesh
            name="Circle057"
            geometry={nodes.Circle057.geometry}
            material={materials.Grass}
            position={[-46.183, -4.327, 13.271]}
            rotation={[0, -0.28, 0]}
            scale={[0.176, 0.35, 0.176]}
          />
          <mesh
            name="Circle058"
            geometry={nodes.Circle058.geometry}
            material={materials.Grass}
            position={[-42.373, -5.052, 16.059]}
            rotation={[0, 0.98, 0]}
            scale={[0.152, 0.276, 0.152]}
          />
          <mesh
            name="Circle059"
            geometry={nodes.Circle059.geometry}
            material={materials.Grass}
            position={[-47.661, -4.327, 17.887]}
            rotation={[0, 0.52, 0]}
            scale={[0.121, 0.219, 0.121]}
          />
          <mesh
            name="Circle060"
            geometry={nodes.Circle060.geometry}
            material={materials.Grass}
            position={[-43.516, -4.881, 19]}
            rotation={[0, 0.024, 0]}
            scale={[0.15, 0.199, 0.15]}
          />
          <mesh
            name="Circle061"
            geometry={nodes.Circle061.geometry}
            material={materials.Grass}
            position={[-31.878, -4.346, 31.195]}
            rotation={[0, -0.28, 0]}
            scale={[0.176, 0.35, 0.176]}
          />
          <mesh
            name="Circle062"
            geometry={nodes.Circle062.geometry}
            material={materials.Grass}
            position={[-28.068, -4.346, 33.983]}
            rotation={[0, 0.98, 0]}
            scale={[0.152, 0.276, 0.152]}
          />
          <mesh
            name="Circle063"
            geometry={nodes.Circle063.geometry}
            material={materials.Grass}
            position={[-33.357, -4.538, 35.812]}
            rotation={[0, 0.52, 0]}
            scale={[0.121, 0.219, 0.121]}
          />
          <mesh
            name="Circle064"
            geometry={nodes.Circle064.geometry}
            material={materials.Grass}
            position={[-29.211, -4.257, 36.924]}
            rotation={[0, 0.024, 0]}
            scale={[0.15, 0.199, 0.15]}
          />
          <mesh
            name="Circle065"
            geometry={nodes.Circle065.geometry}
            material={materials.Grass}
            position={[-28.865, -3.446, 7.192]}
            rotation={[0, -0.597, 0]}
            scale={[0.176, 0.35, 0.176]}
          />
          <mesh
            name="Circle066"
            geometry={nodes.Circle066.geometry}
            material={materials.Grass}
            position={[-26.115, -3.5, 11.03]}
            rotation={[0, 0.662, 0]}
            scale={[0.152, 0.276, 0.152]}
          />
          <mesh
            name="Circle068"
            geometry={nodes.Circle068.geometry}
            material={materials.Grass}
            position={[-28.119, -3.684, 13.467]}
            rotation={[0, -0.293, 0]}
            scale={[0.15, 0.199, 0.15]}
          />
          <mesh
            name="Circle069"
            geometry={nodes.Circle069.geometry}
            material={materials.Grass}
            position={[-20.866, -3.587, 28.684]}
            rotation={[0, -0.597, 0]}
            scale={[0.176, 0.35, 0.176]}
          />
          <mesh
            name="Circle070"
            geometry={nodes.Circle070.geometry}
            material={materials.Grass}
            position={[-18.116, -3.63, 32.522]}
            rotation={[0, 0.662, 0]}
            scale={[0.152, 0.276, 0.152]}
          />
          <mesh
            name="Circle071"
            geometry={nodes.Circle071.geometry}
            material={materials.Grass}
            position={[-23.711, -3.789, 32.609]}
            rotation={[0, 0.203, 0]}
            scale={[0.121, 0.219, 0.121]}
          />
          <mesh
            name="Circle072"
            geometry={nodes.Circle072.geometry}
            material={materials.Grass}
            position={[-20.12, -3.662, 34.96]}
            rotation={[0, -0.293, 0]}
            scale={[0.15, 0.199, 0.15]}
          />
          <mesh
            name="Circle073"
            geometry={nodes.Circle073.geometry}
            material={materials.Grass}
            position={[22.312, -3.463, -15.751]}
            rotation={[0, -0.17, 0]}
            scale={[0.176, 0.35, 0.176]}
          />
          <mesh
            name="Circle074"
            geometry={nodes.Circle074.geometry}
            material={materials.Grass}
            position={[26.404, -2.876, -13.397]}
            rotation={[0, 1.09, 0]}
            scale={[0.152, 0.276, 0.152]}
          />
          <mesh
            name="Circle075"
            geometry={nodes.Circle075.geometry}
            material={materials.Grass}
            position={[21.348, -3.743, -11]}
            rotation={[0, 0.63, 0]}
            scale={[0.121, 0.219, 0.121]}
          />
          <mesh
            name="Circle076"
            geometry={nodes.Circle076.geometry}
            material={materials.Grass}
            position={[25.59, -3.02, -10.348]}
            rotation={[0, 0.134, 0]}
            scale={[0.15, 0.199, 0.15]}
          />
          <mesh
            name="Circle077"
            geometry={nodes.Circle077.geometry}
            material={materials.Grass}
            position={[38.495, -1.178, 0.498]}
            rotation={[0, -0.17, 0]}
            scale={[0.176, 0.35, 0.176]}
          />
          <mesh
            name="Circle078"
            geometry={nodes.Circle078.geometry}
            material={materials.Grass}
            position={[42.587, -1.805, 2.851]}
            rotation={[0, 1.09, 0]}
            scale={[0.152, 0.276, 0.152]}
          />
          <mesh
            name="Circle079"
            geometry={nodes.Circle079.geometry}
            material={materials.Grass}
            position={[37.531, -2.335, 5.248]}
            rotation={[0, 0.63, 0]}
            scale={[0.121, 0.219, 0.121]}
          />
          <mesh
            name="Circle080"
            geometry={nodes.Circle080.geometry}
            material={materials.Grass}
            position={[41.774, -2.35, 5.9]}
            rotation={[0, 0.134, 0]}
            scale={[0.15, 0.199, 0.15]}
          />
          <mesh
            name="Circle081"
            geometry={nodes.Circle081.geometry}
            material={materials.Grass}
            position={[-13.704, -3.706, 42.321]}
            rotation={[0, 0.138, 0]}
            scale={[0.176, 0.35, 0.176]}
          />
          <mesh
            name="Circle082"
            geometry={nodes.Circle082.geometry}
            material={materials.Grass}
            position={[-2.264, -3.417, 46.635]}
            rotation={[0, 1.397, 0]}
            scale={[0.152, 0.276, 0.152]}
          />
          <mesh
            name="Circle083"
            geometry={nodes.Circle083.geometry}
            material={materials.Grass}
            position={[-11.31, -3.925, 48.376]}
            rotation={[0, 0.938, 0]}
            scale={[0.121, 0.219, 0.121]}
          />
          <mesh
            name="Circle084"
            geometry={nodes.Circle084.geometry}
            material={materials.Grass}
            position={[-8.943, -3.158, 38.193]}
            rotation={[0, 0.442, 0]}
            scale={[0.15, 0.199, 0.15]}
          />
          <mesh
            name="Circle085"
            geometry={nodes.Circle085.geometry}
            material={materials.Grass}
            position={[6.642, -3.875, 57.933]}
            rotation={[0, 0.138, 0]}
            scale={[0.176, 0.35, 0.176]}
          />
          <mesh
            name="Circle086"
            geometry={nodes.Circle086.geometry}
            material={materials.Grass}
            position={[11.255, -3.928, 58.936]}
            rotation={[0, 1.397, 0]}
            scale={[0.152, 0.276, 0.152]}
          />
          <mesh
            name="Circle087"
            geometry={nodes.Circle087.geometry}
            material={materials.Grass}
            position={[7.164, -3.728, 62.753]}
            rotation={[0, 0.938, 0]}
            scale={[0.121, 0.219, 0.121]}
          />
          <mesh
            name="Circle088"
            geometry={nodes.Circle088.geometry}
            material={materials.Grass}
            position={[11.404, -3.786, 62.088]}
            rotation={[0, 0.442, 0]}
            scale={[0.15, 0.199, 0.15]}
          />
          <mesh
            name="Circle089"
            geometry={nodes.Circle089.geometry}
            material={materials.Grass}
            position={[19.986, -5.079, 40.866]}
            rotation={[0, 0.138, 0]}
            scale={[0.176, 0.35, 0.176]}
          />
          <mesh
            name="Circle090"
            geometry={nodes.Circle090.geometry}
            material={materials.Grass}
            position={[24.599, -4.993, 41.869]}
            rotation={[0, 1.397, 0]}
            scale={[0.152, 0.276, 0.152]}
          />
          <mesh
            name="Circle091"
            geometry={nodes.Circle091.geometry}
            material={materials.Grass}
            position={[20.507, -4.826, 45.686]}
            rotation={[0, 0.938, 0]}
            scale={[0.121, 0.219, 0.121]}
          />
          <mesh
            name="Circle092"
            geometry={nodes.Circle092.geometry}
            material={materials.Grass}
            position={[24.747, -4.826, 45.021]}
            rotation={[0, 0.442, 0]}
            scale={[0.15, 0.199, 0.15]}
          />
          <mesh
            name="Circle093"
            geometry={nodes.Circle093.geometry}
            material={materials.Grass}
            position={[40.332, -5.143, 51.446]}
            rotation={[0, 0.138, 0]}
            scale={[0.176, 0.35, 0.176]}
          />
          <mesh
            name="Circle094"
            geometry={nodes.Circle094.geometry}
            material={materials.Grass}
            position={[44.945, -5.143, 52.449]}
            rotation={[0, 1.397, 0]}
            scale={[0.152, 0.276, 0.152]}
          />
          <mesh
            name="Circle095"
            geometry={nodes.Circle095.geometry}
            material={materials.Grass}
            position={[40.853, -5.143, 56.266]}
            rotation={[0, 0.938, 0]}
            scale={[0.121, 0.219, 0.121]}
          />
          <mesh
            name="Circle096"
            geometry={nodes.Circle096.geometry}
            material={materials.Grass}
            position={[45.094, -5.143, 55.601]}
            rotation={[0, 0.442, 0]}
            scale={[0.15, 0.199, 0.15]}
          />
          <mesh
            name="Circle097"
            geometry={nodes.Circle097.geometry}
            material={materials.Grass}
            position={[-31.506, -4.614, 60.849]}
            rotation={[0, 0.58, 0]}
            scale={[0.176, 0.35, 0.176]}
          />
          <mesh
            name="Circle098"
            geometry={nodes.Circle098.geometry}
            material={materials.Grass}
            position={[-26.908, -4.885, 59.779]}
            rotation={[-Math.PI, 1.302, -Math.PI]}
            scale={[0.152, 0.276, 0.152]}
          />
          <mesh
            name="Circle099"
            geometry={nodes.Circle099.geometry}
            material={materials.Grass}
            position={[-28.971, -4.885, 64.981]}
            rotation={[0, 1.381, 0]}
            scale={[0.121, 0.219, 0.121]}
          />
          <mesh
            name="Circle100"
            geometry={nodes.Circle100.geometry}
            material={materials.Grass}
            position={[-25.424, -4.975, 62.564]}
            rotation={[0, 0.884, 0]}
            scale={[0.15, 0.199, 0.15]}
          />
          <mesh
            name="Circle101"
            geometry={nodes.Circle101.geometry}
            material={materials.Grass}
            position={[-20.797, -4.735, 63.788]}
            rotation={[0, 0.58, 0]}
            scale={[0.176, 0.35, 0.176]}
          />
          <mesh
            name="Circle102"
            geometry={nodes.Circle102.geometry}
            material={materials.Grass}
            position={[-18.262, -4.306, 67.919]}
            rotation={[0, 1.381, 0]}
            scale={[0.121, 0.219, 0.121]}
          />
          <mesh
            name="Circle103"
            geometry={nodes.Circle103.geometry}
            material={materials.Grass}
            position={[-15.661, -4.044, 70.821]}
            rotation={[0, 1.174, 0]}
            scale={[0.176, 0.35, 0.176]}
          />
          <mesh
            name="Circle104"
            geometry={nodes.Circle104.geometry}
            material={materials.Grass}
            position={[-11.25, -3.69, 72.829]}
            rotation={[-Math.PI, 1.168, -Math.PI]}
            scale={[0.121, 0.219, 0.121]}
          />
          <mesh
            name="Circle105"
            geometry={nodes.Circle105.geometry}
            material={materials.Grass}
            position={[-33.776, -4.453, 85.851]}
            rotation={[0, 0.275, 0]}
            scale={[0.176, 0.35, 0.176]}
          />
          <mesh
            name="Circle106"
            geometry={nodes.Circle106.geometry}
            material={materials.Grass}
            position={[-29.069, -4.182, 86.215]}
            rotation={[0, 1.534, 0]}
            scale={[0.152, 0.276, 0.152]}
          />
          <mesh
            name="Circle107"
            geometry={nodes.Circle107.geometry}
            material={materials.Grass}
            position={[-39.496, -4.488, 65.673]}
            rotation={[0.066, 1.216, -0.071]}
            scale={[0.152, 0.276, 0.152]}
          />
          <mesh
            name="Circle108"
            geometry={nodes.Circle108.geometry}
            material={materials.Grass}
            position={[-44.205, -4.372, 68.693]}
            rotation={[0.023, 0.758, -0.034]}
            scale={[0.121, 0.219, 0.121]}
          />
          <mesh
            name="Circle109"
            geometry={nodes.Circle109.geometry}
            material={materials.Grass}
            position={[-39.916, -4.478, 68.8]}
            rotation={[0.007, 0.261, -0.025]}
            scale={[0.15, 0.199, 0.15]}
          />
          <mesh
            name="Circle110"
            geometry={nodes.Circle110.geometry}
            material={materials.Grass}
            position={[-25.736, -4.275, 77.917]}
            rotation={[0, -0.042, 0]}
            scale={[0.176, 0.35, 0.176]}
          />
          <mesh
            name="Circle111"
            geometry={nodes.Circle111.geometry}
            material={materials.Grass}
            position={[-21.378, -3.862, 79.731]}
            rotation={[0, 1.217, 0]}
            scale={[0.152, 0.276, 0.152]}
          />
          <mesh
            name="Circle112"
            geometry={nodes.Circle112.geometry}
            material={materials.Grass}
            position={[-26.088, -4.027, 82.752]}
            rotation={[0, 0.758, 0]}
            scale={[0.121, 0.219, 0.121]}
          />
          <mesh
            name="Circle113"
            geometry={nodes.Circle113.geometry}
            material={materials.Grass}
            position={[-21.797, -3.901, 82.859]}
            rotation={[0, 0.261, 0]}
            scale={[0.15, 0.199, 0.15]}
          />
          <mesh
            name="Circle114"
            geometry={nodes.Circle114.geometry}
            material={materials.Grass}
            position={[-9.817, -3.512, 90.016]}
            rotation={[0, 0.692, 0]}
            scale={[0.176, 0.35, 0.176]}
          />
          <mesh
            name="Circle115"
            geometry={nodes.Circle115.geometry}
            material={materials.Grass}
            position={[-5.367, -3.347, 88.439]}
            rotation={[-Math.PI, 1.19, -Math.PI]}
            scale={[0.152, 0.276, 0.152]}
          />
          <mesh
            name="Circle116"
            geometry={nodes.Circle116.geometry}
            material={materials.Grass}
            position={[-6.836, -3.211, 93.839]}
            rotation={[0, 1.493, 0]}
            scale={[0.121, 0.219, 0.121]}
          />
          <mesh
            name="Circle117"
            geometry={nodes.Circle117.geometry}
            material={materials.Grass}
            position={[-3.581, -3.133, 91.041]}
            rotation={[0, 0.996, 0]}
            scale={[0.15, 0.199, 0.15]}
          />
          <mesh
            name="Circle118"
            geometry={nodes.Circle118.geometry}
            material={materials.Grass}
            position={[13.051, -3.137, 88.296]}
            rotation={[0, 0.692, 0]}
            scale={[0.176, 0.35, 0.176]}
          />
          <mesh
            name="Circle119"
            geometry={nodes.Circle119.geometry}
            material={materials.Grass}
            position={[17.501, -3.411, 86.719]}
            rotation={[-Math.PI, 1.19, -Math.PI]}
            scale={[0.152, 0.276, 0.152]}
          />
          <mesh
            name="Circle120"
            geometry={nodes.Circle120.geometry}
            material={materials.Grass}
            position={[16.032, -3.63, 92.119]}
            rotation={[0, 1.493, 0]}
            scale={[0.121, 0.219, 0.121]}
          />
          <mesh
            name="Circle121"
            geometry={nodes.Circle121.geometry}
            material={materials.Grass}
            position={[19.287, -3.75, 89.321]}
            rotation={[0, 0.996, 0]}
            scale={[0.15, 0.199, 0.15]}
          />
          <mesh
            name="Circle122"
            geometry={nodes.Circle122.geometry}
            material={materials.Grass}
            position={[9.541, -3.561, 72.439]}
            rotation={[0, 0.692, 0]}
            scale={[0.176, 0.35, 0.176]}
          />
          <mesh
            name="Circle123"
            geometry={nodes.Circle123.geometry}
            material={materials.Grass}
            position={[19.857, -3.768, 65.184]}
            rotation={[-Math.PI, 1.19, -Math.PI]}
            scale={[0.152, 0.276, 0.152]}
          />
          <mesh
            name="Circle124"
            geometry={nodes.Circle124.geometry}
            material={materials.Grass}
            position={[18.389, -3.667, 70.583]}
            rotation={[0, 1.493, 0]}
            scale={[0.121, 0.219, 0.121]}
          />
          <mesh
            name="Circle125"
            geometry={nodes.Circle125.geometry}
            material={materials.Grass}
            position={[21.643, -3.667, 67.785]}
            rotation={[0, 0.996, 0]}
            scale={[0.15, 0.199, 0.15]}
          />
          <mesh
            name="Circle126"
            geometry={nodes.Circle126.geometry}
            material={materials.Grass}
            position={[38.275, -4.433, 65.04]}
            rotation={[0, 0.692, 0]}
            scale={[0.176, 0.35, 0.176]}
          />
          <mesh
            name="Circle127"
            geometry={nodes.Circle127.geometry}
            material={materials.Grass}
            position={[42.725, -4.433, 63.464]}
            rotation={[-Math.PI, 1.19, -Math.PI]}
            scale={[0.152, 0.276, 0.152]}
          />
          <mesh
            name="Circle128"
            geometry={nodes.Circle128.geometry}
            material={materials.Grass}
            position={[41.257, -4.958, 68.863]}
            rotation={[0, 1.493, 0]}
            scale={[0.121, 0.219, 0.121]}
          />
          <mesh
            name="Circle129"
            geometry={nodes.Circle129.geometry}
            material={materials.Grass}
            position={[44.511, -4.433, 66.065]}
            rotation={[0, 0.996, 0]}
            scale={[0.15, 0.199, 0.15]}
          />
          <mesh
            name="Circle130"
            geometry={nodes.Circle130.geometry}
            material={materials.Grass}
            position={[74.593, -4.125, 12.999]}
            rotation={[0, -0.9, 0]}
            scale={[0.176, 0.35, 0.176]}
          />
          <mesh
            name="Circle131"
            geometry={nodes.Circle131.geometry}
            material={materials.Grass}
            position={[76.071, -4.125, 17.483]}
            rotation={[0, 0.359, 0]}
            scale={[0.152, 0.276, 0.152]}
          />
          <mesh
            name="Circle132"
            geometry={nodes.Circle132.geometry}
            material={materials.Grass}
            position={[70.705, -4.277, 15.895]}
            rotation={[0, -0.1, 0]}
            scale={[0.121, 0.219, 0.121]}
          />
          <mesh
            name="Circle133"
            geometry={nodes.Circle133.geometry}
            material={materials.Grass}
            position={[73.431, -4.193, 19.211]}
            rotation={[0, -0.597, 0]}
            scale={[0.15, 0.199, 0.15]}
          />
          <mesh
            name="Circle134"
            geometry={nodes.Circle134.geometry}
            material={materials.Grass}
            position={[72.627, -4.4, 23.929]}
            rotation={[0, -0.9, 0]}
            scale={[0.176, 0.35, 0.176]}
          />
          <mesh
            name="Circle135"
            geometry={nodes.Circle135.geometry}
            material={materials.Grass}
            position={[68.74, -4.728, 26.825]}
            rotation={[0, -0.1, 0]}
            scale={[0.121, 0.219, 0.121]}
          />
          <mesh
            name="Circle136"
            geometry={nodes.Circle136.geometry}
            material={materials.Grass}
            position={[66.083, -4.922, 29.675]}
            rotation={[0, -0.307, 0]}
            scale={[0.176, 0.35, 0.176]}
          />
          <mesh
            name="Circle137"
            geometry={nodes.Circle137.geometry}
            material={materials.Grass}
            position={[64.479, -5.164, 34.249]}
            rotation={[0, 0.493, 0]}
            scale={[0.121, 0.219, 0.121]}
          />
          <mesh
            name="Circle138"
            geometry={nodes.Circle138.geometry}
            material={materials.Grass}
            position={[49.489, -4.281, 12.983]}
            rotation={[0, -1.206, 0]}
            scale={[0.176, 0.35, 0.176]}
          />
          <mesh
            name="Circle139"
            geometry={nodes.Circle139.geometry}
            material={materials.Grass}
            position={[49.548, -4.709, 17.703]}
            rotation={[0, 0.053, 0]}
            scale={[0.152, 0.276, 0.152]}
          />
          <mesh
            name="Circle140"
            geometry={nodes.Circle140.geometry}
            material={materials.Grass}
            position={[69.072, -3.648, 5.475]}
            rotation={[0, -0.264, 0]}
            scale={[0.152, 0.276, 0.152]}
          />
          <mesh
            name="Circle141"
            geometry={nodes.Circle141.geometry}
            material={materials.Grass}
            position={[65.641, -2.594, 1.055]}
            rotation={[0, -0.723, 0]}
            scale={[0.121, 0.219, 0.121]}
          />
          <mesh
            name="Circle142"
            geometry={nodes.Circle142.geometry}
            material={materials.Grass}
            position={[65.919, -3.222, 5.338]}
            rotation={[0, -1.22, 0]}
            scale={[0.15, 0.199, 0.15]}
          />
          <mesh
            name="Circle143"
            geometry={nodes.Circle143.geometry}
            material={materials.Grass}
            position={[58.111, -4.807, 20.278]}
            rotation={[0, -1.523, 0]}
            scale={[0.176, 0.35, 0.176]}
          />
          <mesh
            name="Circle144"
            geometry={nodes.Circle144.geometry}
            material={materials.Grass}
            position={[56.696, -4.988, 24.782]}
            rotation={[0, -0.264, 0]}
            scale={[0.152, 0.276, 0.152]}
          />
          <mesh
            name="Circle145"
            geometry={nodes.Circle145.geometry}
            material={materials.Grass}
            position={[53.265, -4.86, 20.361]}
            rotation={[0, -0.723, 0]}
            scale={[0.121, 0.219, 0.121]}
          />
          <mesh
            name="Circle146"
            geometry={nodes.Circle146.geometry}
            material={materials.Grass}
            position={[53.543, -4.911, 24.644]}
            rotation={[0, -1.22, 0]}
            scale={[0.15, 0.199, 0.15]}
          />
          <mesh
            name="Circle147"
            geometry={nodes.Circle147.geometry}
            material={materials.Grass}
            position={[47.49, -5.23, 37.219]}
            rotation={[0, -0.788, 0]}
            scale={[0.176, 0.35, 0.176]}
          />
          <mesh
            name="Circle148"
            geometry={nodes.Circle148.geometry}
            material={materials.Grass}
            position={[49.459, -5.23, 41.509]}
            rotation={[0, 0.471, 0]}
            scale={[0.152, 0.276, 0.152]}
          />
          <mesh
            name="Circle149"
            geometry={nodes.Circle149.geometry}
            material={materials.Grass}
            position={[43.95, -5.23, 40.531]}
            rotation={[0, 0.012, 0]}
            scale={[0.121, 0.219, 0.121]}
          />
          <mesh
            name="Circle150"
            geometry={nodes.Circle150.geometry}
            material={materials.Grass}
            position={[47.029, -5.23, 43.521]}
            rotation={[0, -0.485, 0]}
            scale={[0.15, 0.199, 0.15]}
          />
          <mesh
            name="Circle151"
            geometry={nodes.Circle151.geometry}
            material={materials.Grass}
            position={[51.255, -3.84, 59.84]}
            rotation={[0, -0.788, 0]}
            scale={[0.176, 0.35, 0.176]}
          />
          <mesh
            name="Circle152"
            geometry={nodes.Circle152.geometry}
            material={materials.Grass}
            position={[53.225, -3.617, 64.131]}
            rotation={[0, 0.471, 0]}
            scale={[0.152, 0.276, 0.152]}
          />
          <mesh
            name="Circle153"
            geometry={nodes.Circle153.geometry}
            material={materials.Grass}
            position={[47.716, -4.433, 63.152]}
            rotation={[0, 0.012, 0]}
            scale={[0.121, 0.219, 0.121]}
          />
          <mesh
            name="Circle154"
            geometry={nodes.Circle154.geometry}
            material={materials.Grass}
            position={[50.794, -3.866, 66.143]}
            rotation={[0, -0.485, 0]}
            scale={[0.15, 0.199, 0.15]}
          />
          <mesh
            name="Circle155"
            geometry={nodes.Circle155.geometry}
            material={materials.Grass}
            position={[72.915, -3.505, 60.254]}
            rotation={[0.152, -0.788, 0]}
            scale={[0.176, 0.35, 0.176]}
          />
          <mesh
            name="Circle156"
            geometry={nodes.Circle156.geometry}
            material={materials.Grass}
            position={[74.885, -4.403, 64.545]}
            rotation={[0, 0.471, 0]}
            scale={[0.152, 0.276, 0.152]}
          />
          <mesh
            name="Circle157"
            geometry={nodes.Circle157.geometry}
            material={materials.Grass}
            position={[69.376, -3.528, 63.566]}
            rotation={[0, 0.012, 0]}
            scale={[0.121, 0.219, 0.121]}
          />
          <mesh
            name="Circle158"
            geometry={nodes.Circle158.geometry}
            material={materials.Grass}
            position={[72.454, -4.356, 66.557]}
            rotation={[0, -0.485, 0]}
            scale={[0.15, 0.199, 0.15]}
          />
          <mesh
            name="Circle159"
            geometry={nodes.Circle159.geometry}
            material={materials.Grass}
            position={[76.68, -4.314, 82.876]}
            rotation={[0.052, -0.787, 0.074]}
            scale={[0.176, 0.35, 0.176]}
          />
          <mesh
            name="Circle160"
            geometry={nodes.Circle160.geometry}
            material={materials.Grass}
            position={[78.647, -4.211, 87.166]}
            rotation={[-0.027, 0.47, 0.059]}
            scale={[0.152, 0.276, 0.152]}
          />
          <mesh
            name="Circle161"
            geometry={nodes.Circle161.geometry}
            material={materials.Grass}
            position={[73.145, -4.499, 86.188]}
            rotation={[-0.001, 0.012, 0.052]}
            scale={[0.121, 0.219, 0.121]}
          />
          <mesh
            name="Circle162"
            geometry={nodes.Circle162.geometry}
            material={materials.Grass}
            position={[76.22, -4.338, 89.178]}
            rotation={[0.027, -0.484, 0.059]}
            scale={[0.15, 0.199, 0.15]}
          />
          <mesh
            name="Circle163"
            geometry={nodes.Circle163.geometry}
            material={materials.Grass}
            position={[54.036, -5.008, 104.213]}
            rotation={[0, -0.9, 0]}
            scale={[0.176, 0.35, 0.176]}
          />
          <mesh
            name="Circle164"
            geometry={nodes.Circle164.geometry}
            material={materials.Grass}
            position={[55.513, -5.008, 108.696]}
            rotation={[0, 0.359, 0]}
            scale={[0.152, 0.276, 0.152]}
          />
          <mesh
            name="Circle165"
            geometry={nodes.Circle165.geometry}
            material={materials.Grass}
            position={[50.148, -5.008, 107.108]}
            rotation={[0, -0.1, 0]}
            scale={[0.121, 0.219, 0.121]}
          />
          <mesh
            name="Circle166"
            geometry={nodes.Circle166.geometry}
            material={materials.Grass}
            position={[52.873, -5.008, 110.424]}
            rotation={[0, -0.597, 0]}
            scale={[0.15, 0.199, 0.15]}
          />
          <mesh
            name="Circle167"
            geometry={nodes.Circle167.geometry}
            material={materials.Grass}
            position={[52.07, -5.008, 115.142]}
            rotation={[0, -0.9, 0]}
            scale={[0.176, 0.35, 0.176]}
          />
          <mesh
            name="Circle168"
            geometry={nodes.Circle168.geometry}
            material={materials.Grass}
            position={[48.182, -5.125, 118.038]}
            rotation={[0, -0.1, 0]}
            scale={[0.121, 0.219, 0.121]}
          />
          <mesh
            name="Circle169"
            geometry={nodes.Circle169.geometry}
            material={materials.Grass}
            position={[45.526, -5.25, 120.888]}
            rotation={[0, -0.307, 0]}
            scale={[0.176, 0.35, 0.176]}
          />
          <mesh
            name="Circle170"
            geometry={nodes.Circle170.geometry}
            material={materials.Grass}
            position={[43.921, -5.25, 125.462]}
            rotation={[0, 0.493, 0]}
            scale={[0.121, 0.219, 0.121]}
          />
          <mesh
            name="Circle171"
            geometry={nodes.Circle171.geometry}
            material={materials.Grass}
            position={[28.931, -4.995, 104.196]}
            rotation={[0, -1.206, 0]}
            scale={[0.176, 0.35, 0.176]}
          />
          <mesh
            name="Circle172"
            geometry={nodes.Circle172.geometry}
            material={materials.Grass}
            position={[28.991, -5.041, 108.917]}
            rotation={[0, 0.053, 0]}
            scale={[0.152, 0.276, 0.152]}
          />
          <mesh
            name="Circle173"
            geometry={nodes.Circle173.geometry}
            material={materials.Grass}
            position={[48.514, -5.12, 96.688]}
            rotation={[0, -0.264, 0]}
            scale={[0.152, 0.276, 0.152]}
          />
          <mesh
            name="Circle174"
            geometry={nodes.Circle174.geometry}
            material={materials.Grass}
            position={[45.083, -5.12, 92.268]}
            rotation={[0, -0.723, 0]}
            scale={[0.121, 0.219, 0.121]}
          />
          <mesh
            name="Circle175"
            geometry={nodes.Circle175.geometry}
            material={materials.Grass}
            position={[45.362, -5.12, 96.551]}
            rotation={[0, -1.22, 0]}
            scale={[0.15, 0.199, 0.15]}
          />
          <mesh
            name="Circle176"
            geometry={nodes.Circle176.geometry}
            material={materials.Grass}
            position={[37.554, -5.175, 111.491]}
            rotation={[0, -1.523, 0]}
            scale={[0.176, 0.35, 0.176]}
          />
          <mesh
            name="Circle177"
            geometry={nodes.Circle177.geometry}
            material={materials.Grass}
            position={[36.138, -5.15, 115.995]}
            rotation={[0, -0.264, 0]}
            scale={[0.152, 0.276, 0.152]}
          />
          <mesh
            name="Circle178"
            geometry={nodes.Circle178.geometry}
            material={materials.Grass}
            position={[32.707, -5.092, 111.575]}
            rotation={[0, -0.723, 0]}
            scale={[0.121, 0.219, 0.121]}
          />
          <mesh
            name="Circle179"
            geometry={nodes.Circle179.geometry}
            material={materials.Grass}
            position={[32.986, -5.092, 115.858]}
            rotation={[0, -1.22, 0]}
            scale={[0.15, 0.199, 0.15]}
          />
          <mesh
            name="Circle180"
            geometry={nodes.Circle180.geometry}
            material={materials.Grass}
            position={[26.932, -4.732, 128.432]}
            rotation={[0, -0.788, 0]}
            scale={[0.176, 0.35, 0.176]}
          />
          <mesh
            name="Circle181"
            geometry={nodes.Circle181.geometry}
            material={materials.Grass}
            position={[28.902, -4.618, 132.722]}
            rotation={[0, 0.471, 0]}
            scale={[0.152, 0.276, 0.152]}
          />
          <mesh
            name="Circle182"
            geometry={nodes.Circle182.geometry}
            material={materials.Grass}
            position={[23.393, -4.618, 131.744]}
            rotation={[0, 0.012, 0]}
            scale={[0.121, 0.219, 0.121]}
          />
          <mesh
            name="Circle183"
            geometry={nodes.Circle183.geometry}
            material={materials.Grass}
            position={[26.472, -4.497, 134.734]}
            rotation={[0, -0.485, 0]}
            scale={[0.15, 0.199, 0.15]}
          />
          <mesh
            name="Circle184"
            geometry={nodes.Circle184.geometry}
            material={materials.Grass}
            position={[30.698, -5.047, 151.054]}
            rotation={[0.015, -0.788, 0]}
            scale={[0.176, 0.35, 0.176]}
          />
          <mesh
            name="Circle185"
            geometry={nodes.Circle185.geometry}
            material={materials.Grass}
            position={[32.667, -5.11, 155.344]}
            rotation={[0.015, 0.471, 0]}
            scale={[0.152, 0.276, 0.152]}
          />
          <mesh
            name="Circle188"
            geometry={nodes.Circle188.geometry}
            material={materials.Grass}
            position={[52.358, -4.722, 151.488]}
            rotation={[-0.11, -0.788, 0]}
            scale={[0.176, 0.35, 0.176]}
          />
          <mesh
            name="Circle189"
            geometry={nodes.Circle189.geometry}
            material={materials.Grass}
            position={[54.328, -4.253, 155.753]}
            rotation={[-0.11, 0.471, 0]}
            scale={[0.152, 0.276, 0.152]}
          />
          <mesh
            name="Circle190"
            geometry={nodes.Circle190.geometry}
            material={materials.Grass}
            position={[48.818, -4.542, 154.781]}
            rotation={[-0.11, 0.012, 0]}
            scale={[0.121, 0.219, 0.121]}
          />
          <mesh
            name="Circle191"
            geometry={nodes.Circle191.geometry}
            material={materials.Grass}
            position={[51.897, -4.11, 157.753]}
            rotation={[-0.11, -0.485, 0]}
            scale={[0.15, 0.199, 0.15]}
          />
          <mesh
            name="Circle192"
            geometry={nodes.Circle192.geometry}
            material={materials.Grass}
            position={[56.123, -3.879, 174.089]}
            rotation={[0, -0.788, 0]}
            scale={[0.176, 0.35, 0.176]}
          />
          <mesh
            name="Circle193"
            geometry={nodes.Circle193.geometry}
            material={materials.Grass}
            position={[58.093, -4.487, 178.383]}
            rotation={[0.155, 0.471, 0]}
            scale={[0.152, 0.276, 0.152]}
          />
          <mesh
            name="Circle194"
            geometry={nodes.Circle194.geometry}
            material={materials.Grass}
            position={[52.584, -4.336, 177.417]}
            rotation={[0.155, 0.012, 0]}
            scale={[0.121, 0.219, 0.121]}
          />
          <mesh
            name="Circle195"
            geometry={nodes.Circle195.geometry}
            material={materials.Grass}
            position={[55.662, -4.798, 180.371]}
            rotation={[0.155, -0.485, 0]}
            scale={[0.15, 0.199, 0.15]}
          />
          <mesh
            name="rock011"
            geometry={nodes.rock011.geometry}
            material={materials.Rock}
            position={[37.14, -5.381, 35.897]}
            rotation={[-3.036, 1.422, Math.PI]}
            scale={5.554}
          />
          <mesh
            name="rock012"
            geometry={nodes.rock012.geometry}
            material={materials.Rock}
            position={[-9.53, -3.413, 81.36]}
            scale={1.756}
          />
          <mesh
            name="rock013"
            geometry={nodes.rock013.geometry}
            material={materials.Rock}
            position={[4.556, -2.945, 88.26]}
            scale={1.791}
          />
          <mesh
            name="rock014"
            geometry={nodes.rock014.geometry}
            material={materials.Rock}
            position={[11.201, -3.445, 102.865]}
            rotation={[0, 0.574, 0]}
            scale={1.791}
          />
          <mesh
            name="rock015"
            geometry={nodes.rock015.geometry}
            material={materials.Rock}
            position={[53.704, -4.768, 48.415]}
            rotation={[-0.146, 0.008, 0.153]}
            scale={1.791}
          />
          <mesh
            name="Sphere006"
            geometry={nodes.Sphere006.geometry}
            material={materials.wood}
            position={[-21.92, -3.623, 66.677]}
            rotation={[1.692, -0.049, -1.92]}
            scale={[0.491, 10.986, 0.491]}
          />
          <mesh
            name="rock016"
            geometry={nodes.rock016.geometry}
            material={materials.Rock}
            position={[29.46, -1.729, -20.219]}
            rotation={[0, 0, 0.222]}
            scale={5.554}
          />
          <mesh
            name="rock017"
            geometry={nodes.rock017.geometry}
            material={materials.Rock}
            position={[-15.853, -3.692, 94.782]}
            scale={5.554}
          />
          <mesh
            name="Sphere007"
            geometry={nodes.Sphere007.geometry}
            material={materials.wood}
            position={[48.214, -4.668, 46.675]}
            rotation={[1.523, 0.003, 0.062]}
            scale={[0.491, 10.986, 0.491]}
          />
          <mesh
            name="Sphere009"
            geometry={nodes.Sphere009.geometry}
            material={materials.wood}
            position={[50.861, 2.194, 102.788]}
            rotation={[0, 0.923, 0]}
            scale={[0.871, 10.988, 0.871]}
          />
          <mesh
            name="Sphere010"
            geometry={nodes.Sphere010.geometry}
            material={materials.wood}
            position={[-11.361, 3.636, 85.864]}
            scale={[0.871, 10.988, 0.871]}
          />
          <mesh
            name="Sphere012"
            geometry={nodes.Sphere012.geometry}
            material={materials.wood}
            position={[-1.599, 3.45, 126.626]}
            rotation={[0.095, 0, 0]}
            scale={[0.871, 7.729, 0.871]}
          />
          <mesh
            name="rock018"
            geometry={nodes.rock018.geometry}
            material={materials.Rock}
            position={[0.443, -2.638, 133.333]}
            rotation={[0.169, 0, 0]}
            scale={2.451}
          />
          <mesh
            name="Circle196"
            geometry={nodes.Circle196.geometry}
            material={materials.Grass}
            position={[-0.959, -1.28, 120.475]}
            rotation={[0, -0.788, 0]}
            scale={[0.176, 0.35, 0.176]}
          />
          <mesh
            name="Circle197"
            geometry={nodes.Circle197.geometry}
            material={materials.Grass}
            position={[2.95, -2.351, 128.199]}
            rotation={[0.205, 0.471, 0]}
            scale={[0.152, 0.276, 0.152]}
          />
          <mesh
            name="Circle198"
            geometry={nodes.Circle198.geometry}
            material={materials.Grass}
            position={[-4.499, -1.797, 127.221]}
            rotation={[0, 0.012, 0]}
            scale={[0.121, 0.219, 0.121]}
          />
          <mesh
            name="Circle199"
            geometry={nodes.Circle199.geometry}
            material={materials.Grass}
            position={[-1.42, -2.139, 130.211]}
            rotation={[0, -0.485, 0]}
            scale={[0.15, 0.199, 0.15]}
          />
          <mesh
            name="Sphere013"
            geometry={nodes.Sphere013.geometry}
            material={materials.Flowers03}
            position={[5.615, -3.731, 60.482]}
            rotation={[0, 0.921, 0]}
            scale={[0.172, 0.381, 0.172]}
          />
          <mesh
            name="Sphere014"
            geometry={nodes.Sphere014.geometry}
            material={materials.Flowers03}
            position={[5.615, -3.532, 14.338]}
            rotation={[-0.056, -0.458, -0.126]}
            scale={[0.172, 0.381, 0.172]}
          />
          <mesh
            name="Sphere015"
            geometry={nodes.Sphere015.geometry}
            material={materials.Flowers03}
            position={[-22.8, -3.396, 17.889]}
            rotation={[0.036, -0.46, 0.081]}
            scale={[0.172, 0.381, 0.172]}
          />
          <mesh
            name="Sphere016"
            geometry={nodes.Sphere016.geometry}
            material={materials.Flowers03}
            position={[56.32, -4.645, 17.889]}
            rotation={[0, -0.461, 0]}
            scale={[0.172, 0.381, 0.172]}
          />
          <mesh
            name="Sphere018"
            geometry={nodes.Sphere018.geometry}
            material={materials.Flowers01}
            position={[-5.669, -3.396, 84.293]}
            rotation={[0, 0.397, 0]}
            scale={[0.194, 0.765, 0.194]}
          />
          <mesh
            name="Sphere019"
            geometry={nodes.Sphere019.geometry}
            material={materials.Flowers01}
            position={[-5.669, -3.929, 54.25]}
            rotation={[0, 0.397, 0]}
            scale={[0.194, 0.765, 0.194]}
          />
          <mesh
            name="Sphere020"
            geometry={nodes.Sphere020.geometry}
            material={materials.Flowers01}
            position={[28.788, -4.449, 54.25]}
            rotation={[0, 0.397, 0]}
            scale={[0.194, 0.765, 0.194]}
          />
          <mesh
            name="Sphere021"
            geometry={nodes.Sphere021.geometry}
            material={materials.Flowers01}
            position={[21.532, -5.03, 13.718]}
            rotation={[0, 0.397, 0]}
            scale={[0.194, 0.765, 0.194]}
          />
          <mesh
            name="Sphere022"
            geometry={nodes.Sphere022.geometry}
            material={materials.Flowers01}
            position={[57.914, -4.921, 83.592]}
            rotation={[0, 0.397, 0]}
            scale={[0.194, 0.765, 0.194]}
          />
          <mesh
            name="Sphere023"
            geometry={nodes.Sphere023.geometry}
            material={materials.Flowers03}
            position={[39.865, -4.983, 44.37]}
            rotation={[-0.022, -0.461, -0.049]}
            scale={[0.172, 0.381, 0.172]}
          />
          <mesh
            name="rock019"
            geometry={nodes.rock019.geometry}
            material={materials.Rock}
            position={[-9.537, -3.371, 104.245]}
            scale={5.554}
          />
          <mesh
            name="rock020"
            geometry={nodes.rock020.geometry}
            material={materials.Rock}
            position={[-33.237, -3.966, 9.68]}
            rotation={[-Math.PI, 1.227, -Math.PI]}
            scale={5.554}
          />
          <mesh
            name="rock021"
            geometry={nodes.rock021.geometry}
            material={materials.Rock}
            position={[-48.403, -3.932, 82.346]}
            rotation={[0, 0.561, 0]}
            scale={5.554}
          />
          <mesh
            name="Sphere029"
            geometry={nodes.Sphere029.geometry}
            material={materials.wood}
            position={[62.107, 2.102, 100.301]}
            scale={[0.871, 10.988, 0.871]}
          />
          <mesh
            name="rock022"
            geometry={nodes.rock022.geometry}
            material={materials.Rock}
            position={[85.932, -4.163, 68.797]}
            scale={5.554}
          />
          <mesh
            name="rock023"
            geometry={nodes.rock023.geometry}
            material={materials.Rock}
            position={[11.774, -3.97, 139.494]}
            scale={1.756}
          />
          <mesh
            name="rock024"
            geometry={nodes.rock024.geometry}
            material={materials.Rock}
            position={[17.781, -4.186, 145.207]}
            scale={1.791}
          />
          <mesh
            name="rock025"
            geometry={nodes.rock025.geometry}
            material={materials.Rock}
            position={[20.618, -4.186, 139.611]}
            scale={1.791}
          />
          <mesh
            name="rock026"
            geometry={nodes.rock026.geometry}
            material={materials.Rock}
            position={[54.844, -5.128, 97.008]}
            scale={1.791}
          />
          <mesh
            name="rock027"
            geometry={nodes.rock027.geometry}
            material={materials.Rock}
            position={[57.681, -5.128, 91.412]}
            scale={1.791}
          />
          <mesh
            name="Sphere030"
            geometry={nodes.Sphere030.geometry}
            material={materials.leaves}
            position={[89.439, -2.323, 98.52]}
            scale={[3.609, 1.86, 3.609]}
          />
          <mesh
            name="Sphere032"
            geometry={nodes.Sphere032.geometry}
            material={materials.leaves}
            position={[-30.218, -3.237, 98.52]}
            scale={[3.609, 1.86, 3.609]}
          />
          <mesh
            name="Sphere033"
            geometry={nodes.Sphere033.geometry}
            material={materials.leaves}
            position={[14.582, -2.295, 17.261]}
            scale={[7.499, 15.69, 7.499]}
          />
          <group
            name="stump_2"
            position={[-5.41, -1.162, 6.821]}
            rotation={[-Math.PI, 0.312, -Math.PI]}
            scale={1.644}>
            <mesh
              name="Plane005"
              geometry={nodes.Plane005.geometry}
              material={materials['Material.001']}
            />
            <mesh
              name="Plane005_1"
              geometry={nodes.Plane005_1.geometry}
              material={materials['Material.004']}
            />
          </group>
          <group
            name="stump_1"
            position={[35.268, -2.518, -12.066]}
            rotation={[0, 0.345, 0]}
            scale={1.644}>
            <mesh
              name="Plane034"
              geometry={nodes.Plane034.geometry}
              material={materials['Material.001']}
            />
            <mesh
              name="Plane034_1"
              geometry={nodes.Plane034_1.geometry}
              material={materials['Material.004']}
            />
          </group>
          <mesh
            name="Log"
            geometry={nodes.Log.geometry}
            material={materials['Material.001']}
            position={[10.909, -1.361, -18.945]}
            rotation={[0, -0.443, 0]}
            scale={1.644}
          />
          <group
            name="stump_2001"
            position={[43.892, -1.515, 65.37]}
            rotation={[-Math.PI, 0.312, -Math.PI]}
            scale={1.644}>
            <mesh
              name="Plane001"
              geometry={nodes.Plane001.geometry}
              material={materials['Material.001']}
            />
            <mesh
              name="Plane001_1"
              geometry={nodes.Plane001_1.geometry}
              material={materials['Material.004']}
            />
          </group>
          <group
            name="stump_2002"
            position={[-45.525, -0.722, 27.121]}
            rotation={[-Math.PI, 0.312, -Math.PI]}
            scale={1.644}>
            <mesh
              name="Plane002"
              geometry={nodes.Plane002.geometry}
              material={materials['Material.001']}
            />
            <mesh
              name="Plane002_1"
              geometry={nodes.Plane002_1.geometry}
              material={materials['Material.004']}
            />
          </group>
          <group
            name="stump_2003"
            position={[45.422, -2.558, 15.944]}
            rotation={[-Math.PI, 0.312, -Math.PI]}
            scale={1.644}>
            <mesh
              name="Plane003"
              geometry={nodes.Plane003.geometry}
              material={materials['Material.001']}
            />
            <mesh
              name="Plane003_1"
              geometry={nodes.Plane003_1.geometry}
              material={materials['Material.004']}
            />
          </group>
          <group
            name="stump_2004"
            position={[2.523, -1.56, 78.002]}
            rotation={[-Math.PI, 0.312, -Math.PI]}
            scale={1.644}>
            <mesh
              name="Plane004"
              geometry={nodes.Plane004.geometry}
              material={materials['Material.001']}
            />
            <mesh
              name="Plane004_1"
              geometry={nodes.Plane004_1.geometry}
              material={materials['Material.004']}
            />
          </group>
          <group
            name="stump_2005"
            position={[26.218, -2.885, 135.234]}
            rotation={[-Math.PI, 0.312, -Math.PI]}
            scale={1.644}>
            <mesh
              name="Plane006"
              geometry={nodes.Plane006.geometry}
              material={materials['Material.001']}
            />
            <mesh
              name="Plane006_1"
              geometry={nodes.Plane006_1.geometry}
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
              geometry={nodes.Plane007.geometry}
              material={materials['Material.001']}
            />
            <mesh
              name="Plane007_1"
              geometry={nodes.Plane007_1.geometry}
              material={materials['Material.004']}
            />
          </group>
          <group
            name="stump_1002"
            position={[90.211, -3.951, 30.473]}
            rotation={[0, 0.345, 0]}
            scale={1.644}>
            <mesh
              name="Plane008"
              geometry={nodes.Plane008.geometry}
              material={materials['Material.001']}
            />
            <mesh
              name="Plane008_1"
              geometry={nodes.Plane008_1.geometry}
              material={materials['Material.004']}
            />
          </group>
          <group
            name="stump_1003"
            position={[84.175, -2.751, -28.037]}
            rotation={[0, 0.345, 0]}
            scale={1.644}>
            <mesh
              name="Plane009"
              geometry={nodes.Plane009.geometry}
              material={materials['Material.001']}
            />
            <mesh
              name="Plane009_1"
              geometry={nodes.Plane009_1.geometry}
              material={materials['Material.004']}
            />
          </group>
          <group
            name="stump_1004"
            position={[73.92, -4.715, 87.12]}
            rotation={[0, 0.345, 0]}
            scale={1.644}>
            <mesh
              name="Plane010"
              geometry={nodes.Plane010.geometry}
              material={materials['Material.001']}
            />
            <mesh
              name="Plane010_1"
              geometry={nodes.Plane010_1.geometry}
              material={materials['Material.004']}
            />
          </group>
          <mesh
            name="Log001"
            geometry={nodes.Log001.geometry}
            material={materials['Material.001']}
            position={[68.353, -1.67, 64.214]}
            rotation={[0, -0.443, 0]}
            scale={1.644}
          />
          <mesh
            name="Log002"
            geometry={nodes.Log002.geometry}
            material={materials['Material.001']}
            position={[-30.341, -3.141, 116.039]}
            rotation={[0, -0.443, 0]}
            scale={1.644}
          />
          <mesh
            name="Log003"
            geometry={nodes.Log003.geometry}
            material={materials['Material.001']}
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
              geometry={nodes.Plane011.geometry}
              material={materials['Material.001']}
            />
            <mesh
              name="Plane011_1"
              geometry={nodes.Plane011_1.geometry}
              material={materials['Material.004']}
            />
          </group>
          <group name="simple_tree" position={[-64.867, 4.448, 38.68]} scale={4.815}>
            <mesh
              name="Plane012"
              geometry={nodes.Plane012.geometry}
              material={materials['Material.002']}
            />
            <mesh
              name="Plane012_1"
              geometry={nodes.Plane012_1.geometry}
              material={materials['Material.003']}
            />
          </group>
          <group name="Pine" position={[-93.913, -3.151, 13.771]} scale={[0.777, 0.949, 0.949]}>
            <mesh
              name="Plane013"
              geometry={nodes.Plane013.geometry}
              material={materials['Material.002']}
            />
            <mesh
              name="Plane013_1"
              geometry={nodes.Plane013_1.geometry}
              material={materials['Material.003']}
            />
          </group>
          <group
            name="apple_tree"
            position={[-93.019, 6.374, 24.714]}
            rotation={[0, -0.19, 0]}
            scale={0.856}>
            <mesh
              name="Plane014"
              geometry={nodes.Plane014.geometry}
              material={materials['Material.002']}
            />
            <mesh
              name="Plane014_1"
              geometry={nodes.Plane014_1.geometry}
              material={materials['Material.003']}
            />
          </group>
          <group name="simple_tree001" position={[-54.352, 5.912, 29.599]} scale={4.815}>
            <mesh
              name="Plane015"
              geometry={nodes.Plane015.geometry}
              material={materials['Material.002']}
            />
            <mesh
              name="Plane015_1"
              geometry={nodes.Plane015_1.geometry}
              material={materials['Material.003']}
            />
          </group>
          <group name="simple_tree002" position={[-52.156, 5.099, 64.165]} scale={4.815}>
            <mesh
              name="Plane016"
              geometry={nodes.Plane016.geometry}
              material={materials['Material.002']}
            />
            <mesh
              name="Plane016_1"
              geometry={nodes.Plane016_1.geometry}
              material={materials['Material.003']}
            />
          </group>
          <group name="simple_tree003" position={[-34.857, 5.497, 70.444]} scale={4.815}>
            <mesh
              name="Plane017"
              geometry={nodes.Plane017.geometry}
              material={materials['Material.002']}
            />
            <mesh
              name="Plane017_1"
              geometry={nodes.Plane017_1.geometry}
              material={materials['Material.003']}
            />
          </group>
          <group name="simple_tree004" position={[-40.974, 4.936, 3.249]} scale={4.815}>
            <mesh
              name="Plane018"
              geometry={nodes.Plane018.geometry}
              material={materials['Material.002']}
            />
            <mesh
              name="Plane018_1"
              geometry={nodes.Plane018_1.geometry}
              material={materials['Material.003']}
            />
          </group>
          <group name="simple_tree005" position={[-31.599, 2.054, -4.402]} scale={4.815}>
            <mesh
              name="Plane019"
              geometry={nodes.Plane019.geometry}
              material={materials['Material.002']}
            />
            <mesh
              name="Plane019_1"
              geometry={nodes.Plane019_1.geometry}
              material={materials['Material.003']}
            />
          </group>
          <group name="Pine001" position={[-73.162, -1.113, -15.415]} scale={[0.777, 0.949, 0.949]}>
            <mesh
              name="Plane020"
              geometry={nodes.Plane020.geometry}
              material={materials['Material.002']}
            />
            <mesh
              name="Plane020_1"
              geometry={nodes.Plane020_1.geometry}
              material={materials['Material.003']}
            />
          </group>
          <group
            name="apple_tree001"
            position={[-55.872, 4.065, -18.908]}
            rotation={[0, -0.19, 0]}
            scale={0.856}>
            <mesh
              name="Plane021"
              geometry={nodes.Plane021.geometry}
              material={materials['Material.002']}
            />
            <mesh
              name="Plane021_1"
              geometry={nodes.Plane021_1.geometry}
              material={materials['Material.003']}
            />
          </group>
          <group name="Pine002" position={[-78.824, -4.317, 78.338]} scale={[0.777, 0.949, 0.949]}>
            <mesh
              name="Plane022"
              geometry={nodes.Plane022.geometry}
              material={materials['Material.002']}
            />
            <mesh
              name="Plane022_1"
              geometry={nodes.Plane022_1.geometry}
              material={materials['Material.003']}
            />
          </group>
          <group name="Pine003" position={[-67.049, -2.75, 14.723]} scale={[0.777, 0.949, 0.949]}>
            <mesh
              name="Plane023"
              geometry={nodes.Plane023.geometry}
              material={materials['Material.002']}
            />
            <mesh
              name="Plane023_1"
              geometry={nodes.Plane023_1.geometry}
              material={materials['Material.003']}
            />
          </group>
          <group name="Pine004" position={[-36.879, -6.943, 35.663]} scale={[0.777, 0.949, 0.949]}>
            <mesh
              name="Plane024"
              geometry={nodes.Plane024.geometry}
              material={materials['Material.002']}
            />
            <mesh
              name="Plane024_1"
              geometry={nodes.Plane024_1.geometry}
              material={materials['Material.003']}
            />
          </group>
          <group
            name="apple_tree002"
            position={[-44.198, 2.7, 22.643]}
            rotation={[0, -0.19, 0]}
            scale={0.856}>
            <mesh
              name="Plane025"
              geometry={nodes.Plane025.geometry}
              material={materials['Material.002']}
            />
            <mesh
              name="Plane025_1"
              geometry={nodes.Plane025_1.geometry}
              material={materials['Material.003']}
            />
          </group>
          <group
            name="apple_tree003"
            position={[-68.367, 5.991, 32.71]}
            rotation={[0, -0.19, 0]}
            scale={0.856}>
            <mesh
              name="Plane026"
              geometry={nodes.Plane026.geometry}
              material={materials['Material.002']}
            />
            <mesh
              name="Plane026_1"
              geometry={nodes.Plane026_1.geometry}
              material={materials['Material.003']}
            />
          </group>
          <group
            name="apple_tree004"
            position={[-46.508, 5.902, 6.997]}
            rotation={[0, -0.19, 0]}
            scale={0.856}>
            <mesh
              name="Plane027"
              geometry={nodes.Plane027.geometry}
              material={materials['Material.002']}
            />
            <mesh
              name="Plane027_1"
              geometry={nodes.Plane027_1.geometry}
              material={materials['Material.003']}
            />
          </group>
          <mesh
            name="Spruce"
            geometry={nodes.Spruce.geometry}
            material={materials['Material.005']}
            position={[-46.837, -2.452, -9.717]}
            scale={0.917}
          />
          <mesh
            name="Spruce001"
            geometry={nodes.Spruce001.geometry}
            material={materials['Material.005']}
            position={[-46.658, -5.21, 67.342]}
            scale={0.917}
          />
          <mesh
            name="Spruce002"
            geometry={nodes.Spruce002.geometry}
            material={materials['Material.005']}
            position={[-0.077, -4.502, 25.152]}
            scale={0.917}
          />
          <mesh
            name="Sphere001"
            geometry={nodes.Sphere001.geometry}
            material={materials.wood}
            position={[-9.588, 3.569, 17.383]}
            scale={[0.871, 10.988, 0.871]}
          />
          <mesh
            name="rock001"
            geometry={nodes.rock001.geometry}
            material={materials.Rock}
            position={[-86.42, -0.513, 13.919]}
            rotation={[-Math.PI, 1.227, -Math.PI]}
            scale={5.554}
          />
          <mesh
            name="rock002"
            geometry={nodes.rock002.geometry}
            material={materials.Rock}
            position={[-43.062, -4.273, -17.44]}
            rotation={[0, 0, 0.222]}
            scale={5.554}
          />
          <mesh
            name="Log004"
            geometry={nodes.Log004.geometry}
            material={materials['Material.001']}
            position={[-55.448, -2.898, 63.618]}
            rotation={[0, -0.443, 0]}
            scale={1.644}
          />
          <mesh
            name="Sphere002"
            geometry={nodes.Sphere002.geometry}
            material={materials.leaves}
            position={[-62.38, -2.861, 85.279]}
            scale={[3.609, 1.86, 3.609]}
          />
          <mesh
            name="Sphere003"
            geometry={nodes.Sphere003.geometry}
            material={materials.leaves}
            position={[-24.346, -2.444, 24.956]}
            scale={[7.499, 15.69, 7.499]}
          />
          <group name="Sphere027" position={[-53, 2.944, 17.585]} scale={[0.871, 10.988, 0.871]}>
            <mesh
              name="Sphere033_1"
              geometry={nodes.Sphere033_1.geometry}
              material={materials['wood.001']}
            />
            <mesh
              name="Sphere033_2"
              geometry={nodes.Sphere033_2.geometry}
              material={materials['leaves.001']}
            />
          </group>
          <group name="Sphere004" position={[-33.58, 4.417, 17.461]} scale={[0.871, 10.988, 0.871]}>
            <mesh
              name="Sphere034"
              geometry={nodes.Sphere034.geometry}
              material={materials['wood.001']}
            />
            <mesh
              name="Sphere034_1"
              geometry={nodes.Sphere034_1.geometry}
              material={materials['leaves.001']}
            />
          </group>
          <group
            name="Sphere005"
            position={[-94.793, 2.023, 42.061]}
            rotation={[0, 1.021, 0]}
            scale={[0.871, 10.988, 0.871]}>
            <mesh
              name="Sphere035"
              geometry={nodes.Sphere035.geometry}
              material={materials['wood.001']}
            />
            <mesh
              name="Sphere035_1"
              geometry={nodes.Sphere035_1.geometry}
              material={materials['leaves.001']}
            />
          </group>
          <group name="Sphere008" position={[-43.437, 2.181, 48.598]} scale={[0.871, 10.988, 0.871]}>
            <mesh
              name="Sphere036"
              geometry={nodes.Sphere036.geometry}
              material={materials['wood.001']}
            />
            <mesh
              name="Sphere036_1"
              geometry={nodes.Sphere036_1.geometry}
              material={materials['leaves.001']}
            />
          </group>
          <group name="Sphere011" position={[-89.383, 2.944, 60.003]} scale={[0.871, 10.988, 0.871]}>
            <mesh
              name="Sphere037"
              geometry={nodes.Sphere037.geometry}
              material={materials['wood.001']}
            />
            <mesh
              name="Sphere037_1"
              geometry={nodes.Sphere037_1.geometry}
              material={materials['leaves.001']}
            />
          </group>
          <group name="Sphere017" position={[-59.052, 0.587, 44.522]} scale={[0.871, 10.988, 0.871]}>
            <mesh
              name="Sphere038"
              geometry={nodes.Sphere038.geometry}
              material={materials['wood.001']}
            />
            <mesh
              name="Sphere038_1"
              geometry={nodes.Sphere038_1.geometry}
              material={materials['leaves.001']}
            />
          </group>
          <group name="Sphere024" position={[-77.592, 1.675, -1.368]} scale={[0.871, 10.988, 0.871]}>
            <mesh
              name="Sphere039"
              geometry={nodes.Sphere039.geometry}
              material={materials['wood.001']}
            />
            <mesh
              name="Sphere039_1"
              geometry={nodes.Sphere039_1.geometry}
              material={materials['leaves.001']}
            />
          </group>
          <group
            name="Sphere025"
            position={[-85.186, 6.785, 19.326]}
            rotation={[0, 1.021, 0]}
            scale={[0.871, 10.988, 0.871]}>
            <mesh
              name="Sphere040"
              geometry={nodes.Sphere040.geometry}
              material={materials['wood.001']}
            />
            <mesh
              name="Sphere040_1"
              geometry={nodes.Sphere040_1.geometry}
              material={materials['leaves.001']}
            />
          </group>
          <group
            name="Sphere026"
            position={[-69.462, 4.85, 52.119]}
            rotation={[0, 1.021, 0]}
            scale={[0.871, 10.988, 0.871]}>
            <mesh
              name="Sphere041"
              geometry={nodes.Sphere041.geometry}
              material={materials['wood.001']}
            />
            <mesh
              name="Sphere041_1"
              geometry={nodes.Sphere041_1.geometry}
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
              geometry={nodes.Sphere042.geometry}
              material={materials['wood.001']}
            />
            <mesh
              name="Sphere042_1"
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
                    geometry={nodes['14_bighorn_sheep_14_bighorn_sheep_0'].geometry}
                    material={materials['14_bighorn_sheep']}
                    position={[-4.239, 2.315, -0.105]}
                    rotation={[-0.041, 0.307, 1.706]}
                    scale={0.326}
                  />
                  <mesh
                    name="14_bighorn_sheep_14_bighorn_sheep_0001"
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
      )
  
      
    };

export default LostBiodiversity;

useGLTF.preload('/perdida-biodiversidad.glb')