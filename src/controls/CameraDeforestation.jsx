import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

const CameraDeforestation = ({ targetPosition, targetLookAt }) => {
    const controlsRef = useRef();
    const [cameraPosition, setCameraPosition] = useState(new THREE.Vector3(-14.203040677019562, 3.5904266270657557, 60.276562580416254));
    const [cameraTarget, setCameraTarget] = useState(new THREE.Vector3(-8.744576996657683, -3.0750795814342533, 1.3205744708974023));

    useFrame(() => {
        cameraPosition.lerp(targetPosition, 0.05);
        setCameraPosition(cameraPosition.clone());
    
        cameraTarget.lerp(targetLookAt, 0.05);
        setCameraTarget(cameraTarget.clone()); 
    
        if (controlsRef.current) {
            controlsRef.current.object.position.copy(cameraPosition);
            controlsRef.current.target.copy(cameraTarget);
            controlsRef.current.update();
        }
    });

    return <OrbitControls ref={controlsRef} />;
};

export default CameraDeforestation;