import React from 'react'
import HeroImage from '../assets/hero-image.png'
import resume from '../assets/resume.pdf'

const Hero = () => {
  return (
    <div className='bg-black text-white text-center py-16'>
        <img src={HeroImage} alt="" 
        className='mx-auto mb-8 w-48 h-48 rounded-full object-cover transform 
        transition-transform duration-300 hover:scale-105'/>
        <h1 className='text-4xl font-bold'>
            I'm {" "}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>Abderrahim ADHAOUR </span>
            , IT & Digitalization Engineering Student
        </h1>
        <p className='mt-4 text-lg text-gray-300'>
            Cloud & DevOps Enthusiast
        </p>
        <div className='mt-8 space-x-4'>
            <button
                className="bg-gradient-to-r from-green-400 to-blue-500 text-white transform
                transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
                onClick={() => document.getElementById("contact").scrollIntoView({behavior: "smooth"})}
            >
                Contact With Me
            </button>


            <button
                className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white transform
                transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
                onClick={() => window.open(resume, '_blank')}
            >
                Resume
            </button>
        </div>


    </div>
  )
}

export default Hero