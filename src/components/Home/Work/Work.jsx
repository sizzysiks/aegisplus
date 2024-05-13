import './work.css'

import AllProjectsButton from '../AllProjectsButton'
import WorkCases from './WorkCases'

export default function Work (){
    return(
        <div className='work-section'>
            <div className="work-top">
                {/* <span className='section-label'>Work</span> */}
                <h2 className='page-type'>Featured work</h2>
                <p>Each project is a testament to our commitment to excellence, creativity, and client satisfaction.</p>
            </div>
            <WorkCases />
            <AllProjectsButton />
        </div>
    )
}