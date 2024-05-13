import { useRef, useState, useEffect } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react";
import './home.css'

import HeroAwards from "./HeroAwards";

const words = ['design', 'develop', 'deploy'];

const HeroTitle = () => {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);

    const titleRef = useRef(null);
    const h1Ref = useRef(null);

    useGSAP(() => {
        gsap.fromTo(
            h1Ref.current,
            { opacity: 0, y: 100 },
            {
                opacity: 1,
                y: 0,
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

    useEffect(() => {
        const interval = setInterval(() => {
            gsap.to(titleRef.current, { opacity: 0, clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)', duration: 0.5, onComplete: () => {
                setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
                gsap.to(titleRef.current, { opacity: 1, clipPath:'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', y: 100, rotateZ: '60deg', duration: 0.5 });
            }});
        }, 2000);

        return () => clearInterval(interval);
    }, []);

  return <h1 ref={h1Ref}>We <span ref={titleRef}>{words[currentWordIndex]}</span><br></br> <span id="hero-span">web</span> solutions</h1>;
};

export default function Hero (){
    const pRef = useRef(null);

    useGSAP(() => {
        gsap.fromTo(
            pRef.current,
            { opacity: 0, y: 100 },
            {
                opacity: 1,
                y: 0,
                duration: 2,
                delay: 0.2,
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
        <section className="hero">
            <div className="hero-content">
                <HeroTitle />
                <p ref={pRef}>Unleash the potential of your business with <span id="hero-span-2">expert design</span>, captivating your audience and <span id="hero-span-3">maximizing engagement</span>.</p>
                <HeroAwards />
            </div>
        </section>
    )
}