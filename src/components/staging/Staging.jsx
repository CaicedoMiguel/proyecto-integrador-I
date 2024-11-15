import { Environment } from "@react-three/drei";

const Staging = () => {
    return (
        <>
            <Environment 
            ground={{
                height: 20,
                radius: 60,
                scale: 100,
            }}
            files={"/hdris/sky/dry_orchard_meadow_2k.hdr"} 
            background={true}/>
        </>
    );
};

export default Staging;