import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Faq ({ title, text, id, activeFaq, setActiveFaq }){
    const ref = useRef(null);

    useGSAP(() => {
        gsap.fromTo(
            ref.current,
            { y: 20, scaleX: 0.95 },
            {
                y: 0,
                scaleX: 1,
                duration: 1,
                ease: "expo.out",
                scrollTrigger: {
                    trigger: ref.current,
                    start: "top 80%",
                    end: "bottom 0%",
                    toggleActions: "play none play reverse",
                }
            }
        );
    }, { dependencies: [] });

    return(
        <div ref={ref} className={`${activeFaq === id? "faq-active": "faq"}`} onClick={()=>{ setActiveFaq(id) }}>
            <span>
                <div className='plus-line'></div>
                <div className={`${activeFaq === id? "plus-line": "plus-line-hidden"}`}></div>
            </span>
            <div>
                <p>{title}</p>
                {activeFaq === id? 
                <small>{text}</small>
                : ""}
            </div>
        </div>
    )
}