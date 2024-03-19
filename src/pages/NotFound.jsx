import { Link } from "react-router-dom"

export default function NotFound (){
    return(
        <div className="not-found">
            <h1>Ooops, this page doesn't exist</h1>
            <p>Let's go back <Link to="/">home</Link></p>
        </div>
    )
}