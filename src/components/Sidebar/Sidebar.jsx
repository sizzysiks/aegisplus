import { useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import './sidebar.css'

import SidebarLink from './SidebarLink'

import { FaInstagram } from "react-icons/fa";
import awards from '../../assets/awards/aw-black.webp'

const Sidebar = () =>{
    // Refs for links
    const socialsRef = useRef()

    // Animate links on render
    useGSAP(()=>{
        gsap.fromTo(socialsRef.current, {x: window.innerWidth}, {delay:0.12, duration: 1, x:0, ease: "expo.out"})
    }, { dependencies: [] })

    return(
        <div className="sidebar">
            <div className="sidebar-links">
                <SidebarLink route="/" label="Home" duration={0.5} delay={0} />
                <SidebarLink route="/projects" label="Work" duration={1} delay={0.03} />
                <SidebarLink route="/about" label="About" duration={1} delay={0.06} />
                <SidebarLink route="/contact" label="Contact" duration={1} delay={0.09} />
            </div>
            
            <div className='sidebar-socials' id='link-5' ref={socialsRef}>
                <p>82a James Carter Rd, Mildenhall</p>
                <p>+44 7498509537</p>

                <div>
                    <a 
                        className='footer-awards-link' 
                        href="https://www.awwwards.com/aegisplus/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src={awards} alt="awwwards-icon" />
                    </a>
                    <a 
                        className='footer-top-link footer-bottom-link' 
                        href="https://www.instagram.com/aegisimmersive/" 
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FaInstagram /> 
                    </a>
                </div>

                <Link to="#" className='sidebar-socials-link' onClick={() => window.location.href='mailto:info@aegis.plus'}>
                    info@aegis.plus
                </Link>
            </div>
        </div>
    )
}

export default Sidebar