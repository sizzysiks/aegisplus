import { useRef } from 'react';
import gsap from 'gsap'
import { useGSAP } from "@gsap/react";
import './reviews.css'

import img from '../../assets/review.webp'

export default function Reviews (){
    const wrapperRef = useRef(null);
    const titleRef = useRef(null);
    const textRef = useRef(null);
    const imgRef = useRef(null);

    useGSAP(() => {
        gsap.fromTo(
            titleRef.current,
            { opacity: 0, y: 100 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "expo.out",
                scrollTrigger: {
                    trigger: wrapperRef.current,
                    start: "top 50%",
                    end: "bottom 0%",
                    toggleActions: "play none play reverse",
                    // markers: true // For debugging, can be removed
                }
            }
        );

        gsap.fromTo(
            textRef.current,
            { opacity: 0, y: 100 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "expo.out",
                scrollTrigger: {
                    trigger: wrapperRef.current,
                    start: "top 50%",
                    end: "bottom 0%",
                    toggleActions: "play none play reverse",
                    // markers: true // For debugging, can be removed
                }
            }
        );

        gsap.fromTo(
            imgRef.current,
            { opacity: 0, clipPath: 'polygon(15% 0%, 100% 0%, 85% 100%, 0% 100%)' },
            {
                opacity: 1,
                clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
                duration: 2,
                ease: "expo.out",
                scrollTrigger: {
                    trigger: wrapperRef.current,
                    start: "top 80%",
                    end: "bottom bottom",
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

            <div className="reviews-content-wrapper">
                <div className="reviews-content">
                    <div>
                        <h3 ref={titleRef} className="quote-text">"Turned our vision into reality with finesse and expertise!"</h3>
                        <small>- Emily S.</small>
                    </div>
                    <p ref={textRef}>Explore what our clients have to say about their experiences working with Aegis+. Our commitment to excellence shines through in every project, delivering results that exceed expectations.</p>
                    {/* <button className='secondary-btn'>View our reviews <FaLongArrowAltRight /></button> */}
                </div>

                <div ref={imgRef} className="reviews-img">
                    <img src={img} alt="" />
                </div>
            </div>
        </div>
    )
}