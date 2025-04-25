import React from 'react'
import Hero from './Valen/Hero'
import About from './Valen/About'
import About2 from './Valen/About2'
import WorkHere from './Valen/WorkHere'
import ShowCase from './Valen/ShowCase'
import Contact from './Valen/Contact'
import NextProject from './Valen/NextProject'
import Navbar from './components/Navbar'
import Footer from './Valen/Footer'

const Valantina = () => {
  return (
    <main className='w-full overflow-hidden relative'>
        <Hero />
      <Navbar />
      <About />
      <About2 />
      <WorkHere />
      <ShowCase />
      <Contact />
      <NextProject />
      <Footer />
    </main>
  )
}

export default Valantina