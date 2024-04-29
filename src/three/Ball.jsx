import * as THREE from 'three'
import { Float, MeshTransmissionMaterial } from "@react-three/drei"

const sphereGeometry = new THREE.SphereGeometry( 0.8, 32, 32 )

export default function Ball ({ meshPosition }){
    return(
        <Float>
        <mesh geometry={sphereGeometry} position={meshPosition}>
        <meshStandardMaterial color='#ffffff' metalness={0.8} roughness={0.1} />
       {/* <MeshTransmissionMaterial transmissionSampler thickness={0.20} roughness={0.2} transmission={1} ior={1.2} chromaticAberration={0.2} backside={true} /> */}
      </mesh>
      </Float>
    )
}