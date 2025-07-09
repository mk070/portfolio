import {React,useEffect} from 'react'
import { ScrollRestoration } from 'react-router-dom'
import AboutCount from '../components/sections/about/aboutCount'
import Summary from '../components/sections/about/summary'
import Resume from '../components/sections/resume'
import Services from '../components/sections/services'
import CallToAction from '../components/sections/callToAction'

const About = () => {

  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])

  return (
    <>
      <AboutCount />
      <Summary />
      {/* <Resume /> */}
      <Services />
      <CallToAction />
      <ScrollRestoration />
    </>
  )
}
export default About
