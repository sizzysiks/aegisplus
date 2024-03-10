import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import { IoIosArrowForward } from "react-icons/io";

export default function NextProjectButton ({ currentProject, data }){
    const navigate = useNavigate();

    const handleNextButton = () =>{
        if(Number(currentProject.id) < 9){
            const nextId = Number(currentProject.id) + 1;

            const nextProject = data.find( project => project.id === nextId );

            navigate(`/projects/${nextProject.url.toLowerCase()}`);
        } 
    }

    return(
        <div className="project-buttons">
            {
                Number(currentProject.id) === 9? 
                    <Link className="btn" to="/projects"><span className="btn-text">All work</span></Link>
                    : <button className="btn" onClick={handleNextButton}> 
                        <span className="btn-text">Next project</span>
                        <span className="btn-icon"><IoIosArrowForward /></span>
                    </button>
            }
        </div>
    )
}