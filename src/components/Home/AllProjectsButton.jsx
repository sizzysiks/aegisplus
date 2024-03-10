import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import Button from "../../common/Button"

export default function AllProjectsButton (){
    const btnRef = useRef(null);

    useGSAP(() => {
        gsap.fromTo(
            btnRef.current,
            { opacity: 1, y: 100 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "expo.out",
                scrollTrigger: {
                    trigger: ".view-work",
                    start: "top 50%",
                    end: "bottom 20%",
                    toggleActions: "play reverse play reverse",
                    // markers: true // For debugging, can be removed
                }
            }
        );
    }, { dependencies: [] });

    return(
        <div className="view-work" ref={btnRef}>
            <Button url="/projects" label="View our work" />
        </div>
    )
}