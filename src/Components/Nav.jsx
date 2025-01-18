import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X } from 'lucide-react';

const Nav = () => {
  const [visible, setVisible] = useState(false);
  const { t, i18n } = useTranslation();

  const handleChange = (event) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
    document.body.dir = selectedLanguage === 'ar' ? 'rtl' : 'ltr'; // Change text direction
  };

  useEffect(() => {
    document.body.dir = i18n.language === 'ar' ? 'rtl' : 'ltr'; // Initial direction setup
  }, [i18n.language]);

  return (
    <nav className="p-4  fixed top-0 z-20 w-full bg-black text-white flex justify-between items-center h-[20vh] font-beb text-4xl">
      <div>
        <img src="ffwhite.png" className="h-[13vh]" alt="logo" />
      </div>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex py-3 text-xl">
        <ul className="flex gap-6">
          <li><a href="#about">{t('nav.about')}</a></li>
          <li><a href="#products">{t('nav.products')}</a></li>
          <li><a href="#branhces">{t('nav.branches')}</a></li>
          <li><a href="">{t('nav.brochure')}</a></li>
          <li><a href="#contact">{t('nav.contact')}</a></li>
        </ul>
      </div>

      <div className="flex">
        <div className="px-3">
          <select
            value={i18n.language}
            onChange={handleChange}
            className="bg-black border text-white h-12 px-3"
          >
            <option value="en" className='text-lg'>EN</option>
            <option value="ar" className='text-lg'>العر</option>
          </select>
        </div>

        {/* Hamburger Menu Button - Only visible on mobile */}
        <button 
          className="z-20 lg:hidden"
          onClick={() => setVisible(!visible)}
        >
          {visible ? <X className="h-12 w-12" /> : <Menu className="h-12 w-12" />}
        </button>

        {/* Mobile Sidebar */}
        <div className={`fixed top-0 right-0 h-full w-full bg-black shadow-lg transform transition-transform duration-300 ease-in-out lg:hidden ${visible ? 'translate-x-0' : 'translate-x-full'} z-10`}>
          <div className="flex flex-col pt-[10vh]">
            <ul className="flex flex-col gap-4 p-6 text-8xl">
              <li><a href="#about" onClick={() => setVisible(false)}>{t('nav.about')}</a></li>
              <li><a href="#products" onClick={() => setVisible(false)}>{t('nav.products')}</a></li>
              <li><a href="#branhces" onClick={() => setVisible(false)}>{t('nav.branches')}</a></li>
              <li><a href="" onClick={() => setVisible(false)}>{t('nav.brochure')}</a></li>
              <li><a href="#contact" onClick={() => setVisible(false)}>{t('nav.contact')}</a></li>
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


