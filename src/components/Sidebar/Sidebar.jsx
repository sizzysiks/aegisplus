import { useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import './sidebar.css'


const Sidebar = () =>{
    // Refs for links
    const ref1 = useRef()
    const ref2 = useRef()
    const ref3 = useRef()
    const ref4 = useRef()
    const ref5 = useRef()

    // Animate links on render
    useGSAP(()=>{
        gsap.fromTo(ref1.current, {x: window.innerWidth}, {duration: 0.5, x:0, ease: "expo.out"})
        gsap.fromTo(ref2.current, {x: window.innerWidth}, {delay:0.03, duration: 1, x:0, ease: "expo.out"})
        gsap.fromTo(ref3.current, {x: window.innerWidth}, {delay:0.06, duration: 1, x:0, ease: "expo.out"})
        gsap.fromTo(ref4.current, {x: window.innerWidth}, {delay:0.09, duration: 1, x:0, ease: "expo.out"})
        gsap.fromTo(ref5.current, {x: window.innerWidth}, {delay:0.12, duration: 1, x:0, ease: "expo.out"})
    }, { dependencies: [] })

    return(
        <div className="sidebar">
            <Link to="/contact" className='sidebar-link' id='link-2' ref={ref2}><p className='sidebar-link-p'>Contact</p></Link>
            <Link to="/about" className='sidebar-link' id='link-3' ref={ref3}><p className='sidebar-link-p'>About</p></Link>
            <Link to="/projects" className='sidebar-link' id='link-4' ref={ref4}><p className='sidebar-link-p'>Work</p></Link>
            
            <div className='sidebar-socials' id='link-5' ref={ref5}>
                <p>+44 7498509537</p>
                <p>info@aegis.plus</p>
                <div>
                    <a 
                        className='footer-top-link footer-bottom-link' 
                        href="https://www.instagram.com/aegisimmersive/" 
                        target="_blank"
                        rel="noreferrer"
                    >
                        INSTAGRAM
                    </a>
                    <Link to="#" className='footer-top-link'>X</Link>
                </div>
            </div>
        </div>
    )
}

export default Sidebar