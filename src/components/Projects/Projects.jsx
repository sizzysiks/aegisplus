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
                <title>Aegis Plus - Our work</title>
                <meta name='description' content="Explore Aegis Plus's diverse portfolio of web design projects. From sleek corporate websites to engaging e-commerce platforms." />
                <link rel="canonical" href="https://aegis.plus/projects" />
                <meta property="og:title" content="Aegis Plus - Our work" />
                <meta property="og:description" content="Explore Aegis Plus's diverse portfolio of web design projects. From sleek corporate websites to engaging e-commerce platforms." />
                <meta property="og:url" content="https://aegis.plus/projects" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="https://aegis.plus/favicon.ico" />
                <meta name="twitter:title" content="Aegis Plus - Our work" />
                <meta name="twitter:description" content="Explore Aegis Plus's diverse portfolio of web design projects. From sleek corporate websites to engaging e-commerce platforms." />
            </Helmet>
            
            <div className="projects-overlay" ref={overlayRef}></div>
            <Nav sidebarIsOpen={sidebarIsOpen} setSidebarIsOpen={setSidebarIsOpen} />
            {sidebarIsOpen? <Sidebar /> : ""}
            <div className="projects-content">
                <h1 ref={titleRef} className='page-type'>Explore Our Creative portfolio</h1>
                <p ref={subRef} className="projects-p">Explore stunning projects in full stack development, frontend design, and 3D innovation.</p>                
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