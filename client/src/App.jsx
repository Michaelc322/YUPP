import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Map from './map/Map'
import About from './pages/About'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Navbar/>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/map' element={<Map/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
