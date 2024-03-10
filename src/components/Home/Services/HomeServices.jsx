import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import './services.css'

import HomeServiceLink from './HomeServiceLink';

export default function HomeServices (){
    const wrapperRef = useRef(null);

    useGSAP(() => {
        gsap.fromTo(
            wrapperRef.current,
            { opacity: 0, y: 300 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "expo.out",
                scrollTrigger: {
                    trigger: wrapperRef.current,
                    start: "top 90%",
                    end: "bottom 0%",
                    toggleActions: "play reverse play reverse",
                    // markers: true // For debugging, can be removed
                }
            }
        );
    }, { dependencies: [] });

    return(
        <div className="home-services" ref={wrapperRef}>
            <h1>Our Web <span>Services</span></h1>
            <p>Discover our comprehensive web services designed to <span>elevate your online presence</span> and drive success. From website design and development to e-commerce and web application solutions, Aegis has you covered. Partner with us to navigate the digital landscape and <span>achieve your online goals</span> efficiently.</p>
            <div className="home-services-links">
                {services.map( service => 
                    <HomeServiceLink 
                        key={service.id} 
                        title={service.title} 
                    /> 
                )}
            </div>
        </div>
    )
}

const services = [
    {
        title: 'Informational Websites',
        desc: 'Showcase your business or organization effectively online with our informational websites. From product highlights to brand information, we create engaging digital brochures that inform and captivate your audience.',
        image: "",
        details: [
            "Tailored design to suit your brand identity",
            "Integration with social media platforms",
            "Search engine optimization (SEO)",
            "Hosting and domain setup"
        ],
        id: 1,
    },
    {
        title: 'Corporate Websites',
        desc: `Elevate your corporate identity with our tailored websites. We craft comprehensive online platforms that reflect your company's history, mission, and offerings, serving as central hubs for stakeholders, including customers, investors, and potential employees.`,
        image: "",
        details: [
            "Professional and modern design",
            "Customized features",
            "Secure login functionality",
            "Integration with third-party tools",
            "Ongoing maintenance and support services"
        ],
        id: 2,
    },
    {
        title: 'E-commerce',
        desc: `Drive online sales with our optimized e-commerce websites. From seamless product browsing to secure payment processing, we build intuitive online storefronts that inspire trust and facilitate transactions, whether you're a boutique shop or a global marketplace.`,
        image: "",
        details: [
            "Secure payment gateway integration",
            "Product catalog management",
            "Order management system",
            "Integration with shipping carriers"
        ],
        id: 3,
    },
    {
        title: 'Web Applications',
        desc: 'Streamline your business processes with our innovative web applications. From social media integration to real-time data processing, our solutions empower your business with enhanced functionality and seamless user experiences, unlocking your online potential.',
        image: "",
        details: [
            "Customized development",
            "Integration with third-party APIs and services",
            "Scalable architecture",
            "Robust backend infrastructure",
            "Ongoing support and maintenance"
        ],
        id: 4,
    },
]