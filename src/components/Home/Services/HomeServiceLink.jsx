import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";

import { IoArrowForwardSharp } from "react-icons/io5";

export default function HomeServiceLink ({ title }){
    const navigate = useNavigate();

    const overlayRef = useRef(null);

    const handleClick = () =>{
        navigate("/about")
    }

    const handleMouseEnter = () =>{
        gsap.to(overlayRef.current,  { duration: 0.3, scaleX: 1, opacity: 1, ease: "expo.out" })
    }

    const handleMouseLeave = () =>{
        gsap.to(overlayRef.current,  { duration: 0.3, scaleX: 0, opacity: 0, ease: "expo.in" })
    }

    return(
        <div 
            className="home-service-link" 
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
        >
            <div className="home-service-link-content">
                <p className="home-service-link-p">{title}</p>
                <span className="home-service-link-btn"><IoArrowForwardSharp /></span>
            </div>
            <span className="home-service-link-overlay" ref={overlayRef}></span>
        </div>
    )
}