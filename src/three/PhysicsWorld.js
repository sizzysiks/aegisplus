import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import * as THREE from "three"
import { Physics, RigidBody, BallCollider } from "@react-three/rapier"

import BaubleColor from "./BaubleColor"
import Bauble from './Bauble'

const capsuleGeometry = new THREE.CapsuleGeometry( 0.4, 0.4, 32, 32 )
const sphereGeometry = new THREE.SphereGeometry( 0.8, 32, 32 )
const baubleMaterial = new THREE.MeshStandardMaterial({ color: '#ffffff', metalness: 0.8, roughness: 0.2 })

const baubles = [...Array(10)].map(() => ({ scale: [1, 1, 1, 1, 1.25][Math.floor(Math.random() * 5)] }))


const PhysicsWorld = ({ scrollY, isMobile }) =>{
    return(
        <Physics gravity={[0, 0, 0]}>
            <Pointer />
            {baubles.map((props, i) => <Bauble key={i} {...props} geometry={sphereGeometry} material={baubleMaterial} />)}
            <BaubleColor color='#0062ff' geometry={capsuleGeometry} />
            <BaubleColor color='#ff4d00' geometry={capsuleGeometry} />
            <BaubleColor color='#11ae00' geometry={capsuleGeometry} />

            {/* <Ball meshPosition={[-1, -1, 3]} />
            <Ball meshPosition={[0, 1, 3]} />
            <Ball meshPosition={[2, -0.5, 3]} />
            <Capsule 
              color='#0062ff' 
              meshPosition={[isMobile? -0.65: -1, -0.9, 1]} 
              scrollY={scrollY} 
              newPosition={[-3, -2, 1]} 
            />
            <Capsule 
              color='#ff4d00' 
              meshPosition={[isMobile? 0.5: 1, 1, 1]} 
              scrollY={scrollY} 
              newPosition={[1, 2, 1]} 
            />
            <Capsule 
              color='#11ae00' 
              meshPosition={[isMobile? 0.6: 2.2, -0.8, 1]} 
              scrollY={scrollY} 
              newPosition={[3, -1.5, 1]} 
            /> */}
        </Physics>
    )
}

function Pointer({ vec = new THREE.Vector3() }) {
    const ref = useRef()
    
    useFrame(({ mouse, viewport }) => {
      vec.lerp({ x: (mouse.x * viewport.width) / 2, y: (mouse.y * viewport.height) / 2, z: 0 }, 0.2)
      ref.current?.setNextKinematicTranslation(vec)
    })
    
    return (
      <RigidBody position={[100, 100, 100]} type="kinematicPosition" colliders={false} ref={ref}>
        <BallCollider args={[2]} />
      </RigidBody>
    )
}

export default PhysicsWorld