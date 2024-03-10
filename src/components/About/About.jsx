import { useEffect, useLayoutEffect, useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { Helmet } from 'react-helmet-async'
import gsap from 'gsap'
import './about.css'

import Nav from '../Nav/Nav'
import Sidebar from '../Sidebar/Sidebar'
import Footer from '../Footer/Footer'
import Services from '../Services/Services'

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
                <title>Aegis+ | About</title>
                <meta name='description' content='We are Aegis, a web design studio based in Leicester - We design innovative solutions for your business. Explore our portfolio and services.' />
                <link rel="canonical" href="https://www.aegis.plus/about" />
                {/* Include Open Graph and Twitter Card meta tags for social media sharing */}
                <meta property="og:title" content="Aegsi+ | About" />
                <meta property="og:description" content='We are Aegis, a web design studio based in Leicester - We design innovative solutions for your business. Explore our portfolio and services.' />
                <meta property="og:url" content="https://www.aegis.plus/about" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="https://www.example.com/images/og-image.jpg" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Aegis+ | About" />
                <meta name="twitter:description" content='We are Aegis, a web design studio based in Leicester - We design innovative solutions for your business. Explore our portfolio and services.' />
                {/* <meta name="twitter:image" content="https://www.example.com/images/twitter-card-image.jpg" /> */}
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

            <Footer />
        </div>
    )
}

export default About