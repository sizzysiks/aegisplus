import { useState } from "react";

import { FaRegCheckCircle } from "react-icons/fa";

export default function FooterNewsletter (){
    // State
    const [email, setEmail] = useState('');
    const [emailSent, setEmailSent] = useState(false);

    const handleSubmit = (e) =>{
        e.preventDefault();

        setEmailSent(true)

        setTimeout(() => {
            setEmailSent(false)
        }, 2000);

        setEmail('');
    }

    return(
        <div className="footer-top-contact">
                <p>Receive our newsletter updates</p>
                
                <form onSubmit={handleSubmit}>
                    <div className='footer-top-contact-input'>
                        <input type="text" value={email} onChange={({ target })=>{ setEmail(target.value) }} placeholder='Your email' />
                        
                        {emailSent?
                        <span id='footer-top-contact-input-check'><FaRegCheckCircle /></span>
                        :<button type="submit" className="footer-top-contact-input-btn">Subscribe</button>
                        }
                    </div>
                </form>
        </div>
    )
}