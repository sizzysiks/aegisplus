import { Canvas } from "@react-three/fiber"
import { Environment } from "@react-three/drei"

import Lights from "./Lights"
import Background from "./Background"
import PhysicsWorld from "./PhysicsWorld"
 
// THREE.ColorManagement.legacyMode = false

export default function Experience ({ isMobile, scrollY  }){
    return(
        <Canvas 
            // camera={{ rotation: [0, 0, isMobile? Math.PI * 0.1: 0.1], position: [0, 0, isMobile? 4.9: 4.87] }}
            orthographic camera={{ zoom: 200, position: [0, 0, 5] }}
            onCreated={(state) => (state.gl.toneMappingExposure = 1.3)}
        >
            <Background />
            <PhysicsWorld scrollY={scrollY} isMobile={isMobile} />
            <Lights />
            <Environment files="pond_bridge_night_1k.exr" />
        </Canvas>
    )
}