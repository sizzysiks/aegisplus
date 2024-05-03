import { useRef } from 'react';
import { extend, useFrame } from '@react-three/fiber';
import * as THREE from 'three'

import { ImageShaderMaterial } from './shaders/ImageShaderMaterial'
extend({ ImageShaderMaterial })

export default function Sheet (){
    const ref = useRef(null);
    const materialRef = useRef(null);

    useFrame(({clock})=>{
        if(materialRef){
            materialRef.current.uTime = clock.elapsedTime * 0.1
        }
    })

    return(
        <mesh 
            ref={ref} 
            position={[0, 0, 0]}
        >
            <boxGeometry />
            <imageShaderMaterial ref={materialRef} toneMapped={false} />
        </mesh>
    )
}