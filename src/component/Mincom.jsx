import React from 'react'
import '../App.css';
import { Navbar } from './Navbar';
import { Home } from './Home';
import { About } from './About';
import { Contact } from './Contact';
import { Projectmin } from './Projectmin';
export const Mincom = () => {
  return (
    <>
      <div className='flex flex-col justify-center items-center'>
        <Navbar />
        <Home />
        <About />
        <Projectmin />
        <Contact />
      </div>
    </>
  )
}
