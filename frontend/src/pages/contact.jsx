import {React,useEffect} from 'react'
import PageHeading from '../components/sections/pageHeading'
import { ScrollRestoration } from 'react-router-dom'
import ContactForm from '../components/sections/contactForm'

const Contact = () => {
    
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])

    return (
        <>
        <div>
                <PageHeading
                    heading={"Say Hello"}
                    description={"Fill out the form below to get in touch with me. I'm always excited to hear about new opportunities and I'll do my best to respond to your inquiry within 24 hours."}
                />
                <ContactForm />
                <ScrollRestoration />
            </div>
        </>
    )
}

export default Contact