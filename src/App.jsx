import React from 'react'
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


function App() {
  return (
    <div>
      <Nav/>
      <Intro/>
      <About/>
      <Section/>
      <Display/>
      <ProductGrid/>
      <Branches/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
