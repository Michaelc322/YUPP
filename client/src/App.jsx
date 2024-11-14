import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Map from './map/Map'
import About from './pages/About'
import OurMission from './pages/OurMission'
import Login from './pages/login'
import Contact_Us from './pages/Contact_Us'
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
          <Route path='/about' element={<About/>}/>
          <Route path = '/OurMission' element={<OurMission/>}/>
          <Route path='/restaurants' element={<Restaurants/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path = '/Contact_Us' element={<Contact_Us/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
