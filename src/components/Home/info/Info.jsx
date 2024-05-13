import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import './info.css'

import Button from "../../../common/Button";

import award1 from '../../../assets/awards/aw.webp'
import award2 from '../../../assets/awards/best-ux-green.png'
import award3 from '../../../assets/awards/best-ux-white.png'
import award4 from '../../../assets/awards/best-innovation-purple.png'

export default function Info (){
    const wrappeRef = useRef(null);
    const h1Ref = useRef(null);
    const pRef = useRef(null);
    const btnRef = useRef(null);

    useGSAP(() => {
        gsap.fromTo(
            wrappeRef.current,
            { y: 300 },
            {
                y: 0,
                ease: "expo.out",
                duration: 0.5,
                scrollTrigger: {
                    trigger: wrappeRef.current,
                    start: "top 100%",
                    end: "bottom 0%",
                    toggleActions: "play none play reverse",
                }
            }
        );

        gsap.fromTo(
            h1Ref.current,
            { y: 100, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                ease: "expo.out",
                duration: 0.5,
                scrollTrigger: {
                    trigger: wrappeRef.current,
                    start: "top 100%",
                    end: "bottom 0%",
                    toggleActions: "play none play reverse",
                }
            }
        );

        gsap.fromTo(
            pRef.current,
            { y: 100, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                ease: "expo.out",
                duration: 0.5,
                delay: 0.1,
                scrollTrigger: {
                    trigger: wrappeRef.current,
                    start: "top 100%",
                    end: "bottom 0%",
                    toggleActions: "play none play reverse",
                }
            }
        );

        gsap.fromTo(
            btnRef.current,
            { y: 100, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                ease: "expo.out",
                duration: 0.5,
                delay: 0.2,
                scrollTrigger: {
                    trigger: wrappeRef.current,
                    start: "top 100%",
                    end: "bottom 0%",
                    toggleActions: "play none play reverse",
                }
            }
        );
    }, { dependencies: [] });

    return(
        <div className="info" ref={wrappeRef}>
            <div className="info-content">
                <h2 ref={h1Ref} className="page-type">Helping businesses thrive</h2>
                <small ref={pRef} className="page-text">
                    We specialize in crafting distinctive online identities for businesses, ensuring your brand <span>stands out from the crowd</span>. Say goodbye to cookie-cutter websites with countless online clones.
                </small>

                <Button url="/about" label="About us" />
            
                {/* <div className="info-badges">
                    <div><img src={award1} alt="" /></div>
                    <div><img src={award2} alt="" /></div>
                    <div><img src={award3} alt="" /></div>
                    <div><img src={award4} alt="" /></div>
                </div> */}
            </div>
        </div>
    )
}