import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { FaRegCheckCircle } from "react-icons/fa";

export default function ServiceDetail ({ detail, wrapperRef }){
    const itemRef = useRef(null);

    useGSAP(() => {
        gsap.fromTo(
            itemRef.current,
            { opacity: 0, y: 100 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "expo.out",
                scrollTrigger: {
                    trigger: wrapperRef.current,
                    start: "top 60%",
                    end: "bottom 20%",
                    toggleActions: "play reverse play reverse",
                }
            }
        );
    }, { dependencies: [] });

    return(
       <li ref={itemRef}><FaRegCheckCircle className="service-icon" /> {detail}</li>
    )
}