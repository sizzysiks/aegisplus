import { Suspense, lazy, useRef, useEffect } from "react"
import { Helmet } from "react-helmet-async"

import useDetectDevice from "../hooks/useDetectDevice"

import Experience from "../three/Experience"
import Hero from '../components/Home/Hero'
import Nav from '../components/Nav/Nav'
import Info from '../components/Home/info/Info'
import Faqs from '../components/Faqs/Faqs'
import Footer from '../components/Footer/Footer'
import Sidebar from "../components/Sidebar/Sidebar"

const Work = lazy(() => import('../components/Home/Work/Work'))
const HomeServices = lazy(() => import('../components/Home/Services/HomeServices'));
const Reviews = lazy(() => import('../components/reviews/Reviews'))
const Process = lazy(() => import('../components/Home/process/Process'))

// eslint-disable-next-line react/prop-types
export default function Home ({ sidebarIsOpen, setSidebarIsOpen }){
    const containerRef = useRef(null)

    const { isMobile } = useDetectDevice

    // Close sidebar
    useEffect(()=>{
        setSidebarIsOpen(false)
        // eslint-disable-next-line
    },[])

    return(
        <div className="home" ref={containerRef}>
            <Helmet>
                <title>Aegis Plus - Creative Web Design Studio</title>
                <meta name='description' content="Leading web design studio in Leicester. We specialize in innovative web solutions for businesses. Explore our portfolio and services to elevate your online presence." />
                <link rel="canonical" href="https://www.aegis.plus/" />
                <meta property="og:title" content="Aegis Plus - Creative Web Design Studio" />
                <meta property="og:url" content="https://www.aegis.plus/" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="https://aegis.plus/favicon.ico" />
                <meta property="og:description" content="Leading web design studio in Leicester. We specialize in innovative web solutions for businesses. Explore our portfolio and services to elevate your online presence." />
                <meta name="twitter:title" content="Aegis Plus - Creative Web Design Studio" />
                <meta name="twitter:description" content="Leading web design studio in Leicester. We specialize in innovative web solutions for businesses. Explore our portfolio and services to elevate your online presence." />
            </Helmet>

            <Experience isMobile={isMobile} />
            <Nav sidebarIsOpen={sidebarIsOpen} setSidebarIsOpen={setSidebarIsOpen} />
            {sidebarIsOpen? <Sidebar /> : ""}

            <Hero />
            <Info />
            <Suspense fallback={null}>
                <Work />
            </Suspense>
            <Suspense fallback={null}>
                <HomeServices />
            </Suspense>
            <Suspense fallback={null}>
                <Reviews />
            </Suspense>
            <Suspense fallback={null}>
                <Process />
            </Suspense>
            <Faqs />
            <Footer />
        </div>
    )
}