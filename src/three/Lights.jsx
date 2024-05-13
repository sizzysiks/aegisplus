const Lights = () =>{
    let intensity = 1

    return(
        <>
            <directionalLight position={[-2, 1, 3]} intensity={intensity} color='#ffffff' shadow-mapSize={[1024, 1024]} />
            <ambientLight intensity={0.5} color= "#ffffff" />
        </>
    )
}

export default Lights