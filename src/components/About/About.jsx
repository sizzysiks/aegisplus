import { useEffect, useLayoutEffect, useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { Helmet } from 'react-helmet-async'
import gsap from 'gsap'
import './about.css'

import Nav from '../Nav/Nav'
import Sidebar from '../Sidebar/Sidebar'
import Footer from '../Footer/Footer'
import Services from '../Services/Services'
import Faqs from '../Faqs/Faqs'

const About = ({sidebarIsOpen, setSidebarIsOpen}) =>{
    const overlayRef = useRef()
    const introRef = useRef(null);
        
    // Close sidebar
    useEffect(()=>{
        setSidebarIsOpen(false)
        // eslint-disable-next-line
    },[])

    useLayoutEffect(()=>{
        window.scrollTo({
            top:0,
            left:0,
            behavior:'smooth'
        })
    },[])

    useGSAP(()=>{
        gsap.to(overlayRef.current, {duration:1, scaleX:0, transformOrigin: 'right', ease: "expo.in"})
        gsap.fromTo(introRef.current, {y: 500}, {delay:1, duration:0.3, y:0, ease: "expo.out"})
    }, { dependencies: [] })

    return(
        <div className="about">
            <Helmet>
                <title>Aegis Plus - About</title>
                <meta name='description' content="Discover the story behind Aegis Plus - a leading web design studio in Leicester. Learn about our passionate team, our commitment to innovation, and how we strive to exceed our clients' expectations. Join us on our journey to transform the digital landscape. Get in touch today!" />
                <link rel="canonical" href="https://www.aegis.plus/about" />
                <meta property="og:title" content="Aegis Plus - About" />
                <meta property="og:description" content="Discover the story behind Aegis Plus - a leading web design studio in Leicester. Learn about our passionate team, our commitment to innovation, and how we strive to exceed our clients' expectations. Join us on our journey to transform the digital landscape. Get in touch today!" />
                <meta property="og:url" content="https://www.aegis.plus/about" />
                <meta property="og:type" content="website" />
                <meta name="twitter:title" content="Aegis Plus - About" />
                <meta name="twitter:description" content="Discover the story behind Aegis Plus - a leading web design studio in Leicester. Learn about our passionate team, our commitment to innovation, and how we strive to exceed our clients' expectations. Join us on our journey to transform the digital landscape. Get in touch today!" />
            </Helmet>

            <div className="about-overlay" ref={overlayRef}></div>

            <Nav sidebarIsOpen={sidebarIsOpen} setSidebarIsOpen={setSidebarIsOpen} />
            {sidebarIsOpen? <Sidebar /> : ""}

            <div className="about-section-wrapper">
                <div className="about-section" ref={introRef}>
                    <h1>Aegis, Where Innovation Meets Recognition</h1>
                    <p> We're an <span>award-winning</span> team passionate about crafting exceptional digital experiences that amplify your 
                    brand's story. We specialize in bringing your unique vision to life.
                    Through close collaboration, we help define and refine your brand identity, creating digital solutions that 
                    resonate with your audience and drive meaningful engagement.</p>
                </div>
                <Services />
                <div className="about-section-2">
                    <p>With every website we create, we automatically submit it for consideration in prestigious international awards that highlight outstanding achievements in web design and development.</p>
                </div>
            </div>
            <Faqs />
            <Footer />
        </div>
    )
}

export default About