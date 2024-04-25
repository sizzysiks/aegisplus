import * as THREE from "three"
import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { BallCollider, RigidBody, CylinderCollider } from "@react-three/rapier"

const sphereGeometry = new THREE.CapsuleGeometry( 0.4, 0.4, 32, 32 )

export default function BaubleColor({ vec = new THREE.Vector3(), scale = [0.75, 0.75, 1, 1, 1.25][Math.floor(Math.random() * 5)], r = THREE.MathUtils.randFloatSpread, color }) {
    const baubleMaterial = new THREE.MeshStandardMaterial({ color: color, metalness: 0.8, roughness: 0.1 })

    const api = useRef()

    useFrame((state, delta) => {
        delta = Math.min(0.1, delta)

        if(api.current){
          api.current.applyImpulse(
            vec
            .copy(api.current.translation())
            .normalize()
            .multiply({ x: -50 * delta * scale, y: -150 * delta * scale, z: -50 * delta * scale }),
          )
        }
    })

    return (
    <RigidBody linearDamping={0.75} angularDamping={0.15} friction={0.2} position={[r(20), r(20) - 25, r(20) - 10]} ref={api} colliders={false} dispose={null}>
      <BallCollider args={[scale]} />
      <CylinderCollider rotation={[Math.PI / 2, 0, 0]} position={[0, 0, 1.2 * scale]} args={[0.15 * scale, 0.275 * scale]} />
      <mesh scale={scale} geometry={sphereGeometry} material={baubleMaterial} />
    </RigidBody>
    )
}