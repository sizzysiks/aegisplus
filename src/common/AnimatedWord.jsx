import { useEffect, useState } from "react";
import gsap from "gsap";

const AnimatedWord = () => {
    const [currentWord, setCurrentWord] = useState('Hello');
    
    useEffect(() => {
      const interval = setInterval(() => {
        // Get a new word (you can replace this with your logic to get a new word)
        const newWord = 'World';
        
        // Animate letters fading out
        gsap.to('.letter', {
          duration: 0.5,
          opacity: 0,
          onComplete: () => {
            // Change the word and animate new letters
            setCurrentWord(newWord);
            // animateNewLetters();
          }
        });
      }, 1000);
  
      // Cleanup function
      return () => clearInterval(interval);
    }, [currentWord]); // Run effect when currentWord changes
    
    const animateNewLetters = () => {
      const letters = document.querySelectorAll('.letter');
      gsap.from(letters, {
        duration: 0.5,
        y: -20,
        opacity: 0,
        stagger: 0.1,
      });
    };
    
    return (
      <div style={{ color: 'red' }}>
        {currentWord.split('').map((letter, index) => (
          <h2 style={{ color: 'red' }} key={index} className="letter">{letter}</h2>
        ))}
      </div>
    );
  };
  
  export default AnimatedWord