export default function LazyVideo ({ src, alt }){
    return(<div className="project-video-wrapper">
        <video src={src} autoPlay={true} loop={true}></video>
    </div>)
}