import { Canvas, useThree } from "@react-three/fiber";
import { Environment, Lightformer } from "@react-three/drei";
import * as THREE from 'three'

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import useTrackScroll from '../hooks/useTrackScroll.js'

import Lights from './Lights'
import Grid from "./Grid.jsx";



THREE.ColorManagement.legacyMode = false

// eslint-disable-next-line react/prop-types
const CameraMesh = ({ isMobile }) =>{
    // hooks
    const { scrollY } = useTrackScroll();

    const { camera } = useThree();

    useGSAP(()=>{
        if(scrollY <= 0.8){
            gsap.to( camera.position, { duration: 0.5, z: isMobile? 4: 2 })
            gsap.to( camera.rotation, { duration: 0.5, z: isMobile? Math.PI / 2: Math.PI / 8 })
        } else if(scrollY > 0.8 && scrollY <= 4){
            gsap.to( camera.position, { duration: 0.5, z: 1.5, x: 0 })
            gsap.to( camera.rotation, { duration: 0.5, z: Math.PI / 12 })
        } else if(scrollY > 4){
            gsap.to( camera.position, { duration: 0.3, z: 0 })
            gsap.to( camera.rotation, { duration: 0.3, z: 0 })
        }
    }, { dependencies: [ scrollY ] })

    return null
}


// eslint-disable-next-line react/prop-types
const Experience = ({ isMobile }) =>{
    return(
        <div className="canvas" style={ { position: 'fixed', top: '0', left: '0', right: '0', bottom: '0', zIndex: '1' } }>
            {/* <Canvas gl={{ alpha: false }} orthographic camera={{ zoom: 150, position: [-2, 0, 4], rotation: [0, 0, 0.2] }}> */}
            <Canvas gl={{ alpha: false }} camera={{ position: [0, 1, isMobile? 4: 2], rotation: [0, 0, isMobile? (Math.PI / 2): (Math.PI / 8)] }} >
                {/* eslint-disable-next-line react/no-unknown-property */}
                <color attach="background" args={['#050505']} />
                <CameraMesh isMobile={isMobile} />
                {/* <Instanced /> */}
                <Grid />
                {/* <Model /> */}
                <Lights />
                <Environment resolution={256}>
                    <group>
                        <Lightformer form="circle" intensity={2} rotation-y={Math.PI / 2} position={[-5, 1, -1]} scale={2} />
                        <Lightformer form="circle" intensity={2} rotation-y={Math.PI / 2} position={[-5, -1, -1]} scale={2} />
                        <Lightformer form="circle" intensity={2} rotation-y={-Math.PI / 2} position={[10, 1, 5]} scale={8} />
                    </group>
                </Environment>
            </Canvas>
        </div>
    )
}

export default Experience