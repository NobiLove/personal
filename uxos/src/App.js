import { Routes, Route } from "react-router-dom"
import React from 'react'
import Footer from './Components/Footer'
import Info from './Components/Info'
import AboutInfo from './Components/AboutInfo'
import Header from './Components/Header'
import Home from './Pages/Home'
import Contact from "./Pages/Contact"
import Features from "./Pages/Features"
import NotFound from "./Pages/NotFound"

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<AboutInfo />} />
        <Route path="/Features" element={<Features />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Info />
      <Footer />
    </>
  );
}

export default App;
