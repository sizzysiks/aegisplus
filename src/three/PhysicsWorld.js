import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import * as THREE from "three"
import { Physics, RigidBody, BallCollider } from "@react-three/rapier"

import BaubleColor from "./BaubleColor"
import Bauble from './Bauble'

const baubles = [...Array(10)].map(() => ({ scale: [1, 1, 1, 1, 1.25][Math.floor(Math.random() * 5)] }))

const PhysicsWorld = () =>{
    return(
        <Physics gravity={[0, 0, 0]}>
            <Pointer />
            {baubles.map((props, i) => <Bauble key={i} {...props} />)}
            <BaubleColor color='#0062ff' />
            <BaubleColor color='#ff4d00' />
            <BaubleColor color='#11ae00' />
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