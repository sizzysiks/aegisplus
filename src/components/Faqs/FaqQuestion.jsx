import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function FaqQuestion (){
    const ref = useRef(null);

    useGSAP(() => {
        gsap.fromTo(
            ref.current,
            { scaleX: 0.9 },
            {
                scaleX: 1,
                duration: 1,
                ease: "expo.out",
                scrollTrigger: {
                    trigger: ref.current,
                    start: "top 80%",
                    end: "bottom 0%",
                    toggleActions: "play none play reverse",
                }
            }
        );
    }, { dependencies: [] });

    return(
        <div ref={ref} className="faqs-custom-question">
            <form className='faqs-custom-question-form' name="faq-question" method="post">
                <label>What's your question?</label>
                <input type="text" />
            </form>
                
            <button type="submit">Ask</button>
        </div>
    )
}