import { useRef } from 'react';

import { useTexture } from '@react-three/drei';
import * as THREE from 'three'

import gsap from 'gsap/all';
import { useGSAP } from '@gsap/react';

// Components
import CylinderImage from './CylinderImage'

// Constant values
const count = 5
// const thetaLength = (2 * Math.PI) / count
const thetaLength = (Math.PI / 2) / count
const offset = thetaLength + 0.01

const geometry = new THREE.CylinderGeometry(1.92, 1.92, 0.38, 36, 36, true, 1.4, thetaLength)

const Cylinder = ({ isMobile, scrollY }) =>{
    // Ref for group
    const groupRef = useRef()

    // Textures
    const textures = [
        useTexture('./images/map.webp'),
        useTexture('./images/link.webp'),
        useTexture('./images/jbx.webp'),
        useTexture('./images/retail.webp'),
        useTexture('./images/ant.webp'),
    ]

    useGSAP(() => {
        const rotationSpeed = 0.1;
        const rotationBias = 2;
        const yRotation = ((scrollY - rotationBias) * rotationSpeed ) * Math.PI;

        gsap.to(groupRef.current.rotation, { duration: 1, y: yRotation, ease: "expo.out" });        
    }, { dependencies: [scrollY] });

    return(
        <group position={[0, 0, 6.5]} rotation={[0, 0, 0]} ref={groupRef}>
            <CylinderImage texture={textures[0]} rotation={[0, offset * 0, 0]} id="map" geometry={geometry} isMobile={isMobile} scrollY={scrollY} />
            <CylinderImage texture={textures[1]} rotation={[0, offset * 1, 0]} id="owners" geometry={geometry} isMobile={isMobile} scrollY={scrollY} />
            <CylinderImage texture={textures[4]} rotation={[0, offset * 2, 0]} id="antino" geometry={geometry} isMobile={isMobile} scrollY={scrollY} />
            <CylinderImage texture={textures[2]} rotation={[0, offset * 3, 0]} id="anila" geometry={geometry} isMobile={isMobile} scrollY={scrollY} />
            <CylinderImage texture={textures[3]} rotation={[0, offset * 4, 0]} id="retail" geometry={geometry} isMobile={isMobile} scrollY={scrollY} />
        </group>
    )
}

export default Cylinder