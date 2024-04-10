import { useRef, useState, useEffect } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react";

import aw from '../../assets/aw.webp'

const words = ['design', 'develop', 'deploy'];

const HeroTitle = () => {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const titleRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            gsap.to(titleRef.current, { opacity: 0, clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)', duration: 0.5, onComplete: () => {
                setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
                gsap.to(titleRef.current, { opacity: 1, clipPath:'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', y: 100, rotateZ: '60deg', duration: 0.5 });
            }});
        }, 2000);

        return () => clearInterval(interval);
    }, []);

  return <h1>We <span ref={titleRef}>{words[currentWordIndex]}</span><br></br>web solutions</h1>;
};

export default function Hero (){
    const h1Ref = useRef(null);
    const pRef = useRef(null);
    const btnRef = useRef(null);
    // const chatBtnRef = useRef(null);

    useGSAP(() => {
        gsap.fromTo(
            h1Ref.current,
            { opacity: 0, y: 100 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "expo.out",
                scrollTrigger: {
                    trigger: ".hero",
                    start: "top 50%",
                    end: "bottom 20%",
                    toggleActions: "play reverse play reverse",
                }
            }
        );
        
        gsap.fromTo(
            pRef.current,
            { opacity: 0, y: 100 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "expo.out",
                scrollTrigger: {
                    trigger: ".hero",
                    start: "top 50%",
                    end: "bottom 20%",
                    toggleActions: "play reverse play reverse",
                }
            }
        );

        gsap.fromTo(
            btnRef.current,
            { opacity: 0, y: 100 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "expo.out",
                scrollTrigger: {
                    trigger: ".hero",
                    start: "top 50%",
                    end: "bottom 20%",
                    toggleActions: "play reverse play reverse",
                }
            }
        );
    }, { dependencies: [] });

    return(
        <section className="hero">
            <div className="hero-content">
                {/* <h1 ref={h1Ref} id="hero-title">Elevate your</h1> */}
                <HeroTitle />
                {/* <div className="hero-content-title">
                    <h1>online</h1>
                    <AnimatedText text="Presence" />
                </div> */}
                
                <p ref={pRef}>Unleash the potential of your business with <span id="hero-span-2">expert design</span>, captivating your audience and <span id="hero-span-3">maximizing engagement</span>.</p>
                
                <div>
                    {/* <Link to="/projects" ref={btnRef} className="main-btn">
                        <span className="main-btn-text">View our work</span> 
                        <span className="main-btn-icon"><IoIosArrowForward /></span>
                    </Link> */}
                </div>

                <div className="awards">
                    <div className="awards-img"><img src={aw} alt="awwwards" /></div>
                    <div className="awards-div" id="awards-div-1"></div>
                    <div className="awards-div" id="awards-div-2"></div>
                    <div className="awards-div" id="awards-div-3"></div>
                    <small>Globally recognized</small>
                </div>
            </div>
        </section>
    )
}