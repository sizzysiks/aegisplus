import { Canvas } from "@react-three/fiber"
import * as THREE from 'three'

import Cylinder from "./Cylinder"
import Lights from "./Lights"
import Background from "./Background"
import PhysicsWorld from "./PhysicsWorld"
 
THREE.ColorManagement.legacyMode = false

// const CameraMesh = ({ scrollY}) =>{   
//     const { camera } = useThree();

//     useGSAP(()=>{
//         if(scrollY > 2){
//             // gsap.to(camera.rotation, { duration: 0.5, z: 0.5 })
//             // gsap.to(camera.position, { duration: 0.5, z: 4.9 })
//         } else{
//             // gsap.to(camera.rotation, { duration: 0.5, z: 0.5 })
//             // gsap.to(camera.position, { duration: 0.5, z: 5 })
//         }
//     }, { dependencies: [scrollY] })

//     return null
// }

export default function ProjectsScene ({ isMobile, scrollY}){
    return(
        <Canvas 
            // gl={{ alpha: false }} 
            camera={{ rotation: [0, 0, isMobile? Math.PI * 0.4: 0.1], position: [0, 0, isMobile? 5: 4.85] }}
            onCreated={(state) => (state.gl.toneMappingExposure = 1.3)}
        >
            {/* <CameraMesh scrollY={scrollY} /> */}
            <Background scrollY={scrollY} />
            {/* <GradientMesh /> */}
            <PhysicsWorld />
            <Cylinder scrollY={scrollY} />
            <Lights />
        </Canvas>
    )
}