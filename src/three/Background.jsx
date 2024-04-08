import { useRef, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export default function Background ({ scrollY }){
    const meshRef = useRef();
    const materialRef = useRef();

    useEffect(() => {
        // Store the material for later use
        materialRef.current = meshRef.current.material;
    }, []);

    useGSAP(()=>{
        if(scrollY <= 2.7){
            gsap.to(materialRef.current.color, { r: 0.98, g: 0.98, b: 0.98, duration: 0.5 });
        } else if(scrollY > 2.7 && scrollY <= 3.7){
            gsap.to(materialRef.current.color, { r: 1, g: 1, b: 1, duration: 0.5 });
        } else if(scrollY > 3.7 && scrollY <= 4.7){
            gsap.to(materialRef.current.color, { r: 1, g: 1, b: 0, duration: 0.5 });
        } else if(scrollY > 4.7 && scrollY <= 5.7){
            gsap.to(materialRef.current.color, { r: 0.0, g: 0, b: 0.01, duration: 0.5 });
        } else if(scrollY > 5.7 && scrollY <= 6.7){
            gsap.to(materialRef.current.color, { r: 0.6, g: 0.25, b: 0.7, duration: 0.5 });
        } else if(scrollY > 6.7 && scrollY <= 8){
            gsap.to(materialRef.current.color, { r: 0.01, g: 0, b: 0.1, duration: 0.5 });
        } else if(scrollY > 8){
            gsap.to(materialRef.current.color, { r: 1, g: 1, b: 1, duration: 0.5 });
        }
    }, { dependencies: [scrollY] })
    
    return(
        <mesh ref={meshRef} receiveShadow>
            <planeGeometry args={[20, 20, 1]} position={[0, 0, -10]} />
            <meshBasicMaterial ref={materialRef} />
        </mesh>
    )
}