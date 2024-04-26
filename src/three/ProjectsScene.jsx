import { Canvas } from "@react-three/fiber"
import { Lightformer, Environment } from "@react-three/drei"
import * as THREE from 'three'

import Lights from "./Lights"
import Background from "./Background"
import PhysicsWorld from "./PhysicsWorld"
 
THREE.ColorManagement.legacyMode = false

export default function ProjectsScene ({ isMobile }){
    return(
        <Canvas 
            // camera={{ rotation: [0, 0, isMobile? Math.PI * 0.1: 0.1], position: [0, 0, isMobile? 4.9: 4.87] }}
            orthographic camera={{ zoom: 250, position: [0, 0, 5] }}
            onCreated={(state) => (state.gl.toneMappingExposure = 1.3)}
        >
            <Background />
            <PhysicsWorld />
            <Lights />

            <Environment resolution={256}>
                <group rotation={[0, 0, 0]}>
                    <Lightformer form="circle" intensity={4} position={[-5, 1, 5]} scale={1} />
                    <Lightformer form="circle" intensity={4} position={[5, 1, 5]} scale={1} />
                    <Lightformer form="circle" intensity={8} position={[2, 0, 5.5]} scale={1} />
                </group>
            </Environment>
        </Canvas>
    )
}