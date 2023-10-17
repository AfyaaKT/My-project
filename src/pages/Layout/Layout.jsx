import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import './Layout.css'
export default function Layout({children}) {
  return (
    <div className='layout'>
     <Header/>
     <div className='middle'>
     
       {children}
     </div>

     <Footer/>
    </div>
  )
}