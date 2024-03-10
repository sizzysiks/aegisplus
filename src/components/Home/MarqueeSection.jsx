import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import Marquee from "react-fast-marquee";

export default function MarqueeSection ({ scrollY }){
    const wrapperRef = useRef(null);
    const overlayYellowRef = useRef(null);

    // useGSAP(()=>{
    //     if(scrollY > 8.5 && scrollY){
    //         gsap.to(wrapperRef.current, { y: 0, opacity: 1, duration: 1, ease: "expo.out" })
    //         gsap.to(overlayYellowRef.current, { scaleY: 0.1, opacity: 1, duration: 1, delay: 0.1, ease: "expo.out" })
    //     } else{
    //         gsap.to(wrapperRef.current, { y: 300, opacity: 1, duration: 1, ease: "expo.out" })
    //         gsap.to(overlayYellowRef.current, { scaleY: 1, opacity: 1, duration: 1, delay: 0.1, ease: "expo.out" })
    //     }
    // }, { dependencies: [scrollY] })

    return(
        <div className="marquee-wrapper" ref={wrapperRef}>
            <Marquee className="marquee">
                <span>JUUBIX</span>
                <span>ANTINO</span>
                <span>LINKEBY</span>
            </Marquee>
        </div>
    )
}