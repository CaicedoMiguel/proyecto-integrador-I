/* eslint-disable react/no-unknown-property */
// eslint-disable-next-line no-unused-vars
import React, { useCallback, useState } from "react";
import { useVideoTexture } from "@react-three/drei";
const VideoBiodiversidad = (props) => {
    const texture = useVideoTexture("/videos/biodiversidad.mp4",{
        muted: false,
        loop: true,
        start: false

    });
    const [pause, setPause] = useState(false);

    const handleVideo = useCallback(
        (e) => {
          e.stopPropagation();
          pause ? texture.image.play() : texture.image.pause();
          setPause(!pause);
        },
        [pause, setPause, texture]
      );
    

    return (
        <mesh {...props} onClick={handleVideo}>
            <planeGeometry args={[4, 2]}/>
            <meshBasicMaterial map={texture}/>
        </mesh>
    )
}

export default VideoBiodiversidad;
