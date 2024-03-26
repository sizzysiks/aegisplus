import * as THREE from "three"
import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { BallCollider, RigidBody, CylinderCollider } from "@react-three/rapier"

const baubleMaterial = new THREE.MeshStandardMaterial({ color: "#fafafa", metalness: 0.6, roughness: 0 })
const sphereGeometry = new THREE.SphereGeometry(1, 28, 28)

export default function Bauble({ vec = new THREE.Vector3(), scale, r = THREE.MathUtils.randFloatSpread }) {
  const api = useRef()
  useFrame((state, delta) => {
    delta = Math.min(0.1, delta)
    api.current.applyImpulse(
      vec
        .copy(api.current.translation())
        .normalize()
        .multiply({ x: -50 * delta * scale, y: -150 * delta * scale, z: -50 * delta * scale }),
    )
  })

  return (
    <RigidBody linearDamping={0.75} angularDamping={0.15} friction={0.2} position={[r(20), r(20) - 25, r(20) - 10]} ref={api} colliders={false} dispose={null}>
      <BallCollider args={[scale]} />
      <CylinderCollider rotation={[Math.PI / 2, 0, 0]} position={[0, 0, 1.2 * scale]} args={[0.15 * scale, 0.275 * scale]} />
      <mesh scale={scale} geometry={sphereGeometry} material={baubleMaterial} />
    </RigidBody>
  )
}