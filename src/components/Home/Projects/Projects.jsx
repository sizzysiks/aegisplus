import './projects.css'

import Experience from "../../../three/Experience";

export default function Projects ({ isMobile, scrollY }){
    return(
        <div className="projects-canvas">
            <Experience isMobile={isMobile} scrollY={scrollY} />
        </div>
    )
}