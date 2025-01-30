import { t } from 'i18next'
import React from 'react'
function Forklift() {

  return (
    <div className='h-[]  flex my-20 flex-col justify-around items-center'>
            <div className="text-center ">
        <p data-aos="fade-up" className='text-7xl'>Fork<span className='text-red-600'>lift</span></p>
      </div>
      <div className="">
        <img src="./forkb.webp" alt="forklift image" />
      </div>
      <div className="">
        <p className='sm:text-3xl text-2xl leading-loose tracking-wide py-10 sm:px-40 text-center'>
        Find all your forklift parts at FleetsFix! From clutches and hydraulic systems to brakes, filters, and batteries, we offer reliable, affordable solutions to keep your forklifts running efficiently. Save time and money with our wide selection of quality parts. Choose FleetsFix for smooth operations!</p>
      </div>
   </div>
  )
}

export default Forklift
