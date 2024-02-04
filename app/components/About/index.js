"use client"
import AboutMain from "./AboutMain"
import { ParallaxProvider } from 'react-scroll-parallax';


const About = () => {

  return (
    <ParallaxProvider>
      <AboutMain />
    </ParallaxProvider>
  )
}

export default About;