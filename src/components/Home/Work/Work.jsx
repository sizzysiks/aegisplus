import './work.css'

import AllProjectsButton from '../AllProjectsButton'
import WorkCases from './WorkCases'

export default function Work (){
    return(
        <div>
            <div className="work-top">
                <h1 className='page-type'>Our case studies</h1>
                <p>Each project is a testament to our commitment to excellence, creativity, and client satisfaction. Explore our case studies below to discover how we transformed ideas into tangible digital realities.</p>
            </div>
            <WorkCases />
            <AllProjectsButton />
        </div>
    )
}