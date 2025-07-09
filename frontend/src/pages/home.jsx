import {React,useEffect} from 'react'
import { ScrollRestoration } from 'react-router-dom'
import Hero from '../components/sections/hero'
import Portfolio from '../components/sections/portfolio'
import CallToAction from '../components/sections/callToAction'
import Partners from '../components/sections/partners'
import Testimonial from '../components/sections/Testimonial'
const Home = () => {
  
    useEffect(()=>{
      window.scrollTo(0, 0);
    },[])

  return (
    <>
        <Hero/>
        <Portfolio/>
        {/* <Partners/> */}
        {/* <Testimonial/> */}
        <CallToAction/>
        <ScrollRestoration/>
    </>
  )
}

export default Home