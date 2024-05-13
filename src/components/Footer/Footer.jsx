import { Link } from 'react-router-dom'
import './footer.css'

import {AiOutlineCopyrightCircle} from 'react-icons/ai'
import { FaInstagram } from "react-icons/fa";
import awards from '../../assets/awards/aw-black.webp'

import FooterContact from './FooterContact';
import FooterNewsletter from './FooterNewsletter';

const Footer = () =>{
    const year = new Date().getFullYear()

    return(
        <footer>
            <FooterContact />
            
            <div className="footer-top">
                <div className="footer-top-links">
                    <div>
                        <Link className='footer-top-link' to="/projects">Work</Link>
                        <Link className='footer-top-link' to="/about">About us</Link>
                        <Link className='footer-top-link' to="/contact">Contact</Link>
                    </div>
                    <div>
                        <Link className='footer-top-link' to="/terms">Terms of Service</Link>
                        <Link className='footer-top-link' to="/privacy">Privacy Policy</Link>
                    </div>
                </div>

                <FooterNewsletter />
            </div>

            <div className="footer-bottom">
                <div className="footer-copyright">
                    <AiOutlineCopyrightCircle />
                    <p>{year} Aegis Web Designs Ltd. All rights reserved.</p>
                </div>

                <div className="footer-socials">
                    <a 
                        className='footer-awards-link' 
                        href="https://www.awwwards.com/aegisplus/"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Awwwards link"
                    >
                        <img src={awards} alt="awwwards-icon" />
                    </a>
                    <a 
                        className='footer-top-link footer-bottom-link' 
                        href="https://www.instagram.com/aegisimmersive/" 
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Instagram link"
                    >
                        <FaInstagram /> 
                    </a>
                    {/* <Link to="#" className='footer-top-link footer-bottom-link'>X</Link> */}
                    <Link to="#" className='footer-top-link footer-bottom-link' onClick={() => window.location.href='mailto:info@aegis.plus'}>
                        info@aegis.plus 
                    </Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer