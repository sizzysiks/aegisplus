import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function FaqDecoration (){
    const iconRef = useRef(null);
    const iconRef2 = useRef(null);
    const iconRef3 = useRef(null);

    useGSAP(() => {
        gsap.fromTo(iconRef.current, { y: -20, x: -20 }, { y: -5, x: -5, opacity: 1, duration: 1, ease: 'power1.inOut' })
        gsap.fromTo(iconRef2.current, { y: -20, x: 20 }, { y: -5, x: -5, opacity: 1, duration: 1, ease: 'power1.inOut' })
        gsap.fromTo(iconRef3.current, { y: 20, x: 20 }, { y: -5, x: -5, opacity: 1, duration: 1, ease: 'power1.inOut' })
    }, { dependencies: [] });

    return(
        <div className="faq-decoration">
            <div className="circle" ref={iconRef}></div>
            <div className="triangle" ref={iconRef2}></div>
            <div className="square" ref={iconRef3}></div>
        </div>
    )
}