import React from 'react';
import '../App.css';
import { Navbar } from './Navbar';
import { Home } from './Home';
import { About } from './About';
import { Project } from './Project';
import { Contact } from './Contact';


export const Maxcom = () => {
    return (
        <> <div className='flex flex-col justify-center items-center'>
            <Navbar />
            <Home />
            <About />
            <Project />
            <Contact />
        </div>
        </>
    )
}
