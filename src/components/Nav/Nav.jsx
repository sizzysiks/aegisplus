import { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import './nav.css'

import logo from '../../assets/aegis.webp'

import NavSidebarButton from './NavSidebarButton'

export default function Nav ({ sidebarIsOpen, setSidebarIsOpen }){
    // Ref for wrapper
    const wrapperRef = useRef()

    // State for wheel value
    const [wheel, setWheel] = useState(0)

    // // Event listener for mouse wheel. Hiding and showing nav depending on value
    useEffect(()=>{
        const handleWheel = (e) => { setWheel(e.deltaY) }
        window.addEventListener('wheel', handleWheel)

        if(wheel >0){
            gsap.to(wrapperRef.current, { duration: 0.3, y: -100 })
        } else{
            gsap.to(wrapperRef.current, { duration: 0.3, y: 0 })
        }

        return () =>{
            window.removeEventListener('wheel', handleWheel)
        }
    },[wheel])

    return(
        <nav className="nav" ref={wrapperRef}>
            <Link to="/" className="logo">
                <img src={logo} alt="aegis-logo" width='64' height='64' title="Aegis Plus logo" loading="eager" />
            </Link>

            <div className='nav-links'>
                <Link to="/contact" className='nav-btn'>Get in touch</Link>
                <NavSidebarButton sidebarIsOpen={sidebarIsOpen} setSidebarIsOpen={setSidebarIsOpen} />
            </div>
        </nav>
    )
}