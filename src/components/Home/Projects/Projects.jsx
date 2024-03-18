import { useEffect, useState } from "react";
import './projects.css'

import ProjectsScene from "../../../three/ProjectsScene";

export default function Projects ({ isMobile, scrollY }){
    const [isFixed, setIsFixed] = useState(false);

    useEffect(() => {
        const buffer = scrollY * 0.05; // 20% buffer zone

        if(scrollY > 2 - buffer && scrollY < 7 + buffer){
            setIsFixed(true)
        } else {
            setIsFixed(false)
        }
    }, [scrollY]);

    return(
        <div className={`${isFixed ? 'projects-canvas-fixed' : 'projects-canvas'}`}>
            <ProjectsScene isMobile={isMobile} scrollY={scrollY} />
            {/* <h3>OUR WORK</h3> */}
        </div>
    )
}