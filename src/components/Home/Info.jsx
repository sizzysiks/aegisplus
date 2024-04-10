import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import Button from "../../common/Button";

export default function Info ({ scrollY }){
    const wrappeRef = useRef(null);
    const h1Ref = useRef(null);
    const pRef = useRef(null);
    const btnRef = useRef(null);

    useGSAP(() => {
        if(scrollY > 0.6 && scrollY < 2){
            gsap.to(wrappeRef.current, { y: 0, opacity: 1, duration: 1, ease: "expo.out" })
            gsap.to(h1Ref.current, { y: 0, opacity: 1, duration: 0.5, ease: "expo.out" })
            gsap.to(pRef.current, { y: 0, opacity: 1, duration: 0.5, delay: 0.1, ease: "expo.out" })
            gsap.to(btnRef.current, { y: 0, opacity: 1, duration: 0.5, delay: 0.1, ease: "bounce.out" })
        } else{
            gsap.to(wrappeRef.current, { y: 300, opacity: 0, duration: 1, ease: "expo.out" })
            gsap.to(h1Ref.current, { y: 100, opacity: 0, duration: 0.5, ease: "expo.out" })
            gsap.to(pRef.current, { y: 100, opacity: 0, duration: 0.5, delay: 0.1, ease: "expo.out" })
            gsap.to(btnRef.current, { y: 100, opacity: 0, duration: 0.5, delay: 0.1, ease: "bounce.out" })
        }      
    }, { dependencies: [scrollY] });

    return(
        <div className="info" ref={wrappeRef}>
            <h1 className="page-type">Get to know us</h1>
            <h1 
                ref={h1Ref} 
                className="secondaty-titles"
            >
                Welcome to <span id="info-do">Aegis,</span> where<br></br> digital dreams take flight✈️
            </h1>
            <p ref={pRef}>
                We specialize in crafting distinctive online identities for businesses, ensuring your brand <span>stands out from the crowd</span>. Say goodbye to cookie-cutter websites with countless online duplicates.
            </p>

            <Button url="/about" label="About us" />
        </div>
    )
}