import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Float } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function Capsule ({ color, meshPosition, scrollY, newPosition }){
    const meshRef = useRef(null);

    useFrame(({ clock })=>{
        meshRef.current.rotation.z = clock.elapsedTime * 0.2
    })

    useGSAP(()=>{
        if(scrollY <=0.5){
            gsap.to(meshRef.current.position, { duration: 1, x: meshPosition[0], y: meshPosition[1], z: meshPosition[2], ease: 'elastic.out' })
        } else if(scrollY > 0.5){
            gsap.to(meshRef.current.position, { duration: 1, x: newPosition[0], y: newPosition[1], z: newPosition[2], ease: 'elastic.out' })
        }
    }, { dependencies: [scrollY] })

    return(
        <Float>
            <mesh position={meshPosition} ref={meshRef}>
                <capsuleGeometry args={[0.25, 0.25, 32, 32]} />
                <meshStandardMaterial color={color} metalness={0.8} roughness={0.1} />
            </mesh>
        </Float>
    )
}