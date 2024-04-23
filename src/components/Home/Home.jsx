import { useEffect, lazy, Suspense } from 'react'
import { Helmet } from 'react-helmet-async'
import './home.css'

import Nav from '../Nav/Nav'
import Sidebar from '../Sidebar/Sidebar'
import Hero from './Hero'
import Footer from '../Footer/Footer'
import Info from './Info'
import Projects from './Projects/Projects'
import Reviews from '../reviews/Reviews'
import Faqs from '../Faqs/Faqs'

const Work = lazy(() => import('./Work/Work'))
const HomeServices = lazy(() => import('./Services/HomeServices'));

const Home = ({ isMobile, sidebarIsOpen, setSidebarIsOpen, scrollY }) =>{
    // Close sidebar
    useEffect(()=>{
        setSidebarIsOpen(false)
        // eslint-disable-next-line
    },[])

    return(
        <div className="home">
            <Helmet>
                <title>Aegis Plus - Home</title>
                <meta name='description' content="Aegis Plus: Leading web design studio in Leicester. We specialize in innovative web solutions for businesses. Explore our portfolio and services to elevate your online presence. Contact us today!" />
                <link rel="canonical" href="https://www.aegis.plus/" />
                <meta property="og:title" content="Aegis Plus - Home" />
                <meta property="og:description" content="Aegis Plus: Leading web design studio in Leicester. We specialize in innovative web solutions for businesses. Explore our portfolio and services to elevate your online presence. Contact us today!" />
                <meta property="og:url" content="https://www.aegis.plus/" />
                <meta property="og:type" content="website" />
                <meta name="twitter:title" content="Aegis Plus - Home" />
                <meta name="twitter:description" content="Aegis Plus: Leading web design studio in Leicester. We specialize in innovative web solutions for businesses. Explore our portfolio and services to elevate your online presence. Contact us today!" />
            </Helmet>

            <Projects isMobile={isMobile} />
            <Nav sidebarIsOpen={sidebarIsOpen} setSidebarIsOpen={setSidebarIsOpen} />
            {sidebarIsOpen? <Sidebar /> : ""}

            <Hero />
            <Info scrollY={scrollY} />
            <Suspense fallback={<div>Loading...</div>}>
                <Work />
            </Suspense>
            <Suspense fallback={<div>Loading...</div>}>
                <HomeServices />
            </Suspense>
            <Reviews />
            <Faqs />
            <Footer />
        </div>
    )
}

export default Home