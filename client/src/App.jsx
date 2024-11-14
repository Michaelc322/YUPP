import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Map from './map/Map'
import Login from './pages/login'
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
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
