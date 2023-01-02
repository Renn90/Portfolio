import React from 'react'
import About from '../Components/About'
import Contact from '../Components/Contact'
import Email from '../Components/Email'
import Hero from '../Components/Hero'
import Projects from '../Components/Projects'
import Resume from '../Components/Resume'
import Sidebar from '../Components/Sidebar'

const Homepage = () => {
  return (
    <div>
      <Hero/>
      <Sidebar />
      <About />
      <Projects />
      <Resume />
      <Contact />
      <Email />
    </div>
  )
}

export default Homepage
