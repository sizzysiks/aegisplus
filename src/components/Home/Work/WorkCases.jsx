import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

import case4 from '../../../assets/case-studies/juubix-case-study.webp'
import antino from '../../../assets/case-studies/antino-case-study.mp4'
import link from '../../../assets/case-studies/linkeby-case-study.mp4'
import luminae from '../../../assets/case-studies/luminae-case-study.webp'

import { IoArrowForwardSharp } from "react-icons/io5";
import ColouredSpan from './ColouredSpan'
import WorkCaseTitle from './WorkCaseTitle'

export default function WorkCases (){
    const navigate = useNavigate();

    const imgRef1 = useRef(null);
    const imgRef2 = useRef(null);
    const imgRef3 = useRef(null);
    const imgRef4 = useRef(null);

    useGSAP(() => {
        gsap.fromTo(
            imgRef1.current,
            { rotateZ: '2deg', scaleX: 0.9 },
            {
                rotateZ: '0deg',
                scaleX: 1,
                duration: 0.5,
                scrollTrigger: {
                    trigger: imgRef1.current,
                    start: "top 100%",
                    end: "bottom 0%",
                    toggleActions: "play none play reverse",
                }
            }
        );

        gsap.fromTo(
            imgRef2.current,
            { rotateZ: '2deg', scaleX: 0.9 },
            {
                rotateZ: '0deg',
                scaleX: 1,
                duration: 0.5,
                scrollTrigger: {
                    trigger: imgRef2.current,
                    start: "top 100%",
                    end: "bottom 0%",
                    toggleActions: "play none play reverse",
                }
            }
        );

        gsap.fromTo(
            imgRef3.current,
            { rotateZ: '-2deg', scaleX: 0.9 },
            {
                rotateZ: '0deg',
                scaleX: 1,
                duration: 0.5,
                scrollTrigger: {
                    trigger: imgRef3.current,
                    start: "top 100%",
                    end: "bottom 0%",
                    // scrub: true,
                    toggleActions: "play none play reverse",
                }
            }
        );

        gsap.fromTo(
            imgRef4.current,
            { rotateZ: '-2deg', scaleX: 0.9 },
            {
                rotateZ: '0deg',
                scaleX: 1,
                duration: 0.5,
                scrollTrigger: {
                    trigger: imgRef4.current,
                    start: "top 100%",
                    end: "bottom 0%",
                    toggleActions: "play none play reverse",
                }
            }
        );
    }, { dependencies: [] });

    const handleClick = (id) =>{
        navigate(`/projects/${id}`)                
    }

    return(
        <div className="work-cases">
                <div className="work-cases-row">
                    <div className="work-case" id="work-case-3" ref={imgRef3} onClick={()=>{ handleClick("antino") }}>
                        <div className="work-case-img">
                            <video autoPlay muted loop id='work-case-img-3' alt="web-design-case-study-3">
                                <source src={antino} type="video/mp4" />
                            </video>
                        </div>

                        <div className="work-case-content">
                            <div>
                                <WorkCaseTitle text="Antino Portfolio" />
                                <div className="tags">
                                    <ColouredSpan text="Web development" />
                                    <span>UI/UX</span>
                                    <span>3d</span>
                                    <span>🎗️</span>
                                </div>
                            </div>

                            <span className="work-case-btn"><IoArrowForwardSharp /></span>
                        </div>
                    </div>

                    <div className="work-case" id="work-case-1" ref={imgRef1} onClick={()=>{ handleClick("luminae") }}>
                        <div className="work-case-img">
                            <img src={luminae} alt="web-design-case-study-1" id='work-case-img-1' />
                            {/* <video autoPlay muted loop id='work-case-img-1' alt="web-design-case-study-1">
                                <source src={luminae} type="video/mp4" />
                            </video> */}
                        </div>

                        <div className="work-case-content">
                            <div>
                                <WorkCaseTitle text="Luminae Apparel" />
                                <div className="tags">
                                    <ColouredSpan text="Web development" />
                                    <span>UI/UX</span>
                                    <span>E-commerce</span>
                                </div>
                            </div>
                        
                            <span className="work-case-btn"><IoArrowForwardSharp /></span>
                        </div>
                    </div>
                </div>

                <div className="work-cases-row">
                    <div className="work-case" id="work-case-4" ref={imgRef4} onClick={()=>{ handleClick("juubix") }}>
                        <div className="work-case-img">
                            <img src={case4} id='work-case-img-4' alt="web-design-case-study-4" />
                        </div>

                        <div className="work-case-content">
                            <div>
                                <WorkCaseTitle text="Juubix" />
                                <div className="tags">
                                    <ColouredSpan text="Web development" />
                                    <span>Animations</span>
                                    <span>3d</span>
                                </div>
                            </div>

                            <span className="work-case-btn"><IoArrowForwardSharp /></span>
                        </div>
                    </div>

                    <div className="work-case" id="work-case-2" ref={imgRef2} onClick={()=>{ handleClick("owners") }}>
                        <div className="work-case-img" id='work-case-img-2'>
                            <video autoPlay muted loop alt="web-design-case-study-3">
                                <source src={link} type="video/mp4" />
                            </video>
                        </div>

                        <div className="work-case-content">
                            <div>
                                <WorkCaseTitle text="Linkeby" />
                                <div className="tags">
                                    <ColouredSpan text="Fullstack development" />
                                    <span>UI/UX</span>
                                    <span>Branding</span>
                                </div>
                            </div>

                            <span className="work-case-btn"><IoArrowForwardSharp /></span>
                        </div>
                    </div>
                </div>
            </div>
    )
}