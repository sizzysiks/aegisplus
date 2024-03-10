import { Suspense, useLayoutEffect, useRef, useEffect, useState, lazy } from 'react'
import { useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import './project.css'

import Nav from "../Nav/Nav"
import Sidebar from '../Sidebar/Sidebar'
import Footer from '../Footer/Footer'
import NextProjectButton from './NextProjectButton'

const LazyLoadedImage = lazy(() => import('../../common/LazyImage'));
const LazyLoadedVideo = lazy(() => import('../../common/LazyVideo'));

const Project = ({ data, sidebarIsOpen, setSidebarIsOpen }) =>{
    const id = useParams().id

    // State
    const [currentProject, setCurrentProject] = useState(null);

    // refs
    const overlayRef = useRef(null);
    const titleRef = useRef(null);
    const subRef = useRef(null);

    useEffect(()=>{
        if(id){
            const foundProject = data.find( project => project.identifier === id )

            setCurrentProject(foundProject)
        }
        // eslint-disable-next-line
    }, [id]);

    // Scroll to top
    useLayoutEffect(()=>{
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    }, [id])

    useGSAP(()=>{
        gsap.to(overlayRef.current, {duration:1, scaleX:0, transformOrigin: 'right', ease: "expo.in"})
        gsap.fromTo(titleRef.current, {y: 500}, {delay:1, duration:0.3, y:0, ease: "expo.out"})
        gsap.fromTo(subRef.current, {y: 500}, {delay:1.2, duration:0.3, y:0, ease: "expo.out"})
    }, { dependencies: [currentProject, id] })

    if(!currentProject) return null

    return(
        <div className="project">
            <Helmet>
                <title> Aegis+ | {currentProject.title}</title>
                <meta name='description' content='We are Aegis Immersive Creative Agency - We design innovative solutions for your business. Explore our work projects.' />
                <link rel="canonical" href="https://www.aegis.plus/projects" />
                {/* Include Open Graph and Twitter Card meta tags for social media sharing */}
                <meta property="og:title" content="Aegis+ | Our client work" />
                <meta property="og:description" content="We are Aegis Immersive Creative Agency - We design innovative solutions for your business. Explore our work projects." />
                <meta property="og:url" content="https://www.aegis.plus/projects" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="https://www.example.com/images/og-image.jpg" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Aegis+ | Our client work" />
                <meta name="twitter:description" content="We are Aegis Immersive Creative Agency - We design innovative solutions for your business. Explore our work projects." />
                {/* <meta name="twitter:image" content="https://www.example.com/images/twitter-card-image.jpg" /> */}
            </Helmet>

            <div className="project-overlay" ref={overlayRef}></div>

            <Nav sidebarIsOpen={sidebarIsOpen} setSidebarIsOpen={setSidebarIsOpen} />
            {sidebarIsOpen? <Sidebar /> : ""}

            <div className="project-text">
                <h1 ref={titleRef}>{currentProject? currentProject.title : ""}</h1>
                <p className='project-desc' ref={subRef}>{currentProject? currentProject.desc : ""}</p>
                {/* <p className='project-sub'>{currentProject? currentProject.sub : ""}</p> */}
                <small>Built with {currentProject? currentProject.technologies: ""}</small>
            </div>

            <div className="project-img-wrapper-cover">
                <div></div>
                <Suspense fallback={<div>Loading...</div>}>
                    <LazyLoadedImage src={require(`../../assets/projects/${id}/1.webp`)} alt="Description" />
                </Suspense>
            </div>

            <div className="project-imgs-wrapper">
                <Suspense fallback={<p>Loading</p>}>
                    <LazyLoadedVideo src={require(`../../assets/projects/${id}/video.mp4`)} alt="Description" />
                </Suspense>

                <div>
                    <Suspense fallback={<div>Loading...</div>}>
                        <LazyLoadedImage src={require(`../../assets/projects/${id}/1.webp`)} alt="Description" />
                    </Suspense>
                </div>
     
                <div>
                    <Suspense fallback={<div>Loading...</div>}>
                        <LazyLoadedImage src={require(`../../assets/projects/${id}/2.webp`)} alt="Description" />
                    </Suspense>
                </div>
             
                <div>
                    <Suspense fallback={<div>Loading...</div>}>
                        <LazyLoadedImage src={require(`../../assets/projects/${id}/3.webp`)} alt="Description" />
                    </Suspense>
                </div>
            </div>

            <NextProjectButton currentProject={currentProject} data={data} />

            <Footer />
        </div>
    )
}  

export default Project