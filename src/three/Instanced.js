import { extend, useFrame, useLoader } from "@react-three/fiber"
import { useGLTF } from "@react-three/drei"
import { useLayoutEffect, useRef } from "react"
import * as THREE from 'three'
import { Object3D, TextureLoader } from 'three'

import { ImageShaderMaterial } from './shaders/ImageShaderMaterial'
extend({ImageShaderMaterial: ImageShaderMaterial})

// Create an object3d which acts similar to a group
const dummy = new Object3D()

const Instanced = ({ meshCount = 10 * 10}) =>{
    // Refs
    const ref = useRef()
    const materialRef = useRef()

    // Load model and take geometry to use in instanced mesh
    const { scene } = useGLTF('./resources/cube.glb')
    const geometry = scene.children[0].children[0].children[0].children[0].children[0].geometry

    // Textures
    const matcapTexture = useLoader(TextureLoader, './resources/white.jpg')
    const scanTexture = useLoader(TextureLoader, './resources/scan.png')

    // Animate
    useFrame(({clock})=>{
        materialRef.current.uTime = clock.elapsedTime * 0.5
    })

    // Create the matrices
    useLayoutEffect(()=>{
        let index = 0

        // Grid variables
        const cubeSize = 1
        const gapSize = 0.8; // Set the size of the gap between cubes
        const columns = 4 // Set the number of columns in the grid
        const rows = 4 // Set the number of rows in the grid

        // Buffer variables
        const randoms = new Float32Array(meshCount * 3)
        
        for(let i=0; i<rows; i++){
            for(let j=0; j<columns; j++){
                // Create randoms array
                randoms[index] = Math.random()

                // create the instance matrix
                dummy.position.set((i - rows / 2) * (cubeSize  + gapSize), (j - columns / 2) * (cubeSize  + gapSize), 0)
                dummy.updateMatrix()
                ref.current.setMatrixAt(index++, dummy.matrix)
                }
        }
        ref.current.instanceMatrix.needsUpdate = true

        // Pass the random attribute in our instanced mesh
        // ref.current.geometry.setAttribute('aRandoms', new THREE.InstancedBufferAttribute(randoms, 1))
    }, [scene])

    return(
        <instancedMesh ref={ref} args={[ null, null, meshCount]} position={[2.5, 0, 1]} rotation={[0, 0, 0]} geometry={geometry}>
            <meshStandardMaterial color="#ffffff" ref={materialRef} />
        </instancedMesh>
    )
}

export default Instanced