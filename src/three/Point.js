const Point = ({position}) =>
{
    return(
        <mesh position={[position]}>
            <sphereGeometry args={[0.5,16,16]} />
            <meshBasicMaterial />
        </mesh>
    )
}

export default Point