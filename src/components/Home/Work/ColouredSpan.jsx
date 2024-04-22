import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function ColouredSpan ({ text }){
    const spanRef = useRef(null);

    useGSAP(() => {
      const colors = ['#0066ff', '#FD691C', '#4ec826'];
      let index = 0;
  
      const changeColor = () => {
        gsap.to(spanRef.current, { backgroundColor: colors[index], duration: 1 });
        index = (index + 1) % colors.length;
      };
  
      const intervalId = setInterval(changeColor, 1000);
  
      return () => clearInterval(intervalId);
    }, { dependencies: [] });

    return(
        <span style={{ border: 'none' }} ref={spanRef}>{text}</span>
    )
}