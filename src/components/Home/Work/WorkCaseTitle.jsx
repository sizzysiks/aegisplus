import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function WorkCaseTitle ({ text }){
    const titleRef = useRef(null);

    useGSAP(() => {
        gsap.fromTo(
            titleRef.current,
            { opacity: 0, y: 50 },
            {
                opacity: 1, y: 0 ,
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
        <h2 ref={titleRef}>{text}</h2>
    )
}