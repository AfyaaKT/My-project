import React from 'react'
import Hero from '../components/hero/Hero'
import Catigories from '../components/catigories/Catigories'
import AboutPage from './About/AboutPage '
import './Cart.css'
const Home = () => {
  return (
    <div className='middle'>
        <Hero/>
        <AboutPage/>
        <Catigories/>

    </div>
  )
}

export default Home