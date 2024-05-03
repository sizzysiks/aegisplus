import { useEffect, lazy, Suspense, useRef } from 'react'
import { Helmet } from 'react-helmet-async'
import './home.css'

import Nav from '../Nav/Nav'
import Sidebar from '../Sidebar/Sidebar'
import Hero from './Hero'
import Footer from '../Footer/Footer'
import Info from './Info'
import Projects from './Projects/Projects'
import Faqs from '../Faqs/Faqs'

const Work = lazy(() => import('./Work/Work'))
const HomeServices = lazy(() => import('./Services/HomeServices'));
const Reviews = lazy(() => import('../reviews/Reviews'))

const Home = ({ isMobile, sidebarIsOpen, setSidebarIsOpen, scrollY }) =>{
    const containerRef = useRef(null)

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

            <Projects isMobile={isMobile} scrollY={scrollY } />
            <Nav sidebarIsOpen={sidebarIsOpen} setSidebarIsOpen={setSidebarIsOpen} />
            {sidebarIsOpen? <Sidebar /> : ""}

            <Hero isMobile={isMobile} />
            <Info scrollY={scrollY} />
            <Suspense fallback={<div>Loading...</div>}>
                <Work />
            </Suspense>
            <Suspense fallback={<div>Loading...</div>}>
                <HomeServices />
            </Suspense>
            <Suspense fallback={<div>Loading...</div>}>
                <Reviews />
            </Suspense>
            <Faqs />
            <Footer />
        </div>
    )
}

export default Home