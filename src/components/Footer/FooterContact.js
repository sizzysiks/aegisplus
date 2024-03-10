import { Link } from "react-router-dom"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export default function FooterContact (){
    const wrapperRef = useRef(null);

    useGSAP(() => {
        gsap.fromTo(
            "#footer-contact-h2",
            { opacity: 0, y: 100 },
            {
                opacity: 1,
                y: 0,
                duration: 0.5,
                ease: "expo.out",
                scrollTrigger: {
                    trigger: '.footer-contact-wrapper',
                    start: "top 50%",
                    end: "bottom 0%",
                    toggleActions: "play reverse play reverse",
                    // markers: true // For debugging, can be removed
                }
            }
        );

        gsap.fromTo(
            "#footer-contact-p",
            { opacity: 0, y: 100 },
            {
                opacity: 1,
                y: 0,
                duration: 0.5,
                ease: "expo.out",
                scrollTrigger: {
                    trigger: '.footer-contact-wrapper',
                    start: "top 50%",
                    end: "bottom 0%",
                    toggleActions: "play reverse play reverse",
                    // markers: true // For debugging, can be removed
                }
            }
        );
    }, { dependencies: [] });

    return(
        <section className="footer-contact-wrapper" ref={wrapperRef}>
            <div className="footer-contact">
                <div>
                    <h2 id="footer-contact-h2">Ready to bring your vision to life?</h2>
                    <p id="footer-contact-p">Let's start building something incredible <span>together!</span> Reach out to us today and let's kickstart your next project into high gear.</p>
                </div>
                <Link to="#" className='btn' onClick={() => window.location.href = 'mailto:info@aegis.plus'}>
                    <span className="btn-text">Let's start</span>
                </Link>
            </div>
        </section>
    )
}