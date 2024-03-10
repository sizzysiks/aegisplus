import { useLayoutEffect, useEffect, useRef } from "react"
import { Helmet } from "react-helmet-async"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import './project.css'

import Nav from "../Nav/Nav"
import Sidebar from '../Sidebar/Sidebar'
import ProjectsLink from "./ProjectsLink"
import Footer from '../Footer/Footer'

const Projects = ({ sidebarIsOpen, setSidebarIsOpen, data }) =>{
    // refs
    const titleRef = useRef()
    const subRef = useRef()
    const projectsRef = useRef()
    const overlayRef = useRef()

    // Close sidebar
    useEffect(()=>{
        setSidebarIsOpen(false)
        // eslint-disable-next-line
    },[])

     // Scroll to top
    useLayoutEffect(()=>{
        window.scrollTo({
            top:0,
            left:0,
            behavior:'smooth'
        })
    },[])

    useGSAP(()=>{
        gsap.to(overlayRef.current, {duration:1, scaleX:0, transformOrigin: 'right', ease: "expo.in"})
        gsap.fromTo(titleRef.current, {y: 500}, {delay:1, duration:0.3, y:0, ease: "expo.out"})
        gsap.fromTo(subRef.current, {y: 500}, {delay:1.2, duration:0.3, y:0, ease: "expo.out"})
        gsap.fromTo(projectsRef.current, {y: 500}, {delay:1.4, duration:0.3, y:0, ease: "expo.out"})
    }, { dependencies: [] })
    
    return(
        <div className="projects">
            <Helmet>
                <title>Aegis+ | Our client work</title>
                <meta name='description' content='We are Aegis, a web design studio based in Leicester - We design innovative solutions for your business. Explore our work projects.' />
                <link rel="canonical" href="https://www.aegis.plus/projects" />
                {/* Include Open Graph and Twitter Card meta tags for social media sharing */}
                <meta property="og:title" content="Aegis+ | Our client work" />
                <meta property="og:description" content='We are Aegis, a web design studio based in Leicester - We design innovative solutions for your business. Explore our work projects.' />
                <meta property="og:url" content="https://www.aegis.plus/projects" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="https://www.example.com/images/og-image.jpg" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Aegis+ | Our client work" />
                <meta name="twitter:description" content='We are Aegis, a web design studio based in Leicester - We design innovative solutions for your business. Explore our work projects.' />
                {/* <meta name="twitter:image" content="https://www.example.com/images/twitter-card-image.jpg" /> */}
            </Helmet>
            <div className="projects-overlay" ref={overlayRef}></div>
            <Nav sidebarIsOpen={sidebarIsOpen} setSidebarIsOpen={setSidebarIsOpen} />
            {sidebarIsOpen? <Sidebar /> : ""}
            <div className="projects-content">
                <h1 ref={titleRef} className='h1-pages'>Work</h1>
                <p ref={subRef} className="projects-p">A collection of client work, including full stack web applications, frontent development, web design & 3D design.</p>                
                <div ref={projectsRef} className="projects-links">
                    {data.map( project =>
                        <ProjectsLink key={project.id} project={project} />
                    )}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Projects