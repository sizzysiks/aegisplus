import { Text } from "@react-three/drei"
import { useRef } from "react"
import { extend } from "@react-three/fiber"

const TextMesh = ({text, position, rotation, size })=>
{
    const materialRef = useRef()

    return(
        <Text 
            color='#010101'
            maxWidth={1}
            textAlign='left'
            fontSize={size}
            // font="./font/bebas-neue-v9-latin-regular.woff"
            outlineWidth='1%'
            outlineColor='#ffffff'
            lineHeight={0.8}
            position={position}
            rotation={rotation}
        >
            {text}
        </Text>
    )
}

export default TextMesh