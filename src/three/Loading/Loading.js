import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './loading.css'

const Loading = () => {
  const wrapperRef = useRef(null);

  useEffect(()=>{
      gsap.to(wrapperRef.current, { opacity: 0, scaleX: 0, duration: 1, delay: 2, ease: "expo.out" })
  }, [])
 
  return(
    <div className="loading" ref={wrapperRef}>
      <div className="loader"></div>
    </div>
  )
}

export default Loading
