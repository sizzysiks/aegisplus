import './projects.css'

import ProjectsScene from "../../../three/ProjectsScene";

export default function Projects ({ isMobile, scrollY }){
    return(
        <div className="projects-canvas">
            <ProjectsScene isMobile={isMobile} scrollY={scrollY} />
        </div>
    )
}