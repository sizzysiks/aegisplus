import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState, useEffect, lazy, Suspense } from 'react'
import { HelmetProvider } from 'react-helmet-async'

import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './App.css'

import useDetectDevice from './hooks/useDetectDevice'
import useTrackScroll from './hooks/useTrackScroll'

import Loading from './three/Loading/Loading'
import Home from './components/Home/Home'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'

const About = lazy(() => import('./components/About/About'));
const Projects = lazy(() => import('./components/Projects/Projects'));
const Project = lazy(() => import('./components/Projects/Project'));
const Contact = lazy(() => import('./components/Contact/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Register ScrollTrigger on gsap
gsap.registerPlugin(ScrollTrigger);

export default function App () {
  // Local state
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false)

  // Hooks
  const { isMobile }= useDetectDevice();
  const { scrollY } = useTrackScroll();

  // Load fonts
  useEffect(() => {
    // Create a link element for preconnecting to the Google Fonts domain
    const preconnectLink = document.createElement('link');
    preconnectLink.rel = 'preconnect';
    preconnectLink.href = 'https://fonts.googleapis.com';
    preconnectLink.crossOrigin = 'true';

    const preconnectStaticLink = document.createElement('link');
    preconnectStaticLink.rel = 'preconnect';
    preconnectStaticLink.href = 'https://fonts.gstatic.com';
    preconnectStaticLink.crossOrigin = 'true';

    // Create a link element for the Google Fonts stylesheet
    const fontStylesheetLink = document.createElement('link');
    fontStylesheetLink.href = 'https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700;800;900&display=swap';
    fontStylesheetLink.rel = 'stylesheet';
    fontStylesheetLink.crossOrigin = 'true';

    // Append the links to the head of the document
    document.head.appendChild(preconnectLink);
    document.head.appendChild(preconnectStaticLink);
    document.head.appendChild(fontStylesheetLink);

    // Cleanup function to remove the added links
    return () => {
      document.head.removeChild(preconnectLink);
      document.head.removeChild(preconnectStaticLink);
      document.head.removeChild(fontStylesheetLink);
    };
  }, []);

  // Render
  return (
    <HelmetProvider>
    <div className="App">
      <Loading />
      <BrowserRouter>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" 
            element={
              <Home 
                  isMobile={isMobile}
                  sidebarIsOpen={sidebarIsOpen} 
                  setSidebarIsOpen={setSidebarIsOpen} 
                  scrollY={scrollY}
              />} 
          />
          <Route path='/projects' element={<Projects sidebarIsOpen={sidebarIsOpen} setSidebarIsOpen={setSidebarIsOpen} data={data} />} />
          <Route path="/projects/:id" element={<Project data={data} sidebarIsOpen={sidebarIsOpen} setSidebarIsOpen={setSidebarIsOpen} />} />
          <Route path='/about' element={<About sidebarIsOpen={sidebarIsOpen} setSidebarIsOpen={setSidebarIsOpen} />} />
          <Route path='/contact' element={<Contact sidebarIsOpen={sidebarIsOpen} setSidebarIsOpen={setSidebarIsOpen} />} />
          <Route path='/terms' element={<Terms sidebarIsOpen={sidebarIsOpen} setSidebarIsOpen={setSidebarIsOpen} />} />
          <Route path='/privacy' element={<Privacy sidebarIsOpen={sidebarIsOpen} setSidebarIsOpen={setSidebarIsOpen} />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
    </HelmetProvider>
  )
}

const data = [
  {
    title: "Retail Web Design",
    sub: "Design for an online shop selling sneakers. Scroll-based animations and a 3D view of the sneakers are the main points of the design.",
    desc: "Presenting a bespoke landing page designed for our esteemed shoe retail enterprise! Highlighting a cutting-edge 3D model of our footwear collection, users can engage in an interactive and captivating browsing experience",
    technologies: 'React, React-Three, Three.js',
    date: '2022',
    url: 'retail',
    identifier: 'retail',
    id: 1
  },
  {
    title: "Linkeby",
    sub: "Web application for connecting website owners across the globe",
    desc: "Linkeby is an SEO ranking platform. It aims to connect website owners across the globe creating a niche community. We have been responsible for building the application from scratch including design, frontend & backend.",
    technologies: 'React, Node, Express, MongoDB, Stripe',
    date: 'Ongoing',
    url: 'owners',
    identifier: 'owners',
    id: 2
  },
  {
    title: "Anila",
    sub: "Portfolio for activist Anila Kila",
    desc: `Introducing a portfolio website showcasing creative works with breathtaking visual effects and shaders. Offering a dynamic and captivating user experience, visitors can explore the client's portfolio within an interactive 3D environment. Leveraging Three.js shaders, the project delivers stunning visual effects and animations, ensuring a memorable experience for all visitors.`,
    technologies: 'React, React-Three, Three.js',
    date: '2021',
    url: 'anila',
    identifier: 'anila',
    id: 3
  },
  {
    title: "AI Facts",
    sub: "Portfolio for activist Anila Kila",
    desc: `Revolutionizing historical exploration through an immersive 3D map interface. Users can effortlessly search any location and receive AI-generated suggestions of historical facts, enriching their understanding of the area's past in a unique and engaging manner.`,
    technologies: 'React, React-three, Mapbox, OpenAi',
    date: '2023',
    url: 'map',
    identifier: 'map',
    id: 4
  },
  {
    title: "3D Customizer",
    sub: "Customizer for a car model",
    desc: `The project offers users an immersive experience to view and personalize virtual bikes in 3D, featuring a diverse range of styles and customizable components. Users can explore the bike from every angle, with the ability to zoom in for detailed examination. They can individually modify various parts like the frame, handlebars, seat, and wheels, adjusting colors in real-time for instant feedback.`,
    technologies: 'React, React-Three, Three.js',
    date: '2022',
    url: '3d-customizer',
    identifier: '3d-customizer',
    id: 5
  },
  // {
  //   title: "JUUBIX",
  //   sub: "Mini game",
  //   desc: "JUUBIX supplies ‘Stakeholders as a Service’ (SaaS) by providing a new collaborative marketplace for talent, companies, and investors.",
  //   technologies: 'React, Next.js, React-Three, Three.js',
  //   date: 'Ongoing',
  //   url: 'juubix',
  //   identifier: 'juubix',
  //   id: 6
  // },
  {
    title: "Stockbet",
    sub: "Betting tips website",
    desc: `Introducing a sophisticated web application offering football betting tips through a subscription-based model. Our project boasts an extensive database of football matches and betting odds, providing users with expertly curated recommendations derived from thorough analysis and predictions.`,
    technologies: 'React, Node, Express, MongoDB',
    date: 'Ongoing',
    url: 'stockbet',
    identifier: 'stockbet',
    id: 6
  },
  {
    title: "Groundrock",
    sub: "Website for website",
    desc: `A portfolio website for a marketing company that leverages Three.js to create stunning 3D visual effects and animations. The website provides an engaging and interactive user experience that showcases the company's marketing services and capabilities.`,
    technologies: 'Three.js',
    date: '2020',
    url: 'groundrock',
    identifier: 'groundrock',
    id: 7
  },
  {
    title: "Antino",
    sub: "Freelance portfolio",
    desc: `Step into the world of Antino Kila, where creativity meets innovation! Explore the stunning portfolio website of this Creative Developer, honored by Awwwards.`,
    technologies: 'React, React-Three, Three.js, GLSL',
    date: '2022',
    url: 'antino',
    identifier: 'antino',
    id: 8
  }
]