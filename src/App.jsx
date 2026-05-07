import React from 'react'
import Navbar from './components/Navabr/Navabr'
import Hero from './components/Hero/Hero'
import { BrowserRouter,Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Navbar />
      <Hero/>
    </>
  )
}

export default App
