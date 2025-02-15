import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import HeroSection from "./HeroSection"
import Awards from "./Awards"
import Pricing from './Pricing'
import Education from './Education'
import OpenAccount from "../OpenAccount"

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Awards />
      <Pricing />
      <Education />
      <OpenAccount />
      <Footer />
    </div>
  )
}

export default HomePage
