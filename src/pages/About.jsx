import React from 'react'
import Navbar from '../Navabr/Navabr.jsx'

const About = () => {
  return (
    <div className='w-full min-h-screen bg-gray-50'>
      <Navbar />
      <div className="container px-4 py-20 mx-auto text-center">
        <h1 className="mb-6 text-4xl font-bold">درباره ما</h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-600">
          این صفحه درباره ما است
        </p>
      </div>
    </div>
  )
}

export default About