import { Routes, Route } from "react-router-dom"
import React from 'react'
import Footer from './components/Footer'
import Info from './components/Info'
import Contact from './components/Contact'
import About from './components/About'
import Feature from './components/Feature'
import Header from './components/Header'
import Home from "./Pages/Home"

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Feature" element={<Feature />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Info />
      <Footer />
    </>
  );
}

export default App;
