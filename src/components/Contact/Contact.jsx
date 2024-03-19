import { useEffect, useRef, useLayoutEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import './contact.css'

import Nav from '../Nav/Nav'
import Sidebar from '../Sidebar/Sidebar'
import Footer from '../Footer/Footer'
import ContactForm from './ContactForm'

import {AiOutlineMail} from 'react-icons/ai'
import { IoChatboxEllipsesOutline } from "react-icons/io5";



const Contact = ({sidebarIsOpen, setSidebarIsOpen}) =>{
    // Refs
    const overlayRef = useRef()
    const titleRef = useRef()
    const subRef = useRef()

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

    // Animations on load
    useGSAP(()=>{
        gsap.to(overlayRef.current, {duration:1, scaleX:0, transformOrigin: 'right', ease: "expo.in"})
        gsap.fromTo(titleRef.current, {y: 500}, {delay:1, duration:0.3, y:0, ease: "expo.out"})
        gsap.fromTo(subRef.current, {y: 500}, {delay:1.2, duration:0.3, y:0, ease: "expo.out"})
    },{ dependencies: [] })

    return(
        <div className="contact">
            <Helmet>
                <title>Aegis+ | Contact</title>
                <meta name='description' content='We are Aegis, a web design studio based in Leicester - We design innovative solutions for your business. Contact us to start a project.' />
                <link rel="canonical" href="https://www.aegis.plus/contact" />
                {/* Include Open Graph and Twitter Card meta tags for social media sharing */}
                <meta property="og:title" content="Aegis+ | Contact" />
                <meta property="og:description" content='We are Aegis, a web design studio based in Leicester - We design innovative solutions for your business. Contact us to start a project.' />
                <meta property="og:url" content="https://www.aegis.plus/contact" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="https://www.example.com/images/og-image.jpg" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Aegis+ | Contact" />
                <meta name="twitter:description" content='We are Aegis, a web design studio based in Leicester - We design innovative solutions for your business. Contact us to start a project.' />
                {/* <meta name="twitter:image" content="https://www.example.com/images/twitter-card-image.jpg" /> */}
            </Helmet>

            <div className="contact-overlay" ref={overlayRef}></div>

            <Nav sidebarIsOpen={sidebarIsOpen} setSidebarIsOpen={setSidebarIsOpen} />
            {sidebarIsOpen? <Sidebar /> : ""}   

            <h1 ref={titleRef}>Let's Make It<span><IoChatboxEllipsesOutline /></span><br></br> <span>Happen</span></h1>
            <p ref={subRef} className='contact-p'>Say hello!</p>
            
            {/* <ContactForm /> */}

            <div className='contact-alternative'>
                <Link to="#" className='main-btn' onClick={() => window.location.href='mailto:info@aegis.plus'}>
                    <span className='main-btn-text'><AiOutlineMail /> info@aegis.plus</span>
                </Link>
            </div>

            <Footer />
        </div>
    )
}

export default Contact