import { useRef } from 'react';
import { extend, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three'

import { useNavigate } from 'react-router-dom';

import gsap from 'gsap';

// Import shader
import { ImageShaderMaterial } from './shaders/ImageShaderMaterial'
extend({ ImageShaderMaterial })


const CylinderImage = ({ texture, rotation, id, geometry, isMobile, scrollY  }) =>{
    // Navigate
    const navigate = useNavigate();

    // Refs
    const ref = useRef(null);
    const materialRef = useRef(null);

    // Handle mouse click. If the counter has reached the threshold (long press) we navigate to new page
    const handleClick = () =>{
        if(materialRef.current){
            gsap.to(materialRef.current, {duration:0.3, uFrame:0.4})
            setTimeout(() => {
                navigate(`/projects/${id}`)                
            }, 300);
        }

    }
   
    // Handle pointer enter
    const handlePointerEnter = () =>{
        if(ref.current && !isMobile){
            gsap.to(materialRef.current, {duration:0.1, uColor: 1})
            gsap.to(materialRef.current, { duration: 0.5, uZoom: 0.85})
            // gsap.to(materialRef.current, {duration:0.3, uFrame:0.5})
        }

        document.body.style.cursor = 'grab'
    }

    // Handle pointer leave
    const handlePointerLeave = () =>{
        if(ref.current && !isMobile){
            gsap.to(materialRef.current, {duration:0.1, uColor: 0.1})
            gsap.to(materialRef.current, { duration: 0.5, uZoom: 1.0})
            // gsap.to(materialRef.current, {duration:0.3, uFrame:0})
        }

        document.body.style.cursor = 'auto'
    }

    // Animate on each frame
    useFrame(({clock})=>{
        if(materialRef){
            materialRef.current.uTime = clock.elapsedTime * 0.1
        }
    })

    // useEffect(()=>{
    //     const cursor = `<svg width="64" height="64" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path fill="rgba(255, 255, 255, 0.5)" d="M29.5 54C43.031 54 54 43.031 54 29.5S43.031 5 29.5 5 5 15.969 5 29.5 15.969 54 29.5 54z" stroke="#000"/><g filter="url(#filter0_d)"><path d="M29.5 47C39.165 47 47 39.165 47 29.5S39.165 12 29.5 12 12 19.835 12 29.5 19.835 47 29.5 47z" fill=""/></g><path d="M2 2l11 2.947L4.947 13 2 2z" fill="#000"/><text fill="#000" style="white-space:pre" font-family="Inter var, sans-serif" font-size="10" letter-spacing="-.01em"><tspan x="35" y="63"></tspan></text></g><defs><clipPath id="clip0"><path fill="#fff" d="M0 0h64v64H0z"/></clipPath><filter id="filter0_d" x="6" y="8" width="47" height="47" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="2"/><feGaussianBlur stdDeviation="3"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow"/><feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"/></filter></defs></svg>`
        
    //     const auto = `<svg width="64" height="64" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="rgba(255, 255, 255, 0.5)" d="M29.5 54C43.031 54 54 43.031 54 29.5S43.031 5 29.5 5 5 15.969 5 29.5 15.969 54 29.5 54z" stroke="#000"/><path d="M2 2l11 2.947L4.947 13 2 2z" fill="#000"/></svg>`
        
    //     if (hovered) {
    //         document.body.style.cursor = `url('data:image/svg+xml;base64,${btoa(cursor)}'), auto`
    //         return () => (document.body.style.cursor = `url('data:image/svg+xml;base64,${btoa(auto)}'), auto`)
    //     } else{
    //         document.body.style.cursor = `auto`
    //     }
    // }, [hovered])

    return(
        <>
        <mesh 
            ref={ref} 
            position={[0, 0, 0]}
            geometry={geometry} 
            rotation={rotation} 
            onPointerEnter={handlePointerEnter} 
            onPointerLeave={handlePointerLeave} 
            onClick={handleClick}
            castShadow
        >
            <imageShaderMaterial ref={materialRef} uTexture={texture} side={THREE.DoubleSide} toneMapped={false} />
        </mesh>
        </>
    )
}

export default CylinderImage