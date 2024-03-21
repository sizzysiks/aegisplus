import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

import ServiceDetail from "./ServiceDetail";

export default function Service ({ service }){
    // Refs 
    const wrapperRef = useRef(null);
    const textRef = useRef(null);
    const descRef = useRef(null);

    useGSAP(() => {
        gsap.fromTo(
            textRef.current,
            { opacity: 0, y: 100 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "expo.out",
                scrollTrigger: {
                    trigger: wrapperRef.current,
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play none play reverse",
                }
            }
        );

        gsap.fromTo(
            descRef.current,
            { opacity: 0, y: 100 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "expo.out",
                scrollTrigger: {
                    trigger: wrapperRef.current,
                    start: "top 75%",
                    end: "bottom 20%",
                    toggleActions: "play none play reverse",
                }
            }
        );
    }, { dependencies: [] });

    return(
        <div className="service-wrapper" ref={wrapperRef}>
            <div className="service-content">
                <p ref={textRef}>{service.title}</p>
                <small ref={descRef}>{service.desc}</small>
                <div className="service-content-details">
                    {service.details.map( (d,i) => <ServiceDetail key={i} detail={d} wrapperRef={wrapperRef} /> )}
                </div>
            </div>
        </div>
    )
}