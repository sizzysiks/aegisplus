import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from "@gsap/react";
import './reviews.css'

import img1 from '../../assets/reviews/review1.png'
import img2 from '../../assets/reviews/review2.png'

export default function Reviews (){
    const wrapperRef = useRef(null);
    const ref1 = useRef(null);
    const ref2 = useRef(null);

    useGSAP(() => {
        gsap.fromTo(
            ref1.current,
            { rotateZ: '-20deg' },
            {
                rotateZ: '0deg',
                duration: 0.8,
                ease: "expo.out",
                scrollTrigger: {
                    trigger: ref1.current,
                    start: "top 80%",
                    end: "bottom 0%",
                    scrub: true,
                    toggleActions: "play none play reverse",
                    // markers: true // For debugging, can be removed
                }
            }
        );

        gsap.fromTo(
            ref2.current,
            { rotateZ: '20deg' },
            {
                rotateZ: '0deg',
                duration: 1,
                ease: "expo.out",
                scrollTrigger: {
                    trigger: ref2.current,
                    start: "top 90%",
                    end: "bottom 0%",
                    scrub: true,
                    toggleActions: "play none play reverse",
                    // markers: true // For debugging, can be removed
                }
            }
        );  
    }, { dependencies: [] });

    return(
        <div className="reviews" ref={wrapperRef}>
            <div className="reviews-top">
                <h1 className='page-type'>Happy clients</h1>
            </div>

            <div className="reviews-cards">
                <div className="card" ref={ref1}>
                    <div className="card-top">
                        <div className="card-img"><img src={img1} alt="" /></div>
                    </div>
                    <p>Aida V. <span>CEO, Happy.al</span></p>
                    <small>Their team's creativity and attention to detail brought our vision to life seamlessly. The website they designed exceeded our expectations, and our online presence has never been stronger. Thank you for your professionalism and dedication to our project.</small>
                </div>

                <div className="card" ref={ref2}>
                    <div className="card-top">
                        <div className="card-img"><img src={img2} alt="" /></div>
                    </div>
                    <p>Antino K. <span>Owner, antino.net</span></p>
                    <small>From the initial consultation to the final launch, they were responsive, collaborative, and committed to delivering a site that truly reflects our brand. We've received countless compliments on the design and functionality, and our online traffic has increased greatly!</small>
                </div>
            </div>

            <p>Explore what our clients have to say about their experiences working with Aegis+. Our commitment to excellence shines through in every project, delivering results that exceed expectations.</p>
            <button className='main-btn'>Read all our reviews</button>
        </div>
    )
}