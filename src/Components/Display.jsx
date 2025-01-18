import React from 'react'
import ResponsiveCardSlider from './Triple'

function Display() {
  return (
    <div id='products' className='h-[] py-[10vh] w-full overflow-hidden font-beb grid place-content-center text-center'>
      <div className="">
        <p data-aos="fade-up" className='text-7xl'>Our products</p>
      </div>
      <div className="" data-aos="fade-up"
    data-aos-duration="1600">
        <ResponsiveCardSlider/>
      </div>
    </div>
  )
}

export default Display
