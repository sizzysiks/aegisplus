import { useGLTF } from "@react-three/drei"
import { useEffect, useRef } from "react"

const Model = ({ position }) =>{   
    const ref = useRef()

    const { scene } = useGLTF('./resources/cube.glb')

    console.log(scene.children[0].children[0].children[0].children[0].children[0].geometry)

    return(
        <primitive ref={ref} object={scene} position={position} />
    )
}

export default Model

useGLTF.preload('./resources/cube.glb')