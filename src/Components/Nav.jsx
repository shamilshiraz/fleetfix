import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

const Nav = () => {
  const [visible, setVisible] = useState(false);
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleChange = (event) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
    document.body.dir = selectedLanguage === 'ar' ? 'rtl' : 'ltr';

    if (selectedLanguage === 'ar') {
      document.body.classList.add('font-jan');
      document.body.classList.remove('font-hik', 'font-beb');
    } else {
      document.body.classList.add('font-hik');
      document.body.classList.remove('font-jan');
    }
  };

  useEffect(() => {
    document.body.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    if (i18n.language === 'ar') {
      document.body.classList.add('font-jan');
      document.body.classList.remove('font-hik', 'font-beb');
    } else {
      document.body.classList.add('font-beb');
      document.body.classList.remove('font-jan');
    }
  }, [i18n.language]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isScrolled = scrollPosition > 50;

  const handleScroll = (targetId) => {
    if (location.pathname !== "/") {
      // Navigate to home first, then scroll to the section
      navigate(`/#${targetId}`);
    } else {
      // If already on home, scroll smoothly
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth',
        });
      }
    }
  };

  return (
    <nav 
      style={{
        transitionDuration: '0.3s',
        transition: 'ease-in',
        background: location.pathname === '/'  
          ? isScrolled ? 'black' : 'linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%)'
          : 'black'  
      }}
      className={`p-4 fixed top-0 z-20 w-full text-white flex justify-between items-center ${
        i18n.language === 'ar' ? 'font-jan' : 'font-hik'
      } h-[20vh] text-4xl`}
    >
      <div>
        <img src="ffwhite.webp" className="h-[13vh]" alt="logo" />
      </div>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex py-3 text-xl">
        <ul className="flex gap-6">
          <li><button onClick={() => handleScroll('about')}>{t('nav.about')}</button></li>
          <li><button onClick={() => handleScroll('products')}>{t('nav.products')}</button></li>
          <li><button onClick={() => handleScroll('branches')}>{t('nav.branches')}</button></li>
          <li><button><a href="https://drive.google.com/file/d/1BeYBacNovwf5XNeY9sqz-uE7x64XtfEp/view?usp=sharing" target="_blank">{t('nav.brochure')}</a></button></li>
          <li><button onClick={() => handleScroll('contact')}>{t('nav.contact')}</button></li>
        </ul>
      </div>

      <div className="flex">
        <div className="px-3">
          <select
            value={i18n.language}
            onChange={handleChange}
            className="bg-black border text-white h-12 px-3"
          >
            <option value="en" className="text-lg">EN</option>
            <option value="ar" className="text-lg">العر</option>
          </select>
        </div>

        {/* Hamburger Menu Button */}
        <button className="z-20 lg:hidden" onClick={() => setVisible(!visible)}>
          {visible ? <X className="h-12 w-12" /> : <Menu className="h-12 w-12" />}
        </button>

        {/* Mobile Sidebar */}
        <div className={`fixed top-0 right-0 h-full w-full bg-black shadow-lg transform transition-transform duration-300 ease-in-out lg:hidden ${visible ? 'translate-x-0' : 'translate-x-full'} z-10`}>
          <div className="flex flex-col pt-[10vh]">
            <ul className="flex flex-col gap-4 p-6 text-7xl">
              <li><button onClick={() => { handleScroll('about'); setVisible(false); }}>{t('nav.about')}</button></li>
              <li><button onClick={() => { handleScroll('products'); setVisible(false); }}>{t('nav.products')}</button></li>
              <li><button onClick={() => { handleScroll('branches'); setVisible(false); }}>{t('nav.branches')}</button></li>
              <li><button onClick={() => { setVisible(false); }}><a href="https://drive.google.com/file/d/1BeYBacNovwf5XNeY9sqz-uE7x64XtfEp/view?usp=sharing" target="_blank">{t('nav.brochure')}</a></button></li>
              <li><button onClick={() => { handleScroll('contact'); setVisible(false); }}>{t('nav.contact')}</button></li>
            </ul>
          </div>
        </div>

        {/* Overlay */}
        {visible && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 lg:hidden z-0"
            onClick={() => setVisible(false)}
          />
        )}
      </div>
    </nav>
  );
};

export default Nav;
