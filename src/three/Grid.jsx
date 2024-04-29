import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";

const Box = ({ position, color }) =>{
    const ref = useRef()

    const size = [0.5, 0.5, 0.5]

    useFrame(({ clock })=>{
        ref.current.position.z = Math.sin() * clock.elapsedTime
    })

    return(
        <mesh position={position} ref={ref}>
            <boxGeometry args={size} />
            <meshStandardMaterial color={color} metalness={0.8} roughness={0.1} />
        </mesh>
    )
}

export default function Grid(){
    const gap = 0.1;
    const size = [0.5, 0.5, 0.5]

    const { viewport } = useThree();

    return (
      <group rotation={[0, 0.2, 0]} position={[2, -0.5, 0]}>
        <Box position={[0, 0, 0]} color='#FD691C' />
        <Box position={[-size[0] * 1, 0, 0]} color='#ffff00' />
        <Box position={[-size[0] * 2, 0, 0]} color='#FD691C' />
        <Box position={[-size[0] * 0, -size[0] * 1, 0]} color='#00ff00' />
        <Box position={[-size[0] * 1, -size[0] * 1, 0]} color='#FD691C' />
        <Box position={[-size[0] * 2, -size[0] * 1, 0]} color='#FD691C' />
      </group>
    );
};