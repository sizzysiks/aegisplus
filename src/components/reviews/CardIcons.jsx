import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { AiFillLike } from "react-icons/ai";
import { IoChatbubbleEllipses } from "react-icons/io5";
import { IoSendOutline } from "react-icons/io5";

export default function CardIcons (){
    const iconRef = useRef(null);
    const iconRef2 = useRef(null);
    const iconRef3 = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({ repeat: -1, yoyo: true });
        const tl2 = gsap.timeline({ repeat: -1, yoyo: true });
        const tl3 = gsap.timeline({ repeat: -1, yoyo: true });

        tl.to(iconRef.current, {
            duration: 1,
            y: -5, // Move slightly up
            rotation: 15, // Rotate a little
            ease: 'power1.inOut', // Easing function
        });

        tl2.to(iconRef2.current, {
            duration: 1,
            y: -5, // Move slightly up
            delay: 0.1,
            ease: 'power1.inOut', // Easing function
        });

        tl3.to(iconRef3.current, {
            duration: 1,
            x: 5, // Move slightly up
            delay: 0.2,
            ease: 'power1.inOut', // Easing function
        });
    }, { dependencies: [] });

    return(
        <div className="card-icons">
            <span ref={iconRef} style={{ color: '#FFDD00' }}><AiFillLike /></span>
            <span ref={iconRef2} ><IoChatbubbleEllipses /></span>
            <span ref={iconRef3}><IoSendOutline /></span>
       </div>
    )
}