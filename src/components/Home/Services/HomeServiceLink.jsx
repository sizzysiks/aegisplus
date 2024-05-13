import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { IoArrowForwardSharp } from "react-icons/io5";

// eslint-disable-next-line react/prop-types
export default function HomeServiceLink ({ title, explanation, color }){
    const navigate = useNavigate();

    const linkRef = useRef(null);
    const imgRef = useRef(null);
    const titleRef = useRef(null);
    const textRef = useRef(null);


    const handleClick = () =>{
        navigate("/about")
    }

    useGSAP(() => {
            gsap.fromTo(
                titleRef.current,
                { clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)' },
                {
                    clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
                    duration: 0.5,
                    ease: "expo.out",
                    scrollTrigger: {
                        trigger: linkRef.current,
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
                        trigger: linkRef.current,
                        start: "top 80%",
                        end: "bottom 0%",
                        // scrub: true,
                        toggleActions: "play none play reverse",
                    }
                }
            );

        gsap.fromTo(
            imgRef.current,
            { clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)' },
                {
                    clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
                    duration: 0.5,
                    ease: "expo.out",
                    scrollTrigger: {
                        trigger: linkRef.current,
                        start: "top 80%",
                        end: "bottom 0%",
                        // scrub: true,
                        toggleActions: "play none play reverse",
                    }
                }
        );
    }, { dependencies: [] });

    return(
        <div 
            className="home-service-link" 
            onClick={handleClick}
            ref={linkRef}
            // style={{ background: color }}
        >
            <div className="home-service-link-content">
                <div>
                    <p className="home-service-link-p" ref={titleRef}>{title}</p>
                    <small className="home-service-link-small" ref={textRef}>{explanation}</small>
                </div>
    
                <span className="home-service-link-btn"><IoArrowForwardSharp /></span>
            </div>

            {/* <div className="home-service-link-img" ref={imgRef}>
                <img src={img} alt="web-design-service" width='1920' height='1080' title="Aegis Plus web design services" loading="lazy" />
            </div> */}
        </div>
    )
}