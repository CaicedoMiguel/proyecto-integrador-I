import React, { useCallback, useState, useEffect, useRef } from "react";
import { useVideoTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { EffectComposer, Bloom, ChromaticAberration, Noise, Vignette } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";

const VideoBiodiversidad = ({ onEnded, ...props }) => {
  const [pause, setPause] = useState(false);
  const videoRef = useRef();
  const texture = useVideoTexture("/videos/biodiversidad.mp4", {
    unsuspend: "canplay",
    muted: false,
    loop: false,
    start: false,
  });

  useFrame(() => {
    if (videoRef.current) {
      texture.needsUpdate = true;
    }
  });

  const handleVideo = useCallback(
    (e) => {
      e.stopPropagation();
      if (videoRef.current) {
        if (pause) {
          videoRef.current.play();
        } else {
          videoRef.current.pause();
        }
        setPause(!pause);
      }
    },
    [pause]
  );

  useEffect(() => {
    const video = texture.image;
    videoRef.current = video;

    const handleEnded = () => {
      if (onEnded) {
        onEnded();
      }
    };

    video.addEventListener("ended", handleEnded);
    video.play();

    return () => {
      video.removeEventListener("ended", handleEnded);
      video.pause();
    };
  }, [texture, onEnded]);

  return (
    <>
      <mesh {...props} onClick={handleVideo}>
        <planeGeometry args={[16, 9]} /> {/* 16:9 aspect ratio */}
        <meshBasicMaterial map={texture} toneMapped={false} />
      </mesh>

      {/* Agregar efectos de postprocesado */}
      <EffectComposer>
        {/* Brillo */}
        <Bloom intensity={1.5} luminanceThreshold={0.4} luminanceSmoothing={0.9} />

        {/* Aberración cromática */}
        <ChromaticAberration offset={[0.002, 0.002]} blendFunction={BlendFunction.NORMAL} />

        {/* Ruido */}
        <Noise opacity={0.2} />

        {/* Viñeta */}
        <Vignette eskil={false} offset={0.1} darkness={1.1} />
      </EffectComposer>
    </>
  );
};

export default VideoBiodiversidad;