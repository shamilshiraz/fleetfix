import React, { useEffect, useState } from 'react'
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
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import { MessageCircle, X } from 'lucide-react';

// WhatsApp Chat Component
const WhatsAppChat = () => {
  const [isMessageVisible, setIsMessageVisible] = useState(false);
  const [hasBeenClosed, setHasBeenClosed] = useState(false);
  const whatsappNumber = "+966571348034"; // Replace with your WhatsApp number
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  useEffect(() => {
    if (!hasBeenClosed) {
      const timer = setTimeout(() => {
        setIsMessageVisible(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [hasBeenClosed]);

  const handleClose = (e) => {
    e.stopPropagation();
    setIsMessageVisible(false);
    setHasBeenClosed(true);
  };

  return (
    <div className="fixed bottom-6 right-6 flex items-end z-50">
      {isMessageVisible && (
        <div className="mb-4 mr-4 bg-white rounded-lg shadow-lg p-4 max-w-xs animate-fade-in relative">
          <button
            onClick={handleClose}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            aria-label="Close message"
          >
            <X className="w-4 h-4" />
          </button>
          <div className="text-gray-800 text-sm">
            <p className="font-semibold mb-1">Need help? 👋</p>
            <p>Chat with us on WhatsApp for quick assistance!</p>
          </div>
        </div>
      )}
      
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300 flex items-center justify-center"
        aria-label="Contact on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </div>
  );
};

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <>
      <I18nextProvider i18n={i18n}>
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
        <WhatsAppChat /> {/* Added WhatsApp Chat Component */}
      </I18nextProvider>
    </>
  )
}

export default App