import { useState } from "react"
import axios from 'axios'

import {AiOutlineSend} from 'react-icons/ai'
import {IoIosCheckmarkCircle} from 'react-icons/io'

const baseUrl = "http://localhost:3001/api/email"

const ContactForm = () =>{    
    // State for input & icons
    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [email, setEmail] = useState("")
    const [content, setContent] = useState("")
    const [emailSent, setEmailSent] = useState(false)

    // Check input completion
    const checkInput = () =>{
    }

    // Submit contact form
    const handleSubmit = async (e) =>{
        e.preventDefault()

        console.log(name, email, content)

        // const data = { 
        //     name: name[0].toUpperCase() + name.substring(1) + " " + surname[0].toUpperCase() + surname.substring(1), 
        //     email, 
        //     content 
        // }

        // try {
        //     await axios.post(baseUrl, data)
            
        //     setEmailSent(true)
        //     setName("")
        //     setSurname("")
        //     setEmail("")
        //     setContent("")
        // } catch (error) {
        //     console.log(error)
        // }

    }

    return(
        <form id='contact-form' onSubmit={handleSubmit}>
            <div>
                <div className="contact-name-input-wrapper">
                    <input 
                        className="contact-name-input"
                        name="name" 
                        type="text" 
                        value={name} 
                        placeholder='Name' 
                        required 
                        onChange={({target})=>{setName(target.value)}}
                    />
                </div>

                <div className="contact-name-input-wrapper">
                    <input 
                        className="contact-name-input"
                        name="surname" 
                        type="text" 
                        value={surname} 
                        placeholder='Surname' 
                        required 
                        onChange={({target})=>{setSurname(target.value)}}
                    />
                </div>
            </div>
            
            <div className="contact-name-input-wrapper">
                <input 
                    name='email' 
                    type="email" 
                    placeholder='example@mail.com' 
                    required 
                    value={email}
                    onChange={({target})=>{setEmail(target.value)}}
                />
            </div>

            <textarea 
                name="message" 
                placeholder='Your message' 
                required
                value={content}
                onChange={({target})=>{setContent(target.value)}}
            ></textarea>

            <button type='submit' className={`${!emailSent? "contact-btn" : "contact-btn-sent"}`}>
                {emailSent? "DONE" : "SEND"}
                {emailSent? <IoIosCheckmarkCircle /> : <AiOutlineSend />}
            </button>
        </form>
    )
}

export default ContactForm