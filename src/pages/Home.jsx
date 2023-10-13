import React from 'react'
import Hero from '../components/hero/Hero'
import Catigories from '../components/catigories/Catigories'
import AboutPage from './About/AboutPage '

const Home = () => {
  return (
    <div>
        <Hero/>
        <AboutPage/>
        <Catigories/>

    </div>
  )
}

export default Home