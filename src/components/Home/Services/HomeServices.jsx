import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import './services.css'

import HomeServiceLink from './HomeServiceLink';

import img1 from '../../../assets/services/serv1.webp'
import img2 from '../../../assets/services/serv2.webp'
import img3 from '../../../assets/services/serv3.webp'
import img4 from '../../../assets/services/serv4.webp'

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
            <div className="home-services-top">
                <h2 className='page-type'>Our solutions</h2>
            </div>

            <div className="home-services-wrapper">
                <div className="home-services-links">
                    {services.map( service => 
                        <HomeServiceLink 
                            key={service.id} 
                            title={service.title} 
                            explanation={service.explanation}
                            img={service.image}
                            color={service.color}
                        /> 
                    )}
                </div>
            </div>
        </div>
    )
}

const services = [
    {
        title: 'Informational Websites',
        explanation: 'From sleek portfolios to engaging blogs, we design user-friendly platforms that captivate and inform your audience',
        desc: 'Showcase your business or organization effectively online with our informational websites. From product highlights to brand information, we create engaging digital brochures that inform and captivate your audience.',
        image: img1,
        details: [
            "Tailored design to suit your brand identity",
            "Integration with social media platforms",
            "Search engine optimization (SEO)",
            "Hosting and domain setup"
        ],
        color: '#579EB6',
        id: 1,
    },
    {
        title: 'Corporate Websites',
        explanation: `Establish credibility and professionalism with a corporate website tailored to your brand's identity`,
        desc: `Elevate your corporate identity with our tailored websites. We craft comprehensive online platforms that reflect your company's history, mission, and offerings, serving as central hubs for stakeholders, including customers, investors, and potential employees.`,
        image: img2,
        details: [
            "Professional and modern design",
            "Customized features",
            "Secure login functionality",
            "Integration with third-party tools",
            "Ongoing maintenance and support services"
        ],
        color: '#79555D',
        id: 2,
    },
    {
        title: 'E-commerce',
        explanation: `Whether you're a budding startup or an established enterprise, we design intuitive platforms that streamline the shopping experience for your customers`,
        desc: `Drive online sales with our optimized e-commerce websites. From seamless product browsing to secure payment processing, we build intuitive online storefronts that inspire trust and facilitate transactions, whether you're a boutique shop or a global marketplace.`,
        image: img3,
        details: [
            "Secure payment gateway integration",
            "Product catalog management",
            "Order management system",
            "Integration with shipping carriers"
        ],
        color: '#5AB95D',
        id: 3,
    },
    {
        title: 'Web Applications',
        explanation: `From custom CRM systems to interactive dashboards, we develop tailored solutions that optimize efficiency and productivity`,
        desc: 'Streamline your business processes with our innovative web applications. From social media integration to real-time data processing, our solutions empower your business with enhanced functionality and seamless user experiences, unlocking your online potential.',
        image: img4,
        details: [
            "Customized development",
            "Integration with third-party APIs and services",
            "Scalable architecture",
            "Robust backend infrastructure",
            "Ongoing support and maintenance"
        ],
        color: '#F8A660',
        id: 4,
    },
]