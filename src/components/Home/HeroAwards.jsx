import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import aw from '../../assets/awards/aw.webp'

export default function HeroAwards (){
    const textRef = useRef(null);

    useGSAP(() => {
        gsap.fromTo(
            textRef.current,
            { opacity: 0, x: 0 },
            {
                opacity: 1,
                x: -65,
                delay: 0.4,
                duration: 2,
                ease: "expo.out",
                scrollTrigger: {
                    trigger: ".hero",
                    start: "top 50%",
                    end: "bottom 20%",
                    toggleActions: "play reverse play reverse",
                }
            }
        );
    }, { dependencies: [] });

    return(
        <div className="awards">
            <div className="awards-img">
                <img src={aw} alt="awwwards" width='64' height='64' title="Awwwards badge" loading="eager" />
            </div>
            <AwardIcon id="awards-div-1" delay={0} startingX={25} finalX={-25} />
            <AwardIcon id="awards-div-2" delay={0.2} startingX={0} finalX={-50} />
            <AwardIcon id="awards-div-3" delay={0.4} startingX={-25} finalX={-75} />

            <small ref={textRef}>Globally recognized</small>
         </div>      
    )
}

// eslint-disable-next-line react/prop-types
const AwardIcon = ({ id, delay, startingX, finalX }) =>{
    const iconRef = useRef(null);

    useGSAP(() => {
        gsap.fromTo(
            iconRef.current,
            { opacity: 0, x: startingX },
            {
                opacity: 1,
                x: finalX,
                delay: delay,
                duration: 2,
                ease: "expo.out",
                scrollTrigger: {
                    trigger: ".hero",
                    start: "top 50%",
                    end: "bottom 20%",
                    toggleActions: "play reverse play reverse",
                }
            }
        );
    }, { dependencies: [] });

    return(
        <div className="awards-div" id={id} ref={iconRef}></div>
    )
}