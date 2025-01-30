import React from 'react'
import ResponsiveCardSlider from './Triple'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

function Display() {
      const { t } = useTranslation();
  
  return (
    <div id='products' className='h-[] py-[10vh] w-full overflow-hidden  grid place-content-center text-center'>
      <div className="">
        <p data-aos="fade-up" className='text-7xl'>{t('products.h1')}  <span className='text-red-600'>{t('products.h2')} </span></p>
      </div>
      <div className="" data-aos="fade-up"
    data-aos-duration="1600">
        <ResponsiveCardSlider/>
      </div>
      <div className="">
        <button className='border border-black p-3'><Link to={"/productspage"}>All products</Link></button>
      </div>
    </div>
  )
}

export default Display
