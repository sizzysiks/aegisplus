import { useRef } from "react"
import { Link } from "react-router-dom"
import gsap from "gsap"
import { useGSAP } from "@gsap/react";

import AnimatedText from "../../common/AnimatedText"

import { IoIosArrowForward } from "react-icons/io";
// import { BsChatSquareText } from "react-icons/bs";

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
                <h1 ref={h1Ref} id="hero-title">We Craft <span>Web</span></h1>
                <AnimatedText text="Solutions" />

                <p ref={pRef}>Unleash the potential of your online presence with <span>expert design</span>, captivating your audience and <span>maximizing engagement</span>.</p>
                
                <div>
                    <Link to="/projects" ref={btnRef} className="main-btn">
                        <span className="main-btn-text">View our work</span> 
                        <span className="main-btn-icon"><IoIosArrowForward /></span>
                    </Link>
                    {/* <Link to="#" ref={chatBtnRef} className="hero-chat-btn" onClick={() => window.location.href='mailto:info@aegis.plus'}>
                        <BsChatSquareText />
                    </Link> */}
                </div>
            </div>
        </section>
    )
}