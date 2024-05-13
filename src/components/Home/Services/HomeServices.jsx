import './services.css'

import HomeServiceLink from './HomeServiceLink';

export default function HomeServices (){
    return(
        <div className="home-services">
            <div className="home-services-top">
                <h2 className='page-type'>Our solutions</h2>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                <p>From sleek and responsive designs to robust e-commerce platforms, we're here to turn your ideas into online realities that exceed expectations.</p>
            </div>

            <div className="home-services-wrapper">
                <div className="home-services-links">
                    {services.map( service => 
                        <HomeServiceLink 
                            key={service.id} 
                            title={service.title} 
                            explanation={service.explanation}
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
        explanation: 'Business websites, portfolios or engaging blogs, we design user-friendly platforms that captivate and inform your audience',
        desc: 'Showcase your business or organization effectively online with our informational websites. From product highlights to brand information, we create engaging digital brochures that inform and captivate your audience.',
        details: [
            "Tailored design to suit your brand identity",
            "Integration with social media platforms",
            "Search engine optimization (SEO)",
            "Hosting and domain setup"
        ],
        color: '#ffffff',
        id: 1,
    },
    {
        title: 'Corporate Websites',
        explanation: `Establish credibility and professionalism with a corporate website tailored to your brand's identity`,
        desc: `Elevate your corporate identity with our tailored websites. We craft comprehensive online platforms that reflect your company's history, mission, and offerings, serving as central hubs for stakeholders, including customers, investors, and potential employees.`,
        details: [
            "Professional and modern design",
            "Customized features",
            "Secure login functionality",
            "Integration with third-party tools",
            "Ongoing maintenance and support services"
        ],
        color: '#ffffff',
        id: 2,
    },
    {
        title: 'E-commerce',
        explanation: `Whether you're a budding startup or an established enterprise, we design intuitive platforms that streamline the shopping experience for your customers`,
        desc: `Drive online sales with our optimized e-commerce websites. From seamless product browsing to secure payment processing, we build intuitive online storefronts that inspire trust and facilitate transactions, whether you're a boutique shop or a global marketplace.`,
        details: [
            "Secure payment gateway integration",
            "Product catalog management",
            "Order management system",
            "Integration with shipping carriers"
        ],
        color: '#ffffff',
        id: 3,
    },
    {
        title: 'Web Applications',
        explanation: `From custom CRM systems to interactive dashboards, we develop tailored solutions that optimize efficiency and productivity`,
        desc: 'Streamline your business processes with our innovative web applications. From social media integration to real-time data processing, our solutions empower your business with enhanced functionality and seamless user experiences, unlocking your online potential.',
        details: [
            "Customized development",
            "Integration with third-party APIs and services",
            "Scalable architecture",
            "Robust backend infrastructure",
            "Ongoing support and maintenance"
        ],
        color: '#ffffff',
        id: 4,
    },
]