import { Link } from "react-router-dom"

export default function NotFound (){
    return(
        <div className="not-found">
            <h1 className="page-type">Ooops, this page doesn't exist ☹️</h1>
            <p>Navigate back to safety using the links above, or feel free to contact us so we can help guide you back to the right path.</p>
            <span>Let's go back <Link to="/" className="not-found-link">home</Link></span>
        </div>
    )
}