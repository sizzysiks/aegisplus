import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { IoArrowForwardSharp } from "react-icons/io5";

export default function HomeServiceLink ({ title, explanation }){
    const navigate = useNavigate();

    const overlayRef = useRef(null);
    const linkRef = useRef(null);


    const handleClick = () =>{
        navigate("/about")
    }

    const handleMouseEnter = () =>{
        gsap.to(overlayRef.current,  { duration: 0.3, scaleX: 1, opacity: 1, ease: "expo.out" })
    }

    const handleMouseLeave = () =>{
        gsap.to(overlayRef.current,  { duration: 0.3, scaleX: 0, opacity: 0, ease: "expo.in" })
    }

    useGSAP(() => {
        gsap.fromTo(
            linkRef.current,
            { opacity: 0 },
            {
                opacity: 1,
                duration: 1,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: linkRef.current,
                    start: "top bottom",
                    end: "bottom 0%",
                    toggleActions: "play none play reverse",
                }
            }
        );
    }, { dependencies: [] });

    return(
        <div 
            className="home-service-link" 
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
            ref={linkRef}
        >
            <div className="home-service-link-content">
                <div>
                    <p className="home-service-link-p">{title}</p>
                    <small className="home-service-link-small">{explanation}</small>
                </div>
    
                <span className="home-service-link-btn"><IoArrowForwardSharp /></span>
            </div>
            <span className="home-service-link-overlay" ref={overlayRef}></span>
        </div>
    )
}