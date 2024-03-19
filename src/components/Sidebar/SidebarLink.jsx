import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";

import { MdLastPage } from "react-icons/md";

export default function SidebarLink ({ route, label, duration, delay }){
    // Refs for links
    const ref = useRef(null);
  
    // Animate links on render
    useGSAP(()=>{
        gsap.fromTo(ref.current, {x: window.innerWidth}, {duration: duration, delay: delay, x:0, ease: "expo.out"})
    }, { dependencies: [] })

    return(
        <Link to={route} className='sidebar-link' ref={ref}>
            {window.location.pathname === route? <span><MdLastPage /></span>: ""}
            <p className='sidebar-link-p'>{label}</p>
            {window.location.pathname === route? <span>👌</span>: ""}
        </Link>
    )
}