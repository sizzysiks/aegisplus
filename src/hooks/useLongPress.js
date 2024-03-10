import { useRef, useState } from "react"

export default function useLongPress () {
    // Refs 
    const timerRef = useRef()
    const isLongPressed = useRef()

    // State
    const [action, setAction] = useState('')

    // Start counter when user presses down
    const startCounter = () =>{
        isLongPressed.current = false
        timerRef.current = setTimeout(() => {
            setAction('long press')
            isLongPressed.current = true
        }, 500);
    }

     // Handle mouse click
    const handleClick = () =>{
        if (isLongPressed.current){
            console.log("Did long pressed")
        }
        return
        // navigate(`/projects/${id}`)
    }

   
    // Mouse down & mouse up 
    const handleMouseDown = ()=>{
        startCounter()
    }
    const handleMouseUp = () =>{
        clearTimeout(timerRef.current)
    }

    // Touch start & touch end
    const handleOnTouchStart = () =>{
        startCounter()
    }
    const handleOnTouchEnd = () =>{
        clearTimeout(timerRef.current)
    }

    return {
        action,
        handlers: {
            onClick: handleClick,
            oncMouseUp: handleMouseUp,
            oncMouseDown: handleMouseDown,
            onTouchStart: handleOnTouchStart,
            onTouchEnd: handleOnTouchEnd
        } 
    }
}