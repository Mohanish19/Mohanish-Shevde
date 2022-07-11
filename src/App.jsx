import React from 'react'
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import About from './components/About/About'
import Experience from './components/experience/experience'
import Services from './components/Services/Services'
import Portfolio from './components/Portfolio/Portfolio'
import Testimonials from './components/Testimonials/testimonials'
import Contact from './components/Contact/contact'
import Footer from './components/Footer/footer'


const App = () => {
  return (
    <>
    <Header/>
    <Nav/>
    <About/>
    <Experience/>
    {/* <Services/>
    <Portfolio/>
    <Testimonials/> */}
    <Contact/>
    <Footer/>

    </>
  )
}

export default App