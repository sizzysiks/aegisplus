import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import './home.css'

import Nav from '../Nav/Nav'
import Sidebar from '../Sidebar/Sidebar'
import Hero from './Hero'
import Footer from '../Footer/Footer'
import Info from './Info'
import Projects from './Projects/Projects'
import AllProjectsButton from './AllProjectsButton'
import HomeServices from './Services/HomeServices'

const Home = ({ isMobile, sidebarIsOpen, setSidebarIsOpen, scrollY }) =>{
    // Close sidebar
    useEffect(()=>{
        setSidebarIsOpen(false)
        // eslint-disable-next-line
    },[])

    return(
        <div className="home">
            <Helmet>
                <title>Aegis+ Immersive</title>
                <meta name='description' content='We are Aegis Immersive Creative Agency - We design innovative solutions for your business. Explore our portfolio and services.' />
                <link rel="canonical" href="https://www.aegis.plus/" />
                {/* Include Open Graph and Twitter Card meta tags for social media sharing */}
                <meta property="og:title" content="Aegis+ Immersive | Home" />
                <meta property="og:description" content="We are Aegis Immersive Creative Agency - We design innovative solutions for your business. Explore our portfolio and services." />
                <meta property="og:url" content="https://www.aegis.plus/" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="https://www.example.com/images/og-image.jpg" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Aegis+ Immersive | Home" />
                <meta name="twitter:description" content="We are Aegis Immersive Creative Agency - We design innovative solutions for your business. Explore our portfolio and services." />
                {/* <meta name="twitter:image" content="https://www.example.com/images/twitter-card-image.jpg" /> */}
            </Helmet>

            <Projects isMobile={isMobile} scrollY={scrollY} />
            <Nav sidebarIsOpen={sidebarIsOpen} setSidebarIsOpen={setSidebarIsOpen} />
            {sidebarIsOpen? <Sidebar /> : ""}

            <Hero />
            <Info scrollY={scrollY} />
            <div style={{ height: '650vh', width: '100%', position: 'relative', zIndex: '-2'}}></div>
            <AllProjectsButton />
            <HomeServices />
            <Footer />
        </div>
    )
}

export default Home