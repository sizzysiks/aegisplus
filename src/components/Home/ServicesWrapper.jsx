import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import Services from "../Services/Services"

export default function ServicesWrapper ({ scrollY }){
    const ref = useRef(null);

    // useGSAP(()=>{
    //     if(scrollY > 9){
    //         gsap.to(ref.current, { y: 0, opacity: 1, duration: 1, ease: "expo.out" })
    //     } else{
    //         gsap.to(ref.current, { y: 300, opacity: 1, duration: 1, ease: "expo.out" })
    //     }
    // }, { dependencies: [scrollY] })

    return(
        <div className="services-wrapper" ref={ref}>
            {/* <div className="services-wrapper-intro" style={{ display: 'flex', flexDirection:'column', gap: '2em', marginBottom: '4em' }}>
                <h1>
                    Our Web <span id="info-do">Services</span>
                </h1>
                <p>
                    Explore our tailored solutions designed to redefine your digital journey. From captivating web design to dynamic branding, we craft solutions that drive results.
                </p>
            </div> */}

            <Services />
        </div>
    )
}