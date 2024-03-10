import { useState, useEffect } from "react";

export default function useTrackScroll (){
    const [scrollY, setScrollY] = useState(0);

    const handleScroll = () => {
        setScrollY(window.scrollY / window.innerHeight);
    };

    // Event for mouse scroll
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return { scrollY };
}