import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function AnimatedText ({ text }){
    const textRef = useRef(null);
  
    // useEffect(() => {
    //   // Clear the textRef before appending characters
    //   textRef.current.innerHTML = '';

    //   const tl = gsap.timeline({ repeat: -1 });
  
    //   // Split text into individual characters
    //   const chars = text.split('');
  
    //   // Iterate over each character
    //   chars.forEach((char, index) => {
    //     // Create a new div element for each character
    //     const charElement = document.createElement('div');
    //     charElement.textContent = char;
    //     charElement.style.display = 'inline-block';
  
    //     // Append the character element to the parent text container
    //     textRef.current.appendChild(charElement);
  
    //     // Animation for each character
    //     tl.fromTo(charElement, 
    //       { y: -10, color: '#ffffff', opacity: 0 }, 
    //       { duration: 0.2, y: 0, color: '#000011', opacity: 1, ease: "bounce.out" }
    //     );
    //   });
  
    //   return () => {
    //     tl.kill(); // Cleanup animation
    //   };
    // }, [text]);
  
    return <h1 ref={textRef}>{text}</h1>;
};
  