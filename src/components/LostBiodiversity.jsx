/* eslint-disable react/no-unknown-property */
// eslint-disable-next-line no-unused-vars
import React, { useCallback, useRef, useState } from "react";
import { useGLTF, Html } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

const LostBiodiversity = (props) => {
  const { nodes, materials } = useGLTF("/models/perdida-biodiversidad.glb");

  // Estado para la ventana de sensibilización
  const [showAwareness, setShowAwareness] = useState(false); 

  const handleAwareness = () => {
    setShowAwareness(true);
  };
  const handleCloseAwareness = () => {
    setShowAwareness(false);
  };
  
  // Estado para la ventana las soluciones
  const [showSolutions, setShowSolutions] = useState(false); 

  const handleSolutions = () => {
    setShowSolutions(true);
  };
  const handleCloseSolutions = () => {
    setShowSolutions(false);
  };

  const handleObjeto = (e) => {
    console.log("nombre del objeto", e.object.name); 
  }

  const rTreesRef = useRef();

  const handleTree = useCallback(() => {
    // console.log("¡El árbol fue derribado!");
    // Aplicar un impulso al árbol (direccionado hacia abajo y un poco hacia adelante)
    if (rTreesRef.current) {
      rTreesRef.current.applyImpulse({ x: 0, y: -10, z: 5 }, true);
    }
  }, []);
  

  return (
    <>
     
      <group {...props} dispose={null}>
        <group name="Scene">
          <RigidBody type="fixed">
          <mesh
            name="Plane"
            castShadow
            receiveShadow
            geometry={nodes.Plane.geometry}
            material={materials["Material.001"]}
            position={[0, -5.101, 36.979]}
            scale={[135.026, 169.274, 162.182]}
          />
           </RigidBody>
          <group
            name="rock022"
            position={[85.932, -4.163, 68.797]}
            scale={5.554}
            onClick={(e) => e.stopPropagation()}
          >
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
            <RigidBody colliders="trimesh" type="dynamic" ref={rTreesRef}>  
            <mesh
              name="rock013_2" //tronco sin rama
              castShadow
              receiveShadow
              geometry={nodes.rock013_2.geometry}
              material={materials.wood}
              onClick={handleTree}
            />
            </RigidBody>
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
              onClick={handleObjeto}
            />
            <mesh
              name="rock013_5"
              castShadow
              receiveShadow
              geometry={nodes.rock013_5.geometry}
              material={materials.leaves}
              onClick={handleObjeto}
            />
            <mesh
              name="rock013_6" //arbol cortado
              castShadow
              receiveShadow
              geometry={nodes.rock013_6.geometry}
              material={materials["Material.002"]}
              onClick={handleAwareness}
            />
            <mesh
              name="rock013_7"
              castShadow
              receiveShadow
              geometry={nodes.rock013_7.geometry}
              material={materials["Material.004"]}
              onClick={handleObjeto}
            />
            <mesh
              name="rock013_8"
              castShadow
              receiveShadow
              geometry={nodes.rock013_8.geometry}
              material={materials["Material.003"]}
              onClick={handleObjeto}
            />
            <mesh
              name="rock013_9" //arbol
              castShadow
              receiveShadow
              geometry={nodes.rock013_9.geometry}
              material={materials["Material.005"]}
              onClick={handleSolutions}
            />
            <mesh
              name="rock013_10" //arbol con rama
              castShadow
              receiveShadow
              geometry={nodes.rock013_10.geometry}
              material={materials["Material.006"]}
              onClick={handleObjeto}
            />
            <mesh
              name="rock013_11"
              castShadow
              receiveShadow
              geometry={nodes.rock013_11.geometry}
              material={materials["wood.001"]}
              
            />
            <mesh
              name="rock013_12"
              castShadow
              receiveShadow
              geometry={nodes.rock013_12.geometry}
              material={materials["leaves.001"]}
              
            />
          
          </group>
          <group
            name="stump_2004"
            position={[2.523, -1.56, 78.002]}
            rotation={[-Math.PI, 0.312, -Math.PI]}
            scale={1.644}
            onClick={(e) => e.stopPropagation()}
          >
            <mesh
              name="Plane004"
              castShadow
              receiveShadow
              geometry={nodes.Plane004.geometry}
              material={materials["Material.002"]}
              
            />
            <mesh
              name="Plane004_1"
              castShadow
              receiveShadow
              geometry={nodes.Plane004_1.geometry}
              material={materials["Material.004"]}
              
            />
          </group>
          <group
            name="stump_1001"
            position={[40.174, -3.629, 21.226]}
            rotation={[0, 0.345, 0]}
            scale={1.644}
            onClick={(e) => e.stopPropagation()}
          >
            <mesh
              name="Plane007"
              castShadow
              receiveShadow
              geometry={nodes.Plane007.geometry}
              material={materials["Material.002"]}
              
            />
            <mesh
              name="Plane007_1"
              castShadow
              receiveShadow
              geometry={nodes.Plane007_1.geometry}
              material={materials["Material.004"]}
              
            />
          </group>
          <mesh
            name="Log003" //tronco tirado
            castShadow
            receiveShadow
            geometry={nodes.Log003.geometry}
            material={materials["Material.002"]}
            position={[26.168, -2.557, 73.037]}
            rotation={[0, -0.443, 0]}
            scale={1.644}
          />
          <group
            name="stump_2006"
            position={[1.114, -1.871, 37.098]}
            rotation={[-Math.PI, 0.312, -Math.PI]}
            scale={1.644}
            onClick={(e) => e.stopPropagation()}
          >
            <mesh
              name="Plane011"
              castShadow
              receiveShadow
              geometry={nodes.Plane011.geometry}
              material={materials["Material.002"]}
              
            />
            <mesh
              name="Plane011_1"
              castShadow
              receiveShadow
              geometry={nodes.Plane011_1.geometry}
              material={materials["Material.004"]}
              
            />
          </group>
          <group
            name="Pine004"
            position={[-36.879, -6.943, 35.663]}
            scale={[0.777, 0.949, 0.949]}
            onClick={(e) => e.stopPropagation()}
          > 
          <RigidBody type="kinematic">
            <mesh
              name="Plane024" //arbol
              castShadow
              receiveShadow
              geometry={nodes.Plane024.geometry}
              material={materials["Material.003"]}
              onClick={handleTree}
            />
            <mesh
              name="Plane024_1" //arbol
              castShadow
              receiveShadow
              geometry={nodes.Plane024_1.geometry}
              material={materials["Material.005"]}
              onClick={handleTree}
            />
            </RigidBody>
          </group>
          <group
            name="Sphere004"
            position={[-33.58, 4.417, 17.461]}
            scale={[0.871, 10.988, 0.871]}
            onClick={(e) => e.stopPropagation()}
          >
            <mesh
              name="Sphere034"
              castShadow
              receiveShadow
              geometry={nodes.Sphere034.geometry}
              material={materials["wood.001"]}
              
            />
            <mesh
              name="Sphere034_1" //pino
              castShadow
              receiveShadow
              geometry={nodes.Sphere034_1.geometry}
              material={materials["leaves.001"]}
              onClick={handleObjeto}
            />
          </group>
          <group
            name="Sphere008"
            position={[-43.437, 2.181, 48.598]}
            scale={[0.871, 10.988, 0.871]}
            onClick={(e) => e.stopPropagation()}
          >
            <mesh
              name="Sphere036"
              castShadow
              receiveShadow
              geometry={nodes.Sphere036.geometry}
              material={materials["wood.001"]}
              
            />
            <mesh
              name="Sphere036_1" //pino
              castShadow
              receiveShadow
              geometry={nodes.Sphere036_1.geometry}
              material={materials["leaves.001"]}
            />
          </group>
          <group
            name="Sphere028"
            position={[-42.292, 3.266, -4.078]}
            rotation={[0, 1.021, 0]}
            scale={[0.871, 10.988, 0.871]}
            onClick={(e) => e.stopPropagation()}
          >
            <mesh
              name="Sphere042"
              castShadow
              receiveShadow
              geometry={nodes.Sphere042.geometry}
              material={materials["wood.001"]}
              
            />
            <mesh
              name="Sphere042_1"
              castShadow
              receiveShadow
              geometry={nodes.Sphere042_1.geometry}
              material={materials["leaves.001"]}
              
            />
          </group>
          <group
            name="Sketchfab_model"
            position={[80.883, 0, 107.959]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={0.179}
          >
            <group name="animalSkullsfbx" rotation={[Math.PI / 2, 0, 0]}>
              <group name="RootNode">
                <group
                  name="07_otter"
                  position={[-252.388, 0, -111.205]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                />
                <group
                  name="14_bighorn_sheep"
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="14_bighorn_sheep_14_bighorn_sheep_0"
                    castShadow
                    receiveShadow
                    geometry={
                      nodes["14_bighorn_sheep_14_bighorn_sheep_0"].geometry
                    }
                    material={materials["14_bighorn_sheep"]}
                    position={[-4.239, 2.315, -0.105]}
                    rotation={[-0.041, 0.307, 1.706]}
                    scale={0.326}
                  />
                  <mesh
                    name="14_bighorn_sheep_14_bighorn_sheep_0001"
                    castShadow
                    receiveShadow
                    geometry={
                      nodes["14_bighorn_sheep_14_bighorn_sheep_0001"].geometry
                    }
                    material={materials["14_bighorn_sheep"]}
                    position={[0.854, 0.255, -0.069]}
                    rotation={[-0.073, -0.302, -1.811]}
                    scale={0.326}
                  />
                </group>
                <group
                  name="15_caribou"
                  position={[0, 0, -222.41]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="15_caribou_15_caribou_0"
                    castShadow
                    receiveShadow
                    geometry={nodes["15_caribou_15_caribou_0"].geometry}
                    material={materials["15_caribou"]}
                    position={[-2.89, 3.126, 0]}
                    scale={0.471}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
                      
      {/* Ventana de sensibilización */}
      {showAwareness && (
        <Html
          position={[0, 5, 5]}
          style={{
            top: "20px",
            right: "-3px",
            width: "677px",
            height: "auto",
            transform: "translate(50%, -50%)",
            padding: "30px",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            color: "white",
            textAlign: "center",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          }}
        >
          <div>
            <h2>SENSIBILIZACIÓN SOBRE LA PÉRDIDA DE BIODIVERSIDAD</h2>
            <p>
              La pérdida de biodiversidad es un problema crítico que afecta a
              todo el planeta. Cada especie perdida reduce la resiliencia de los
              ecosistemas y compromete los servicios vitales que estos nos
              proporcionan, como la purificación del aire y agua, la
              polinización de cultivos y la regulación del clima. Es fundamental
              actuar ahora para conservar y restaurar los hábitats naturales,
              proteger las especies en peligro y promover prácticas sostenibles
              que garanticen un futuro saludable para las próximas generaciones.
            </p>
            <button
              onClick={handleCloseAwareness}
              style={{
                marginTop: "20px",
                padding: "10px 20px",
                fontSize: "16px",
                borderRadius: "8px",
                border: "none",
                backgroundColor: "#f44336",
                color: "white",
                cursor: "pointer",
              }}
            >Cerrar</button>
          </div>
        </Html>
      )};
      
      {/* Ventana de soluciones */}
      {showSolutions && (
        <Html
          position={[0, 5, 5]}
          style={{
            top: "20px",
            right: "-3px",
            width: "677px",
            height: "auto",
            transform: "translate(50%, -50%)",
            padding: "30px",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            color: "white",
            textAlign: "center",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          }}
        >
          <div>
            <h2>SEAMOS TODOS PARTE DEL CAMBIO</h2>
            <p>
              Para salvaguardar la biodiversidad, es esencial proteger los
              ecosistemas, conservar especies en peligro, reducir la
              contaminación y frenar la deforestación. También se deben promover
              prácticas agrícolas y pesqueras sostenibles, así como crear áreas
              protegidas y fomentar la educación y conciencia ambiental.
            </p>
            <button
              onClick={handleCloseSolutions}
              style={{
                marginTop: "20px",
                padding: "10px 20px",
                fontSize: "16px",
                borderRadius: "8px",
                border: "none",
                backgroundColor: "#f44336",
                color: "white",
                cursor: "pointer",
              }}
            >Cerrar</button>
          </div>
        </Html>
      )};
    </>
  );
};

export default LostBiodiversity;

useGLTF.preload("/models/perdida-biodiversidad.glb");
