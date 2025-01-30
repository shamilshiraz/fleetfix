import { t } from 'i18next'
import React from 'react'
function Truck() {

  return (
    <div className='h-[]  flex my-20 flex-col justify-around items-center'>
            <div className="text-center ">
        <p data-aos="fade-up" className='text-7xl'>Truck <span className='text-red-600'>spare</span></p>
      </div>
      <div className="">
        <img src="./tuck.png" className='h-[50vh]' alt="forklift image" />
      </div>
      <div className="">
        <p className='sm:text-3xl text-2xl leading-loose tracking-wide py-10 sm:px-40 text-center'>
        Find all your truck parts at FleetsFix! From clutches and hydraulic systems to brakes, filters, and batteries, we provide durable and cost-effective solutions to keep your trucks running smoothly. Minimize downtime and maximize efficiency with our high-quality, reliable parts. Trust FleetsFix to keep your fleet on the road!







</p>
      </div>
   </div>
  )
}

export default Truck
