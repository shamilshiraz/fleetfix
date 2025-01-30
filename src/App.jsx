import React, { useEffect } from 'react'
import './i18n'
import Nav from './Components/Nav'
import Home from './Components/Home'
import Footer from './Components/Footer'
import Intro from './Components/Intro'
import About from './Components/About'
import Section from './Components/Section'
import ResponsiveCardSlider from './Components/Triple'
import Display from './Components/Display'
import Contact from './Components/Contact'
import ProductGrid from './Components/ProductGrid'
import Branches from './Components/Branches'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Forklift from './Components/Forklift'
import { Route, Router, Routes } from 'react-router-dom'
import Enter from './pages/Enter'
import Productspage from './pages/Productspage'



function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);


  return (
    <>
          <Nav/>
        <Routes>
      <Route path='/'
      element={
        <>
        <Enter/>
        </>
      }/>
            <Route path='/productspage'
      element={
        <>
        <Productspage/>
        </>
      }/>
    </Routes>
    </>

  )
}

export default App
