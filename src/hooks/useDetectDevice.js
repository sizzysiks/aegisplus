import { useState, useEffect } from "react";

export default function useDetectDevice (){
    const [isMobile, setIsMobile] = useState(false);

    // Detect if user is on mmobile
    useEffect(() => {
        const handleResize = () => {
            const threshold = 768;
            setIsMobile(window.innerWidth < threshold);
        };

        // Call handleResize initially and add event listener for resize
        handleResize();
        window.addEventListener('resize', handleResize);

        // Remove event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return { isMobile };
}