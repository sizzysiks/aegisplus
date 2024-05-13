import { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function AnimatedText ({ text }){
    const textRef = useRef(null);
  
    useGSAP(() => {
      // Clear the textRef before appending characters
      textRef.current.innerHTML = '';

      const tl = gsap.timeline({ repeat: -1, repeatDelay: 2 });
  
      // Split text into individual characters
      const chars = text.split('');
  
      // Iterate over each character
      chars.forEach((char, index) => {
        // Create a new div element for each character
        const charElement = document.createElement('div');
        charElement.textContent = char;
        charElement.style.display = 'inline-block';
  
        // Append the character element to the parent text container
        textRef.current.appendChild(charElement);
  
        // Animation for each character
        tl.to(charElement, { duration: 0.02, y: -30, rotateZ: 15, color: '#FD691C', ease: 'expo.out' });
        tl.to(charElement, { duration: 0.02, delay: 0.04, y: -20, rotateZ: 25, color: '#4ec826', ease: 'expo.out'});
        tl.to(charElement, { duration: 0.02, delay: 0.06, y: 0, rotateZ: 0, color: '#000011', ease: 'expo.out'});
      });
    }, { dependencies: [text] });
  
    return <h1 ref={textRef}></h1>;
};
  