import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import './common.css'

const ScrollMessage = ({ scrollY }) =>{
    const ref = useRef()

    const rotateText = (e)=>{
        e.target.innerHTML = e.target.textContent.replace(/\S/g, "<em>$&</em>")
        const element = document.querySelectorAll('em')

        for(let i=0; i<element.length; i++)
        {
            element[i].style.transform = `rotate(${i*32}deg)`
        }
    }

    useGSAP(()=>{
        if(ref.current){
            if(scrollY > 2 && scrollY < 4.5){
                gsap.to(ref.current, {duration:0.5, opacity:1})
            }
            else{
                gsap.to(ref.current, {duration:0.5, opacity:0})
            }
        }
    }, { dependencies: [scrollY] })

    return(
        <div className="scroll-call" onAnimationStart={rotateText} ref={ref}>
            <p className="scroll-text">Scroll-down</p>
        </div>
    )
}

export default ScrollMessage