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
import { FaPhoneAlt } from "react-icons/fa";

const Contact = ({sidebarIsOpen, setSidebarIsOpen}) =>{
    // Refs
    const overlayRef = useRef()
    const titleRef = useRef()
    const subRef = useRef()

    const phoneNumber = '+447498509537';

    const handleCall = () => {
        window.location.href = `tel:${phoneNumber}`;
    };

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
                <title>Aegis Plus - Contact</title>
                <meta name='description' content='Contact Aegis Plus today for expert web design services and personalized support. Reach out to us via phone, email, or our online contact form. Let us help you bring your digital vision to life. Your success starts here!' />
                <link rel="canonical" href="https://www.aegis.plus/contact" />
                <meta property="og:title" content="Aegis Plus - Contact" />
                <meta property="og:description" content='Contact Aegis Plus today for expert web design services and personalized support. Reach out to us via phone, email, or our online contact form. Let us help you bring your digital vision to life. Your success starts here!' />
                <meta property="og:url" content="https://www.aegis.plus/contact" />
                <meta property="og:type" content="website" />
                <meta name="twitter:title" content="Aegis Plus - Contact" />
                <meta name="twitter:description" content='Contact Aegis Plus today for expert web design services and personalized support. Reach out to us via phone, email, or our online contact form. Let us help you bring your digital vision to life. Your success starts here!' />
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

            <p ref={subRef} className='contact-p'>Or</p>

            <button className='main-btn' onClick={handleCall}>
                <span className='main-btn-text'><FaPhoneAlt /> Call Us</span>
            </button>

            <Footer />
        </div>
    )
}

export default Contact