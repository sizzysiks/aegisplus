export default function Background (){    
    return(
        <mesh receiveShadow>
            <planeGeometry args={[20, 20, 1]} position={[0, 0, -10]} />
            <meshBasicMaterial color="#fcfcfc" />
        </mesh>
    )
}