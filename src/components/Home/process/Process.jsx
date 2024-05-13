import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import './process.css'

import { useRef } from 'react'

export default function Process (){
    const titleRef = useRef(null);
    const textRef = useRef(null);

    useGSAP(() => {
        gsap.fromTo(
            titleRef.current,
            { clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)' },
            {
                clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
                duration: 0.5,
                ease: "expo.out",
                scrollTrigger: {
                    trigger: titleRef.current,
                    start: "top 80%",
                    end: "bottom 0%",
                    // scrub: true,
                    toggleActions: "play none play reverse",
                }
            }
        );
    
        gsap.fromTo(
            textRef.current,
            { clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)' },
            {
                clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
                duration: 0.5,
                ease: "expo.out",
                scrollTrigger: {
                    trigger: titleRef.current,
                    start: "top 80%",
                    end: "bottom 0%",
                    // scrub: true,
                    toggleActions: "play none play reverse",
                }
            }
        );
    }, { dependencies: [] });

    return(
        <div className="process-wrapper">
        <section className="process">
            <div className="process-top">
                <h2 ref={titleRef} className='page-type'>Our process</h2>
                {/* <p ref={textRef}>From initial chat to polished product, we're committed to transparency, creativity, and results. Let's start the journey toward your online success today. Reach out to learn more!</p> */}
            </div>

            <div className="process-steps">
                <ProcessStep 
                    title="Initial" 
                    titleSpan="Chat" 
                    id="process-step-title-1" 
                    text="We'll kick things off with a friendly chat to understand your goals, preferences, and aspirations. This initial conversation sets the stage for our journey together, ensuring we're aligned every step of the way." 
                />
                <ProcessStep 
                    title="Strategy" 
                    titleSpan="Planning" 
                    id="process-step-title-2" 
                    text="Our strategy planning phase is where creativity meets strategy. We'll analyze market trends, user behaviors, and your unique needs to craft a roadmap that paves the way for a stellar online presence." 
                />
                <ProcessStep 
                    title="Design &" 
                    titleSpan="Developement" 
                    id="process-step-title-3" 
                    text="It's time to bring your vision to life. Our design and development phase is where the magic happens. With meticulous attention to detail and a passion for innovation, we'll transform concepts into captivating visuals and seamless functionality." 
                />
            </div>
        </section>
        </div>
    )
}

// eslint-disable-next-line react/prop-types
const ProcessStep = ({ title, titleSpan, id, text }) =>{
    const titleRef = useRef(null);
    const textRef = useRef(null);

    useGSAP(() => {
        gsap.fromTo(
            titleRef.current,
            { clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)' },
            {
                clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
                duration: 0.5,
                ease: "expo.out",
                scrollTrigger: {
                    trigger: titleRef.current,
                    start: "top 80%",
                    end: "bottom 0%",
                    // scrub: true,
                    toggleActions: "play none play reverse",
                }
            }
        );
    
        gsap.fromTo(
            textRef.current,
            { clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)' },
            {
                clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
                duration: 0.5,
                ease: "expo.out",
                scrollTrigger: {
                    trigger: textRef.current,
                    start: "top 80%",
                    end: "bottom 0%",
                    // scrub: true,
                    toggleActions: "play none play reverse",
                }
            }
        );
    }, { dependencies: [] });

    return(
        <div className="process-step">
            <div className="process-step-text">
                <h3 ref={titleRef}>{title} <span id={id}>{titleSpan}</span></h3>
                <p ref={textRef}>{text}</p>
            </div>
        </div>
    )
}