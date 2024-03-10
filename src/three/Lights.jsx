const Lights = () =>{
    return(
        <>
            <ambientLight intensity={1} />
            <spotLight position={[20, 20, 25]} penumbra={1} angle={0.2} color="white" shadow-mapSize={[512, 512]} />
            <directionalLight position={[0, 5, -4]} intensity={4} />
        </>
    )
}

export default Lights