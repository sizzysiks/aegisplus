import { useState } from "react";
import './projects.css'

import ProjectsScene from "../../../three/ProjectsScene";

export default function Projects ({ isMobile, scrollY }){
    const [isFixed, setIsFixed] = useState(false);

    return(
        <div className={`${isFixed? "projects-canvas-fixed": "projects-canvas"}`}>
            <ProjectsScene isMobile={isMobile} scrollY={scrollY} />
            {/* <h3>OUR WORK</h3> */}
        </div>
    )
}