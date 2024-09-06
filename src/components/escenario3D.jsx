import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { FlyControls, useGLTF } from '@react-three/drei'
import * as THREE from 'three'

function AnimatedModel() {
  const modelRef = useRef<THREE.Group>(!null)
  const { scene } = useGLTF('/models/low_poly_forest.glb')

  useFrame((state) => {
    if (modelRef.current) {
      modelRef.current.position.x = Math.cos(state.clock.elapsedTime) * 2
    }
  })

  return <primitive ref={modelRef} object={scene} scale={0.5} />
}

export default function Escenario3DPersonalizado() {
  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <Canvas camera={{ position: [0, 5, 10] }}>
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <ambientLight intensity={0.5} />
        <AnimatedModel />
        <FlyControls movementSpeed={5} rollSpeed={0.5} />
      </Canvas>
    </div>
  )
}

useGLTF.preload('/models/low_poly_forest.glb')