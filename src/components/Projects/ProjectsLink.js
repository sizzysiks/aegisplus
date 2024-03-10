import { Link } from "react-router-dom"

const ProjectsLink = ({ project }) =>{
    return(
        <Link to={`${project.url}`} className="projects-link">
            <span>0{project.id}</span>
            <p>{project.title}</p>
        </Link>
    )
}

export default ProjectsLink