import './services.css'

import Service from './Service'

export default function Services (){
    return(
        <section className="services">
            <h2 className='page-type'>What we do</h2>

            <div>
                {services.map( service => 
                    <Service key={service.id} service={service} /> 
                )}
            </div>
        </section>
    )
}

const services = [
    {
        title: 'Informational Websites',
        desc: 'Showcase your business or organization effectively online with our informational websites. From product highlights to brand information, we create engaging digital brochures that inform and captivate your audience.',
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
        details: [
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
        details: [
            "Secure payment gateway integration",
            "Product catalog management",
            "Order management system",
            "Integration with shipping carriers"
        ],
        id: 3,
    },
    {
        title: 'Web Apps',
        desc: 'Streamline your business processes with our innovative web applications. From social media integration to real-time data processing, our solutions empower your business with enhanced functionality and seamless user experiences, unlocking your online potential.',
        details: [
            "Customized development",
            "Integration with third-party APIs and services",
            "Scalable architecture",
            "Robust backend infrastructure",
        ],
        id: 4,
    },
]