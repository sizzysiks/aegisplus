import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { IoArrowForwardSharp } from "react-icons/io5";

export default function HomeServiceLink ({ title, explanation, img, color }){
    const navigate = useNavigate();

    const overlayRef = useRef(null);
    const linkRef = useRef(null);
    const imgRef = useRef(null);


    const handleClick = () =>{
        navigate("/about")
    }

    useGSAP(() => {
        gsap.fromTo(
            imgRef.current,
            { clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)' },
            {
                clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
                duration: 1,
                ease: "expo.out",
                scrollTrigger: {
                    trigger: imgRef.current,
                    start: "top 100%",
                    end: "bottom 0%",
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
            style={{ background: color }}
        >
            <div className="home-service-link-border" style={{ background: color }}></div>

            <div className="home-service-link-content">
                <div>
                    <p className="home-service-link-p">{title}</p>
                    <small className="home-service-link-small">{explanation}</small>
                </div>
    
                <span className="home-service-link-btn"><IoArrowForwardSharp /></span>
            </div>

            <div className="home-service-link-img" ref={imgRef}>
                <img src={img} alt="" />
            </div>

            <span className="home-service-link-overlay" ref={overlayRef}></span>
        </div>
    )
}