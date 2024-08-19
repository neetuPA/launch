// import { useState } from 'react'
import Navbar from './Navbar'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
// import Home from '../public/Component/Home'
// import Skill from '../public/Component/Skill'
// import Contact from '../public/Component/Contact'
// import About from '../public/Component/About'
// import { Foter } from '../public/Component/Foter'
import Home from './page/Home'
import Skill from './page/Skill'
import Contact from './page/Contact'
import About from './page/About'
import Foter from './page/Foter'
// import { Navbar } from './Navbar'

function App() {
 

  return (
    <>
    <Navbar/>
{/* <Home/> */}
{/* <Skill/> */}

    <header>
      <Routes>
         <Route path="/" element={<Home/>} />
        <Route path="/skill" element={<Skill />} />
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/about" element={<About />} />

      </Routes>
      {/* <Foter/> */}
   
      </header>
      <Foter/>
    </>
  )
}

export default App
