import { useRef } from 'react'
import * as THREE from 'three'
import { extend, useFrame } from '@react-three/fiber'

// Import shader
import { GradientShaderMaterial } from './shaders/GradientShaderMaterial'
extend({ GradientShaderMaterial })

export default function GradientMesh (){
    const materialRef = useRef(null);
    const objRef = useRef(null);

    // Animate on each frame
    useFrame(({clock})=>{
        if(materialRef){
            materialRef.current.uTime = clock.elapsedTime * 0.3
        }

        objRef.current.rotation.y = clock.elapsedTime * 0.2
    });

    return(
        <mesh position={[0, 0, 4]} ref={objRef}>
            <sphereGeometry args={[2, 32, 32]} />
            <gradientShaderMaterial ref={materialRef} side={THREE.DoubleSide} toneMapped={false} />
        </mesh>
    )
}