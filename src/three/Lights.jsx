const Lights = () =>{
    return(
        <>
            <ambientLight intensity={1} />
            {/* <spotLight position={[2, 2, 5]} penumbra={1} angle={0.2} color="white" shadow-mapSize={[512, 512]} /> */}
            <directionalLight position={[-1, 1, 5]} intensity={4} color='white' shadow-mapSize={[512, 512]} />
        </>
    )
}

export default Lights