import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './loading.css'

const Loading = () => {
  const wrapperRef = useRef(null);
  const textRef = useRef(null);

  // const { active, progress } = useProgress();
  useEffect(()=>{
      gsap.to(textRef.current, { opacity: 0, duration: 1, delay: 1 })
      gsap.to(wrapperRef.current, { scaleX: 0, opacity: 0, duration: 1, delay: 2, ease: "expo.out" })
  }, [])
 
  return(
    <div className="loading" ref={wrapperRef}>
      {/* <p ref={textRef}>Hold tight for a few seconds</p> */}
      {/* <span className="loading-span">
        {Math.floor(progress)}%
      </span> */}
      <div ref={textRef} className="fly-by"></div>
    </div>
  )
}

export default Loading