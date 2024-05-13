import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from 'three'
import { useGLTF } from "@react-three/drei";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { getRandomColor } from '../utils/getRandomColor'
import useTrackScroll from "../hooks/useTrackScroll";

// eslint-disable-next-line react/prop-types
export default function Cube ({ position, color }){
    const { scene } = useGLTF('./resources/cube.glb')
    const geometry = scene.children[0].children[0].children[0].children[0].children[0].geometry

    let prevX = null;
    let prevY = null;

    const ref = useRef(null);
    const materialRef = useRef(null);

    const { scrollY } = useTrackScroll()

    const initialPhase = useRef(Math.random() * Math.PI * 2);

    // Animate each frame
    useFrame(({ clock }) => {
        if (ref.current) {
          // Calculate z position based on time and initial phase
          ref.current.position.z = position[2] + Math.sin(clock.getElapsedTime() + initialPhase.current) * 0.1;
        }
    });

    // Scroll animations
    useGSAP(()=>{
      if(scrollY <= 0.5){
        gsap.to(ref.current.rotation, { duration: 2, y: Math.PI, ease: 'elastic.out' })
      } else if(scrollY > 0.5 && scrollY <= 2){
        gsap.to(ref.current.rotation, { duration: 0.5, y: -Math.PI })
      } else if(scrollY > 2){
        gsap.to(ref.current.rotation, { duration: 0.5, y: Math.PI })
        materialRef.current.color = new THREE.Color('#000000')
      }
    }, { dependencies: [ scrollY ] })

    // On pointer in
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;

      if (prevX !== null && prevY !== null) {
        const deltaX = clientX - prevX;
        const deltaY = clientY - prevY;

        if (Math.abs(deltaX) > Math.abs(deltaY)) {
          if (deltaX > 0) {
            gsap.to(ref.current.rotation, { duration: 0.5, y: Math.PI })
          } else {
            gsap.to(ref.current.rotation, { duration: 0.5, y: -Math.PI })
          }
        } else {
            if (deltaY > 0) {
              gsap.to(ref.current.rotation, { duration: 0.5, x: -Math.PI })
            } else {
              gsap.to(ref.current.rotation, { duration: 0.5, x: Math.PI })
            }
        }
        
        materialRef.current.color = new THREE.Color('#ffffff')
      }

      // Update previous position
      prevX = clientX;
      prevY = clientY;
    };

    // On pointer out
    const handleMouseOut = () =>{
        const color = getRandomColor()
        materialRef.current.color = new THREE.Color(color)
        // gsap.to(ref.current.rotation, { duration: 0.5, y: 0 })
    }

    return(
        <mesh 
          ref={ref} 
          // eslint-disable-next-line react/no-unknown-property
          position={position} 
          // eslint-disable-next-line react/no-unknown-property
          geometry={geometry} 
          scale={[0.53, 0.53, 0.53]}
          onPointerOver={handleMouseMove} 
          onPointerOut={handleMouseOut} 
        >
            {/* eslint-disable-next-line react/no-unknown-property */}
            <meshStandardMaterial ref={materialRef} color={color} metalness={0.5} roughness={0.2} />
        </mesh>
    )
}