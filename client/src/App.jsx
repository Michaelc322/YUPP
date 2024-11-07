import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Map from './map/Map'
import OurMission from './pages/OurMission'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Restaurants from './pages/Restaurants'


function App() {
  return (
    <>
      <Navbar/>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/map' element={<Map/>}/>
          <Route path = '/OurMission' element={<OurMission/>}/>

          <Route path='/restaurants' element={<Restaurants/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
